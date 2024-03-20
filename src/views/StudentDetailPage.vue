<!-- eslint-disable no-constant-condition -->
<template>
  <section>
    <h2 class="mb-5 text-center">Bảng điểm học tập</h2>

    <div class="row">
      <div class="col-6">
        <p>
          Họ và Tên: <strong>{{ student.name }}</strong>
        </p>
        <p>
          Mã Số Sinh Viên: <strong>{{ student.mssv }}</strong>
        </p>
      </div>

      <div class="col-6">
        <p>
          Email: <strong>{{ student.email }}</strong>
        </p>
        <p>
          Số Điện Thoại: <strong>{{ student.phone }}</strong>
        </p>
      </div>
    </div>
    <br />
    <div class="table-responsive m3-5">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>STT</th>
            <th>Môn học</th>
            <th>Điểm thường kỳ I</th>
            <th>Điểm thường kỳ II</th>
            <th>Điểm giữa kỳ</th>
            <th>Điểm cuối kỳ</th>
            <th>Điểm trung bình</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(item, keyHK) in student.studentScore" :key="item.id">
          <tr>
            <td class="text-danger fw-bold" colspan="2">
              {{ keyHK.toUpperCase() }}
            </td>
          </tr>
          <tr v-show="item" v-for="(x, keyMH, i) in item" :key="x.id">
            <td>{{ i + 1 }}</td>
            <td>{{ keyMH.toUpperCase() }}</td>
            <td>{{ x.tk1 }}</td>
            <td>{{ x.tk2 }}</td>
            <td>{{ x.gk }}</td>
            <td>{{ x.ck }}</td>
            <td>{{ getScoreGPA(x.tk1, x.tk2, x.gk, x.ck) }}</td>
            <td>
              <button
                @click="() => handleClickUpdate(keyHK, keyMH)"
                class="btn btn-warning text-white me-1"
              >
                Cập nhật
              </button>
              <button
                class="btn btn-danger"
                @click="() => deleteSubject(keyHK, keyMH)"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="6"></td>
            <td colspan="3">
              Tổng kết <span class="text-danger">{{ keyHK }}</span
              >:
              <span class="text-success fw-bold">{{
                getScoreGpaHk(item)
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <form @submit.prevent="onSubmit" class="w-50 offset-3">
      <h2 class="mt-5 mb-3 text-center">Thêm môn điểm mới</h2>

      <div class="form-group mb-3">
        <label for="subject">Môn học:</label>
        <select
          class="form-control"
          id="subject"
          v-model="form.subject"
          name="subject"
          required
        >
          <option value="-">Chọn môn học</option>
          <option
            v-for="sub in subjects"
            :key="sub.id"
            :value="sub.subjectName"
            >{{ sub.subjectName }}</option
          >
        </select>
      </div>

      <div class="form-group mb-3">
        <label for="" class="form-label">Chọn học kì</label>
        <select
          class="form-control"
          id="kh"
          v-model="form.hk"
          name="hk"
          required
        >
          <option value="-">Chọn học kì</option>
          <option value="hk1">Học kỳ I</option>
          <option value="hk2">Học kỳ II</option>
          <option value="hk3">Học kỳ III</option>
        </select>
      </div>

      <div v-show="isUpdate" class="form-group mb-3">
        <label for="" class="form-label">Chọn cột điểm</label>
        <select
          class="form-control"
          id="score"
          name="score"
          v-model="form.scoreCol"
          @change="handeChangeScoreCol"
          required
        >
          <option value="-">Chọn chọn cột điểm</option>
          <option value="tk1">Điểm thường kỳ I</option>
          <option value="tk2">Điểm thường kỳ II</option>
          <option value="gk">Điểm giữa kỳ</option>
          <option value="ck">Điểm cuối kỳ</option>
        </select>
      </div>

      <div class="form-group mb-3">
        <label for="score" class="">
          Điểm:
          <span v-show="!isUpdate"
            >(Lần thêm đầu tiên thêm điểm môn học mới sẽ là
            <strong class="text-info">thường kì 1</strong>)</span
          >
        </label>
        <input
          type="number"
          class="form-control"
          id="score"
          name="score"
          v-model="form.score"
          step="0.1"
          min="0"
          max="10"
          required
        />
      </div>

      <button v-show="!isUpdate" type="submit" class="btn btn-success w-100">
        Thêm điểm
      </button>
      <div class="" v-show="isUpdate">
        <div class="btn btn-success w-75" @click="handlSubmitUpdate">
          Lưu
        </div>
        <div class="ms-4 btn btn-warning" @click="handlClickExit">
          Thoát
        </div>
      </div>
    </form>
  </section>
  <router-link to="/studentManagement" class="mt-3 btn btn-info text-white"
    >Quay lại</router-link
  >
</template>
<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { getStudent, useLoadSubject, updateStudent } from '../firebase.js'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'StudentDetailPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const stuId = computed(() => route.params.id)
    const form = reactive({ subject: '-', hk: '-', scoreCol: '-', score: 0 })
    const subjects = useLoadSubject()
    const student = reactive({
      name: '',
      mssv: '',
      phone: '',
      email: '',
      studentScore: {}
    })
    const isUpdate = ref(false)

    onMounted(async () => {
      const stu = await getStudent(stuId.value)

      // Sort
      const keys = Object.keys(stu?.studentScore).sort()
      const sortedStudentScore = {}
      for (const key of keys) {
        sortedStudentScore[key] = stu.studentScore[key]
      }

      student.mssv = stu.mssv
      student.name = stu.name
      student.phone = stu.phone
      student.email = stu.email
      student.studentScore = sortedStudentScore
    })

    const getScoreGPA = (th1, th2, gk, ck) => {
      if (th1 == '-' || th2 == '-' || gk == '-' || ck == '-') return '-'
      return ((th1 + th2 + gk * 2 + ck * 3) / 7).toFixed(1)
    }

    const getScoreGpaHk = item => {
      let gpa = 0
      const keys = Object.keys(item)
      for (const key in item) {
        const { tk1, tk2, gk, ck } = item[key]
        gpa += Number(getScoreGPA(tk1, tk2, gk, ck))
      }
      return (gpa / keys.length).toFixed(1) == 'NaN'
        ? '-'
        : (gpa / keys.length).toFixed(1)
    }

    const createScore = async () => {
      const keyHK = Object.keys(student.studentScore)
      var addScore = {}
      try {
        if (keyHK.includes(form.hk)) {
          const keyMH = Object.keys(student.studentScore[form.hk])
          if (!keyMH.includes(form.subject)) {
            addScore = {
              ...student.studentScore,
              [form.hk]: {
                ...student.studentScore[form.hk],
                [form.subject]: {
                  tk1: form.score,
                  tk2: '-',
                  gk: '-',
                  ck: '-'
                }
              }
            }
          } else {
            alert('Không được trùng môn học trong 1 học kì')
            return student
          }
        } else {
          addScore = {
            ...student.studentScore,
            [form.hk]: {
              [form.subject]: {
                tk1: form.score,
                tk2: '-',
                gk: '-',
                ck: '-'
              }
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
      return { ...student, studentScore: addScore }
    }

    // Event handlers
    const handleClickUpdate = (hk, mh) => {
      isUpdate.value = true
      form.hk = hk
      form.subject = mh
      form.scoreCol = 'tk1'
      form.score = student.studentScore[form.hk][form.subject].tk1
    }

    const deleteSubject = async (hk, mh) => {
      delete student.studentScore[hk][mh]
      await updateStudent(stuId.value, student)
    }

    const handlSubmitUpdate = async () => {
      const updateScore = {
        ...student.studentScore,
        [form.hk]: {
          ...student.studentScore[form.hk],
          [form.subject]: {
            ...student.studentScore[form.hk][form.subject],
            [form.scoreCol]: form.score
          }
        }
      }
      await updateStudent(stuId.value, {
        ...student,
        studentScore: updateScore
      })
      form.subject = '-'
      form.hk = '-'
      form.scoreCol = '-'
      form.score = 0
      router.go(0)
    }

    const handeChangeScoreCol = val => {
      form.score = student.studentScore[form.hk][form.subject][val.target.value]
      // switch (val.target.value) {
      //   case 'tk1':
      //     form.score = student.studentScore[form.hk][form.subject].tk1
      //     break
      //   case 'tk2':
      //     form.score = student.studentScore[form.hk][form.subject].tk2
      //     break
      //   case 'gk':
      //     form.score = student.studentScore[form.hk][form.subject].gk
      //     break
      //   case 'ck':
      //     form.score = student.studentScore[form.hk][form.subject].ck
      //     break
      //   default:
      //     break
      // }
    }

    const handlClickExit = () => {
      form.subject = '-'
      form.hk = '-'
      form.scoreCol = '-'
      isUpdate.value = false
    }

    const onSubmit = async () => {
      if (form.subject == '-' || form.hk == '-') return
      const stuScore = await createScore()
      await updateStudent(stuId.value, { ...stuScore })
      form.subject = '-'
      form.hk = '-'
      form.score = 0
      router.go(0)
    }
    return {
      student,
      subjects,
      getScoreGPA,
      onSubmit,
      form,
      isUpdate,
      handleClickUpdate,
      handlClickExit,
      handeChangeScoreCol,
      handlSubmitUpdate,
      deleteSubject,
      getScoreGpaHk
    }
  }
}
</script>

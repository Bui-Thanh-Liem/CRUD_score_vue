<template>
  <section>
    <h2 v-show="Object.keys(students).length > 0" class="mb-5 text-center">
      Danh sách sinh viên
    </h2>

    <!--  -->
    <div v-show="Object.keys(students).length > 0" class="table-responsive">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Stt</th>
            <th>Mã số sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stu, index) in students" :key="stu.id">
            <td>{{ index + 1 }}</td>
            <td>{{ stu.mssv }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.phone }}</td>
            <td>{{ stu.email }}</td>
            <td>
              <router-link
                :to="`/studentDetail/${stu.id}`"
                class="btn btn-info me-1 text-white"
                >Xem chi tiết</router-link
              >
              <button
                type="button"
                class="btn btn-warning text-white me-1"
                @click="handleClickUpdate(stu.id)"
              >
                Cập nhật
              </button>
              <button class="btn btn-danger" @click="deleteStudent(stu.id)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="!Object.keys(students).length > 0">
      <p class="text-center text-danger fw-bold">Danh sách sinh viên trống</p>
    </div>

    <!--  -->
    <form @submit.prevent="onSubmit" class="w-50 offset-3">
      <h2 class="mt-5 mb-3 text-center">Thêm sinh viên mới</h2>
      <div class="form-group mb-3">
        <label for="studentName">Tên sinh viên:</label>
        <input
          type="text"
          class="form-control"
          id="studentName"
          name="studentName"
          v-model="form.name"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="mssv">Mã số sinh viên:</label>
        <input
          type="text"
          class="form-control"
          id="mssv"
          name="mssv"
          v-model="form.mssv"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="phone">Điện thoại:</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          name="phone"
          v-model="form.phone"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="email">Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="form.email"
          required
        />
      </div>
      <button type="submit" class="btn btn-success w-100" v-show="!isUpdate">
        Thêm sinh viên
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
</template>

<script>
import { reactive, ref } from 'vue'
import {
  createStudent,
  useLoadStudents,
  deleteStudent,
  getStudent,
  updateStudent
} from '../firebase.js'

export default {
  name: 'StudentManagementPage',
  setup() {
    const form = reactive({
      name: '',
      mssv: '',
      phone: '',
      email: ''
    })
    const isUpdate = ref(false)
    const currentId = ref('')

    const onSubmit = async () => {
      await createStudent({ ...form })
      form.name = ''
      form.mssv = ''
      form.phone = ''
      form.email = ''
    }

    const handleClickUpdate = async id => {
      const stu = await getStudent(id)
      currentId.value = id
      form.name = stu.name
      form.mssv = stu.mssv
      form.phone = stu.phone
      form.email = stu.email
      isUpdate.value = true
    }

    const handlClickExit = () => {
      form.name = ''
      form.mssv = ''
      form.phone = ''
      form.email = ''
      isUpdate.value = false
    }

    const handlSubmitUpdate = async () => {
      isUpdate.value = false
      const stu = await getStudent(currentId.value)
      updateStudent(currentId.value, { ...stu, ...form })
      form.name = ''
      form.mssv = ''
      form.phone = ''
      form.email = ''
    }

    const students = useLoadStudents()
    return {
      students,
      form,
      onSubmit,
      deleteStudent,
      handleClickUpdate,
      isUpdate,
      handlSubmitUpdate,
      handlClickExit
    }
  }
}
</script>

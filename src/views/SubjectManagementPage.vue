<template>
  <section>
    <h2 v-show="Object.keys(subjects).length > 0" class="mb-5 text-center">
      Danh sách môn học
    </h2>

    <!--  -->
    <div v-show="Object.keys(subjects).length > 0" class="table-responsive">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Tên môn học</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sub, index) in subjects" :key="sub.id">
            <td>{{ index + 1 }}</td>
            <td>{{ sub.subjectName }}</td>
            <td>
              <button
                @click="() => handleClickUpdate(sub.id)"
                class="btn btn-warning text-white me-1"
              >
                Cập nhật
              </button>
              <button
                class="btn btn-danger"
                @click="() => deleteSubject(sub.id)"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="!Object.keys(subjects).length > 0">
      <p class="text-center text-danger fw-bold">Danh sách môn học trống</p>
    </div>

    <form @submit.prevent="onSubmit" class="w-50 offset-3">
      <h3 class="mt-5 mb-3 text-center">Thêm môn học mới</h3>
      <div class="form-group mb-3">
        <label for="subjectName">Tên môn học:</label>
        <input
          type="text"
          class="form-control"
          id="subjectName"
          name="subjectName"
          v-model="form.subjectName"
          required
        />
      </div>
      <button v-show="!isUpdate" type="submit" class="btn btn-success w-100">
        Thêm môn học
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
import {
  createSubject,
  useLoadSubject,
  getSubject,
  updateSubject,
  deleteSubject
} from '../firebase.js'
import { reactive, ref } from 'vue'

export default {
  name: 'SubjectManagementPage',
  setup() {
    const form = reactive({ subjectName: '' })
    const isUpdate = ref(false)
    const currentId = ref('')

    const onSubmit = async () => {
      await createSubject({ ...form })
      form.subjectName = ''
    }

    const handleClickUpdate = async id => {
      const sub = await getSubject(id)
      currentId.value = id
      form.subjectName = sub.subjectName
      isUpdate.value = true
    }

    const handlSubmitUpdate = () => {
      isUpdate.value = false
      updateSubject(currentId.value, { ...form })
      form.subjectName = ''
    }

    const handlClickExit = () => {
      form.subjectName = ''
      isUpdate.value = false
    }

    const subjects = useLoadSubject()
    return {
      onSubmit,
      form,
      subjects,
      handleClickUpdate,
      isUpdate,
      handlClickExit,
      handlSubmitUpdate,
      deleteSubject
    }
  }
}
</script>

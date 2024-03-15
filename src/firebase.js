import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyAQDKFhYWlqKijwHteoFl26O-_qq4IkTCw',
  authDomain: 'fbook-vuejs-23eed.firebaseapp.com',
  projectId: 'fbook-vuejs-23eed',
  storageBucket: 'fbook-vuejs-23eed.appspot.com',
  messagingSenderId: '582577797689',
  appId: '1:582577797689:web:ce607ba198607d88db2be8',
  measurementId: 'G-VTD52LWFVW'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const studentCollection = db.collection('students')
const subjectCollection = db.collection('subjects')

// Create
export const createStudent = student => {
  return studentCollection.add(student)
}

export const createSubject = subject => {
  return subjectCollection.add(subject)
}

// Get one by id
export const getStudent = async id => {
  const stu = await studentCollection.doc(id).get()
  return stu.exists ? stu.data() : null
}

export const getSubject = async id => {
  const stu = await subjectCollection.doc(id).get()
  return stu.exists ? stu.data() : null
}

// Update
export const updateStudent = (id, student) => {
  return studentCollection.doc(id).update(student)
}

export const updateSubject = (id, subject) => {
  return subjectCollection.doc(id).update(subject)
}

// Delete
export const deleteStudent = id => {
  return studentCollection.doc(id).delete()
}

export const deleteSubject = id => {
  return subjectCollection.doc(id).delete()
}

// Load
export const useLoadStudents = () => {
  const students = ref([])
  const close = studentCollection.onSnapshot(snapshot => {
    students.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
  onUnmounted(close)
  return students
}

export const useLoadSubject = () => {
  const subject = ref([])
  const close = subjectCollection.onSnapshot(snapshot => {
    subject.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
  onUnmounted(close)
  return subject
}

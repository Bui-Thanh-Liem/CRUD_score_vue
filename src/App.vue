<style scoped>
.router-link-active {
  text-decoration: underline;
}
.footer {
  background: #000;
  color: #8a8a8a;
  font-size: 14px;
  padding: 60px 0 20px;
}

.footer hr {
  border: none;
  background: white;
  height: 1px;
  margin: 20px 0;
}

.menu-icon {
  width: 28px;
  margin-left: 20px;
  display: none;
}

.copyright {
  color: #8a8a8a;
  text-align: center;
}
</style>

<template>
  <!-- Header -->
  <header class="text-white bg-dark py-4">
    <div class="container">
      <h1 class="text-center">Quản lý điểm số</h1>
    </div>
  </header>

  <!-- Nav -->
  <nav class="nav d-flex justify-content-center mt-3 mb-5">
    <li class="nav-item">
      <router-link class="nav-link fw-bold text-dark" to="/"
        >Trang chủ</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link fw-bold text-dark active"
        aria-current="page"
        to="/studentManagement"
        >Quản lý sinh viên</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link fw-bold text-dark" to="/subjectManagement"
        >Quản lý môn học</router-link
      >
    </li>
  </nav>

  <!-- Content -->
  <div class="container">
    <router-view />
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white mt-5">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <p>About Us</p>
        <ul>
          <li>Bùi Thanh Liêm</li>
          <li>501220153</li>
          <li>Tạ Quý Cơ</li>
          <li>501220153</li>
        </ul>
      </div>
      <div>
        <p>About Us</p>
        <ul>
          <li>Bùi Thanh Liêm</li>
          <li>501220153</li>
          <li>Tạ Quý Cơ</li>
          <li>501220153</li>
        </ul>
      </div>
      <div>
        <p>About Us</p>
        <ul>
          <li>Bùi Thanh Liêm</li>
          <li>501220153</li>
          <li>Tạ Quý Cơ</li>
          <li>501220153</li>
        </ul>
      </div>
      <div>
        <p>About Us</p>
        <ul>
          <li>Bùi Thanh Liêm</li>
          <li>501220153</li>
          <li>Tạ Quý Cơ</li>
          <li>501220153</li>
        </ul>
      </div>
    </div>
    <p style="border-top: 1px solid red" class="copyright py-2">
      Copyright © 2024 😎 Bùi Thanh Liêm - Tạ Quý Cơ
    </p>
  </footer>
</template>

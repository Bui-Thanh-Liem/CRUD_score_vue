<template>
  <section>
    <section>
      <!-- Carosel -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../src/assets/imgs/home1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../src/assets/imgs/home2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../src/assets/imgs/home3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!--  -->
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow mt-4" style="background-color: #96EFFF">
            <div class="card-body" style="min-height: 320px">
              <h1 class="text-center icon-container">
                <i class="bi bi-lightbulb"></i>
              </h1>
              <h5 class="text-center"><strong>CHƯƠNG TRÌNH ĐÀO TẠO</strong></h5>
              <div class="text-start">
                <br />
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Thông tin Tuyển sinh
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Chương trình đào tạo chu kì 2020-2024
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Công bố hồ sơ mở ngành đào tạo năm học 2018 - 2019
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Công bố mở ngành đào tạo Luật dân sự và tố tụng dân sự
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div
            class="card shadow mt-4"
            style="background-color: #FFF67E; height=500px;"
          >
            <div class="card-body" style="min-height: 320px">
              <h1 class="text-center icon-container">
                <i class="bi bi-hand-thumbs-up-fill"></i>
              </h1>
              <h5 class="text-center">
                <strong>ĐẢM BẢO CHẤT LƯỢNG GIÁO DỤC, ĐÀO TẠO</strong>
              </h5>
              <div class="text-start">
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Báo cáo tự đánh giá
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Chuẩn đầu ra các ngành đào tạo
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Công khai phương thức giảng dạy
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow mt-4" style="background-color: #96EFFF">
            <div class="card-body" style="min-height: 320px">
              <h1 class="text-center icon-container">
                <i class="bi bi-bar-chart-line-fill"></i>
              </h1>
              <h5 class="text-center">
                <strong>BÁO CÁO TÌNH HÌNH VIỆC LÀM CỦA SINH VIÊN</strong>
              </h5>
              <div class="text-start">
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Thống kê tình hình việc làm sinh viên tốt nghiệp năm 2021
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Thống kê tình hình việc làm sinh viên tốt nghiệp năm 2022
                </h6>
                <h6>
                  <i class="bi bi-check2-square" style="color: #3cb371;"></i>
                  Thống kê tình hình việc làm sinh viên tốt nghiệp năm 2023
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  setup() {}
}
</script>

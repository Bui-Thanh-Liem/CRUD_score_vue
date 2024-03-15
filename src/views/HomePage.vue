<template>
  <section>
    <section>
      <img class="w-100" src="../../src/assets/imgs/123.jpg" />
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
      <br />

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
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
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <br />

      <h3 class="text-center" style="color: #444444">
        <strong>ĐỐI TÁC HOẠT ĐỘNG</strong>
      </h3>
      <div class="owl-carousel owl-theme">
        <div class="item"><img src="../../src/assets/imgs/client1.png" /></div>
        <div class="item"><img src="../../src/assets/imgs/client2.png" /></div>
        <div class="item"><img src="../../src/assets/imgs/client3.png" /></div>
        <div class="item"><img src="../../src/assets/imgs/client4.png" /></div>
        <div class="item"><img src="../../src/assets/imgs/client5.png" /></div>
        <div class="item"><img src="../../src/assets/imgs/client6.png" /></div>
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

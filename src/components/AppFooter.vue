<template lang="">
  <footer>
    <div class="cont-footer d-flex align-items-center text-white flex-column">
      <div class="w-75">
        <div class="row p-3">
          <div class="col-12 text-center">
            <h3>Deliveboo</h3>
            <p>
              Quando hai fame e non hai voglia di cucinare, chiama Deliveboo e
              lascia che il cibo venga da te!
            </p>
            <div>
              <ul class="d-flex justify-content-center gap-3">
                <li><a href="#">Home</a></li>
                -
                <li><a href="#">About us</a></li>
                -
                <li><a href="#">Contact</a></li>
                -
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="contlist d-flex gap-5 gap-md-2 justify-content-center">
              <ul
                class="d-flex gap-4 justify-content-center flex-md-row flex-column"
              >
                <li>
                  <div class="d-flex flex-column flex-md-row gap-2">
                    <i class="fa-brands fa-square-github"></i>
                    <a
                      class="github flex-column"
                      href="https://github.com/Leo9723"
                    >
                      Leo9723</a
                    >
                  </div>
                </li>
                <li>
                  <div class="d-flex flex-column flex-md-row gap-2">
                    <i class="fa-brands fa-square-github"></i>
                    <a class="github" href="https://github.com/Luigi213">
                      Luigi213</a
                    >
                  </div>
                </li>
                <li>
                  <div class="d-flex flex-column flex-md-row gap-2">
                    <i class="fa-brands fa-square-github"></i>
                    <a class="github" href="https://github.com/Fra-Battaglia">
                      Fra-Battaglia</a
                    >
                  </div>
                </li>
              </ul>
              <ul
                class="d-flex gap-4 justify-content-center flex-md-row flex-column"
              >
                <li>
                  <div class="d-flex flex-column flex-md-row gap-2">
                    <i class="fa-brands fa-square-github"></i>
                    <a class="github" href="https://github.com/ldm0805">
                      ldm0805</a
                    >
                  </div>
                </li>
                <li>
                  <div class="d-flex flex-column flex-md-row gap-2">
                    <i class="fa-brands fa-square-github"></i>
                    <a class="github" href="https://github.com/info-mic-info">
                      info-mic-info</a
                    >
                  </div>
                </li>
                <li>
                  <div class="d-flex flex-column flex-md-row gap-2">
                    <i class="fa-brands fa-square-github"></i>
                    <a
                      class="github"
                      href="https://github.com/francescodev1990"
                    >
                      francescodev1990</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.cont-footer {
  background-color: #3a3939;
  ul {
    list-style: none;
    padding: 0;
    a {
      color: white;
      text-decoration: none;
    }
    .github {
      &:hover {
        color: rgba(0, 0, 255, 0.76);
      }
    }
  }
}
</style>

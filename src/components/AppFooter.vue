<template lang="">
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
          <h6>Un progetto by Boolean in collab con:</h6>
          <div class="contlist">
            <ul class="d-flex gap-4">
              <li>
                <a class="github" href="https://github.com/Leo9723"
                  ><i class="fa-brands fa-square-github"></i> Leo9723</a
                >
              </li>
              <li>
                <a class="github" href="https://github.com/Luigi213"
                  ><i class="fa-brands fa-square-github"></i> Luigi213</a
                >
              </li>
              <li>
                <a class="github" href="https://github.com/Fra-Battaglia"
                  ><i class="fa-brands fa-square-github"></i> Fra-Battaglia</a
                >
              </li>
              <li>
                <a class="github" href="https://github.com/ldm0805"
                  ><i class="fa-brands fa-square-github"></i> ldm0805</a
                >
              </li>
              <li>
                <a class="github" href="https://github.com/info-mic-info"
                  ><i class="fa-brands fa-square-github"></i> info-mic-info</a
                >
              </li>
              <li>
                <a class="github" href="https://github.com/francescodev1990"
                  ><i class="fa-brands fa-square-github"></i>
                  francescodev1990</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        color: blue;
      }
    }
  }
}
</style>

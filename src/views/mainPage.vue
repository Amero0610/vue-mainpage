<!--
 * @Author: AmeroL
 * @Date: 2022-03-06 01:29:02
 * @LastEditors: AmeroL
 * @LastEditTime: 2022-03-15 03:13:49
 * @FilePath: \vue-mainpage\src\views\mainPage.vue
 * @email: vian8416@163.com
-->


<template>
  <div class="container-fluid Mainbox">
    <div v-title data-title="AmeroL's Page"></div>
    <div class="jumbotron">
      <h1 class="display-3">Amero's Page</h1>
      <p class="lead">Welcome to MyPage</p>
      <hr class="my-2" />
      <p>This is my first Page</p>
      <p class="lead">
        <a
          target="blank"
          class="btn btn-light btn-outline-primary"
          @click="linkto_Timer"
          role="button"
          >Timer</a
        >
        <a
          target="blank"
          class="btn btn-light btn-outline-success"
          @click="linkto_Clock"
          role="button"
          >Clock</a
        >
      </p>
    </div>
    <div id="mySlide">
      <div
        id="carouselId"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators downDotbox">
          <li
            data-target="#carouselId"
            data-slide-to="0"
            class="active downlab"
          ></li>
          <li data-target="#carouselId" data-slide-to="1" class="downlab"></li>
          <li data-target="#carouselId" data-slide-to="2" class="downlab"></li>
          <li data-target="#carouselId" data-slide-to="3" class="downlab"></li>
          <li data-target="#carouselId" data-slide-to="4" class="downlab"></li>
          <li data-target="#carouselId" data-slide-to="5" class="downlab"></li>
          <li data-target="#carouselId" data-slide-to="6" class="downlab"></li>
          <li data-target="#carouselId" data-slide-to="7" class="downlab"></li>
        </ol>
        <div class="carousel-inner" role="listbox" id="picturebox">
          <div class="carousel-item active" data-interval="5000">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304111.jpg"
              class="w-100"
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block text-white"></div>
          </div>
          <div class="carousel-item" data-interval="5000">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304113.jpg"
              class="w-100"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>This is Second Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
          <div class="carousel-item" data-interval="5000">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304114.jpg"
              class="w-100"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Thisis Third Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
          <div class="carousel-item" data-interval="5000">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304115.jpg"
              class="w-100"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Thisis Third Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
          <div class="carousel-item" data-interval="5000">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304116.jpg"
              class="w-100"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Thisis Third Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
          <div class="carousel-item" data-interval="1000">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304117.jpg"
              class="w-100"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Thisis Third Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
          <div class="carousel-item" data-interval="500">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304118.jpg"
              class="w-100"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Thisis Third Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
          <div class="carousel-item" data-interval="500">
            <img
              src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/mainpage/202203150304112.png"
              class="w-100"
              alt="Third slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Thisis Third Picture</h3>
                                <p>Description</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="myMusic">
      <audio controls="controls">
        <source
          src="https://my-imagestore.oss-cn-beijing.aliyuncs.com/media/Vicetone%20Cozi%20Zuehlsdorff%20-%20Nevada.2a38b5a4.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>

    <div class="d-flex justify-content-center">
      <a href="https://beian.miit.gov.cn/" target="_blank" id="footerLink">
        蒙ICP备2022000842号-1</a
      >
    </div>
  </div>
</template>
<style>
#footerLink {
  font-size: 10px;
  color: rgb(134, 137, 139);
  text-decoration: none;
}
#footerLink:hover {
  font-size: 10px;
  color: rgb(103, 104, 105);
  text-decoration: none;
}
* {
  margin: 0px;
  padding: 0px;
}

.Mainbox {
  padding: 0px;
}

.jumbotron {
  margin-bottom: 0px;
}

#carouselId {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.downDotbox li {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
#myMusic {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
export default {
  methods: {
    linkto_Timer: function () {
      const { href } = this.$router.resolve("/timerpage");
      window.open(href, "_blank");
    },
    linkto_Clock: function () {
      const { href } = this.$router.resolve("/clockpage");
      window.open(href, "_blank");
    },
  },
};
</script>

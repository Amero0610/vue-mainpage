<template>
  <div>
    <div v-title data-title="AmeroL's Timer"></div>
    <section>
      <div class="clock">
        <div class="container">
          <h2 id="hour">{{ hours }}</h2>
          <h2 class="dot">:</h2>
          <h2 id="minute">{{ minutes }}</h2>
          <h2 class="dot">:</h2>
          <h2 id="seconds">{{ seconds }}</h2>
          <span id="ampm">{{ ampm }}</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    hours: "",
    minutes: "",
    seconds: "",
    ampm: "",
  }),
  methods: {
    clock: function () {
      setInterval(() => {
        let Vdate = new Date();
        let h = Vdate.getHours();
        let m = Vdate.getMinutes();
        let s = Vdate.getSeconds();
        let Am = "AM";

        if (h > 12) {
          h = h - 12;
          Am = "PM";
        }
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        this.hours = h;
        this.minutes = m;
        this.seconds = s;
        this.ampm = Am;
      }, 1000);
    },
  },
  beforeMount: function () {
    this.clock();
  },
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: consolas;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #19172e;
  display: flex;
  justify-content: center;
  align-items: center;
}

section::before {
  content: "";
  position: absolute;
  top: 10%;
  right: 20%;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background: linear-gradient(#f9d924, #ff2c24);
  animation: animate 5s ease-in-out infinite;
}

section::after {
  content: "";
  position: absolute;
  bottom: 10%;
  left: 20%;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(#01d6ff, #0f24f9);
  animation: animate 5s ease-in-out infinite;
  animation-delay: -2.5s;
}

@keyframes animate {
  0%,
  100% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.clock {
  position: relative;
  width: 55%;
  height: 250px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.clock .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.clock .container h2 {
  font-size: 6em;
  color: #ffffff;
}

.clock .container h2:nth-child(odd) {
  padding: 5px 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  margin: 0px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

#seconds {
  color: #f9d524;
}

#ampm {
  position: relative;
  top: -50px;
  font-size: 2em;
  color: #ffffff;
  font-weight: 700;
}

#mybutton {
  background: #19172e;
  border: none;
  position: absolute;
  top: 0px;
  margin: 0;
}
</style>

<template>
  <div class="clockPage">
           <div v-title data-title="AmeroL的钟表"></div>
    <div class="clock">
      <div class="hour">
        <div class="hr" id="hr"></div>
      </div>
      <div class="min">
        <div class="mn" id="mn"></div>
      </div>
      <div class="sec">
        <div class="sc" id="sc"></div>
      </div>
    </div>
  </div>
</template>
<style >
.clockPage {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clockPage {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #329bcf;
}

.clockPage .clock {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/clockpageAssets/clock.png);
  background-color: rgba(255, 255, 255, 0.89);
  background-size: cover;
  border: 20px solid #fff;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    10px 15px 15px rgba(0, 0, 0, 0.322), inset 0 15px 15px rgba(0, 0, 0, 0.3);
}

.clockPage .clock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #5e5c5d;
  border-radius: 50%;
  z-index: 100000;
}

.clockPage .clock .hour,
.clockPage .clock .min,
.clockPage .clock .sec {
  position: absolute;
}

.clockPage .clock .hour,
.clockPage .hr {
  width: 160px;
  height: 160px;
}

.clockPage .clock .min,
.clockPage .mn {
  width: 190px;
  height: 190px;
}

.clockPage .clock .sec,
.clockPage .sc {
  width: 230px;
  height: 230px;
}

.clockPage .hr,
.clockPage .mn,
.clockPage .sc {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  border-radius: 50%;
}

.clockPage .hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #5e5c5d;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}

.clockPage .mn:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: rgba(168, 165, 165, 0.849);
  z-index: 11;
  border-radius: 6px 6px 0 0;
}

.clockPage .sc:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 150px;
  background: #ff1053;
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted: function () {
    const deg = 6;
    const hr = document.getElementById("hr");
    const mn = document.getElementById("mn");
    const sc = document.getElementById("sc");
    setInterval(() => {
		let day = new Date();
		let hh = day.getHours()*30;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;
		
		let hhdeg = Number(hh)+Number(mm/12);

		hr.style.transform = 'rotateZ('+hhdeg+'deg)';
		mn.style.transform = 'rotateZ(' + mm + 'deg)';
		sc.style.transform = 'rotateZ(' + ss + 'deg)';
	});
  },
};
</script>
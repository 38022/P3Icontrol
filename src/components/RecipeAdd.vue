<template>
  <div class="recipe-add-page">
    <div class="header">
      <h2 class="title">レシピDB操作</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>レシピDB操作</span>
    </nav>
    <div class="display-camera">
      <h3>カメラ名：CAM2</h3>
    </div>
    <div class="edit-recipe">
      <div class="select-algo">
        <label>画像処理手法：</label>
        <select v-model="selectedAlgo">
        <option v-for="algos in algosList" :key="algos" :value="algos">
          {{ algos }}
        </option>
      </select>
      </div>
      <div class="rectX">
        <label>ROI.Rect.X：</label>
        <input v-model.number="rectX" type="number" min="0" />
      </div>
      <div class="rectY">
        <label>ROI.Rect.Y：</label>
        <input v-model.number="rectY" type="number" min="0" />
      </div>
      <div class="rectW">
        <label>ROI.Rect.W：</label>
        <input v-model.number="rectW" type="number" min="0" />
      </div>
      <div class="rectH">
        <label>ROI.Rect.H：</label>
        <input v-model.number="rectH" type="number" min="0" />
      </div>
      <div class="angle">
        <label>Angle：</label>
        <input v-model.number="angle" type="number" min="-180" />
      </div>
      <div class="thresh">
        <label>Thresh：</label>
        <input v-model.number="thresh" type="number" min="0" max="255"/>
      </div>
      <div class="contourTh">
        <label>ContourTh：</label>
        <input v-model.number="contourTh" type="number" min="0"/>
      </div>
      <button>追加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeAdd',
  data() {
    return {
      algosList: ['OneFrame', 'FrameSub', 'DropMC', 'MeasureLength', 'ClipLength'],
      rectX: 0,
      rectY: 0,
      rectW: 100,
      rectH: 50,
      angle: 0,
      thresh: 0,
      contourTh: 0
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  margin: 5px 0 0 12px;
  font-size: 1rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}
.breadcrumb a {
  color: #666;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
.recipe-add-page {
  min-height: 100vh;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  margin: 0;
  padding: 0;
  width: 100%;
}

.title {
  width: 100%;
  background: #fff86a;
  color: #222;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 18px 0 18px 24px;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: left;
}

.display-camera {
  display: flex;
  margin-left: 100px;
  margin-top: 40px;
}

.edit-recipe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
  margin-top: 60px;
  gap: 10px;
}
.rectX input,
.rectY input,
.rectW input,
.rectH input,
.angle input,
.thresh input,
.contourTh input {
  width: 50px;
}
</style>
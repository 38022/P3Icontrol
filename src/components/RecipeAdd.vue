<template>
  <div class="recipe-add-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">レシピDB操作</h2>
        <span class="page-desc">レシピDBに新規レシピを追加する</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/recipeDB">レシピDB操作</router-link>
      <span> &gt;</span>
      <span>レシピ追加</span>
    </nav>
    <div class="select-camera">
      <p>追加するカメラを選択</p>
      <div class="select-camera-row">
        <select v-model="selectedCamera">
          <option v-for="camera in cameraList" :key="camera" :value="camera">
            {{ camera }}
          </option>
        </select>
      </div>
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
      selectedCamera: '',
      cameraList:['テンター出ツレ', 'テンター入り'],
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

.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff86a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 18px 0 18px 24px;
  border-radius: 0;
  box-sizing: border-box;
}

.title {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  background: transparent;
  box-shadow: none;
  padding: 0;
  border-radius: 0;
  flex-shrink: 0;
}

.page-desc {
  margin-left: 32px;
  font-size: 1rem;
  color: #555;
  white-space: nowrap;
}

.select-camera {
  text-align: left;
  margin-left: 60px;
  margin-bottom: 30px;
  margin-top: 30px;
}
.select-camera p {
  margin-bottom: 4px;
}
.select-camera-row {
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 0;
}
.select-camera select {
  width: 200px;
  height: 30px;
  font-size: 1.2rem;
}

.edit-recipe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  margin-top: 10px;
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
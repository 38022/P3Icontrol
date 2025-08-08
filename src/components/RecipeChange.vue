<template>
  <div class="recipe-change-page">
    <div class="header">
      <h2 class="title">レシピ編集</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/recipeDB">レシピDB操作</router-link>
      <span> &gt;</span>
      <span>レシピ編集</span>
    </nav>
    <div class="select-camera">
      <p>レシピ変更するカメラを選択</p>
      <div class="select-row">
        <select v-model="selectedCamera">
          <option v-for="cameras in camerasList" :key="cameras" :value="cameras">
            {{ cameras }}
          </option>
        </select>
        <button @click="showEdit = true" :disabled="!selectedCamera">OK</button>
      </div>
    </div>
    <div v-if="showEdit" class="edit-recipe">
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
      <button>変更</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeChange',
  data() {
    return {
      camerasList: ['テンター出ツレ', 'テンター入'],
      selectedCamera: '',
      showEdit: false,
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
.recipe-change-page {
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

.select-camera {
  margin-top: 32px;
  margin-left: 30px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.select-camera p {
  font-size: 1.1rem;
  margin-bottom: 8px;
  margin-left: 0;
}

.select-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
}

.select-camera select {
  padding: 6px 16px;
  font-size: 1rem;
}

.select-camera button {
  padding: 4px 10px;
  font-size: 1rem;
  cursor: pointer;
}

.edit-recipe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
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
<template>
  <div class="recipe-add">
    <h2>レシピ追加</h2>
    <div class="select-camera">
      <p>レシピ追加するカメラを選択</p>
      <select v-model="selectedCamera">
        <option v-for="cameras in camerasList" :key="cameras" :value="cameras">
          {{ cameras }}
        </option>
      </select>
    </div>
    <button @click="showEdit = true" :disabled="!selectedCamera">OK</button>
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
      <button>追加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeAdd',
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
body {
  margin: 0;
}
h2 {
  position: relative;
  text-align: left;
  margin-left: 30px;
  margin-top: -30px;
  padding-bottom: 4px;
}
h2::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 3px;
  background: #FFD700;
}
.select-camera {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  gap: 10px;
}
.select-camera p {
  text-align: left;
  margin: 0;
}
.select-camera select {
  width: 200px;
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
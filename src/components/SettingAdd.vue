<template>
  <div class="setting-add-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">処理構成の追加</h2>
        <span class="page-desc">処理構成(新規カメラ追加や新レシピなど)を追加する</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/setting">システム設定</router-link>
      <span> &gt;</span>
      <span>処理構成の追加</span>
    </nav>
    <div class="select-camera">
      <p>追加するカメラを選択</p>
      <div class="select-camera-row">
        <select v-model="selectedCamera">
          <option v-for="camera in cameraList" :key="camera" :value="camera">
            {{ camera }}
          </option>
        </select>
        <button @click="onSelectCamera">選択</button>
      </div>
    </div>
    <div class="add-setting" v-if="showAddSetting">
      <div class="select-recipe">
        <p>適用するレシピを選択</p>
        <select v-model="selectedRecipe">
          <option v-for="recipe in recipeList" :key="recipe" :value="recipe">
            {{ recipe }}
          </option>
        </select>
      </div>
      <div class="set-tag">
        <p>タグ設定</p>
        <div class="select-factory">
          <label>工場：</label>
          <select v-model="selectedFactory">
            <option v-for="factory in factoryList" :key="factory" :value="factory">
              {{ factory }}
            </option>
          </select>
        </div>
        <div class="select-zone">
          <label>ゾーン：</label>
          <select v-model="selectedZone">
            <option v-for="zone in zoneList" :key="zone" :value="zone">
              {{ zone }}
            </option>
          </select>
        </div>
        <div class="select-subject">
          <label>被写体名称：</label>
          <input list="subjects" v-model="selectedSubject" />
          <datalist id="subjects">
            <option v-for="subjects in subjectsList" :key="subjects" :value="subjects">
              {{ subjects }}
            </option>
          </datalist>
        </div>
        <div class="select-side">
          <label>位置：</label>
          <select v-model="selectedSide">
            <option>DS</option>
            <option>OS</option>
          </select>
        </div>
        <div class="selected-result">
          <h3>和名タグは「 {{ selectedFactory }}_{{ selectedZone }}_p3_001_cam004_{{ selectedSubject }}_framesub_{{ selectedSide }}_PV 」です</h3>
        </div>
      </div>
    </div>
    <button class="fixed-ok-button" 
    :disabled="
      !selectedFactory ||
      !selectedZone ||
      !selectedSubject ||
      !selectedSide ">適用</button>
  <!-- すべて選択or入力していないと適用ボタンをクリックできない -->
  </div>
</template>

<script>
export default {
  name: 'SettingAdd' ,
  data() {
    return {
      selectedCamera: '',
      cameraList:['テンター出ツレ', 'テンター入り'],
      selectedRecipe: '',
      recipeList:['recipe_id1', 'recipe_id2'],
      showAddSetting: false,
      selectedFactory: '',
      factoryList: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'],
      selectedZone: '',
      zoneList: ['a', 'b'],
      selectedSubject: '',
      subjectsList: ['テンター出ツレ', 'テンター入り'],
      selectedSide: '',
    }
  },
  methods: {
    onSelectCamera() {
      this.showAddSetting = true;
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
.setting-add-page {
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
  font-size: 1.1rem;
  color: #555;
  white-space: nowrap;
}

.select-camera {
  text-align: left;
  margin-left: 30px;
  margin-bottom: 50px;
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
button {
  width: 80px;
  height: 30px;
  font-size: 1rem;
  font-weight: bold;
}
.select-recipe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.select-recipe p {
  margin-bottom: 4px;
  text-align: left;
  width: 100%;
}
.select-recipe select {
  width: 200px;
  height: 30px;
  font-size: 1.2rem;
}
.add-setting {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 30px;
  gap: 100px;
}
.set-tag {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
}
.set-tag p {
  margin-bottom: 4px;
  text-align: left;
  width: 100%;
  font-weight: bold;
}
.set-tag select,
.set-tag input {
  align-self: flex-start;
  width: 150px;
  height: 30px;
  font-size: 1.1rem;
  margin-bottom: 16px;
}
.set-tag label {
  margin-bottom: 4px;
  font-size: 1rem;
}
.fixed-ok-button {
  position: fixed;
  right: 400px;
  bottom: 50px;
  z-index: 100;
}
</style>
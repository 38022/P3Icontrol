<template>
  <h2>設定追加</h2>
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
      <div class="enter-memo">
        <label>メモ：</label>
        <input v-model="memo" type="text" placeholder="必須"/>
      </div>
      <div class="selected-result">
        <h3>和名タグは「 {{ selectedFactory }}_{{ selectedZone }}_p3_001_004_{{ selectedSubject }}_{{ memo }}_{{ selectedSide }}_PV 」です</h3>
      </div>
    </div>
  </div>
  <button class="fixed-ok-button" 
  :disabled="
    !selectedFactory ||
    !selectedZone ||
    !selectedSubject ||
    !selectedSide ||
    !memo">適用</button>
  <!-- すべて選択or入力していないと適用ボタンをクリックできない -->
  <!-- <div class="radio-group">
    <div class="new-tag">
      <div class="new-tag-button">
        <input type="radio" id="new" name="tag" @change="onRadioChange">
        <label for="new">新規にタグ名称をつける</label>
      </div>
      <div v-if="newtag" class="select-group">
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
        <div class="enter-memo">
          <label>メモ：</label>
          <input v-model="memo" type="text" placeholder="必須"/>
        </div>
      </div>
    </div>
    <div>
      <div class="exist-tag-button">
        <input type="radio" id="exist" name="tag" @change="onRadioChange">
        <label for="exist">既存のタグを使う</label>
      </div>
      <div v-if="existtag">
        <div class="select-tag">
          <select v-model="selectedExistTag">
            <option v-for="tags in tagsList" :key="tags" :value="tags">
              {{ tags }}
            </option>
          </select>
        </div>
      </div>
    </div> -->
    <!-- <div v-if="newtag" class="selected-result">
      <h3>和名タグは「 {{ selectedFactory }}_{{ selectedZone }}_p3_001_004_{{ selectedSubject }}_{{ memo }}_{{ selectedSide }}_PV 」です</h3>
    </div>
    <div v-if="existtag" class="selected-result">
      <h3>和名タグは「 {{ selectedExistTag }} 」です</h3>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'SettingAdd' ,
  data() {
    return {
      // newtag: false,
      // existtag: false,
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
      memo: ''
      // selectedExistTag: '',
      // tagsList: ['L4_b_p3_001_004_テンター出ツレ_Th250_DS_PV']
    }
  },
  methods: {
    // onRadioChange(e) {
    //   if (e.target.id === 'new') {
    //     this.newtag = true
    //     this.existtag = false
    //   } else {
    //     this.newtag = false
    //     this.existtag = true
    //   }
    // },
    onSelectCamera() {
      this.showAddSetting = true;
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
/* .radio-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 150px;
}
.radio-group > div {
  margin-bottom: 80px;
}
.select-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.select-group > div {
  margin-bottom: 8px;
}
.select-group > div:last-child {
  margin-bottom: 0;
}
.new-tag {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}
.new-tag-button {
  display: flex;
  align-items: center;
}
.exist-tag-button {
  display: flex;
  align-items: center;
} */
/* .select-tag {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
} */
.fixed-ok-button {
  position: fixed;
  right: 400px;
  bottom: 100px;
  z-index: 100;
}
</style>
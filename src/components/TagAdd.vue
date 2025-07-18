<template>
  <h2>タグ追加</h2>
  <div class="radio-group">
    <div class="new-tag">
      <div class="new-tag-button">
        <input type="radio" id="new" name="tag" @change="onRadioChange">
        <label for="new">新規にタグ名称をつける</label>
      </div>
      <div v-if="newtag" class="select-group">
        <div class="select-factory">
          <label>工場：</label>
          <select v-model="selectedFactory">
            <option>L1</option>
            <option>L2</option>
            <option>L3</option>
            <option>L4</option>
            <option>L5</option>
            <option>L6</option>
            <option>L7</option>
            <option>L8</option>
          </select>
        </div>
        <div class="select-zone">
          <label>ゾーン：</label>
          <select v-model="selectedZone">
            <option>a</option>
            <option>b</option>
          </select>
        </div>
        <div class="select-subject">
          <label>被写体名称：</label>
          <input list="subjects" v-model="selectedSubject" />
          <datalist id="subjects">
            <option>テンター出ツレ</option>
            <option>テンター入り</option>
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
          <input v-model="memo" type="text" />
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
            <option>L4_b_p3_001_004_テンター出ツレ_Th250_DS_PV</option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="newtag" class="selected-result">
      <h3>和名タグは「 {{ selectedFactory }}_{{ selectedZone }}_p3_001_004_{{ selectedSubject }}_{{ memo }}_{{ selectedSide }}_PV 」です</h3>
    </div>
    <div v-if="existtag" class="selected-result">
      <h3>和名タグは「 {{ selectedExistTag }} 」です</h3>
    </div>
    <button>OK</button>
  </div>

</template>

<script>
export default {
  name: 'TagAdd' ,
  data() {
    return {
      newtag: false,
      existtag: false,
      selectedFactory: '',
      selectedZone: '',
      selectedSubject: '',
      selectedSide: '',
      memo: '',
      selectedExistTag: ''
    }
  },
  methods: {
    onRadioChange(e) {
      if (e.target.id === 'new') {
        this.newtag = true
        this.existtag = false
      } else {
        this.newtag = false
        this.existtag = true
      }
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

.radio-group {
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
}
.select-tag {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
button {
  position: fixed;
  right: 400px;
  bottom: 100px;
  z-index: 100;
  width: 80px;
  height: 30px;
  font-size: 1rem;
  font-weight: bold;
}
</style>
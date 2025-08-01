<template>
  <h2>設定編集</h2>
  <div class="display-info">
    <div class="display-tag">
      <p>和名タグ名：{{ decodedTag }}</p>
    </div>
    <div class="display-camera">
      <p>カメラ名：{{ decodedCamera }}</p>
    </div>
    <div class="display-recipe">
      <label>レシピID：</label>
      <select v-model="selectedRecipe">
        <option v-for="recipe in recipeList" :key="recipe" :value="recipe">
          {{ recipe }}
        </option>
      </select>
    </div>
    <div class="valid-switch">
      <label for="valid-check">有効：</label>
      <input id="valid-check" type="checkbox" v-model="isValid" />
    </div>
    <div class="subject-radio-group">
      <div class="subject-radio">
        <input type="radio" id="subject-change"
          :checked="subjectChanged === true"
          @click="toggleSubjectChanged" />
        <!-- 2回クリックしたら選択解除 -->
        <label for="subject-change">被写体変更あり</label>
      </div>
      <div class="select-subject-group" v-if="subjectChanged === true">
        <div class="select-subject">
          <label>被写体名称：</label>
          <select v-model="selectedSubject">
            <option v-for="subject in subjectList" :key="subject" :value="subject">
              {{ subject }}
            </option>
          </select>
        </div>
        <div class="tag-result">
          <h4>和名タグは「 {{ decodedTag }} 」です</h4>
          <!-- ☆タグ内の被写体名だけ変更 -->
        </div>
      </div>

    </div>
  </div>
  <button>適用</button>
</template>

<script>
export default {
  name: 'SettingEdit',
  data() {
    return {
      selectedRecipe: '',
      recipeList:['recipe_id1', 'recipe_id2'],
      isValid: false,
      subjectChanged: false,
      selectedSubject: '',
      subjectList:['テンター出ツレ', 'テンター入り']
    }
  },
  methods: {
    toggleSubjectChanged() {
      this.subjectChanged = this.subjectChanged === true ? null : true;
    }
  },
  props: {
    tag: {
      type: String,
      required: false
    },
    camera: {
      type: String,
      required: false
    }
  },
  computed: {
    decodedTag() {
      return this.tag ? decodeURIComponent(this.tag) : '';
    },
    decodedCamera() {
      return this.camera ? decodeURIComponent(this.camera) : '';
    }
  }
}
</script>

<style scoped>
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
  width: 1000px;
  height: 3px;
  background: #FFD700;
}
.display-info {
  text-align: left;
  margin-left: 60px;
  margin-top: 100px;
  font-size: 1.2rem; /* 文字サイズを大きく */
  line-height: 2;    /* 行間 */
}
.display-recipe {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  gap: 16px;
}
.display-recipe p {
  margin-bottom: 4px;
  text-align: left;
  width: 100%;
}
.display-recipe select {
  width: 200px;
  height: 30px;
  font-size: 1.2rem;
}
.valid-switch {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.valid-switch input[type="checkbox"] {
  width: 24px;
  height: 24px;
}
.subject-radio-group {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}
.subject-radio {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.subject-radio input[type="radio"] {
  width: 20px;
  height: 20px;
}
.select-subject-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.select-subject {
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.select-subject select {
  width: 200px;
  height: 30px;
  font-size: 1.2rem;
}
button {
  margin-left: 250px;
  width: 80px;
  height: 30px;
  font-size: 1.1rem;
}
</style>
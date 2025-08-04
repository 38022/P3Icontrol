<template>
  <div class="setting-delete">
    <h2>設定削除</h2>
    <div class="display-info">
      <p>カメラ名：{{ decodedCamera }}</p>
      <p>タグ名：{{ decodedTag }}</p>
      <p>レシピID：{{ decodedRecipeId }}</p>
    </div>
    <!-- <div class="select-setting">
      <p>削除する設定を選択</p>
      <select v-model="selectedSetting">
        <option v-for="settings in settingsList" :key="settings" :value="settings">
          {{ settings }}
        </option>
      </select>
    </div> -->
    <button @click="onDelete">削除</button>
  </div>
</template>

<script>
export default {
  name: 'SettingDelete',
  // data() {
  //   return {
  //     recipesList: ['テンター出ツレ'],
  //     selectedRecipe: ''
  //   }
  // },
  methods: {
    onDelete() {
      alert('本当に削除しますか？');
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
    },
    recipeId: {
      type: String,
      required: false
    }
  },
  computed: {
    decodedTag() {
      return this.tag ? decodeURIComponent(this.tag) : '';
      // 日本語はURLエンコード必要
    },
    decodedCamera() {
      return this.camera ? decodeURIComponent(this.camera) : '';
    },
    decodedRecipeId() {
      return this.recipeId ? decodeURIComponent(this.recipeId): '';
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
  width: 150px;
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
.select-recipe {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  gap: 10px;
}
.select-recipe p {
  text-align: left;
  margin: 0;
}
.select-recipe select {
  width: 330px;
}
</style>
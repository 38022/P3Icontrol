<template>
  <div class="setting-delete-page">
    <div class="header">
      <h2 class="title">設定削除</h2>
    </div>
    <div class="display-info">
      <p>カメラ名：{{ decodedCamera }}</p>
      <p>タグ名：{{ decodedTag }}</p>
      <p>レシピID：{{ decodedRecipeId }}</p>
    </div>
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
.setting-delete-page {
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
.display-info {
  text-align: left;
  margin-left: 60px;
  margin-top: 60px;
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

button {
  width: 80px;
  height: 32px;
  font-size: 1rem;
  padding: 4px 0;
  margin-left: 600px;
  margin-top: 32px;
}
</style>
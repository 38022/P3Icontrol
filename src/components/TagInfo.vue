<template>
  <div class="tag-info-page">
    <div class="header">
      <h2 class="title">出力タグ情報：{{ decodedTag }}</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/setting">システム設定</router-link>
      <span> &gt;</span>
      <span>出力タグ情報</span>
    </nav>
    <div class="display-info">
      <p>和名タグ名：{{ decodedTag }}</p>
      <p>英名タグ名：</p>
      <p>
        紐づいたカメラ名：
        <router-link
          v-if="decodedCamera"
          :to="{ name: 'CameraInfo', params: { 
            camera: encodeURIComponent(decodedCamera),
            tag: encodeURIComponent(decodedTag), 
            recipeId: encodeURIComponent(decodedRecipeId) } }"
        >
          {{ decodedCamera }}
        </router-link>
        <span v-else> </span>
      </p>
      <p>最終出力日時：</p>
      <p>レシピ変更履歴：</p>
    </div>
  </div>
</template>

<script>
export default {
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
      return this.recipeId ? decodeURIComponent(this.recipeId) : '';
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
.tag-info-page {
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
  font-size: 1.5rem;
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

.display-info a {
  color: #1976d2;
  text-decoration: none;
}

.display-info a:visited {
  color: #1976d2; /* visitedでも青色に固定 */
}

.display-info a:hover {
  text-decoration: underline;
}
</style>
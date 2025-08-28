<template>
  <div class="camera-info-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">カメラ情報：{{ decodedCamera }}</h2>
        <span class="page-desc">カメラとそれに紐づいたタグ/レシピの情報の閲覧</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/setting">システム設定</router-link>
      <span> &gt;</span>
      <span>カメラ情報</span>
    </nav>
    <div class="display-info">
      <p>カメラ名：{{ decodedCamera }}</p>
      <p>カメラID(Avigilon)：</p>
      <p>カメラID(P3-I内部)：</p>
      <p>
        紐づいたタグ：
        <router-link
          v-if="decodedTag"
          :to="{ name: 'TagInfo', params: { tag: encodeURIComponent(decodedTag), camera: encodeURIComponent(decodedCamera) } }"
        >
          {{ decodedTag }}
        </router-link>
        <span v-else> </span>
      </p>
      <p>
        紐づいたレシピID：
        <router-link
          v-if="decodedRecipeId"
          :to="{ name: 'RecipeInfo', params: { recipeId: encodeURIComponent(decodedRecipeId), tag: encodeURIComponent(decodedTag) } }"
        >
          {{ decodedRecipeId }}
        </router-link>
        <span v-else> </span>
      </p>
      <p>最初のP3-I接続日時：</p>
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
.camera-info-page {
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
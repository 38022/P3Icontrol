<template>
  <div class="recipe-info-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">レシピ情報：{{ decodedRecipeId }}</h2>
        <span class="page-desc">レシピとそれに紐づいたタグ/カメラの情報の閲覧</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/setting">システム設定</router-link>
      <span> &gt;</span>
      <span>レシピ情報</span>
    </nav>
    <div class="display-info">
      <p>レシピID：{{ decodedRecipeId }}</p>
      <div class="display-parameter">
        <p>パラメータ</p>
        <div class="parameter-group">
          <table>
            <colgroup>
              <col style="width: 200px;">
              <col style="width: 200px;">
              <col style="width: 200px;">
            </colgroup>
            <tr>
              <td>画像処理手法：OneFrame</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Rect.X：100</td>
              <td>Rect.W：100</td>
              <td class="left-align">Angle：0</td>
            </tr>
            <tr>
              <td>Rect.Y：100</td>
              <td>Rect.H：50</td>
              <td class="left-align">Thresh：20</td>
            </tr>
            <tr>
              <td style="visibility: hidden;">dummy</td>
              <td style="visibility: hidden;">dummy</td>
              <td class="left-align">ContourTh：100</td>
            </tr>
          </table>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipeId: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    }
  },
  computed: {
    decodedRecipeId() {
      return this.recipeId ? decodeURIComponent(this.recipeId) : '';
    },
    decodedTag() {
      return this.tag ? decodeURIComponent(this.tag) : '';
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
.recipe-info-page {
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

.parameter-group table {
  border-collapse: collapse;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 30px;
  table-layout: fixed; /* 追加 */
}
.parameter-group td {
  padding: 4px 0 4px 0;
  text-align: left;
  font-size: 1rem;
  vertical-align: top;
  word-break: break-all;
}
</style>
<template>
  <div class="recipe-info-page">
    <div class="header">
      <h2 class="title">レシピ情報：{{ decodedRecipeId }}</h2>
    </div>
    <div class="display-info">
      <p>レシピID：{{ decodedRecipeId }}</p>
      <div class="display-parameter">
        <p>パラメータ</p>
        <div class="parameter-group">
          <div class="row">
            <label>画像処理手法：</label>
          </div>
          <div class="row">
            <label>Rect.X：</label>
            <label>Rect.W：</label>
            <label>Angle：</label>
          </div>
          <div class="row">
            <label>Rect.Y：</label>
            <label>Rect.H：</label>
            <label>Thresh：</label>
          </div>
          <div class="row">
            <label style="visibility: hidden;">dummy</label>
            <label style="visibility: hidden;">dummy</label>
            <label>ContourTh：</label>
          </div>       
        </div>
      </div>
      <p>紐づいたタグ：{{ decodedTag }}</p>
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
.parameter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  margin-left: 80px;
}
.parameter-group .row {
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: flex-start;
}
.parameter-group label {
  min-width: 90px;
  text-align: left;
}
</style>
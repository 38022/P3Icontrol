<template>
  <h2>レシピ情報：{{ decodedRecipeId }}</h2>
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
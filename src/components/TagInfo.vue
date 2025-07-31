<template>
  <h2>出力タグ情報：{{ decodedTag }}</h2>
  <div class="display-info">
    <p>和名タグ名：{{ decodedTag }}</p>
    <p>英名タグ名：</p>
    <p>紐づいたカメラ名：{{ decodedCamera }}</p>
    <p>最終出力日時：</p>
    <p>レシピ変更履歴：</p>
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
    }
  },
  computed: {
    decodedTag() {
      return this.tag ? decodeURIComponent(this.tag) : '';
      // 日本語はURLエンコード必要
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
</style>
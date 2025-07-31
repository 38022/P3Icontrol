<template>
  <h2>カメラ情報：{{ decodedCamera }}</h2>
  <div class="display-info">
    <p>カメラ名：{{ decodedCamera }}</p>
    <p>カメラID(Avigilon)：</p>
    <p>カメラID(P3-I内部)：</p>
    <p>紐づいたタグ：{{ decodedTag }}</p>
    <p>紐づいたレシピ：</p>
    <p>最初のP3-I接続日時：</p>
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
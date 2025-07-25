<template>
  <div class="recipe-history">
    <h2>レシピ更新履歴</h2>
  </div>
</template>

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
  width: 180px;
  height: 3px;
  background: #FFD700;
}
</style>
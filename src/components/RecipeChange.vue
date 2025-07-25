<template>
  <div class="recipe-change">
    <h2>レシピ変更</h2>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
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
</style>
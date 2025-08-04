<template>
  <h2>レシピDB操作</h2>
  <div class="button-group">
    <div class="recipe-history">
      <button @click="$router.push('/recipeDB/recipeHistory')">レシピ更新履歴</button>
    </div>
    <div class="recipe-add">
      <button @click="$router.push('/recipeDB/recipeAdd')">レシピ追加</button>
    </div>
    <div class="recipe-edit">
      <button>レシピ変更</button>
    </div>
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
  width: 150px;
  height: 3px;
  background: #FFD700;
}
.button-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  margin-left: 150px;
  margin-top: 100px;
}
.button-group button {
  width: 150px;
  height: 60px;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(180deg, #fff 0%, #f4f8b4 100%);
  border: 2px solid #f8f433;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: box-shadow 0.2s;
}
.button-group button:hover {
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
  background: linear-gradient(180deg, #f8f8f8 0%, #ffff7c 100%);
}
</style>
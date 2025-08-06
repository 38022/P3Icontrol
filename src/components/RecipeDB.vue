<template>
  <div class="recipe-db-page">
    <div class="header">
      <h2 class="title">レシピDB操作</h2>
    </div>    
    <div class="button-group">
      <router-link to="/recipeDB/recipeHistory" class="menu-item-link">
        <button class="menu-item">
          <img src="@/assets/log_icon.png" alt="レシピ更新履歴" />
          <span>レシピ更新履歴</span>
        </button>
      </router-link>
      <router-link to="/recipeDB/recipeAdd" class="menu-item-link">
        <button class="menu-item">
          <img src="@/assets/add_icon.png" alt="レシピ追加" />
          <span>レシピ追加</span>
        </button>
      </router-link>
      <router-link to="/recipeDB/recipeChange" class="menu-item-link">
        <button class="menu-item">
          <img src="@/assets/recipe_icon.png" alt="レシピ変更" />
          <span>レシピ変更</span>
        </button>
      </router-link>
  </div>
  </div>
</template>

<style scoped>
.recipe-db-page {
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
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 18px 0 18px 24px;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: left;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: flex-start;
  margin-left: 60px;
  margin-top: 60px;
}

.menu-item-link {
  text-decoration: none;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 140px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
  gap: 12px;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
}

.menu-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  background: #fffbe0;
}

.menu-item img {
  width: 48px;
  height: 48px;
}

</style>
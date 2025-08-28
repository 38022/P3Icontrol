<template>
  <div class="recipe-delete-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">レシピ削除</h2>
        <span class="page-desc">レシピDB内のレシピIDを削除する</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/recipeDB">レシピDB操作</router-link>
      <span> &gt;</span>
      <span>レシピ削除</span>
    </nav>
    <div class="display-recipe">
      <h3>レシピID:recipe_id5</h3>
      <p>Rect.X:100</p>
      <p>Rect.Y:100</p>
      <p>Rect.W:100</p>
      <p>Rect.H:150</p>
      <p>Angle:0</p>
      <p>Thresh:20</p>
      <p>ContourTh：100</p>
    </div>
    <button @click="onDelete">削除</button>
  </div>
</template>

<script>
export default {
  name: 'RecipeDelete',
  methods: {
    onDelete() {
      alert('本当に削除しますか？');
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
.recipe-delete-page {
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
  font-size: 1rem;
  color: #555;
  white-space: nowrap;
}

.display-recipe {
  margin-left: 50px;
  margin-top: 50px;
  text-align: left;
}

button {
  font-size: 1rem;
  cursor: pointer;
  width: 80px;
  height: 30px;
  margin-left: 450px;
}
</style>
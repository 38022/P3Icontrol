<template>
  <div class="recipe-db-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">レシピDB操作</h2>
        <span class="page-desc">レシピDB内のレシピの管理</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>レシピDB操作</span>
    </nav>   
    <div class="recipe-log">
      <table>
        <thead>
          <tr>
            <th>項番</th>
            <th>レシピID</th>
            <th>カメラ名</th>
            <th>最終編集日時</th>
            <th>作成日時</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in recipeList" :key="i">
            <td>{{ row.no }}</td>
            <td>{{ row.recipeId }}</td>
            <td>{{ row.camera }}</td>
            <td>{{ row.editDate }}</td>
            <td>{{ row.createDate }}</td>
            <!-- <td>
              <router-link
              to="/recipeDB/recipeChange">編集</router-link>
            </td> -->
            <td>
              <!-- cameraがnullなら有効、recipeIdがnullなら無効 -->
              <router-link
                v-if="row.camera === null && row.recipeId !== null"
                to="/recipeDB/recipeDelete"
              >削除</router-link>
              <span v-else-if="row.recipeId === null" style="color: #ccc; pointer-events: none; cursor: default;">削除</span>
              <span v-else style="color: #ccc; pointer-events: none; cursor: default;">削除</span>
            </td>
            <!-- <td>
              <router-link to="/recipeDB/recipeHistory">編集履歴</router-link>
            </td> -->
          </tr>
        </tbody>
      </table>
      <router-link to="/recipeDB/recipeAdd">
        <button>追加</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeDB',
  data() {
    return {
      recipeList: [
        {
          no: '1',
          recipeId: 'recipe_id3',
          camera: 'CAM1',
          editDate: '2025/08/01 12:00',
          createDate: '2025/07/22 12:00'
        },
        {
          no: '2',
          recipeId: null,
          camera: 'CAM2',
          editDate: '2025/08/01 12:00',
          createDate: '2025/07/22 12:00'
        },
        {
          no: '3',
          recipeId: 'recipe_id5',
          camera: null,
          editDate: '2025/08/01 12:00',
          createDate: '2025/07/22 12:00'
        }
      ]
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

.select-factory {
  margin-top: 32px;
  margin-left: 30px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.select-label {
  font-size: 1.1rem;
  margin-bottom: 8px;
  margin-left: 0;
}

.select-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
}

select {
  padding: 6px 16px;
  font-size: 1rem;
}

button {
  padding: 4px 10px;
  font-size: 1rem;
  cursor: pointer;
}

.recipe-log {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.recipe-log table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.recipe-log th,
.recipe-log td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.recipe-log th {
  background: #fff;
  font-weight: bold;
}

.recipe-log a,
.recipe-log a:visited {
  color: #1976d2;
  text-decoration: underline;
}
.recipe-log a:hover {
  text-decoration: underline;
  color: #1256a0;
}
/* 
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
} */

</style>
<template>
  <div class="recipe-history-page">
    <div class="header">
      <h2 class="title">レシピ編集履歴</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/recipeDB">レシピDB操作</router-link>
      <span> &gt;</span>
      <span>レシピ編集</span>
    </nav>
    <div class="recipe-history-table">
      <table>
        <thead>
          <tr>
            <th @click="sortByDate" style="cursor:pointer">
              最終編集日時
              <span v-if="sortAsc">▲</span>
              <span v-else>▼</span>
            </th>
            <th>レシピID</th>
            <th>画像処理手法</th>
            <th>パラメータ</th>
            <th>カメラ名</th>
            <th>担当者</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in sortedHistoryList" :key="i">
            <td>{{ row.editDate }}</td>
            <td>{{ row.recipeId }}</td>
            <td>{{ row.algo }}</td>
            <td>{{ row.param }}</td>
            <td>{{ row.camera }}</td>
            <td>{{ row.editor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecipeHistory',
  data() {
    return {
      sortAsc: false,
      isSorted: false,
      recipeHistoryList: [
        {
          editDate: '2025/07/22 12:00',
          recipeId: 'recipe_id3',
          algo: 'OneFrame',
          param: 'X:0, Y:0, W:100, H:150, Angle:0, Th:20, ContourTh:100',
          camera: 'CAM1',
          editor: '***'
        },
        {
          editDate: '2025/07/02 12:00',
          recipeId: 'recipe_id6',
          algo: 'FrameSub',
          param: 'X:0, Y:0, W:100, H:150, Angle:0, Th:20, ContourTh:100',
          camera: 'CAM4',
          editor: '***'
        },
        {
          editDate: '2025/07/12 12:00',
          recipeId: 'recipe_id6',
          algo: 'FrameSub',
          param: 'X:0, Y:0, W:100, H:150, Angle:0, Th:20, ContourTh:100',
          camera: 'CAM4',
          editor: '***'
        }
      ]
    }
  },
  computed: {
    sortedHistoryList() {
      if (!this.isSorted) {
        // ソートされていない場合は元の順序
        return this.recipeHistoryList;
      }
      // ソート時のみ並び替え
      return [...this.recipeHistoryList].sort((a, b) => {
        const dateA = new Date(a.editDate.replace(/\//g, '-'));
        const dateB = new Date(b.editDate.replace(/\//g, '-'));
        return this.sortAsc ? dateA - dateB : dateB - dateA;
      });
    }
  },
  methods: {
    sortByDate() {
      this.isSorted = true;
      this.sortAsc = !this.sortAsc;
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
.recipe-history-page {
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

.recipe-history-table {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.recipe-history-table table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.recipe-history-table th,
.recipe-history-table td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.recipe-history-table th {
  background: #fff;
  font-weight: bold;
}

</style>
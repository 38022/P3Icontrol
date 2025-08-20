<template>
  <div class="tag-history-page">
    <div class="header">
      <h2 class="title">タグ更新履歴</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/tag">タグ操作</router-link>
      <span> &gt;</span>
      <span>タグ更新履歴</span>
    </nav>
    <div class="tag-history-content">
      <div class="display-tag">
        <!-- ★タグ操作ページからとってくる -->
        <h3>タグ名：l1_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv</h3>
      </div>
      <div class="tag-history-table">
        <table>
          <thead>
            <tr>
              <th @click="sortByDate" style="cursor:pointer">
                最終編集日時
                <span v-if="sortAsc">▲</span>
                <span v-else>▼</span>
              </th>
              <th>カメラ名</th>
              <th>レシピID</th>
              <th>担当者</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in sortedHistoryList" :key="i">
              <td>{{ row.editDate }}</td>
              <td>{{ row.camera }}</td>
              <td>{{ row.recipeId }}</td>
              <td>{{ row.editor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TagHistory',
  data() {
    return {
      sortAsc: false,
      isSorted: false,
      tagHistoryList: [
        {
          editDate: '2025/07/22 12:00',
          camera: 'CAM4',
          recipeId: 'recipe_id3',
          editor: '***'
        },
        {
          editDate: '2025/07/02 12:00',
          camera: 'CAM4',
          recipeId: 'recipe_id6',
          editor: '***'
        },
        {
          editDate: '2025/07/12 12:00',
          camera: 'CAM4',
          recipeId: 'recipe_id6',
          editor: '***'
        }
      ]
    }
  },
  computed: {
    sortedHistoryList() {
      if (!this.isSorted) {
        // ソートされていない場合は元の順序
        return this.tagHistoryList;
      }
      // ソート時のみ並び替え
      return [...this.tagHistoryList].sort((a, b) => {
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
.tag-history-page {
  min-height: 100vh;
  background: #f7f7f7;
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

.tag-history-content {
  display: block !important;
}

.display-tag {
  margin-left: 40px;
  margin-right: 40px;
  width: auto;
  text-align: left;
}

.tag-history-table {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}

.tag-history-table table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.tag-history-table th,
.tag-history-table td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.tag-history-table th {
  background: #fff;
  font-weight: bold;
}
</style>
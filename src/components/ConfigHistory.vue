<template>
  <div class="config-history-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">処理構成の編集履歴</h2>
        <span class="page-desc">処理構成の編集履歴の閲覧</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/configPage">処理構成</router-link>
      <span> &gt;</span>
      <span>処理構成の編集履歴</span>
    </nav>
    <div class="history-table">
      <table>
        <thead>
          <tr>
            <th>項番</th>
            <th>最終編集日時</th>
            <th>カメラ名</th>
            <th>レシピID</th>
            <th>タグ名</th>
            <th>担当者</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in historyList" :key="i">
            <td>{{ row.no }}</td>
            <td>{{ row.date }}</td>
            <td>{{ row.camera }}</td>
            <td>{{ row.recipeId }}</td>
            <td>{{ row.tag }}</td>
            <td>{{ row.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfigHistory',
  data() {
    return {
      historyList: [
        {
          no: '1',
          date: '2025/08/01 12:00',
          camera: '2SLシューターカメラDS',
          recipeId: 'recipe_id3',
          tag: 'l1_b_p3_005_cam001_2SLシューターカメラDS_framesub_DS_pv',
          name: '***'
        },
        {
          no: '2',
          date: '2025/07/31 12:00',
          camera: '2SL配管カメラDS',
          recipeId: 'recipe_id4',
          tag: 'l1_b_p3_005_cam002_2SL配管カメラDS_framesub_DS_pv',
          name: '***'
        },
        {
          no: '3',
          date: '2025/07/21 12:00',
          camera: '2SL配管カメラOS',
          recipeId: 'recipe_id5',
          tag: 'l1_b_p3_005_cam003_2SL配管カメラOS_framesub_OS_pv',
          name: '***'
        },
        {
          no: '4',
          date: '2025/07/20 12:00',
          camera: 'SL3配管DS',
          recipeId: 'recipe_id6',
          tag: 'l1_b_p3_005_cam004_SL3配管DS_framesub_DS_pv',
          name: '***'
        },
        // 必要に応じて追加
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
.config-history-page {
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
  font-size: 1.1rem;
  color: #555;
  white-space: nowrap;
}

.history-table {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.history-table table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.history-table th,
.history-table td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.history-table th {
  background: #fff;
  font-weight: bold;
}
</style>
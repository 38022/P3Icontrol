<template>
  <div class="setting-history-page">
    <div class="header">
      <h2 class="title">処理構成の編集履歴</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/setting">システム設定</router-link>
      <span> &gt;</span>
      <span>処理構成の処理構成の編集履歴</span>
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
  name: 'SettingHistory',
  data() {
    return {
      historyList: [
        {
          no: '1',
          date: '2025/08/01 12:00',
          camera: 'CAM1',
          recipeId: 'recipe_id3',
          tag: 'l1_b_p3_005_cam001_テンター出ツレ_framesub_OS_pv',
          name: '***'
        },
        {
          no: '2',
          date: '2025/07/31 12:00',
          camera: 'CAM2',
          recipeId: 'recipe_id4',
          tag: 'l1_b_p3_005_cam002_テンター出ツレ_framesub_OS_pv',
          name: '***'
        },
        {
          no: '3',
          date: '2025/07/21 12:00',
          camera: 'CAM3',
          recipeId: 'recipe_id5',
          tag: 'l1_b_p3_005_cam003_テンター出ツレ_framesub_OS_pv',
          name: '***'
        },
        {
          no: '4',
          date: '2025/07/20 12:00',
          camera: 'CAM4',
          recipeId: 'recipe_id6',
          tag: 'l1_b_p3_005_cam004_テンター出ツレ_framesub_OS_pv',
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
.setting-history-page {
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
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 18px 0 18px 24px;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: left;
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
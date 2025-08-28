<template>
  <div class="system-log-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">システムログ</h2>
        <span class="page-desc">エラー発生履歴の閲覧</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>システムログ</span>
    </nav>
    <div class="log-table">
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>カメラ名</th>
            <th>レシピID</th>
            <th>タグ名</th>
            <th>エラー</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, i) in logList" :key="i">
            <td>{{ log.date }}</td>
            <td>{{ log.camera }}</td>
            <td>{{ log.recipeId }}</td>
            <td>{{ log.tag }}</td>
            <td class="error-cell">{{ log.error }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemLog',
  data() {
    return {
      logList: [
        {
          date: '2025/08/01 12:00',
          camera: 'CAM1',
          recipeId: 'recipe_id3',
          tag: 'l1_b_p3_005_cam001_テンター出ツレ_framesub_OS_pv',
          error: '-1'
        },
        {
          date: '2025/08/01 13:00',
          camera: 'CAM4',
          recipeId: 'recipe_id6',
          tag: 'l1_b_p3_005_cam004_テンター入り_framesub_OS_pv',
          error: '-12'
        }
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

.system-log-page {
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

.log-table {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.log-table table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.log-table th,
.log-table td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.log-table th {
  background: #fff;
  font-weight: bold;
}

.log-table td.error-cell {
  color: #d32f2f; /* エラー列の文字を赤に */
}
</style>
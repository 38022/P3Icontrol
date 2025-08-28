<template>
  <div class="approval-list-page">
    <div class="header">
      <h2 class="title">対応ステータス</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>対応ステータス</span>
    </nav>
    <div class="approval-table">
      <table>
        <thead>
          <tr>
            <th>項番</th>
            <th>操作</th>
            <th>カメラ名</th>
            <th>レシピID</th>
            <th>タグ名</th>
            <th>申請日時</th>
            <th>申請者</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in approvalList" :key="i">
            <td>{{ row.no }}</td>
            <td>{{ row.action }}</td>
            <td>{{ row.camera }}</td>
            <td>{{ row.recipeId }}</td>
            <td>{{ row.tag }}</td>
            <td>{{ row.date }}</td>
            <td>{{ row.name }}</td>
            <td>
              <input
                type="checkbox"
                :checked="row.status === '済'"
                @change="row.status = $event.target.checked ? '済' : '未'"
              />
              <span>{{ row.status === '済' ? '済' : '未' }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApprovalList',
  data() {
    return {
      approvalList: [
        {
          no: '1',
          action: '変更',
          camera: 'CAM1',
          recipeId: 'recipe_id3',
          tag: 'l1_b_p3_005_cam001_テンター出ツレ_framesub_OS_pv',
          date: '2025/08/01 12:00',
          name: '***',
          status: '未'
        },
        {
          no: '2',
          action: '追加',
          camera: 'CAM2',
          recipeId: 'recipe_id4',
          tag: 'l1_b_p3_005_cam002_テンター出ツレ_framesub_OS_pv',
          date: '2025/07/31 12:00',
          name: '***',
          status: '未'
        },
        {
          no: '3',
          action: '追加',
          camera: 'CAM3',
          recipeId: 'recipe_id5',
          tag: 'l1_b_p3_005_cam003_テンター出ツレ_framesub_OS_pv',
          date: '2025/07/21 12:00',
          name: '***',
          status: '却下'
        },
        {
          no: '4',
          action: '削除',
          camera: 'CAM4',
          recipeId: 'recipe_id6',
          tag: 'l1_b_p3_005_cam004_テンター出ツレ_framesub_OS_pv',
          date: '2025/07/20 12:00',
          name: '***',
          status: '承認'
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
.approval-list-page {
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

.approval-table {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.approval-table table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.approval-table th,
.approval-table td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.approval-table th {
  background: #fff;
  font-weight: bold;
}

.rejected-status {
  color: #d32f2f;
  background: #ffeaea !important;
}

</style>
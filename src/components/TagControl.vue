<template>
  <div class="tag-control-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">タグ操作</h2>
        <span class="page-desc">タグの管理</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>タグ操作</span>
    </nav>   
    <div class="tag-log">
      <table>
        <thead>
          <tr>
            <th>項番</th>
            <th>タグ名</th>
            <th>カメラ名</th>
            <th>最終編集日時</th>
            <th>作成日時</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in tagList" :key="i">
            <td>{{ row.no }}</td>
            <td>{{ row.tag }}</td>
            <td>{{ row.camera }}</td>
            <td>{{ row.editDate }}</td>
            <td>{{ row.createDate }}</td>
            <td>
              <!-- cameraがnullなら有効、recipeIdがnullなら無効 -->
              <router-link
                v-if="row.camera === null"
                to="/tag/delete"
              >削除</router-link>
              <span v-else style="color: #ccc; pointer-events: none; cursor: default;">削除</span>
            </td>
            <td>
              <router-link to="/tag/history">編集履歴</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'TagControl',
  data() {
    return {
      tagList: [
        {
          no: '1',
          tag: 'l5_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv',
          camera: 'CAM1',
          editDate: '2025/08/01 12:00',
          createDate: '2025/07/22 12:00'
        },
        {
          no: '2',
          tag: 'l5_b_p3 _005 _cam001_テンター入り_framesub_OS_pv',
          camera: 'CAM2',
          editDate: '2025/08/01 12:00',
          createDate: '2025/07/22 12:00'
        },
        {
          no: '3',
          tag: 'l5_b_p3 _006 _cam001_テンター入り_framesub_OS_pv',
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
.tag-control-page {
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

.tag-log {
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.tag-log table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 32px;
}

.tag-log th,
.tag-log td {
  border: 1px solid #888;
  padding: 8px 12px;
  text-align: center;
  background: #fff; /* セルの背景を白に */
  font-size: 1rem;
}

.tag-log th {
  background: #fff;
  font-weight: bold;
}

.tag-log a,
.tag-log a:visited {
  color: #1976d2;
  text-decoration: underline;
}
.tag-log a:hover {
  text-decoration: underline;
  color: #1256a0;
}
</style>
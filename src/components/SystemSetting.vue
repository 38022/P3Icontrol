<template>
  <h2>システム設定</h2>
  <div class="system-log">
    <table>
      <thead>
        <tr>
          <th>有効</th>
          <th>項番</th>
          <th>出力タグ名</th>
          <th>レシピID</th>
          <th>カメラ名</th>
          <th>最終編集日時</th>
          <th>作成日時</th>
          <th>ステータス</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in tableData" :key="i">
          <td>{{ row.enabled }}</td>
          <td>{{ row.no }}</td>
          <td>{{ row.tag }}</td>
          <td>{{ row.recipeId }}</td>
          <td>{{ row.camera }}</td>
          <td>{{ row.updatedAt }}</td>
          <td>{{ row.createdAt }}</td>
          <td>{{ row.status }}</td>
          <td>
            <router-link :to="`/edit/${row.no}`">編集</router-link>
          </td>
          <td>
            <router-link :to="`/delete/${row.no}`">削除</router-link>
          </td>
          <td>
            <router-link :to="`/history/${row.no}`">編集履歴</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/settingAdd">
      <button>追加</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SystemSetting',
  data() {
    return {
      tableData: [
        {
          enabled: 'Y',
          no: 1,
          tag: 'l1_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv',
          recipeId: 'recipe_id1',
          camera: 'CAM1',
          updatedAt: '2025/7/31 0:00',
          createdAt: '2025/7/30 12:00',
          status: '正常'
        },
        {
          enabled: 'N',
          no: 2,
          tag: 'l1_b_p3 _005 _cam001_テンター入り_framesub_OS_pv',
          recipeId: 'recipe_id2',
          camera: 'CAM2',
          updatedAt: '2025/8/1 0:00',
          createdAt: '2025/7/31 12:00',
          status: '無効'
        },
        {
          enabled: 'Y',
          no: 3,
          tag: 'l1_b_p3 _005 _cam001_遮断室DS_framesub_OS_pv',
          recipeId: 'recipe_id3',
          camera: 'CAM3',
          updatedAt: '2025/8/1 0:00',
          createdAt: '2025/7/31 12:00',
          status: 'エラー'
        }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  position: relative;
  text-align: left;
  margin-left: 30px;
  margin-top: -30px;
  padding-bottom: 4px;
}
h2::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 3px;
  background: #FFD700;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #888;
  padding: 8px;
  text-align: center;
}
</style>
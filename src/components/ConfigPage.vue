<template>
  <div class="system-setting-page">
    <div class="header">
      <div class="title-row">
        <h2 class="title">処理構成</h2>
        <span class="page-desc">現在の処理構成の一覧</span>
      </div>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>処理構成</span>
    </nav>
    <div class="config-table">
      <table>
        <thead>
          <tr>
            <th>有効</th>
            <th>項番</th>
            <th>カメラ名</th>
            <th>レシピID</th>
            <th>出力タグ名</th>
            <th>最終編集日時</th>
            <th>作成日時</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in tableDataMap" :key="i">
            <!-- <td :class="{ disabled: row.enabled === '無効' }">{{ row.enabled }}</td> -->
            <td>
              <label class="toggle-switch">
                <input
                  type="checkbox"
                  :chacked="row.enabled === '有効'"
                  @change="row.enabled = $event.target.checked ? '有効' : '無効'"
                />
                <span class="slider"></span>
              </label>
            </td>
            <td>{{ row.no }}</td>
            <td>
              <router-link
                :to="{ name: 'CameraInfo', params: { no: row.no, camera: encodeURIComponent(row.camera), tag: encodeURIComponent(row.tag), recipeId: encodeURIComponent(row.recipeId) } }"
              >
                {{ row.camera }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'RecipeInfo', params: { no: row.no, recipeId: encodeURIComponent(row.recipeId), tag: encodeURIComponent(row.tag) } }"
              >
                {{ row.recipeId }}
              </router-link>
            </td>
            <td>
              <template v-if="Array.isArray(row.tag)">
                <div v-for="(t, idx) in row.tag" :key="idx">
                  <router-link
                    :to="{ name: 'TagInfo', params: { no: row.no, camera: encodeURIComponent(row.camera), tag: encodeURIComponent(row.tag), recipeId: encodeURIComponent(row.recipeId) } }"
                  >
                    {{ t }}
                  </router-link>
                </div>
              </template>
              <template v-else>
                <router-link
                  :to="{ name: 'TagInfo', params: { no: row.no, camera: encodeURIComponent(row.camera), tag: encodeURIComponent(row.tag), recipeId: encodeURIComponent(row.recipeId) } }"
                >
                  {{ row.tag }}
                </router-link>
              </template>
            </td>
            <td>{{ row.updatedAt }}</td>
            <td>{{ row.createdAt }}</td>
            <td>{{ row.status }}</td>
            <td>
              <router-link
              :to="{ name: 'SettingEdit',
              params: { no: row.no,
              camera: encodeURIComponent(row.camera),
              tag: encodeURIComponent(row.tag),
              recipeId: encodeURIComponent(row.recipeId)
              } }">編集</router-link>
            </td>
            <td>
              <router-link :to="{ name: 'SettingDelete',
              params: { no: row.no,
              camera: encodeURIComponent(row.camera),
              tag: encodeURIComponent(row.tag),
              recipeId: encodeURIComponent(row.recipeId)
              } }">削除</router-link>
            </td>
            <td>
              <router-link to="/settingHistory">編集履歴</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/settingAdd">
        <button>追加</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfigPage',
  data() {
    return {
      tableDataMap: [
          {
            enabled: '有効',
            no: 1,
            tag: 'l5_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv',
            recipeId: 'recipe_id1',
            camera: '2SLシューターカメラDS',
            updatedAt: '2025/7/31 0:00',
            createdAt: '2025/7/30 12:00',
            status: '正常'
          },
          {
            enabled: '無効',
            no: 2,
            tag: [
              'l5_b_p3 _005 _cam001_テンター入り_framesub_OS_pv'
            ],
            recipeId: 'recipe_id2',
            camera: '2SL配管カメラDS',
            updatedAt: '2025/8/1 0:00',
            createdAt: '2025/7/31 12:00',
            status: '無効'
          },
          {
            enabled: '有効',
            no: 3,
            tag: 'l5_b_p3 _005 _cam001_遮断室DS_framesub_OS_pv',
            recipeId: 'recipe_id3',
            camera: '2SL配管カメラOS',
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
.system-setting-page {
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

button {
  padding: 4px 10px;
  font-size: 1rem;
  cursor: pointer;
}

.config-table {
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
}

.config-table a,
.config-table a:visited {
  color: #1976d2;
  text-decoration: underline;
}
.config-table a:hover {
  text-decoration: underline;
  color: #1256a0;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #888;
  padding: 8px;
  text-align: center;
  background: #fff;
  font-size: 0.9rem;
}

.disabled {
  color: #aaa;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 22px;
  vertical-align: middle;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  border-radius: 22px;
  transition: .3s;
}

.toggle-switch .slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: .3s;
}

.toggle-switch input:checked + .slider {
  background-color: #4caf50;
}

.toggle-switch input:checked + .slider:before {
  transform: translateX(16px);
}
</style>
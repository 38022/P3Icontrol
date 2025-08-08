<template>
  <div class="system-setting-page">
    <div class="header">
      <h2 class="title">処理構成</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <span>処理構成</span>
    </nav>
    <div class="select-area">
      <label class="select-label" for="factor-select">工場を選択</label>
      <div class="select-row">
        <select id="factory-select" v-model="selectedFactory">
          <option v-for="factory in factories" :key="factory" :value="factory">{{ factory }}</option>
        </select>
        <button @click="onFactoryOk">OK</button>
        <!-- 工場を選択しOKボタンをクリックしたら各工場のテーブルが表示される -->
      </div>
    </div>
    <div class="system-log" v-if="showLog">
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
          <tr v-for="(row, i) in currentTableData" :key="i">
            <td :class="{ disabled: row.enabled === '無効' }">{{ row.enabled }}</td>
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
              tag: encodeURIComponent(row.tag)
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
  name: 'SystemSetting',
  data() {
    return {
      selectedFactory: 'L1',
      displayFactory: null,
      factories: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7'],
      showLog: false,
      tableDataMap: {
        L1: [
          {
            enabled: '有効',
            no: 1,
            tag: 'l1_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv',
            recipeId: 'recipe_id1',
            camera: 'CAM1',
            updatedAt: '2025/7/31 0:00',
            createdAt: '2025/7/30 12:00',
            status: '正常'
          },
          {
            enabled: '無効',
            no: 2,
            tag: [
              'l1_b_p3 _005 _cam001_テンター入り_framesub_OS_pv',
              'l1_b_p3 _006 _cam001_テンター入り_framesub_OS_pv'
            ],
            recipeId: 'recipe_id2',
            camera: 'CAM2',
            updatedAt: '2025/8/1 0:00',
            createdAt: '2025/7/31 12:00',
            status: '無効'
          },
          {
            enabled: '有効',
            no: 3,
            tag: 'l1_b_p3 _005 _cam001_遮断室DS_framesub_OS_pv',
            recipeId: 'recipe_id3',
            camera: 'CAM3',
            updatedAt: '2025/8/1 0:00',
            createdAt: '2025/7/31 12:00',
            status: 'エラー'
          }
        ],
        L2: [
          {
            enabled: '有効',
            no: 1,
            tag: 'l2_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv',
            recipeId: 'recipe_id1',
            camera: 'CAM1',
            updatedAt: '2025/7/31 0:00',
            createdAt: '2025/7/30 12:00',
            status: '正常'
          },
          {
            enabled: '無効',
            no: 2,
            tag: 'l2_b_p3 _005 _cam001_テンター入り_framesub_OS_pv',
            recipeId: 'recipe_id2',
            camera: 'CAM2',
            updatedAt: '2025/8/1 0:00',
            createdAt: '2025/7/31 12:00',
            status: '無効'
          },
          {
            enabled: '有効',
            no: 3,
            tag: 'l2_b_p3 _005 _cam001_遮断室DS_framesub_OS_pv',
            recipeId: 'recipe_id3',
            camera: 'CAM3',
            updatedAt: '2025/8/1 0:00',
            createdAt: '2025/7/31 12:00',
            status: 'エラー'
          }
        ],
        L3: [],
        L4: [],
        L5: [],
        L6: [],
        L7: []
      }
    }
  },
  computed: {
    currentTableData() {
      return this.displayFactory
        ? this.tableDataMap[this.displayFactory] || []
        : [];
    }
  },
  methods: {
    onFactoryOk() {
      this.displayFactory = this.selectedFactory;
      this.showLog = true;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  text-align: left;
}

.select-area {
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

.system-log {
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
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
}

.disabled {
  color: #aaa;
}
</style>
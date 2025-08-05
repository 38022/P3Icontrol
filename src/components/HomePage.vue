<template>
<div class="home-page">
  <div class="header">
    <h1 class="title">P3I管理コンソール</h1>
  </div>
  <div class="content-area">
    <div class="sidebar">
      <div class="menu">
        <router-link to="/setting" class="menu-item-link">
          <button class="menu-item">
            <img src="@/assets/setting_icon.png" alt="システム設定" />
            <span>システム設定</span>
          </button>
        </router-link>
        <router-link to="/log" class="menu-item-link">
          <button class="menu-item">
            <img src="@/assets/log_icon.png" alt="システムログ" />
            <span>システムログ</span>
          </button>
        </router-link>
        <router-link to="/recipeDB" class="menu-item-link">
          <button class="menu-item">
            <img src="@/assets/recipe_icon.png" alt="レシピDB操作" />
            <span>レシピDB操作</span>
          </button>
        </router-link>
        <router-link to="/tag" class="menu-item-link">
          <button class="menu-item">
            <img src="@/assets/tag_icon.png" alt="タグ操作" />
            <span>タグ操作</span>
          </button>
        </router-link>
        <router-link to="/approval" class="menu-item-link">
          <button class="menu-item">
            <img src="@/assets/list_icon.png" alt="承認待ち" />
            <span>承認待ち</span>
          </button>
        </router-link>
      </div>
    </div>
    <div class="main-content">
      <h2 class="status-title">P3稼働状況</h2>
      <div class="status-table-area">
        <div class="status-table-column">
          <div class="status-table-block" v-for="line in lines.slice(0, 3)" :key="line.name">
            <table class="status-table">
              <tbody>
                <tr v-for="(cam, i) in line.cameras" :key="cam.name">
                  <td v-if="i === 0" class="line-label" :rowspan="line.cameras.length">{{ line.name }}</td>
                  <td>{{ cam.name }}</td>
                  <td :class="{ error: cam.status === 'エラー' }">{{ cam.status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="status-table-column">
          <div class="status-table-block" v-for="line in lines.slice(3, 6)" :key="line.name">
            <table class="status-table">
              <tbody>
                <tr v-for="(cam, i) in line.cameras" :key="cam.name">
                  <td v-if="i === 0" class="line-label" :rowspan="line.cameras.length">{{ line.name }}</td>
                  <td>{{ cam.name }}</td>
                  <td :class="{ error: cam.status === 'エラー' }">{{ cam.status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="status-table-column">
          <div class="status-table-block" v-for="line in lines.slice(6)" :key="line.name">
            <table class="status-table">
              <tbody>
                <tr v-for="(cam, i) in line.cameras" :key="cam.name">
                  <td v-if="i === 0" class="line-label" :rowspan="line.cameras.length">{{ line.name }}</td>
                  <td>{{ cam.name }}</td>
                  <td :class="{ error: cam.status === 'エラー' }">{{ cam.status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      lines: [
        {
          name: 'L1',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: 'CAM2', status: '正常' },
            { name: 'CAM3', status: '正常' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L2',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: 'CAM2', status: 'エラー' },
            { name: 'CAM3', status: '無効' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L3',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L4',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: 'CAM2', status: '正常' },
            { name: 'CAM3', status: '正常' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L5',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: 'CAM2', status: 'エラー' },
            { name: 'CAM3', status: '無効' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L6',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L7',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: 'CAM2', status: '正常' },
            { name: 'CAM3', status: '正常' },
            { name: '・・・', status: '' }
          ]
        },
        {
          name: 'L8',
          cameras: [
            { name: 'CAM1', status: '正常' },
            { name: 'CAM2', status: 'エラー' },
            { name: 'CAM3', status: '無効' },
            { name: '・・・', status: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff86a;
  color: #222;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 18px 0 18px 24px;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  z-index: 100;
  text-align: left;
}

:global(html), :global(body) {
  height: 100%;
  background: #f7f7f7;
  margin: 0;
  padding: 0;
}

.home-page {
  min-height: 100vh;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.content-area {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: calc(100vh - 64px); /* 追加 */
  box-sizing: border-box;
}

.sidebar {
  margin-top: 64px;
  margin-left: 60px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
}

.menu-item-link {
  text-decoration: none;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 140px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
  gap: 12px;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
}
.menu-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  background: #fffbe0;
}
.menu-item img {
  width: 48px;
  height: 48px;
}

.main-content {
  margin-left: 80px;
  margin-top: 64px;
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f7f7f7;
  box-sizing: border-box;
}

.status-table-area {
  display: flex;
  flex-direction: row; /* 横並び */
  gap: 48px;
  margin-top: 8px;
}
.status-table-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.status-table-block {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
  width: 260px;
}
.status-table {
  border-collapse: collapse;
  background: #fff;
  min-width: 0;
  width: 100%;
  table-layout: fixed;
}
.status-table td {
  border: 2px solid #222;
  padding: 0;
  text-align: center;
  font-size: 1rem;
  min-width: 0;
  width: 70px;
  height: 36px;
  word-break: break-all;
}
.status-table .line-label {
  font-weight: bold;
  background: #fff;
  min-width: 40px;
  width: 40px;
}
.status-table .error {
  background: #f7bcbc;
  color: #222;
}
</style>
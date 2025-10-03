<template>
<div class="home-page">
  <div class="header">
    <div class="title-row">
      <h1 class="title">P3I管理コンソール</h1>
      <span class="factory-label">【L5】</span>
    </div>
  </div>
  <div class="content-area">
    <div class="sidebar">
      <div class="menu">
        <router-link to="/configPage" class="menu-item-link">
          <button class="menu-item">
            <img src="@/assets/setting_icon.png" alt="処理構成" />
            <span>処理構成</span>
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
            <img src="@/assets/list_icon.png" alt="対応待ち" />
            <span>対応ステータス</span>
          </button>
        </router-link>
        <a href="http://10.105.35.74:23345/" target="_blank" rel="noopener" class="menu-item-link">
          <button class="menu-item editor-active">
            <img src="@/assets/editor_icon.png" alt="レシピエディタ" />
            <span>レシピエディタ</span>
          </button>
        </a>
      </div>
    </div>
    <div class="main-content">
      <h2 class="status-title">P3稼働状況</h2>
      <div class="status-table-area">
        <div class="status-table-block">
          <table class="status-table">
            <tbody>
              <tr v-for="(cam, i) in lines[0].cameras" :key="cam.name">
                <td v-if="i === 0" class="line-label" :rowspan="lines[0].cameras.length">{{ lines[0].name }}</td>
                <td>{{ cam.name }}</td>
                <td :class="{ error: cam.status === 'エラー' }">{{ cam.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="factory-switch">
        <span>他工場のコンソールを見る場合はこちら</span>
        <div class="factory-buttons">
          <button v-for="f in ['L1', 'L2', 'L3', 'L4', 'L6', 'L7']" :key="f" class="factory-btn">⇒{{ f }}</button>
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
          name: 'L5',
          cameras: [
            { name: '2SLシューターカメラDS', status: '正常' },
            { name: '2SL配管カメラDS', status: 'エラー' },
            { name: '2SL配管カメラOS', status: '無効' },
            { name: '3SL配管DS', status: '正常' },
            { name: '3SL配管OS', status: '正常' },
            { name: '・・・', status: '' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
:global(html), :global(body) {
  height: 100%;
  background: #f7f7f7;
  margin: 0;
  padding: 0;
}

.header {
  width: 100vw;
  background: #fff86a;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 0;
  margin: 0;
}

.title-row {
  display: flex;
  align-items: center;
  padding: 18px 0 18px 24px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin: 0;
}

.factory-label {
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: 16px;
  color: #222;
}

.home-page {
  /* padding-top: 64px; .headerの高さに合わせて調整 */
  background: #f7f7f7;
  min-height: 100vh;
}

.content-area {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 0;
  box-sizing: border-box;
}

.sidebar {
  margin-top: 40px;
  margin-left: 60px;
  /* height: auto; */
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
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

.menu-item.editor-active {
  background: #e6faff;
}

.menu-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  background: #fffbe0;
}

.menu-item.editor-active:hover {
  background: #b2ebf2;
}

.menu-item img {
  width: 48px;
  height: 48px;
}

.main-content {
  margin-left: 80px;
  margin-top: 0;
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f7f7f7;
  box-sizing: border-box;
}

.status-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
}

.status-table-area {
  display: flex;
  flex-direction: row;
  gap: 48px;
  margin-top: 8px;
  justify-content: flex-start;
  width: 100%;
}

.status-table-block {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
  width: 500px;
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

.factory-switch {
  margin-top: 120px;
  font-size: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.factory-buttons {
  display: flex;
  gap: 12px;
  margin-top: 8px;
  justify-content: flex-start;
}

.factory-btn {
  background: #fff;
  border: 2px solid #bbb;
  border-radius: 8px;
  padding: 2px 12px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}

.factory-btn:hover {
  background: #f0f0f0;
}
</style>
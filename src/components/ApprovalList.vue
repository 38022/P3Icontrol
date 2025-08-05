<template>
  <div class="approval-list-container">
    <div class="sidebar">
      <h1 class="title">P3I管理コンソール</h1>
      <div class="menu">
        <div class="menu-item">
          <img src="@/assets/setting_icon.png" alt="システム設定" />
          <span>システム設定</span>
        </div>
        <div class="menu-item">
          <img src="@/assets/log_icon.png" alt="システムログ" />
          <span>システムログ</span>
        </div>
        <div class="menu-item">
          <img src="@/assets/recipe_icon.png" alt="レシピDB操作" />
          <span>レシピDB操作</span>
        </div>
        <div class="menu-item">
          <img src="@/assets/tag_icon.png" alt="タグ操作" />
          <span>タグ操作</span>
        </div>
        <div class="menu-item">
          <img src="@/assets/list_icon.png" alt="承認待ち" />
          <span>承認待ち</span>
        </div>
      </div>
    </div>
    <div class="main-content">
      <h2 class="status-title">P3稼働状況</h2>
      <table class="status-table">
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>L1</td>
          <td>CAM1</td>
          <td>正常</td>
        </tr>
        <tr>
          <td></td>
          <td>CAM2</td>
          <td>正常</td>
        </tr>
        <tr>
          <td></td>
          <td>CAM3</td>
          <td>正常</td>
        </tr>
        <tr>
          <td></td>
          <td>・・・</td>
          <td></td>
        </tr>
        <tr>
          <td>L2</td>
          <td>CAM1</td>
          <td>無効</td>
        </tr>
        <tr>
          <td></td>
          <td>CAM2</td>
          <td class="error">エラー</td>
        </tr>
        <tr>
          <td></td>
          <td>・・・</td>
          <td></td>
        </tr>
        <tr>
          <td>L3</td>
          <td>CAM1</td>
          <td>正常</td>
        </tr>
        <tr>
          <td></td>
          <td>・・・</td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApprovalList'
}
</script>

<style scoped>
.approval-list-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  width: 100vw;
  min-height: 100vh;
  background: #f7f7f7;
  padding-top: 64px;
  height: calc(100vh - 64px);
}

.sidebar {
  margin-top: 0;
  margin-left: 60px;
  height: 100%; /* 追加: 親と同じ高さ */
  display: flex;
  flex-direction: column;
}

.title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;              /* 横幅いっぱい */
  background: #fff86a;
  color: #222;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 18px 0 18px 24px;
  border-radius: 0;           /* 帯なので角丸なし */
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  z-index: 100;
  text-align: left;
}

.menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
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
}

.menu-item img {
  width: 48px;
  height: 48px;
}

.main-content {
  margin-left: 80px;
  margin-top: 0;
  height: 100%; /* 追加: 親と同じ高さ */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.status-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
}

.status-table {
  border-collapse: collapse;
  width: 520px;
  background: #fff;
  text-align: left;
  margin-left: 0;
}

.status-table th,
.status-table td {
  border: 1px solid #222;
  padding: 10px 24px;
  text-align: center;
  font-size: 1.2rem;
}

.status-table .error {
  background: #f7bcbc;
  color: #222;
}
</style>
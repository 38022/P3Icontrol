<template>
  <div class="tag-control-page">
    <div class="header">
      <h2 class="title">タグ操作</h2>
    </div>
    <div class="button-group">
      <button class="menu-item" @click="$router.push('/tag/history')">
        <img src="@/assets/log_icon.png" alt="タグ更新履歴" />
        <span>タグ更新履歴</span>
      </button>
      <button class="menu-item" @click="$router.push('/tag/delete')">
        <img src="@/assets/delete_icon.png" alt="タグ削除" />
        <span>タグ削除</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  text-align: left;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: flex-start;
  margin-left: 60px;
  margin-top: 60px;
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
</style>
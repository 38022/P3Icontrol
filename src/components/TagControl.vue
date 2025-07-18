<template>
  <div class="button-group">
    <button @click="$router.push('/tag/history')">タグ更新履歴</button>
    <button @click="$router.push('/tag/add')">タグ追加</button>
    <button @click="$router.push('/tag/change')">タグ変更</button>
    <button @click="$router.push('/tag/delete')">タグ削除</button>
  </div>

</template>

<style scoped>
.button-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  margin-left: 150px;
  margin-top: 150px;
}
.button-group button {
  width: 150px;
  height: 60px;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(180deg, #fff 0%, #f4f8b4 100%);
  border: 2px solid #f8f433;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: box-shadow 0.2s;
}
.button-group button:hover {
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
  background: linear-gradient(180deg, #f8f8f8 0%, #ffff7c 100%);
}
</style>
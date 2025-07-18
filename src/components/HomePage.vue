<template>
  <div class="button-group">
    <button @click="$router.push('/recipe')">レシピ管理</button>
    <button @click="$router.push('/tag')">タグ管理</button>
    <button @click="$router.push('/setteing')">P3I設定</button>
  </div>
  <div class="p3-status">
    <p>P3稼働状況</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

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
.p3-status p {
  margin-top: -250px;
}
</style>
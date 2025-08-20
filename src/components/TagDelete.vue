<template>
  <div class="tag-delete-page">
    <div class="header">
      <h2 class="title">タグ削除</h2>
    </div>
    <nav class="breadcrumb">
      <router-link to="/">ホーム</router-link>
      <span> &gt;</span>
      <router-link to="/tag">タグ操作</router-link>
      <span> &gt;</span>
      <span>タグ削除</span>
    </nav>
    <div class="display-tag">
      <!-- ★タグ操作画面からとってくる -->
      <h3>タグ名：l1_b_p3 _005 _cam001_テンター出ツレ_framesub_OS_pv</h3>
    </div>
    <button @click="onDelete">削除</button>
  </div>
</template>

<script>
export default {
  name: 'TagDelete',
  methods: {
    onDelete() {
      alert('本当に削除しますか？');
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
.tag-delete-page {
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
.display-tag {
  margin-left: 50px;
  margin-top: 50px;
  text-align: left;
}

button {
  font-size: 1rem;
  cursor: pointer;
  width: 80px;
  height: 30px;
  margin-left: 450px;
}
</style>
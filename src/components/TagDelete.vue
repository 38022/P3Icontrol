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
    <div class="select-tag">
      <p>削除するタグを選択</p>
      <select v-model="selectedTag">
        <option v-for="tags in tagsList" :key="tags" :value="tags">
          {{ tags }}
        </option>
      </select>
    </div>
    <button @click="onDelete">削除</button>
  </div>
</template>

<script>
export default {
  name: 'TagDelete',
  data() {
    return {
      tagsList: ['L4_b_p3_001_004_テンター出ツレ_Th250_DS_PV'],
      selectedTag: ''
    }
  },
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
.select-tag {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;
  gap: 10px;
}
.select-tag p {
  text-align: left;
  margin: 0;
}
.select-tag select {
  width: 330px;
}

button {
  font-size: 1rem;
  cursor: pointer;
  width: 80px;
  height: 30px;
  margin-left: 450px;
}
</style>
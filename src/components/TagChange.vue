<template>
  <div class="tag-change">
    <h2>タグ変更</h2>
    <div class="select-tag">
      <p>変更するタグを選択</p>
      <select v-model="selectedTag">
        <option v-for="tags in tagsList" :key="tags" :value="tags">
          {{ tags }}
        </option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TagChange',
  data() {
    return {
      tagsList: ['L4_b_p3_001_004_テンター出ツレ_Th250_DS_PV'],
      selectedTag: ''
    }
  }
}
</script>

<style scoped>
h2 {
  position: relative;
  text-align: left;
  margin-left: 30px;
  margin-top: -30px;
  padding-bottom: 4px;
}
h2::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 3px;
  background: #FFD700;
}
.select-tag {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  gap: 10px;
}
.select-tag p {
  text-align: left;
  margin: 0;
}
.select-tag select {
  width: 330px;
}
</style>
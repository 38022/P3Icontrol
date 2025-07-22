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
    <button @click="showEdit = true" :disabled="!selectedTag">OK</button>
    <!-- OKボタンがクリックされると編集部分が表示される -->
    <!-- 何かしら選択していないとOKボタンは押せない -->
    <div v-if="showEdit" class="edit-tag">
      <div class="edit-factory">
        <label>工場：</label>
        <select v-model="selectedFactory">
          <option v-for="factory in factoryList" :key="factory" :value="factory">
            {{ factory }}
          </option>
        </select>
      </div>
      <div class="edit-zone">
        <label>ゾーン：</label>
        <select v-model="selectedZone">
          <option v-for="zone in zoneList" :key="zone" :value="zone">
            {{ zone }}
          </option>
        </select>
      </div>
      <div class="edit-subject">
        <label>被写体名称：</label>
        <input list="subjects" v-model="selectedSubject" />
        <datalist id="subjects">
          <option v-for="subjects in subjectsList" :key="subjects" :value="subjects">
            {{ subjects }}
          </option>
        </datalist>
      </div>
      <div class="edit-side">
        <label>位置：</label>
        <select v-model="selectedSide">
          <option>DS</option>
          <option>OS</option>
        </select>
      </div>
      <div class="edit-memo">
        <label>メモ：</label>
        <input v-model="memo" type="text" placeholder="必須"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagChange',
  data() {
    return {
      tagsList: ['L4_b_p3_001_004_テンター出ツレ_Th250_DS_PV'],
      selectedTag: '',
      selectedFactory: '',
      factoryList: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'],
      selectedZone: '',
      zoneList: ['a', 'b'],
      selectedSubject: '',
      subjectsList: ['テンター出ツレ', 'テンター入り'],
      selectedSide: '',
      memo: '',
      showEdit: false
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
.edit-tag {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
  margin-top: 60px;
  gap: 10px;
}
</style>
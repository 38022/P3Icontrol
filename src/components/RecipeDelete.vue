<template>
  <div class="recipe-delete">
    <h2>レシピ削除</h2>
    <div class="select-recipe">
      <p>削除するレシピを選択</p>
      <select v-model="selectedRecipe">
        <option v-for="recipes in recipesList" :key="recipes" :value="recipes">
          {{ recipes }}
        </option>
      </select>
    </div>
    <button @click="onDelete">削除</button>
  </div>
</template>

<script>
export default {
  name: 'RecipeDelete',
  data() {
    return {
      recipesList: ['テンター出ツレ'],
      selectedRecipe: ''
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
.select-recipe {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  gap: 10px;
}
.select-recipe p {
  text-align: left;
  margin: 0;
}
.select-recipe select {
  width: 330px;
}
</style>
<template>
  <button @click="$router.push('/recipe')">レシピ管理</button>
  <button @click="$router.push('/tag')">タグ管理</button>
  <button>P3I設定</button>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
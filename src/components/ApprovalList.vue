<template>
  <div class="header">
    <h1 class="title">承認待ち</h1>
  </div>
</template>

<script>
export default {
  name: 'ApprovalList'
}
</script>

<style scoped>
.title {
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

</style>
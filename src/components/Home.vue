<template>
  <div class="home">
		<router-link :to="{ name: 'Search' }">搜索DEMO</router-link>
    <br/>
		<router-link :to="{ name: 'Url' }">地址DEMO</router-link>
    <br/>
		<router-link :to="{ name: 'Upload' }">图片上传DEMO</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style scoped>
</style>

<template>
  <div class="home">
		<router-link :to="{ name: 'Search' }">search demo</router-link>
		<router-link :to="{ name: 'Upload' }">image upload demo</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style scoped>
</style>

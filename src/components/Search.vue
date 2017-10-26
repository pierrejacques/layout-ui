<template lang="html">
  <div class="search">
    <router-link :to="{ name: 'Home' }">回到主页</router-link>
    <h1>输入要搜索的关键词</h1>
    <search-box></search-box>
  </div>
</template>

<script>
import searchBox from '@/common/components/search-box'
export default {
  name: 'search',
  components: {
    searchBox
  }
}
</script>

<style lang="css">
</style>

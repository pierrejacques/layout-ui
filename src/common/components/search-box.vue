<template lang="html">
  <form @submit.prevent="search">
    <input type="text" v-model="keyword" placeholder="在此输入你想搜索的内容">
    <input type="submit" value="搜索">
  </form>
</template>

<script>
export default {
  name: 'searchBox',
  data() {
    return {
      keyword: '',
    }
  },
  created() {
    this.keyword = this.$route.params.q || ''
    // TODO: initial focus
  },
  methods: {
    search() {
      if (this.keyword) {
        this.$router.push({
          name: 'Results',
          params: {
            q: this.keyword
          }
        })
        this.$emit('search')
      } else {
        this.$router.push({
          name: 'Search',
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <form @submit.prevent="search">
    <input type="text" v-model="keyword" placeholder="在此输入你想搜索的内容">
    <button class="submit-btn" @click="search">搜索</button>
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
  },
  methods: {
    search() {
      if (this.keyword) {
        // 更新路由
        this.$router.push({
          name: 'Results',
          params: {
            q: this.keyword
          }
        })
        // 触发search事件
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

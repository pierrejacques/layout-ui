<template lang="html">
  <div class="url">
    <router-link :to="{ name: 'Home' }">回到主页</router-link>
    <h2>输入网站的url以获取该网站的美感评分</h2>
    <form @submit.prevent="submit">
      <input type="text" name="" value="" v-model="url">
      <input type="submit" name="" value="评分">
    </form>
    <h1>{{score}}</h1>
  </div>


</template>

<script>
import api from '@/api'
export default {
  name: 'url',
  data() {
    return {
      url: '',
      score: ''
    }
  },
  methods: {
    submit() {
      if (this.url) {
        api.getScore(this.url)
        .then(
          data => {
            this.score = data.data
          },
          error => {
            console.error(error)
          }
        )
      }
    }
  }
}
</script>

<style lang="css">
</style>

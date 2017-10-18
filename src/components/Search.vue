<template>
  <div class="search">
		<form @submit.prevent="search">
			<input type="text" v-model="keyword" placeholder="在此输入你想搜索的内容">
			<input type="submit" value="搜索">
		</form>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'search',
  data () {
    return {
    	keyword: '',
    }
  },
	methods: {
		search() {
			if (this.keyword) {
				api.getSearch(this.keyword)
				.then(
					data => {
						console.log(data)
					},
					error => {
						throw error
					},
				)
			}
		},
	}
}
</script>

<style scoped>
</style>

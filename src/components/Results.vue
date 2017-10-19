<template>
  <div class="search">
    <search-box @search="search"></search-box>
    <search-result :data = "data"></search-result>
  </div>
</template>

<script>
import api from '@/api'
import searchResult from '@/common/components/search-result'
import searchBox from '@/common/components/search-box'
export default {
  name: 'search',
  components: {
    searchResult,
    searchBox,
  },
  data() {
    return {
    	keyword: '',
      data: [],
    }
  },
  created() {
    this.search()
  },
	methods: {
    search() {
      api.getSearch(this.$route.params.q)
  		.then(
  			data => {
  				this.data = data
  			},
  			error => {
  				throw error
  			},
  		)
    }
	},
}
</script>

<style scoped>
</style>

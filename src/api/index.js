import Vue from 'vue'
import VueResource from 'vue-resource'
import parseJSON from './json-parser.js'

Vue.use(VueResource)

const getSearch = q => ({
  then(success, fail) {
    Vue.http({
			method: 'GET',
			url: 'https://api.cognitive.microsoft.com/bing/v7.0/search',
			data: {
				count: 50,
				q
			},
		})
    .then(response => {
      success(preProcess(response.bodyText))
    }, response => {
      fail(response)
    })
  }
})

const api = {
	getSearch,
}

export default api

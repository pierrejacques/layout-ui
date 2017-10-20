import axios from 'axios'
import Vue from 'vue'
import apikey from './api-key.js'

Vue.prototype.$http = axios
const getSearchApi = (type, params = {}) => {
  const path = 'https://api.cognitive.microsoft.com/bing/v7.0/' + type // 搜索引擎API
  return axios.get(path, {
    headers : { 'Ocp-Apim-Subscription-Key': apikey() },
    params,
	})
}

const getScore = data => {
  const urls = []
  data.forEach(item => {
    urls.push(item.url)
  })
  const path = '/api/urls'
  return axios.get(path, {
    params: { urls }
  })
}

export default {
	getSearch(q) {
    return {
      then(success, fail) {
        getSearchApi('news/search', { q, count: 40 })
        .then(
          data => {
            getScore(data.data.value)
            .then(
              data => {
                success(data)
              },
              error => {
                console.log('evaluating server failed')
                fail()
              }
            )
          },
          error => {
            console.log('fail to reach search engine')
            fail()
          }
        )
      }
    }
  },
  getSuggestion() {

  },
  getScore,
}

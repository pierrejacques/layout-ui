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
  const path = '/api/score'
  return axios.post(path, { urls })
}

export default {
	getSearch(q) {
    return {
      then(success, fail) {
        getSearchApi('news/search', { q, count: 8 })
        .then(
          urlData => {
            const searchData = urlData.data.value
            getScore(searchData)
            .then(
              scoreData => {
                const scores = scoreData.data.scores
                scores.forEach((item, idx) => {
                  searchData[idx].score = item
                })
                searchData.sort((a, b) => {
                  if (a.score > b.score) { return -1 }
                  if (a.score < b.score) { return 1 }
                })
                success(searchData)
              },
              error => {
                console.error('evaluating server failed')
                fail()
              }
            )
          },
          error => {
            console.error('fail to reach search engine')
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

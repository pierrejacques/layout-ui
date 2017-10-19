import Vue from 'vue'
import VueResource from 'vue-resource'
import parseJSON from './json-parser.js'
import apikey from './api-key.js'

Vue.use(VueResource)
const getSearchApi = (
  type,
  params = {},
  preProcess = parseJSON
) => ({
  then(success, fail) {
    const path = 'https://api.cognitive.microsoft.com/bing/v7.0/' + type // 搜索引擎API
    Vue.http({
		  method: 'GET',
			url: path,
      headers : {
        'Ocp-Apim-Subscription-Key': apikey(),
      },
      params,
		})
    .then(
      res => {
        success(preProcess(res.bodyText))
      },
      fail
    )
  }
})

const getScore = data => {
  const urls = []
  data.forEach(item => {
    urls.push(item.url)
  })
  return {
    then(success, fail) {
      const path = 'http://127.0.0.1:5000/urls'
      Vue.http({
        method: 'GET',
        url: path,
        params: { urls }
      }).then(
        res => {
          const scores = parseJSON(res.bodyText)
          console.log(scores)
          success(data.sort())
        },
        fail
      )
    }
  }
}

export default {
	getSearch(q) {
    return {
      then(success, fail) {
        getSearchApi('news/search', { q, count: 40 })
        .then(
          data => {
            getScore(data.value)
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

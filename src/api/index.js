import Vue from 'vue'
import VueResource from 'vue-resource'
import parseJSON from './json-parser.js'

Vue.use(VueResource)
const apikey = () => '6d4bafa419ce456c81699ea848aae22b';
const getBing = (
  type,
  params = {},
  preProcess = parseJSON
) => ({
  then(success, fail) {
    const path = 'https://api.cognitive.microsoft.com/bing/v7.0/' + type
    Vue.http({
		  method: 'GET',
			url: path,
      headers : {
        'Ocp-Apim-Subscription-Key': apikey(),
      },
      params,
		})
    .then(response => {
      success(preProcess(response.bodyText))
    }, response => {
      fail(response)
    })
  }
})

const api = {
	getSearch(q) {
    return getBing(
      'news/search',
      {
        q,
        count: 40,
      }
    );
  },
  getSuggestion() {

  },
}

export default api

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Upload from '@/components/Upload'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
      path: '/search',
      name: 'Search',
      component: Search
    },
		{
      path: '/search/:q',
      name: 'Results',
      component: Results
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})

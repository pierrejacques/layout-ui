<template lang="html">
  <div class="search-result">
    <ul class="search-results">
      <li v-for="item in pageData">
        <a :href="item.url" target="_blank">{{item.name}}</a>
        <span class="score">美感得分：{{item.score}}</span>
        <p>{{item.description}}</p>
      </li>
    </ul>
    <ul class="pagination">
      <li>
        <a @click.prevent="page=1" href="">第一页</a>
      </li>
      <li>
        <a @click.prevent="page=Math.max(1, page-1)" href="">&lt;</a>
      </li>
      <li v-for="item in pageArr" :class="{ active: item == page }">
        <a @click.prevent="page=item" href="">{{item}}</a>
      </li>
      <li>
        <a @click.prevent="page=Math.min(pageArr.length, page+1)" href="">&gt;</a>
      </li>
      <li>
        <a @click.prevent="page=pageArr.length" href="">末页</a>
      </li>
    </ul>
    <p>共有{{data.length}}项</p>
  </div>
</template>

<script>
export default {
  name: 'searchResult',
  props: [
    'data',
  ],
  data() {
    return {
      page: 1,
      pageSize: 10,
    }
  },
  computed: {
    pageArr() {
      this.page = 1 // 更新时回到首页
      const pageNum = Math.ceil(this.data.length/this.pageSize)
      const arr = []
      for (let i = 1; i <= pageNum; i++) {
        arr.push(i)
      }
      return arr
    },
    pageData() {
      return this.data.slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      )
    }
  }
}
</script>

<style lang="css">
  .search-results {
    text-align: left;
  }
  .score {
    color: orangered;
  }
  .pagination li {
    display: inline-block;
    margin: 5px;
  }
  li.active a {
    color: red;
  }
</style>

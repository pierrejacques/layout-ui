<template>
  <div class="home">
    <router-link :to="{ name: 'Upload' }">
      <div class="demo-entrance">
        上传图片
      </div>
    </router-link>
    <router-link :to="{ name: 'Url' }">
      <div class="demo-entrance">
        输入地址
      </div>
    </router-link>
		<router-link :to="{ name: 'Search' }">
		  <div class="demo-entrance">
		    搜索关键词
		  </div>
		</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="less" scoped>
* {
  text-decoration: none;
  color: gray;
}
.home {
  display: flex;
  width: 70vw;
  height: 80vh;
  margin: auto;
  justify-content: space-around;
  align-items: center;
}
.demo-entrance {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #eee;
  line-height: 150px;
  font-size: 1.3em;
  transition: 0.3s ease;
  &:hover {
    color: black;
  }
}
</style>

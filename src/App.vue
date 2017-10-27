<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-box {
  @height: 36px;
  height: @height;
  line-height: @height;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
  padding: 0 10px;
  vertical-align: middle;
  margin: 0;
  border-radius: 5px;
  outline: none;
}
input[type=text] {
  .input-box;
  width: 400px;
  border-color: #ddd;
}
.submit-btn {
  .input-box;
  height: calc(@height + 2px);
  @bg-color: #B9EFD4;
  background: @bg-color;
  border-color: @bg-color;
  cursor: pointer;
}
</style>

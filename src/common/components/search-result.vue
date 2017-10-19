<template lang="html">
  <ul class="search-results">
    <li v-for="item in data">
      <a :href="item.url" target="_blank">{{item.name}}</a>
      <p>{{item.description}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'searchResult',
  props: [
    'data',
  ],
}
</script>

<style lang="css">
.search-results {
  text-align: left;
}
</style>

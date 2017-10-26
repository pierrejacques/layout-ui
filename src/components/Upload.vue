<template lang="html">
  <div class="upload">
    <router-link :to="{ name: 'Home' }">回到主页</router-link>
    <br/>
    <vue-file-upload
      url = "/api/image"
      ref = "vueFileUploader"
      :filters = "filters"
      :events = "cbEvents"
      @onAdd = "onAddItem"
    >
    </vue-file-upload>
    <h1>{{score}}</h1>
  </div>
</template>
<script>
import VueFileUpload from 'vue-file-upload';
export default {
  name: 'upload',
  data(){
    return{
      score: '',
      files:[],
      filters:[
        {
          name:"imageFilter",
          fn(file){
              var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|'.indexOf(type) !== -1;
          }
        }
      ],
      cbEvents:{
        onCompleteUpload: (file, res) => {
          this.score = res;
          this.$refs.vueFileUploader.clearAll()
        }
      },
    }
  },
  methods: {
    onAddItem(files){
        this.files = files;
        const file = this.files[0]
        if (file) {
          this.uploadItem(file)
        }
    },
    uploadItem(file){
      file.upload();
    },
  },
  components: {
    VueFileUpload
  }
}
</script>

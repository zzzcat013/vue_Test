<template>
  <div>
    <h1>This is an my game page</h1>
    {{msg}}
    <game msg="hhhhhhhhhhhh" @ievent = "ievent"></game>

  </div>
</template>

<script>
 import game from '@/components/Gamecomp.vue'

  export  default {
    name: 'zujian',
    components: {
      'game': game
    },

    data(){
      return{
        msg:"Game str!"
      }
    },
    methods:{
      ievent(...data){
        console.log('allData:',data);// data为包含传过来所有数据的数组，第一个元素是对象，第二个元素是字符串
      }
    }

  }
</script>
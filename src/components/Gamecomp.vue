<template>
  <div>
      <h1>{{msg}}</h1> length={{result}}

      <div @click="iclick">消息</div>
      <ol>
          <li v-for="item in games" >{{ item.title }}</li>
      </ol>
  </div>
</template>

<script>
/*    <li v-for="item in games" v-bind:game="item">{{ item.title }}</li>*/
/*games: [
    {title: '斗地主'},
    {title: '打麻雀'},
    {title: 'UNO'}


]*/

    export default {
        name: 'game',
        props:['msg'],//接收传送过来的数据
        computed:{
            result : function () {

                return this.msg.length;
            }
        },
        methods:{
            iclick(){
                let data = {
                    a:'data'
                };
                this.$emit('ievent',data,'lalala');
            }
        },
        data (){
            return {
            //msg: 'test game !',
            games: [
                {title: '斗地主'},
                {title: '打麻雀'},
                {title: 'UNO'}
                ]
        }

        }

    }
</script>


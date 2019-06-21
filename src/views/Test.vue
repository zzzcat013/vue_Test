<template>
    <div class="about">
        <h1>This is an Test page</h1>
        你喜欢的游戏是：<input v-model="text"><br>
        <button v-on:click="btnClick()">警告</button>

        有游戏：{{text}}
        <h3 v-for='str1 in strarr.str' v-if="str1.age<30" >h3值:{{str1.name}}</h3>
    </div>
</template>

<script>

    /* Vue对象实例化 */
    export default {
        data() {

            return{
                text:'',
                strarr:{
                    str:[{name:"abc18",age:18},{name:"jsdh20",age:20},{name:"iutiut30",age:36}
                    ]
                },
                games: [
                    { title: '斗地主' },
                    { title: '打麻雀' },
                    { title: 'UNO' }
                ]
            }
        },
        methods:{
            btnClick: function () {
                alert("你被警告了！");
            }
        }
        }
</script>

<style scoped>
    .about {
        color : red;
        background: aqua;
    }
</style>

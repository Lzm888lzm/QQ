<template>
    <div>
        <div class="top-bg">
            <div class="top_title">
                <h2>私人音乐空间,听我想听的歌</h2>
                <p>登录管理我的音乐,多终端同步</p>
                <a href="javascript:;" @click="add=show=true">立即登录</a>
            </div>
            <Dun v-if="show" @cancel="show=false"></Dun>
        </div>
    </div>
</template>
<script>
import Dun from '../components/Dun'
export default {
    components:{
        Dun,
    },
    mounted() {
        var ul=document.querySelectorAll(".Hae_der_ul>li");
        for(let i=0;i<ul.length;i++){
            ul[i].removeAttribute("class")
        }
        var head=document.querySelector(".Hae_der_ul>li:nth-child(2)").setAttribute("class",'Hea_der_ba');
    },
    data(){
        return{
            show:false
        }
    }
}
</script>
<style scoped>

*{
    padding: 0;
    margin: 0;
}
.top-bg{
    width: 100%;
    background: url("../assets/bg_unlogin.jpg");
    height: 622px;
    z-index: 60;
    position: relative;
}
.top_title{
    position: absolute;
    top: 30%;
    left: 30%;
    height: 200px;
    text-align: center;
    color: #fff;
}
.top_title h2{
 font-size: 52px;
}
.top_title p{
    margin: 30px 0;
    font-size: 26px;
}
.top_title a{
    width: 130px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-decoration: none;
    background: #31c27c;
    padding: 2px 0;
    font-size: 20px;
    color: #fff;
    border-radius: 2px;
}
</style>
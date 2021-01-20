<template>
    <div>
       <div class="top">
           <div class="top_title">
           <ul class="top_ul">
               <li class="top_li" v-for="(item,index) in body" :key="index">
                <a href="javascript:;">{{item}}</a></li>
           </ul>
           <div class="conter">
            <div>
               <p>{{item.title}}</p>
               <img :src="item.img" alt="">
               </div>
           </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        body:["小米","华为","苹果","oppo","vivo"],
        html:[
         {
         title:"我是小米",
        img:require("../assets/homeimg/15.jpg")
        },
      
        ]
        }
  }
 }
</script>
<style scoped>
ul{
    padding: 0;
    margin: 0;
    list-style: none;
}
.top{
    width: 100%;
    height: 1000px;
    
}
.top_title{
    margin: 0 auto;
    width: 1200px;
    display: flex;
   position: relative;
}
.top_ul{
    width: 130px;
    height:500px;
    box-shadow: 0 5px 4px #000;
    margin-right:10px;
 
}
.top_ul li{
    padding: 20px 40px;
  
}
.conter{
    position: absolute;
    left: 11%;
    background-color: #fff;
    top: 0;
    width: 800px;
    display: none;
}
.conter:hover{
    display: block;
}
.top_title .top_ul:hover+ .conter{
    display: block;
}
</style>
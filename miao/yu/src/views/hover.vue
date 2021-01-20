<template>
    <div>
        <ul class="top">
            {{open}}
            <li v-for="(item,index) in post" :key="index" @click="open=index"><a href="javascript:;">{{item.title}}
                 <img  :src="open!=index?item.img:item.icon" alt="">
             </a>
             </li>
        </ul>
        <div @click="add=true"><a href="javascript:;">打开</a></div>
        <div @click="add=false"><a href="javascript:;">关闭</a></div>
        <div v-if="add">
            <img src="../assets/lianxi/1.jpg" alt="">
        </div>
        <div>
            <div class="body_gu">你是</div>
            <div class="body_er">
                <div>132132132</div>
            </div>
        </div>
    
      <div>
          <ul>
              {{open}}
              <li @click="open=index" v-for="(item,index) in list" :key="index"><img :src="open==index?item.img:item.icon" alt=""></li>
          </ul>
      </div>
       <!-- 切换 -->
      <div>
        <button @click="add=!add">切换</button>
        <img v-if="add" src="../assets/Shuzuimg/18.jpg" alt="">
        <img v-else src="../assets/Shuzuimg/17.jpg" alt="">
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            add:true,
            open:0,
            list:[
                {
                 img:require("../assets/Shuzuimg/12.jpg"),
                 icon:require("../assets/Shuzuimg/17.jpg")
                },
                 {
                 img:require("../assets/Shuzuimg/10.jpg"),
                 icon:require("../assets/Shuzuimg/7.jpg")
                }
            ],
            // open:0,
            post:[
               {
                title:"张学友",
                img:require("../assets/lianxi/1.jpg"),
                icon:require("../assets/lianxi/2.jpg")
               },
               {
                title:"刘德华",
                img:require("../assets/lianxi/4.jpg"),
                icon:require("../assets/lianxi/3.jpg")
               },
            //    {
            //     title:"你",
            //     img:require("../assets/Xindeimg/15.jpg"),
            //     icon:require("../assets/Xindeimg/17.jpg")
            //    },
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
    display: flex;
    width: 50%;
    height: 500px;
    justify-content: space-between;
    margin: 0 auto;
}
.top li a{
    text-decoration: none;
    color: #000;
    display: inline-block;
}
.top li img{
    width: 100px;
    height: 60px;
    object-fit: cover;
}
.body_gu:hover + .body_er{
    display: inline-block;
}
.body_er{
    display: none;
}
</style>
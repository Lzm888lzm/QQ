<template>
  <div class="Classify-top">  
    <div class="Classify">
       <ul class="Classify-ul">
          <h3>语种</h3>
         <li v-for="(item,index) in gu" :key="index"><a href="javascript:;">{{item}}</a></li>
         <li>
           <button  @click="show = !show" :class="show?'show':''"><a href="javascript:;">更多<i :class="{up: show}" class="Classify-i"></i></a></button>
          <div class="Classify-botton" v-if="show">
         <a href="javascript:;" v-for="(item,index) in guu" :key="index">{{item}}</a>
         </div>
         </li>
       </ul>
     <ul class="Classify-post">
        <h3>流派</h3>
       <li v-for="(item,index) in tu" :key="index"><a href="javascript:;">{{item}}</a></li>
       <li>
        <button @click="unm=!unm"><a href="javascript:;">更多<i class="Classify-i" :class="{up:unm}"></i></a></button>
         <div class="Classify-bug" v-if="unm">
           <a href="javascript:;" v-for="(item,index) in tuu" :key="index">{{item}}</a>
           
         </div>
       </li>
     </ul>
         <ul class="Classify-post">
        <h3>主题</h3>
      <li v-for="(item,index) in zu" :key="index"><a href="javascript:;">{{item}}</a></li>
       <li>
        <button @click="post=!post"><a href="javascript:;">更多<i class="Classify-i" :class="{up:post}"></i></a></button>
         <div class="Classify-bug" v-if="post">
           <a href="javascript:;" v-for="(item,index) in zuu" :key="index">{{item}}</a>
          
         </div>
       </li>
     </ul>
        <ul class="Classify-post"> 
        <h3>心情</h3>
      <li v-for="(item,index) in xu" :key="index"><a href="javascript:;">{{item}}</a></li>
       <li>
        <button @click="get=!get"><a href="javascript:;">更多<i class="Classify-i" :class="{up:get}"></i></a></button>
         <div class="Classify-bug" v-if="get">
           <a href="javascript:;" v-for="(item,index) in xuu" :key="index">{{item}}</a>
         </div>
       </li>
     </ul>
        <ul class="Classify-post">
        <h3>场景</h3>
      <li v-for="(item,index) in cu" :key="index"><a href="javascript:;">{{item}}</a></li>
       <li>
        <button @click="open=!open"><a href="javascript:;">更多<i class="Classify-i" :class="{up:open}"></i></a></button>
         <div class="Classify-bug" v-if="open">
           <a href="javascript:;" v-for="(item,index) in cuu" :key="index">{{item}}</a>
         </div>
       </li>
     </ul>
    </div>
  <div class="Classify-h2">
    <div>
      <h2>全部歌单</h2>
    </div>
    <div>
      <a href="javascript:;" :class="index==active?'top':''" v-for="(item,index) in nav" :key="index" @click="active=index">{{item}}</a>
    </div>
    </div>
    <tupian v-if="active==0"></tupian>
     <div v-else>
  <tupians></tupians>
     </div>
     <div class="my-bottom">
               <p>查看更多内容，请下载客户端</p>
               <a href="">立即下载</a>
             </div>
  </div>
</template>
<script>
import tupian from '../components/tupian'
import tupians from '../components/tupians'
export default {
  components:{
    tupian,
    tupians
  },
  data(){
    return{
    nav:["推荐","最新"],
    active:0,
   show:false,
   open:false,
   unm:false,
   post:false,
   get:false,
  //  islogin:true 
  // 第一个
  gu:["国语","英语","粤语","韩语","日语"],
  guu:["小语种","闽南语","法语","拉丁语"],
  // 第二个
  tu:["流行","轻音乐","摇滚","民谣","R&B","嘻哈","电子","古典"],
  tuu:["乡村","蓝调","爵士","新世纪","拉丁","后摇","中国传统","世界音乐"],
  // 第三个
  zu:["ACG","经典","网络歌曲","影视","KTV热歌","儿歌","中国风","古风"],
  zuu:["情歌","城市","现场音乐","现场音乐","佛教音乐","UP主","乐器","MC喊麦","DJ"],
  // 第四个
  xu:["伤感","安静","快乐","治愈","励志","甜蜜","寂寞","思念"],
  xuu:["伤感","安静","快乐","治愈","励志","甜蜜","寂寞","思念"],
  // 第五个
  cu:["睡前","夜店","学习","运动","开车","约会","工作","旅行"],
  cuu:["派对","婚礼","咖啡馆","跳舞","校园"],
    }
  },
  methods:{
  //  add(){
  //   //  if(!this.show){
  //   //    this.show=true
  //   //  }else{
  //   //    this.show=false
  //   //  }
  //   // !this.show?this.show=true:this.show=false
  //  },
  //  open(){
  //    if(!this.bug){
  //      this.bug=true
  //    }else{
  //      this.bug=false
  //    }
  //  },

  //  login(){
  //    this.islogin=true;
  //  },
  //  logout(){
  //    this.islogin=false
  //  }
  }
}
</script>
<style scoped>
 *{
   padding: 0;
   margin: 0;
 }
 ul{
   list-style: none;
 }
 .Classify-top{
   width: 100%;
  margin: 0 auto;
  background: #FBFBFB;
 }
 .Classify{
    display: flex;
    width: 1200px;
    height:210;
    margin: 0px auto;
    padding: 24px 0px 24px 30px ;
    position: relative;
}
 .Classify li a{
  font-size: 14px;
 }
 .Classify-ul{
   width: 160px;
   height: 118px;
   flex-wrap: wrap;
   display: flex;
   position: relative;
   margin-right: 22px
 }
.Classify-ul li a{
  display: inline-block;
  text-decoration: none;
  color: #333;
}
.Classify-ul li{
  width: 76px;
  height: 26px;
}
.Classify-botton{
  width: 1200px;
  height: 50px;
  background: #fff;
  box-shadow: 0 0 10px rgba(183,183,183,.65);
  position: absolute;
  left: 0;
  line-height: 50px;
  margin-top: 3px;
   z-index: 1;
}
.Classify-botton a{
  margin: 0px 15px;
}
button{
  border: 0;
  outline: 0;
  background: #fff;
  font-size: 16px;
}
.Classify-ul h3{
  width: 160px;
  height: 26px;
  color: #999;
  font-size: 14px;
  font-weight: 300;
}
.Classify-post{
 width: 238px;
 height: 118px;
 display: flex;
flex-wrap: wrap;
margin-right: 22px;
}
.Classify-post li{
  width: 76px;
  height: 26px;
}
.Classify-post li a{
  display: inline-block;
  text-decoration: none;
  color: #333;
}
.Classify-post h3{
  width: 238px;
   color: #999;
  font-size: 14px;
  font-weight: 300;
}
.Classify-post li .Classify-bug{
  width: 1200px;
  position: absolute;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 10px rgba(183,183,183,.65);
  left: 30px;
  background: #fff;
  top: 83%;
  z-index: 1;
}
.Classify-bug a{
  margin: 0 15px;
}
.Classify-i{
  display: inline-block;
  background: url('../assets/icon_sprite.png')-120px -260px;
  width: 16px;
  height: 8px;
  vertical-align:middle;
}
.up{
  transform: rotate(180deg);
}
.Classify-h2{
  width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-right: 15px;
  line-height: 60px;
}
.Classify-h2 h2{
  font-weight: 400;
}
.Classify-h2 a{
  display: inline-block;
  text-decoration: none;
  border: 1px solid #EDEDED;
  width: 62px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  border-radius: 3px;
  color: #333;
  font-size: 14px;
}
.Classify-h2 .top{
  color: #fff;
  border-right: 0;
  background: #31c27c;

}
/* 底部 */
.my-bottom{
  text-align: center;
  color: #000;
  font-size: 18px;
  background: #fff;
  height: 100px;
  /* padding-bottom: 30px; */
}
.my-bottom a{
  display:inline-block;
  text-decoration: none;
  width: 175px;
  height: 41px;
  background: #31c27c;
  border-radius:20px ;
  line-height: 41px;
  color: #fff;
  margin-top: 15px;
}
.Classify-ul .miao a{
  background: #31c27c;
  color: #fff;
  padding: 5px 2px;
}
.Classify-ul li .show a{
  background: #31c27c;
   color: #fff;
   border-radius: 2px;
}
</style>
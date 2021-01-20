<template>
 <div class="Header-Piaju" >
   <!-- 轮播图开始 -->
    <div class="Piaju-top">
      <div class="Piaju-top-to">
      <swiper :options="swiperOption" class="Piaju-swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in unm" :key="index"><img :src="item.img" alt=""></swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
    <div class="swiper-button-prev left" slot="button-prev">
       <i class="left-i"></i>
    </div>
    <div class="swiper-button-next right" slot="button-next">
      <i class="right-i left-i"></i>
    </div>
    </div>
  <div class="Piaju">
    <div class="top">
      <a href="javascript:;" @click="show=!show">北京<i></i></a>
      <div class="Piaju-input">
        <input type="text" placeholder="搜素票务" v-model="input">
        <button @click="open" class="button"><i></i></button>
        </div>
      <div class="top-a">
           <a href="#">我的订单 ></a>
      </div>
    </div>
    <!-- 头部位置开始 -->
    <div class="top-div" v-if="show">
      <i></i>
      <div class="Piaju-name">
      <div class="Piaju-ul">
      <ul class="http">
        <li><a href="#">当前城市</a></li>
        <li><a href="#">北京</a></li>
      </ul>
      <ul class="http">
        <li v-for="(p,i) of post" :key="i"><a>{{p}}</a></li>
      </ul>
      </div>
      <div>
        <h3 class="http-h3">按字母查找</h3>
      <ul class="Piaju-elem">
        <li v-for="(elem,index) of get" :key="index"><a href="#">{{elem}}</a></li>
      </ul>
      <div class="top-post">
         <ul>
           <li><a href="#">A</a></li>
           <li><a href="#">安康</a></li>
         </ul>
           <ul>
           <li v-for="(B,j) of B" :key="j"><a href="#">{{B}}</a></li>
         </ul>
           <ul>
           <li v-for="(C,j) of C" :key="j"><a href="#">{{C}}</a></li>
         </ul>
           <ul>
           <li v-for="(D,j) of D" :key="j"><a href="#">{{D}}</a></li>
         </ul>
           <ul>
           <li v-for="(E,j) of E" :key="j"><a href="#">{{E}}</a></li>
         </ul>
           <ul>
           <li v-for="(F,j) of F" :key="j"><a href="#">{{F}}</a></li>
         </ul>
           <ul>
           <li v-for="(G,j) of G" :key="j"><a href="#">{{G}}</a></li>
         </ul>
          <ul>
           <li v-for="(H,j) of H" :key="j"><a href="#">{{H}}</a></li>
         </ul>
          <ul>
           <li v-for="(J,j) of J" :key="j"><a href="#">{{J}}</a></li>
         </ul>
          <ul>
           <li v-for="(K,j) of K" :key="j"><a href="#">{{K}}</a></li>
         </ul>
         <ul class="Piaju-L">
           <li v-for="(L,j) of L" :key="j"><a href="#">{{L}}</a></li>
         </ul>
      </div>
      </div>
      </div>
      </div>
      <!-- 头部位置结束 -->
    </div>
    <!-- 精灵图标题开始 -->
   <div class="section_inner" :class="{'is_fixed':isFixed}">
     <ul>
       <!-- 循环gong                                 点击事件绑定循环的下标位置 -->
       <li v-for="(item,index) in gong" :key="index" @click="active=index">
                                                  <!-- 动态样式 点击事件不等于下标位置 如果默认样式 否则其他-->
         <a href="javascript:;" :class="active==index?'icon_a':''"><i class=" icon-title" :class="active!=index?item.icon:item.aicon"></i><span class="icon-span-a">{{item.title}}</span></a>
       </li>
     </ul>
   </div>
   </div>
    <!-- 精灵图标题结束 -->
   <!-- 精灵兔内容开始 -->
   <div v-if="active==0">
   <!-- 演唱会开始 -->
   <div class="hander-conter">
     <div class="hander-h2">
       <h2>演唱会</h2>
     </div>
     <div class="hander-text-title">
       <div class="hander-text"  v-for="(item,index) in title" :key="index">
         <div class="hander-text-top"><img v-lazy="item.img" alt=""></div>
         <div class="hander-text-bottom">
           <h3 class="hander-text-h3">{{item.tatol}}</h3>
           <p>
             <em class="hander-text-em">¥ 220</em> 起
            <span class="hander-text-span">
              <i class="hander-text-i"></i>
              立减
            </span>
           </p>
         </div>
       </div>
       <div class="hander-color-top">
       <div class="hander-color" v-for="(item,index) in top" :key="index">
         <div>
         <img v-lazy="item.img" alt="">
         </div>
         <div>
           <h3 class="hander-color-h3">{{item.h3}}</h3>
           <p>{{item.p}}</p>
           <p>{{item.ps}}</p>
           <p class="hander-color-p">
             <em class="hander-color-em">{{item.price}}</em> 起
              <span class="hander-text-span">
              <i class="hander-text-i"></i>
              立减
            </span>
           </p>
         </div>
       </div>
       </div>
     </div>
     </div>
    <!-- 演唱会结束 -->
    <!-- LiveHouse开始 -->
     <div class="hander-conter">
     <div class="hander-h2">
       <h2>LiveHouse</h2>
     </div>
     <div class="hander-text-title">
       <div class="hander-text" v-for="(item,index) in cnetli" :key="index">
         <div class="hander-text-top"><img v-lazy="item.img" alt=""></div>
         <div class="hander-text-bottom">
           <h3 class="hander-text-h3">{{item.totol}}</h3>
           <p>
             <em class="hander-text-em">¥ 220</em> 起
            <span class="hander-text-span">
              <i class="hander-text-i"></i>
              立减
            </span>
           </p>
         </div>
       </div>
       <div class="hander-color-top">
       <div class="hander-color" v-for="(item,index) in center" :key="index">
         <div>
         <img v-lazy="item.img" alt="">
         </div>
         <div>
           <h3 class="hander-color-h3">{{item.h3}}</h3>
           <p>{{item.p}}</p>
           <p>{{item.ps}}</p>
           <p class="hander-color-p">
             <em class="hander-color-em">{{item.price}}</em> 起
              <span class="hander-text-span">
              <i class="hander-text-i"></i>
              立减
            </span>
           </p>
         </div>
       </div>
       </div>
     </div>
    </div>
    <!-- LiveHouse结束 -->
    <!-- 音乐会开始 -->
      <div class="hander-conter">
     <div class="hander-h2">
       <h2>音乐会</h2>
     </div>
     <div class="hander-text-title">
       <div class="hander-text" v-for="(item,index) in yintoaL" :key="index">
         <div class="hander-text-top"><img v-lazy="item.img" alt=""></div>
         <div class="hander-text-bottom">
           <h3 class="hander-text-h3">{{item.totol}}</h3>
           <p>
             <em class="hander-text-em">¥ 220</em> 起
            <span class="hander-text-span">
              <i class="hander-text-i"></i>
              立减
            </span>
           </p>
         </div>
       </div>
       <div class="hander-color-top">
       <div class="hander-color" v-for="(item,index) in yin" :key="index">
         <div>
         <img v-lazy="item.img" alt="">
         </div>
         <div>
           <h3 class="hander-color-h3">{{item.h3}}</h3>
           <p>{{item.p}}</p>
           <p>{{item.ps}}</p>
           <p class="hander-color-p">
             <em class="hander-color-em">{{item.price}}</em> 起
              <span class="hander-text-span">
              <i class="hander-text-i"></i>
              立减
            </span>
           </p>
         </div>
       </div>
       </div>
     </div>
     </div>
    <!-- 音乐会结束 -->
    </div>
   <list v-else-if="active==1"></list>
  <lister v-else-if="active==2"></lister>
  <list v-else-if="active==3"></list>
  <lister v-else-if="active==4"></lister>
  <list v-else-if="active==5"></list>
  <lister v-else></lister>
 <!-- 精灵兔内容结束-->
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import List from '../components/List'
import Lister from '../components/Lister'
export default {
  components:{
  swiper,
  swiperSlide,
  List,
  Lister
  },
  data(){
    return{
       // 精灵图循环开始
      active:0,
      gong:[
        {
          title:"全部",
          icon:"icon-a",
          aicon:"icon-a-active"
        },
         {
          title:"演唱会",
          icon:"icon-b",
          aicon:"icon-b-active"
        }, {
          title:"LiveHouse",
          icon:"icon-c",
          aicon:"icon-c-active"
        }, {
          title:"音乐会",
          icon:"icon-d",
          aicon:"icon-d-active"
        }, {
          title:"舞蹈芭蕾",
          icon:"icon-e",
          aicon:"icon-e-active"
        }, {
          title:"话剧歌剧",
          icon:"icon-f",
          aicon:"icon-f-active"
        }, {
          title:"其他演出",
          icon:"icon-g",
          aicon:"icon-g-active"
        },
      ],
       // 精灵图循环结束
      show:true,
      swiperOption: {
         pagination: {
    el: '.swiper-pagination',
  },
    loop:true,
   effect : 'coverflow',
  slidesPerView: 3,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows : true
  },
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  },
  // 轮播图
  unm:[
    {
      img:require("../assets/Piaju/1.jpg")
    },
    {
      img:require("../assets/Piaju/2.jpg")
    },
    {
      img:require("../assets/Piaju/3.jpg")
    },
    {
      img:require("../assets/Piaju/4.jpg")
    },
     {
      img:require("../assets/Piaju/5.jpg")
    },
    {
      img:require("../assets/Piaju/6.jpg")
    },
  ],
        isFixed:false,
        //定位
      show:false,
      post:["热们城市","全国","北京","上海","广州","深圳","成都","武汉"],
      get:["A","B","C","D","E","F","G","H","J","K","M","L","Q","S","T","W","X","Y","Z"],
      B:["B","北京","保定","包头","白山","包头","保定","蚌埠"],
      C:["C","沧州","长春","常州","长沙","重庆","成都"],
      D:["D","大连","德州","东营","东莞","德阳","大理"],
      E:["E","鄂尔多斯"],
      F:["F","福州","抚州","佛山"],
      G:["G","广州","桂林","贵阳"],
      H:["H","衡水","哈尔滨","杭州","合肥","淮北","菏泽","黄冈","惠州","黄河源","海口"],
      J:["J","嘉兴","金华","吉安","济宁","荆州","江门"],
      K:["K","昆明"],
      L:["L","廊坊","临汾","辽阳","丽水","临沂","聊城","洛阳","柳州","乐山","六盘水","丽江","兰州"],
      // 轮播图
      log:[
        {
          img:require("../assets/Shuzuimg/1.jpg")
        },
          {
          img:require("../assets/Shuzuimg/2.jpg")
        },
          {
          img:require("../assets/Shuzuimg/3.jpg")
        },
          {
          img:require("../assets/Shuzuimg/4.jpg")
        },
          {
          img:require("../assets/Shuzuimg/5.jpg")
        }
      ],
      // 演唱会开始
      title:[
        {
         img:require("../assets/Piaju/a.jpg"),
         tatol:"【广州】2021跨年倒计时重磅大趴“超模DJ荧光派对”-魅惑女王控场，地表最闪亮！"
        },
      ],
      top:[
        {
         img:require("../assets/Piaju/b.jpg"),
         h3:"2020.12.31广州跨年“致爱情”情歌演唱会 -以爱之名，温暖一冬",
         p:"2020.12.31",
         ps:"中央车站展演中心",
         price:"¥ 180"
        },
         {
         img:require("../assets/Piaju/c.jpg"),
         h3:"2020“直到世界尽头”经典动漫演唱会-回到热血青春年少时！",
         p:"2021.01.01",
         ps:"MAO Livehouse 广州",
         price:"¥ 180"
        },
         {
         img:require("../assets/Piaju/d.jpg"),
         h3:"【全场畅饮】夜猫俱乐部 | 怒放2021 广州站",
         p:"2021.01.01",
         ps:"MAO Livehouse 广州",
         price:"¥ 180"
        },
         {
         img:require("../assets/Piaju/e.jpg"),
         h3:"【3Bangz$未来星B3Rich】失败经验分享会 巡演 广州站",
         p:"2021.01.02",
         ps:"MAO Livehouse 广州",
        price:"¥ 150"
        },
      ],
       // 演唱会结束
      // LiveHouse开始
      cnetli:[
        {
          img:require("../assets/Piaju/h.jpg"),
          totol:"2020The Will On Kill“博弈轮”巡演 广州站"
        }
      ],
      center:[
        {
         img:require("../assets/Piaju/l.jpg"),
         h3:"【秀动呈献】十七草✖️lambert「YOUNG BOSS」巡演 广州站",
         p:"2021.01.02",
         ps:"TU凸空间",
         price:"¥ 60"
        },
        {
         img:require("../assets/Piaju/n.jpg"),
         h3:"谢天笑「再次来临」唱谈见面会",
         p:"2021.01.02",
         ps:"太空间Livehouse",
         price:"¥ 298"
        },
        {
         img:require("../assets/Piaju/m.jpg"),
         h3:"新月初升",
         p:"2021.01.10",
         ps:"太空间Livehouse",
         price:"¥ 150"
        },
        {
         img:require("../assets/Piaju/u.jpg"),
         h3:"【秀动呈献】超新星乐队白鲨JAWS ＆toa-T联合巡演 广州站",
         p:"2021.01.10",
         ps:"太空间Livehouse",
         price:"¥ 80"
        },
      ],
       // LiveHouse结束
      //  音乐会开始
      yintoaL:[
        {
          img:require("../assets/Piaju/t.jpg"),
          totol:"山丹丹——2021年新年音乐会暨广州岭南交响乐团成立十周年"
        }
      ],
      yin:[
     {
       img:require("../assets/Piaju/y.jpg"),
        h3:"新年演出季 女王归来·极致女高音——和慧新年独唱音乐会",
         p:"2021.01.03",
         ps:"二沙岛星海音乐厅",
         price:"¥ 380"
     },
      {
       img:require("../assets/Piaju/i.jpg"),
        h3:"宁峰与黄秋宁 贝多芬小提琴奏鸣曲全集",
         p:"2021.01.08",
         ps:"二沙岛星海音乐厅",
         price:"¥ 200"
     },
      {
       img:require("../assets/Piaju/o.jpg"),
        h3:"“浪漫古典”一生必听的古典世界名曲音乐会",
         p:"2021.01.23",
         ps:"星海音乐厅·交响乐演奏大厅",
         price:"¥ 100"
     },
      {
       img:require("../assets/Piaju/p.jpg"),
        h3:"广州市合唱协会珠江合唱团迎春音乐会",
         p:"2021.01.24",
         ps:"二沙岛星海音乐厅",
         price:"¥ 100"
     },
      ],
      //  音乐会结束
      // 搜索框
      input:"",
    }
  },
    mounted(){
        window.addEventListener('scroll',this.initHeight)
    },
  methods:{
    // add(){
    //   if(!this.show){
    //     this.show=true
    //   }else{
    //     this.show=false
    //   }
    // },
    open(){
    if(this.input.trim()==""){
       alert('请输入输入关键字')
    }else{
      alert('正在搜素....')
    }
    },
     // 获取
        initHeight(){
            let scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            //判断  是否大于152 
            this.isFixed=scrollTop >600? true : false;
        }
  }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}

.Header-Piaju{
  width: 100%;
  padding-top:40px ;
}
/* 轮播图开始 */
.Piaju-top-to{
  width: 100%;
  height: 390px;
  position: relative;
}
.Piaju-top-to:hover .left{
 display: block;
}
.Piaju-top-to:hover .right{
 display: block;
}
.Piaju-swiperOption{
  width: 1200px;
  margin:  0 auto;
  height: 320px;
}
.Piaju-swiperOption img{
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.swiper-pagination{
   position: absolute;
   bottom:0px;
  }
.swiper-button-prev,.swiper-button-next{
  position: absolute;
  top: 30%;
  outline: 0;
}
.left{
    position: absolute;
    top: 25%;
     background: rgba(0,0,0,.05);
    width: 79px;
    height: 108px;
    outline: 0;
    display: none;
}
.right{
    position: absolute;
    top: 25%;
     background: rgba(0,0,0,.05);
    width: 79px;
    height: 108px;
    outline: 0;
    display: none;
}
.left-i{
  background: url('../assets/icon_sprite.png');
  position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 20px;
    height: 39px;
    left: 29px;
    background-position: -20px -120px;
}
.right-i{
   background: url('../assets/icon_sprite.png');
     right: 29px;
    background-position: -0px -120px;
}
/* 轮播图结束 */
ul{
  list-style: none;
}
.Piaju{
  width:1200px;
  margin: 0 auto;
}
.Piaju ul li a{
  font-size: 14px;
  padding: 0px 4px;
  text-decoration: none;
  color: #333;
}

.Piaju .http{
  margin:15px 0px; 
}
.top{
  display: flex;
  text-align: center;
  width: 100%;
  height: 50px;
  position: relative;
}

.top a{
    display: block;
    width: 130px;
    height: 50px;
    border: 1px solid #c9c9c9;
    line-height: 50px;
    text-decoration: none;
    color: #777;
    font-size: 24px;
    font-weight:200;
}
.top a i{
  background: url(../assets/Piaju/2.png);
  position: relative;
  top: -2px;
  display: inline-block;
  margin-left: 8px;
  width: 10px;
  height: 6px;
  background-position: -120px -260px;
}
.Piaju-input{
  width: 489px;
  border: 1px solid #c9c9c9;
  height: 50px;
  margin: 0px 10px;
  position: relative;
}

.Piaju-input input{
  border: none;
  width: 472px;
  height: 50px;
  outline: none;
  padding-left:15px ;
  font-size: 16px;

}
.Piaju-input .button{
  position: absolute;
  width: 48px;
  height: 52px;
  outline: 0;
  background: #31c27c;
  top: -1px;
  border: 0;
}
.Piaju-input .button i{
    display: inline-block;
    width: 22px;
    height: 22px;
    background-position: 0 0;
  background: url(../assets/Piaju/3.png);
}
.top-a{
  position: absolute;
  right: 0;
}
.top-a a{
 border: 0;
 font-size:16px ;
 color: #000;
}
.top-div{
    width: 490px;
    height: 411px;
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,.35);
    margin: 15px 0;
    position: absolute;
    z-index: 100;
}

.top-div ul{
    display: flex;
 }
 .Piaju-ul{
   border-bottom: 1px solid #c9c9c9;
   padding: 5px 0;
 }
.Piaju-name{
   width: 422px;
   height: 270px;
   margin: 10px auto;
   
 }
.top-post{
  width: 442px;
  max-height: 144px;
  overflow: hidden;
  flex-wrap: wrap;
  overflow-y: auto;
  padding: 20px 0px 0px 0px;
}
.top-post ul{
  width: 434px;
  height: 28px;
}
.Piaju-elem{
  width: 442px;
  height: 64px;
  display: flex;
  flex-flow: wrap;
  }
.Piaju .Piaju-elem li a{
  display:block;
  margin: 0px 20px 10px 0px;
  background: #ececec;
  color: #777;
  padding: 2px 5px;
  font-size: 14px;
}
.http-h3{
  margin:18px 0px 10px;
  font-weight: 100px;
  font-size: 14px;
}
.top-post .Piaju-L{
  height: 56px;
  flex-wrap:wrap ;
}
.http li:first-child a{
  color: #777;
}
.Piaju .Piaju-elem :first-child a{
  background: #31c27c;
  color: #fff;
}
.top-div i{
  display: inline-block;
  background: url(../assets/Piaju/1.png) -11px 0px no-repeat;
  width: 17px;
  height: 11px;
  position: absolute;
  top: -11px;
  left: 54px;
}
/* 吸顶 */
.Piaju-top{
  background: #fff;
}
.is_fixed{
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 5px 5px #ccc;
  z-index: 100;
  }
.section_inner{
  width: 100%;
  height: 32px;
  margin: 0 auto;
  background: #fff;
  padding: 30px 0;
  
}
.section_inner ul{
   width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.section_inner ul li{
  width: 171px;
  height: 31px;
  text-align: center;
  
}
.section_inner ul li a{
  display: inline-block;
  text-decoration: none;
  color: #333;
}
/* 精灵图位置啊 */
.icon-title{
  display: inline-block;
  vertical-align: -6px;
  margin-right: 7px;
  width: 31px;
  height: 31px;
}
/* 精灵图位置啊 */
/* 精灵图标第一个开始 */
.section_inner ul li a>.icon-a{
  background: url(../assets/Piaju/4.png) -280px -4px;
}
.section_inner ul li a>.icon-a-active{
  background: url(../assets/Piaju/4.png) -280px -44px;
}
.section_inner ul li a:hover >.icon-a{
   background: url(../assets/Piaju/4.png) -280px -44px;
}
/* 精灵图标第一个结束 */
/* 精灵图标第二个开始 */
.section_inner ul li a>.icon-b{
  background: url(../assets/Piaju/4.png) -40px 0px
}
.section_inner ul li a>.icon-b-active{
  background: url(../assets/Piaju/4.png) -40px 60px;
}
.section_inner ul li a:hover>.icon-b{
   background: url(../assets/Piaju/4.png)-40px 60px
}
/* 精灵图标第二个结束 */

/* 精灵图标第三个开始 */
.section_inner ul li a>.icon-c{
  background: url(../assets/Piaju/4.png) -360px 0px
}
.section_inner ul li a>.icon-c-active{
  background: url(../assets/Piaju/4.png) -360px -40px
}
.section_inner ul li a:hover>.icon-c{
   background: url(../assets/Piaju/4.png)-360px -40px
}
/* 精灵图标第三个结束 */

/* 精灵图标第四个开始 */
.section_inner ul li a>.icon-d{
  background: url(../assets/Piaju/4.png) -80px 0px
}
.section_inner ul li a>.icon-d-active{
  background: url(../assets/Piaju/4.png) -80px -40px
}
.section_inner ul li a:hover>.icon-d{
   background: url(../assets/Piaju/4.png)-80px -40px
}
/* 精灵图标第四个结束 */

/* 精灵图标第五个开始 */
.section_inner ul li a>.icon-e{
  background: url(../assets/Piaju/4.png) -160px 0;
}
.section_inner ul li a>.icon-e-active{
  background: url(../assets/Piaju/4.png) -160px -40px;
}
.section_inner ul li a:hover>.icon-e{
   background: url(../assets/Piaju/4.png)-160px -40px;
}
/* 精灵图标第五个结束 */


/* 精灵图标第六个开始 */
.section_inner ul li a>.icon-f{
  background: url(../assets/Piaju/4.png) -200px 0px
}
.section_inner ul li a>.icon-f-active{
  background: url(../assets/Piaju/4.png) -200px -40px;
}
.section_inner ul li a:hover>.icon-f{
   background: url(../assets/Piaju/4.png)-200px -40px
}
/* 精灵图标第六个结束 */

/* 精灵图标第七个开始 */
.section_inner ul li a>.icon-g{
  background: url(../assets/Piaju/4.png) -320px 0px
}
.section_inner ul li a>.icon-g-active{
  background: url(../assets/Piaju/4.png) -320px -40px;
}
.section_inner ul li a:hover>.icon-g{
   background: url(../assets/Piaju/4.png)-320px -40px
}
/* 精灵图标第七个结束 */
/* 精灵图的a 字体 */
.section_inner ul li .icon_a{
  color: #31c27c;
}
.section_inner ul li a:hover{
 color: #31c27c;
}
/* 演唱会开始 */
.hander-conter{
  width: 1200px;
  margin: 0 auto;
}
.hander-h2{
  text-align: center;
  padding: 30px 0;
}
.hander-text-title{
  width: 1200px;
  height: 444px;
  display: flex;
}
.hander-text{
  position: relative; 
}
.hander-text-top img{
  width:316px;
  height: 416px;
  object-fit: cover;
  padding-right: 28px;
}
.hander-text-bottom{
  width: 284px;
  height:95px;
  position: absolute;
  bottom:25px;
  padding:12px 16px 10px;
  color: #fff;
 background-color: rgba(0,0,0,.8);
}
.hander-text-h3{
  width: 284px;
  height: 53px;
 overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2; 
}
.hander-text-em{
   font-size: 24px;
   margin-right: 3px;
}
.hander-text-span{
  width: 55px;
  height: 26px;
  background: #31c27c;
  padding: 5px ;
  border-radius: 2px;
  font-size: 12px;
}
.hander-text-i{
    display: inline-block;
    background: url('../assets/Piaju/sp.png');
    vertical-align: -2px;
    width: 17px;
    height: 13px;
    background-position: -50px -50px;
}
.hander-color-top{
   width: 865px;
  height: 416px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
}
.hander-color{
  width: 49%;
  height: 194px;
  display: flex;
  box-sizing: border-box;
}
:first-child .hander-color{
  margin-bottom: 30px;
}
.hander-color img{
  width: 148px;
  height: 194px;
  margin-right: 10px;
}
.hander-conter img:hover{
   height: 20px;
  transition: height 2s linear;
}
.hander-color-h3{
  width: 252px;
  height: 57.6px;
  font-size: 16px;
  margin-bottom:10px ;
  color: #333;
  font-weight: 400;
}
.hander-color-em{
  font-size: 24px;
  color: #31c27c;
}
.hander-color p{
  color: #777777;
}
.hander-color .hander-color-p{
  padding-top:55px ;
  color: #31c27c;
}
.hander-color-p .hander-text-span{
  color: #fff;
}
/* 演唱会开始结束 */
</style>
<template>
    <div>
            <div class="index-conter">
          <div class="index-conter-top">
            <swiper :options="swiperOption" class="index-conter-swiperOption">
           <swiper-slide v-for="item in 7" :key="item" class="index-conter-slide"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <div class="swiper-button-next conter-left  left swiper-button-black" slot="button-next">
    <i  class="right-i left-i"></i>
  </div>
   <div class="swiper-button-prev conter-right  right swiper-button-black" slot="button-prev">
     <i class="left-i"></i>
   </div>
          </div>
      </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{
         swiper,
    swiperSlide,
    },
    data(){
        return{
                  swiperOption:{
            //分页器
          pagination :{
	      el: '.swiper-pagination',
	     clickable :true,
       },
            //循环
            loop:true,
            //  左右切换
           navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
          },
                  get:[
              {
       imgs:"1.jpg",
       title:"稻草人",
       totol:"张蔷",
       time:"02:16"
     },
        {
       imgs:"2.jpg",
        title:"《都市男女的爱情法则》韩剧插曲",
       totol:"SURAN (수란)"
     },   {
       imgs:"3.jpg",
        title:"for",
       totol:"ONER",
       time:"03:58"
     },
        {
       imgs:"4.jpg",
        title:"《人潮汹涌》电影片尾曲",
       totol:"刘若英",
       time:"05:16"
     },
        {
       imgs:"5.jpg",
        title:"《温暖的抱抱》电影宣传曲",
       totol:"段奥娟"
     },   {
       imgs:"6.jpg",
        title:"人群中的人",
       totol:"李健",
       time:"05:15"
     },
        {
       imgs:"7.jpg",
        title:"逢生",
       totol:"张碧晨",
       time:"04:21"
     },
        {
       imgs:"8.jpg",
        title:"漫漫人生路",
       totol:"好妹妹 / 秦昊 / 张小厚 / 陈粒 / 粒粒 / 焦迈奇 / 王加一 / 陈婧霏"
     },   {
       imgs:"9.jpg",
        title:"潘金莲",
       totol:"薛之谦",
       time:"03:35"
     },
          ],
        }
    }
}
</script>
<style scoped>
    .index-conter{
    width: 100%;
    position: relative;
    margin: 10px 0;
}
.index-conter:hover .left{
  display: block;
}
.index-conter:hover .right{
  display: block;
}
.index-conter-top{
    height: 370px;
}
.index-conter-swiperOption{
    width: 1200px;
    height: 370px;
    margin: 0 auto;
    display: flex;
}
.index-conter-slide{
    margin-bottom: 10px;
}
.index-conter-ul{
    display: flex;
    flex-wrap: wrap;
}
.index-conter-ul li{
    width: 370px;
    height: 99px;
    display: flex;
    margin: 0px 10px 10px 0;
    padding-bottom:10px ;
    
}
.index-conter-ul li:nth-child(-n+6){
  border-bottom: 1px solid #e1e1e1;
}
/* .index-conter-ul li:nth-child(n+3){
    background: #fff;
} */
.index-conter-ul li img{
    object-fit: cover;
   
}
.index-conter-img{
 position: relative;
}
.index-conter-img:hover .index-conter-i{
  display: block;
}
.index-conter-i{
  position: absolute;
  display: inline-block;
  background: url('../assets/handeximg/cover_play.png');
  object-fit: cover;
   width: 70px;
  height:70px;
  transform:scale(.7) translateZ(0);
  transition: .1s;
  zoom: 1;
  left: 10px;
  top: 5px;
  display: none;
}
.index-conter-ul-li{
    display: flex;
    align-items: center;
    color: #999;
    font-size: 14px;
}
.index-conter-p p:first-child{
  color: #000;
  overflow: hidden;
text-overflow: ellipsis; 
white-space: nowrap; 
}
.index-conter-p p:last-child{
  overflow: hidden;
text-overflow: ellipsis; 
white-space: nowrap; 
}
.conter-left,.conter-right{
    top: 35%;
}
.index-conter-p{
  width: 189px;
  margin:0px 30px 0px 10px;
}
.left{
    position: absolute;
     background: rgba(0,0,0,.05);
    width: 79px;
    height: 108px;
    outline: 0;
    display: none;
}
.right{
    position: absolute;
     background: rgba(0,0,0,.05);
    width: 79px;
    height: 108px;
    outline: 0;
    display: none;
    
}
 .index-get:hover .left{
   display: block;
   
 }
  .index-get:hover .right{
   display: block;
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
    background-position: 0 -120px;
}
/* 第二个轮播图结束 */
</style>
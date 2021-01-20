<template>
  <div class="han-shuzu">
    <div>
    <div>
      <div class="han-top">
         <swiper :options="swiperOption" class="han-top-swiperOption">
    <swiper-slide v-for="(item,index) in unm" :key="index"><img :src="item.img" alt=""></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
     <div class="swiper-button-prev left" slot="button-prev">
         <i class="left-i"></i>
     </div>
    <div class="swiper-button-next right" slot="button-next">
      <i class="right-i left-i"></i>
    </div>
      </div>
    </div>
    <Shuzu></Shuzu>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Shuzu from '../components/Shuzu'
export default {
   components:{
    Shuzu,
    swiper,
    swiperSlide
   },
   data(){
     return{
       
       swiperOption: {
          loop : true,
          navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
  },
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
        },
      unm:[
        {
          img:require("../assets/Shuzuimg/1.jpg")
        },
         {
          img:require("../assets/Shuzuimg/b.jpg")
        },
         {
          img:require("../assets/Shuzuimg/c.jpg")
        },
         {
          img:require("../assets/Shuzuimg/2.jpg")
        },
         {
          img:require("../assets/Shuzuimg/3.jpg")
        },
        {
         img:require("../assets/Shuzuimg/d.jpg") 
        }
      ]
     }
   }
}
</script>
<style scoped>
.han-shuzu{
  width: 100%;
  background: #f6f6f6;
  padding-top: 40px;
}
.han-top{
  width: 100%; 
  height: 400px;
  margin: 0 auto; 
  position: relative;
}
.han-top:hover .left{
  display: block;
}
.han-top:hover .right{
  display: block;
}
.han-top-swiperOption{
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  height: 340px;
}
.han-top-swiperOption img{
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.swiper-button-prev,.swiper-button-next{
  position: absolute;
  top: 37%;
  outline: 0;
}
.swiper-pagination{
  position: absolute;
}
.left{
    position: absolute;
    top: 35%;
     background: rgba(0,0,0,.05);
    width: 79px;
    height: 108px;
    outline: 0;
    display: none;
}
.right{
    position: absolute;
    top: 35%;
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
    background-position: 0 -120px;
}
</style>
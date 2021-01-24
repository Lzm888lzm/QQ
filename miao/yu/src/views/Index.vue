<template>
<div class="index">
    <!-- 歌单标题开始 -->
    <div class="centre_header">
      <div class="centre">
        <h1>歌&nbsp;单&nbsp;推&nbsp;荐</h1>
      </div>
        <div class="centre_ul">
          <ul>
            <li v-for="(item,index) in str_a" :key="index" @click="yi=index"><a href="javascript:;" :class="yi==index?'center_a':''">{{item}}</a></li>
          </ul>
        </div>
    </div>
    <!-- 歌单标题结束 -->
    <!-- 第一个轮播图开始 -->
<div class="index-get">
  <div class="index-top">
    <swiper :options="swiperOption" class="index-swiperOption">
    <swiper-slide v-for="item in 2" :key="item">
        <ul class="index-ul" v-if="yi==0">
            <li v-for="(item,index) in str" :key="index">
              <div>
                <img :src="require(`../assets/indexfun/${item.imgs}`)" alt="">
                <i></i>
                </div>
                <p>{{item.title}}</p>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <ul class="index-ul" v-else-if="yi==1">
            <li v-for="(item,index) in sry" :key="index">
              <div>
                <img :src="require(`../assets/indexfun/${item.imgs}`)" alt="">
                <i></i>
                </div>
                <p>{{item.title}}</p>
                <p>{{item.name}}</p>
            </li>
        </ul>
         <ul class="index-ul" v-else>
            <li v-for="(item,index) in you" :key="index">
              <div>
                <img :src="require(`../assets/indexfun/${item.imgs}`)" alt="">
                <i></i>
                </div>
                <p>{{item.title}}</p>
                <p>{{item.name}}</p>
            </li>
        </ul>
  </swiper-slide>
  <!-- <swiper-slide>
         <ul class="index-ul" v-if="yi==0">
            <li v-for="(item,index) in str" :key="index">
                <img :src="require(`../assets/indexfun/${item.imgs}`)" alt="">
                 <p>注入灵魂丨B站大佬们的宝藏歌曲</p>
                <p>播放量：376.8万</p>
            </li>
        </ul>
          <ul class="index-ul" v-else>
            <li v-for="(item,index) in sry" :key="index">
              <div>
                <img :src="require(`../assets/indexfun/${item.imgs}`)" alt="">
                <i></i>
                </div>
                <p>注入灵魂丨B站大佬们的宝藏歌曲</p>
                <p>播放量：376.8万</p>
            </li>
        </ul>
    </swiper-slide> -->
      <div class="swiper-pagination index-swiper-pagination" slot="pagination"></div>
  </swiper>
    <div class="right-left">
    <div class="swiper-button-prev  left swiper-button-black" slot="button-prev">
      <i class="left-i"></i>
    </div>
    <div class="swiper-button-next right swiper-button-black" slot="button-next">
      <i class="right-i left-i"></i>
    </div>
    </div>
    </div>
    </div>
    <!-- 第一个轮播图结束 -->
    <!-- 新歌标题开始 -->
       <div class="swiper-h2">
            <div class="swiper-pro">
            <h2>新歌首发</h2>
            </div>
            <div class="swiper-nav-pro">
            <a href="javascript:;" class="swiper-nav-a"><i></i>全部播放</a>
            <div class="swiper-nav">
             <a href="javascript:;" :class="actions==index?'zuixin':''" v-for="(item,index) in zui" :key="index" @click="actions=index">{{item}}</a>
            </div>
            </div>
          </div>
    <!-- 新歌标题结束 -->
    <!-- 第二个轮播图开始 -->
      <div class="index-conter">
          <div class="index-conter-top">
            <swiper :options="swiperOption" class="index-conter-swiperOption">
           <swiper-slide v-for="item in 7" :key="item" class="index-conter-slide">
               <ul class="index-conter-ul"   v-if="actions==0">
                   <li v-for="(item,index) in  get" :key="index">
                     <div class="index-conter-img">
                       <img :src="require(`../assets/indexfun/${item.imgs}`)" alt="">
                       <i class="index-conter-i"></i>
                       </div>
                       <div class="index-conter-ul-li">
                           <div class="index-conter-p">
                               <p>{{item.title}}</p>
                               <p>{{item.totol}}</p>
                           </div>
                           <div class="index-conter-span">
                               <span>{{item.time}}</span>
                           </div>
                       </div>
                   </li>
               </ul>
                 <ul class="index-conter-ul" v-else-if="actions==1">
                   <li v-for="(item,index) in  post" :key="index">
                     <div class="index-conter-img">
                       <img :src="require(`../assets/Lunbo/${item.imgs}`)" alt="">
                       <i class="index-conter-i"></i>
                       </div>
                       <div class="index-conter-ul-li">
                           <div class="index-conter-p">
                               <p>{{item.title}}</p>
                               <p>{{item.totol}}</p>
                           </div>
                           <div class="index-conter-span">
                               <span>{{item.time}}</span>
                           </div>
                       </div>
                   </li>
               </ul>
                   <ul class="index-conter-ul" v-else>
                   <li v-for="(item,index) in  list" :key="index">
                     <div class="index-conter-img">
                       <img :src="require(`../assets/Lunbo/${item.imgs}`)" alt="">
                       <i class="index-conter-i"></i>
                       </div>
                       <div class="index-conter-ul-li">
                           <div class="index-conter-p">
                               <p>{{item.title}}</p>
                               <p>{{item.totol}}</p>
                           </div>
                           <div class="index-conter-span">
                               <span>{{item.time}}</span>
                           </div>
                       </div>
                   </li>
               </ul>
           </swiper-slide>
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
    <!-- 第二个轮播图结束 -->
    <!-- 第三个轮播开始 -->
    <div class="index-post">
         <div class="swiper-pro">
             <h2>精彩推荐</h2>
           </div>
        <div>
    <div class="index-post-top">
     <swiper :options="swiperOption" class="index-post-swiperOption">
    <swiper-slide class="index-post-swiper" v-for="item in 6" :key="item">
         <ul class="index-post-ul">
             <li>
                 <img src="../assets/homeimg/a.jpg" alt="">
                <img src="../assets/homeimg/b.jpg" alt="">
             </li>
         </ul>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
    <div class="swiper-button-prev index-post-left left swiper-button-black" slot="button-prev">
       <i class="left-i"></i>
    </div>
    <div class="swiper-button-next index-post-right right swiper-button-black" slot="button-next">   
       <i  class="right-i left-i"></i>
    </div>
            </div>
        </div>
        <div></div>
    </div>
    <!-- 第三个轮播结束 -->
    <!-- 第四个轮播开始 -->
    <div>
      <div class="swiper-si">
        <div class="swiper-h2">
            <div class="swiper-pro">
            <h2>新碟首发</h2>
            </div>
            <div class="swiper-nav-pro">
            <div class="swiper-nav">
             <a href="javascript:;" v-for="(item,index) in si" :key="index" @click="disi=index" :class="disi==index?'zuixin':''">{{item}}</a>
            
            </div>
            <div class="router">
                <router-link to="/mestr">更多></router-link>
            </div>
            </div>
          </div>
        <div>
            <div class="index-handex">
                <swiper :options="swiperOption">
        <swiper-slide v-for="item in 2" :key="item">
             <Handex></Handex>
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
    <div class="swiper-button-prev left swiper-button-black swiper-pro-left" slot="button-prev">
       <i class="left-i"></i>
    </div>
    <div class="swiper-button-next right swiper-button-black swiper-pro-right" slot="button-next">
       <i  class="right-i left-i"></i>
    </div>
            </div>
        </div>
    </div>
    </div>
    <!-- 第四个轮播结束 -->
    
    <!-- 排行榜标题开始 -->
    <div class="index-order">
      <div class="index-pro">
        <div class="index-pro-h2">
          <h2>排&nbsp;行&nbsp;榜</h2>
           <div class="index-pro-ord">
          <router-link to="/xinde">更多></router-link>
          </div>
        </div>
        <div class="index-pro-item">
          <!-- 第一个 -->
          <div class="index-pro-in">
          <div class="index-pro-poen">
             <i class="index-pro-i"></i>
          <div class="index-pro-center">
            <div class="index-pro-left"> 
               <a href="">巅峰赛</a>
              <a href="">热歌</a>
              <div class="index-pro-top">
              <i class="index-pro-ii"></i>
              <i class="index-pro-iii"></i>
            </div>
            </div>
             <div>
              <ul class="index-pro-ul">
            <li>
              <div>1</div>
              <div class="index-pro-au">
              <a href="">踏山河</a>
              <a href="">是七叔呢</a>
              </div>
            </li>
            <li>
              <div>2</div>
              <div class="index-pro-au">
              <a href="">醒不来的梦</a>
              <a href="">回小仙</a>
              </div>
            </li>
            <li>
              <div>3</div>
              <div class="index-pro-au">
              <a href="">四季予你</a>
              <a href="">程响</a>
              </div>
            </li>
          </ul>
             </div>
             </div>
       </div>
          </div>  
          <!-- 第二个 -->
              <div class="index-pro-in">
          <div class="index-pro-poen">
             <i class="index-pro-i index-pro-bg"></i>
          <div class="index-pro-center">
            <div class="index-pro-left"> 
               <a href="">巅峰赛</a>
              <a href="">新歌</a>
              <div class="index-pro-top">
              <i class="index-pro-ii"></i>
              <i class="index-pro-iii"></i>
            </div>
            </div>
             <div>
              <ul class="index-pro-ul">
            <li>
              <div>1</div>
              <div class="index-pro-au">
              <a href="">和光同尘</a>
              <a href="">周深</a>
              </div>
            </li>
            <li>
              <div>2</div>
              <div class="index-pro-au">
              <a href="">因为你 所以我</a>
              <a href="">五月天</a>
              </div>
            </li>
            <li>
              <div>3</div>
              <div class="index-pro-au">
              <a href="">送你一朵小红花</a>
              <a href="">赵英俊</a>
              </div>
            </li>
          </ul>
             </div>
             </div>
       </div>
          </div>  
          <!-- 第三个 -->
               <div class="index-pro-in">
          <div class="index-pro-poen">
             <i class="index-pro-i index-pro-san"></i>
          <div class="index-pro-center">
            <div class="index-pro-left"> 
               <a href="">巅峰赛</a>
              <a href="">流行指数</a>
              <div class="index-pro-top">
              <i class="index-pro-ii"></i>
              <i class="index-pro-iii"></i>
            </div>
            </div>
             <div>
              <ul class="index-pro-ul">
            <li>
              <div>1</div>
              <div class="index-pro-au">
              <a href="">四季予你</a>
              <a href="">程响</a>
              </div>
            </li>
            <li>
              <div>2</div>
              <div class="index-pro-au">
              <a href="">迟迟</a>
              <a href="">薛之谦</a>
              </div>
            </li>
            <li>
              <div>3</div>
              <div class="index-pro-au">
              <a href="">2035是这young</a>
              <a href="">时代少年团</a>
              </div>
            </li>
          </ul>
             </div>
             </div>
       </div>
          </div>  
          <!-- 第四个 -->
               <div class="index-pro-in">
          <div class="index-pro-poen">
             <i class="index-pro-i index-pro-si"></i>
          <div class="index-pro-center">
            <div class="index-pro-left"> 
               <a href="">巅峰赛</a>
              <a href="">欧美</a>
              <div class="index-pro-top">
              <i class="index-pro-ii"></i>
              <i class="index-pro-iii"></i>
            </div>
            </div>
             <div>
              <ul class="index-pro-ul">
            <li>
              <div>1</div>
              <div class="index-pro-au">
              <a href="">Afterglow</a>
              <a href="">Ed Sheeran</a>
              </div>
            </li>
            <li>
              <div>2</div>
              <div class="index-pro-au">
              <a href="">Space Melody (Edward Artemyev)</a>
              <a href="">VIZE/Alan Walker/Leony/Edward Artemyev</a>
              </div>
            </li>
            <li>
              <div>3</div>
              <div class="index-pro-au">
              <a href="">willow (moonlit witch version)</a>
              <a href="">Taylor Swift</a>
              </div>
            </li>
          </ul>
             </div>
             </div>
       </div>
          </div>  
          <!-- 第五个 -->
                <div class="index-pro-in">
          <div class="index-pro-poen">
             <i class="index-pro-i index-pro-wu"></i>
          <div class="index-pro-center">
            <div class="index-pro-left"> 
               <a href="">巅峰赛</a>
              <a href="">韩国</a>
              <div class="index-pro-top">
              <i class="index-pro-ii"></i>
              <i class="index-pro-iii"></i>
            </div>
            </div>
             <div>
              <ul class="index-pro-ul">
            <li>
              <div>1</div>
              <div class="index-pro-au">
              <a href="">CRY FOR ME</a>
              <a href="">TWICE (트와이스)</a>
              </div>
            </li>
            <li>
              <div>2</div>
              <div class="index-pro-au">
              <a href="">Black Mamba</a>
              <a href="">aespa (에스파)</a>
              </div>
            </li>
            <li>
              <div>3</div>
              <div class="index-pro-au">
              <a href="">Panorama</a>
              <a href="">IZ*ONE (아이즈원)</a>
              </div>
            </li>
          </ul>
             </div>
             </div>
       </div>
          </div> 
        </div>
      </div>
    </div>
    <!-- 排行榜标题结束 -->
    <!-- MV标题开始 -->
  <div class="swiper-wu">
    <div class="swiper-h2">
            <div class="swiper-pro">
            <h2>M&nbsp;&nbsp;V</h2>
            </div>
            <div class="swiper-nav-pro">
            <div class="swiper-nav">
              <a href="javascript:;">精选</a>
             <a href="javascript:;">内地</a>
             <a href="javascript:;">港台</a>
             <a href="javascript:;">欧美</a>
             <a href="javascript:;">韩国</a>
             <a href="javascript:;">日本</a>
            </div>
            </div>
          </div>
      <!-- 第五个轮播图开始 -->
          <div class="index-fun">
            <swiper :options="swiperOption" class="index-fun-swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in 4" :key="item">
         <Indexfun></Indexfun>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    <div class="swiper-button-prev left index-fun-left swiper-button-black" slot="button-prev">
       <i class="left-i"></i>
    </div>
    <div class="swiper-button-next right index-fun-right swiper-button-black" slot="button-next">
      <i  class="right-i left-i"></i>
    </div>
          </div>
    <!-- 第五个轮播图结束 -->
        </div>
    <!-- MV标题结束 -->
        <card-list :list="card" length="4"></card-list>
    </div>
</template>
<script>
import Handex from '../components/Handex'
import Indexfun from '../components/Indexfun'
import Lunbo from '../components/Lunbo'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import  cardList from "@/components/card-list"
export default {
    components: {
    cardList,
    swiper,
    swiperSlide,
    Handex,
    Indexfun,
  },
  data(){
      return{
        card:[
          {
            title:"哈哈哈",
            text:"这是文本"
          },
          {
            title:"哈哈哈",
            text:"这是文本"
          },
          {
            title:"哈哈哈",
            text:"这是文本"
          },
          {
            title:"哈哈哈",
            text:"这是文本"
          },
          {
            title:"哈哈哈",
            text:"这是文本"
          },
        ],
        lunbo:true,
        yi:0,
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
          zui:["最新","内地","港台","欧美","韩国","日本"],
          actions:0,
          // 第一个标题歌单
          str_a:["为你推荐","经典","网路歌曲","经典国语","官方歌单","情歌"],
        
        //   第一个轮播图
         str:[
             {
       imgs:"a.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
        },
     {
       imgs:"b.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"c.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"d.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"e.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     
          ], 
             //   第一个轮播图
         sry:[
             {
       imgs:"f.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
        },
     {
       imgs:"g.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"h.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"k.png",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"e.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     
          ], 
                //   第一个轮播图
         you:[
             {
       imgs:"300.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
        },
     {
       imgs:"301.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"302.jpg",
      name:"播放量：344.0万",
      title:"国语古风DJ：让你重新认识古风"
     },
     {
       imgs:"303.jpg",
      name:"播放量：4.4万",
      title:"「民谣」在炎夏回望冷冽寒冬"
     },
     {
       imgs:"304.jpg",
      name:" 播放量：5.4万",
      title:"心情调节剂 | 一个人去海边走走"
     },
     
          ], 
          
        //第二个轮播图
            get:[
              {
       imgs:"11.jpg",
       title:"稻草人",
       totol:"张蔷",
       time:"02:16"
     },
        {
       imgs:"12.jpg",
        title:"《都市男女的爱情法则》韩剧插曲",
       totol:"SURAN (수란)"
     },   {
       imgs:"13.jpg",
        title:"for",
       totol:"ONER",
       time:"03:58"
     },
        {
       imgs:"14.jpg",
        title:"《人潮汹涌》电影片尾曲",
       totol:"刘若英",
       time:"05:16"
     },
        {
       imgs:"15.jpg",
        title:"《温暖的抱抱》电影宣传曲",
       totol:"段奥娟"
     },   {
       imgs:"16.jpg",
        title:"人群中的人",
       totol:"李健",
       time:"05:15"
     },
        {
       imgs:"17.jpg",
        title:"逢生",
       totol:"张碧晨",
       time:"04:21"
     },
        {
       imgs:"18.jpg",
        title:"漫漫人生路",
       totol:"好妹妹 / 秦昊 / 张小厚 / 陈粒 / 粒粒 / 焦迈奇 / 王加一 / 陈婧霏"
     },   {
       imgs:"19.jpg",
        title:"潘金莲",
       totol:"薛之谦",
       time:"03:35"
     },
          ],
           post:[
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
            list:[
            {
       imgs:"10.jpg",
       title:"稻草人",
       totol:"张蔷",
       time:"02:16"
     },
        {
       imgs:"11.jpg",
        title:"《都市男女的爱情法则》韩剧插曲",
       totol:"SURAN (수란)"
     },   {
       imgs:"12.jpg",
        title:"for",
       totol:"ONER",
       time:"03:58"
     },
        {
       imgs:"13.jpg",
        title:"《人潮汹涌》电影片尾曲",
       totol:"刘若英",
       time:"05:16"
     },
        {
       imgs:"14.jpg",
        title:"《温暖的抱抱》电影宣传曲",
       totol:"段奥娟"
     },   {
       imgs:"15.jpg",
        title:"人群中的人",
       totol:"李健",
       time:"05:15"
     },
        {
       imgs:"16.jpg",
        title:"逢生",
       totol:"张碧晨",
       time:"04:21"
     },
        {
       imgs:"17.jpg",
        title:"漫漫人生路",
       totol:"好妹妹 / 秦昊 / 张小厚 / 陈粒 / 粒粒 / 焦迈奇 / 王加一 / 陈婧霏"
     },   {
       imgs:"18.jpg",
        title:"潘金莲",
       totol:"薛之谦",
       time:"03:35"
     },
          ],
      // 第四个轮播
           si:["内地","港台","欧美","韩国","日本","其他"],
           disi:0
      }
  },
  mounted() {
      // this.card=this.card.splice(0,3)
      var ul=document.querySelectorAll(".Hae_der_ul>li");
        for(let i=0;i<ul.length;i++){
            ul[i].removeAttribute("class")
        }
        var head=document.querySelector(".Hae_der_ul>li:nth-child(1)").setAttribute("class",'Hea_der_ba');
  },
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
 .index{
   width: 100%;
   background: #f6f6f6;
   padding-top:20px ;
 }
 /* 第一个轮播图开始 */
 .index-get{
     width: 100%;
    height: 350px;
 }

 .index-top{
     width: 100%;
     height: 325px;
     margin: 30px 0;
     position: relative;
 }
 .index-top .index-swiperOption{
     width: 1200px;
     height: 325px;
     margin: 0 auto;
  }
.index-ul{
    display: flex;
 }
.index-ul li{
   margin-left: 10px; 
 }
.index-ul li p{
   display: inline-block;
   margin: 5px 0;
 }
 .index-ul li p:last-child{
   color: #999;
   font-size: 16px;
 }
 .index-ul li img{
   width: 224px;
    height: 224px;
    object-fit: cover;
 }
.index-swiper-pagination{
   bottom: -1px;
}
.left{
    position: absolute;
    top: 17%;
     background: rgba(0,0,0,.05);
    width: 79px;
    height: 108px;
    outline: 0;
    display: none;
}
.right{
    position: absolute;
    top: 17%;
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
.index-ul li>div{
  position: relative;
}
.index-ul li>div i{
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -35px;
    width: 70px;
    height: 70px;
  background: url('../assets/Mestrimg/20.png');
   display: none;
}
.index-ul li>div:hover i{
   display: block;
    transition: all ease-in-out .3s;
}
.index-ul li>div:hover img{
    transition: 1s;
    transform: scale(.9) translateZ(0);
    transition: .75s;
}
/* 第一个轮播图结束 */

/*歌单标题开始 */
.centre{
  text-align: center;
  padding: 15px 0;
}
.centre_ul .swoper_ul li{
  width: 409px;
  height: 111px;
}
.centre_ul ul li{
  padding: 20px 20px;
}
.centre_ul ul li a{
  display: block;
  text-decoration: none;
  color: #333;
}
.centre_ul li .center_a{
  color: #31c27c;
}
.centre_ul ul{
  display: flex;
  width: 1200px;
  justify-content: center;
  margin: 0 auto;
}
/*歌单标题结束 */

/* 新歌标题开始 */
.swiper-h2{
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0px 24px 0px;
}
.swiper-nav-pro{
  height: 50px;
 display: flex;
 align-items: center;
}
.swiper-pro{
 text-align: center;
  padding-bottom: 20px;
}
.swiper-nav{
  text-align: center;
  width: 1200px;
}
.swiper-nav a{
  display: inline-block;
  text-decoration: none;
  color: #333;
  margin: 0px 24px;
}

.swiper-nav-a{
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  width: 113px;
  height: 36px;
  border: 1px solid #c9c9c9;
  text-align: center;
  line-height: 35px;
  position: relative;
  padding-left: 8px;
}
.swiper-nav-a i{
    position: absolute;
    width: 13px;
    height: 19px;
    vertical-align: -3px;
    background: url(/img/icon_sprite.a8f33f5d.png) 141px 120px;
    left: 16px;
    top: 10px;
}
.swiper-nav  .zuixin{
   color: #31c27c;
  }
/* 新歌标题结束 */
/* 第二个轮播图开始 */
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
    width: 379px;
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
.index-conter-i{
  position: absolute;
  display: block;
  background: url('../assets/handeximg/cover_play.png');
   width: 70px;
  height:70px;
  left: 10px;
  top: 5px;
  display: none;
}

.index-conter-img:hover .index-conter-i{
  display: block;
    transform: scale(.7) translateZ(0);
    transition-property: opacity,transform;
    transition-duration: .5s;
    zoom: 1;
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
    top: 27%;
}
.index-conter-p{
  width: 189px;
  margin:0px 30px 0px 10px;
}
/* 第二个轮播图结束 */
/*  精彩推荐标题开始*/
.swiper-pro{
  text-align: center;
  padding-bottom: 20px;
}
/*  精彩推荐标题结束*/
/* 第三个轮播开始 */
.index-post{
width: 100%;
 height: 340px;
 margin:0 auto;
}
.index-post:hover .left{
    display: block;
}
.index-post:hover .right{
    display: block;
}
.index-post-top{
    position: relative;
}
.index-post-swiperOption{
    width: 1220px;
    height: 280px;
    margin: 0 auto;
}
.index-post-ul{
    height: 236px;
    width: 1226px;
    padding-bottom: 15px;
}
.index-post-ul li img{
    width: 590px;
    height: 236px;
}
.index-post-ul li img:first-child{
    padding-right: 20px;
}
.index-post-left,.index-post-right{
 top: 30%;
}
/* 第三个轮播结束 */
/* 新碟首发开始 */

/* 新碟首发结束 */
/* 第四个轮播图开始 */
.swiper-si:hover .left{
  display: block;
}
.swiper-si:hover .right{
  display: block;
}
.index-handex{
    position: relative;
}
.router a{
    display: inline-block;
   width: 57px;
   text-decoration: none;
   color: #000;
}
.swiper-pro-left,.swiper-pro-right{
  position: absolute;
  top: 37%;
}
/* 第四个轮播图结束 */
/* 排行榜开始 */
.index-order{
 width: 100%;
}

.index-pro{
  width: 1200px;
  height: 660px;
  margin: 0 auto;
  text-align: center;
}
.index-pro-h2{
  position: relative;
  margin:30px 0 ;
}
.index-pro-h2 h2{
  font-weight: 400;
}
.index-pro-ord a{
  position: absolute;
  right: 0;
  display: inline-block;
  color: #000;
  text-decoration: none;
  top: 1px;
  font-weight: 400;
}
.index-pro-item{
   display: flex;
   justify-content: space-between;
   width: 1200px;
  }
.index-pro-in{
  width: 222px;
  height: 500px;
  position: relative;
}
/* 排行榜背景图开始 */
.index-pro-i{
  display: inline-block;
  width: 222px;
  height: 500px;
  background: url('../assets/handeximg/bg_index.jpg') 0px 0;
}
.index-pro-bg{
   background: url('../assets/handeximg/bg_index.jpg') 224px 0;
}
.index-pro-san{
   background: url('../assets/handeximg/bg_index.jpg') -224px 0;
}
.index-pro-si{
  background: url('../assets/handeximg/bg_index.jpg') -448px 0;
}
.index-pro-wu{
  background: url('../assets/handeximg/bg_index.jpg') -672px 0;
}
/* 排行版背景图结束 */
.index-pro-center{
  position: absolute;
  top: 30%;
  left: 17%;
}
.index-pro-center li{
  width:140px;
  height: 45px;
  padding: 20px 0;
}
.index-pro-left a{
  display: inline-block;
  text-decoration: none;
  color: #fff;
}
.index-pro-left{
  width: 100px;
  font-size:24px;
  position: absolute;
  top: -100px;
  left: 10%;
}
.index-pro-center li a{
  color: #fff;
  display: inline-block;
  text-decoration: none;
}
.index-pro-ul{
  margin: 10px 0;
}
.index-pro-ul li{
  display: flex;
}
.index-pro-ul li div:first-child{
  padding-right:10px;
  color: #fff;
}
.index-pro-au{
  text-align: left;
  width: 150px;
 -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.index-pro-au a:first-child{
  width: 150px;
}
.index-pro-top{
  width:100px;
  height: 49px;
  text-align: center;
  position: relative;
}
.index-pro-ii::after{
    display: inline-block;
    content: "";
    background: #fff;
    width: 2px;
    height: 40px;
   transform:rotate(-90deg) ;
   margin: 10px 0;
}
.index-pro-iii{
  position: absolute;
  display: inline-block;
  background: url('../assets/handeximg/cover_play.png');
  object-fit: cover;
  width: 70px;
   left: 15px;
  top: 0;
  height:70px;
  opacity: 0;
}
.index-pro-poen:hover .index-pro-iii{
  transition: .7s;
  transform: scale(0.7);
 opacity: 1;
}
.index-pro-ii:hover::after{
  display: none;
}
/* 排行榜结束 */
/* 第五个轮播图开始 */
.swiper-wu:hover .left{
  display: block;
}
.swiper-wu:hover .right{
  display: block;
}
.index-fun{
  position: relative;
}
.index-fun-left,.index-fun-right{
  position: absolute;
  top: 39%;
}
/* 第五个轮播图结束 */


</style>
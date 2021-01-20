<template>
  <div class="han-Xinde">
     <div class="Xinde">
       <div class="xinde_sty">
         <ul>
           <div>
           <li class="xidex_top"><a href="#">巅峰榜</a></li>
           <li v-for="(p,i) of str" :key="i" class="xindex_li"><a href="#">{{p}}</a></li>
           </div>
             <div>
            <li class="xidex_top"><a href="#">地区榜</a></li>
             <li v-for="(p,z) of strs" :key="z"><a href="#">{{p}}</a></li>
             </div>
             <div>
             <li class="xidex_top"><a href="#">特色榜</a></li>
           <li v-for="(p,u) of strss" :key="u"><a href="#">{{p}}</a></li>
             </div>
             <div>
             <li class="xidex_top"><a href="#">全球榜</a></li>
            <li v-for="(p,s) of sty" :key="s"><a href="#">{{p}}</a></li>
             </div>
         </ul>
       </div>
       <div class="center">
         <div class="center_h1">
           <h1>流行指数榜</h1>
           <span>2020-12-11</span><span>榜单规则</span>
         </div>
         <div class="xinde_center">
           <a href="#" class="center_a  center_top">
             <i class="i"></i>
             播放全部
              </a>
           
           <a href="#" class="center_a">
             <i class="ii"></i>
             添加到</a>
           <a href="#" class="center_a">
             <i class="iii"></i>
             下载</a>
           
           <a href="#" class="center_a">
             <i class="iiii"></i>
             批量操作</a>
           
           <a href="#" class="center_a center_vi">
             <i class="iiiii"></i>
             评论(249709)</a>
         </div>
         <div class="center_button">
             <ul class="center_lu">
               <li class="center_li">歌曲</li>
               <li class="center_lh">歌手</li>
               <li>时长</li>
             </ul>
             <ul v-for="(p,i) of unm" :key="i" class="center_lu_bu">
               <li class="center_sty">
                 <span class="my-center">{{p.sz}}</span>
                 <i></i>
                <span class="my-span">{{p.pdf}}<i class="center-i"></i></span>
                 <img v-lazy="require(`../assets/Xindeimg/${p.img}`)" alt="">
                   <span class="my-center-span">{{p.title}}</span>
                   <span>{{p.dujia?"MV":"独家"}}</span>
                   <span></span>
                   <div class="my-width">
                     <i class="my-ai"></i>
                     <i class="my-bi"></i>
                     <i class="my-ci"></i>
                     <i class="my-di"></i>
                   </div>
                  </li>
                   <span class="center_span">{{p.name}}</span>
                   <span class="center_post">04:58</span>
             </ul>
             <div class="my-bottom">
               <p>查看更多内容，请下载客户端</p>
               <a href="">立即下载</a>
             </div>
             <div>
                <h2>
                  评论
                  <span  class="my-pons">共249611条评论</span>
                </h2>
             </div>
             <div class="my-pl">
               <div>
                 <input type="text" placeholder="期待你的神评论……">
               </div>
               <div class="my-ply">
                 剩余
                 <span>300</span>
                 字
               </div>
               </div>
                 <div class="miao">
                   <a href="">
                   <i class="miao-i"></i>
                   </a>
                   <a href="javascript:;" class="miao-a">发表评论</a>
             </div>
            <div>
              <h4>最新评论(249605)</h4>
            </div>
             <div>
               <ul class="miao-ul">
                 <li v-for="(p,i) of pl" :key="i" class="miao-li">
                   <div class="miao-img">
                     <img v-lazy="require(`../assets/Xindeimg/${p.img}`)" alt="">
                     </div>
                     <div class="miao-p">
                     <p>{{p.title}}</p>
                     <p>{{p.prcor}}</p>
                     <p>{{p.shiji}}<span></span></p>
                     </div>
                 </li>
               </ul>
             </div>
         </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{
      str:['飙升榜','热歌榜','新歌榜','流行指数榜','听歌识曲榜','MV榜'],
      strs:['内地榜','香港地区榜','台湾地区榜','日本榜','韩国榜'],
      strss:['特色榜','网络歌曲榜','DJ舞曲榜','Q音快手榜','抖音排行榜','综艺新歌榜','影视金曲榜','国风热歌榜','说唱榜','电音榜','动漫音乐榜','游戏音乐榜','达人音乐榜','K歌金曲榜','腾讯音乐人原创榜'],
      sty:['美国公告牌榜','美国iTunes榜','韩国Melon榜','英国UK榜','日本公信榜','JOOX本地热播榜','香港商台榜','台湾KKBOX榜','YouTube音乐排行榜'],
      unm:[
        {
        img:"1.jpg",
        title:"如果声音不记得",
        name:"吴青峰",
        sz:"1",
        pdf:" 239%",
        dujia:"1",
        },
         {
        img:"2.jpg",
        title:"阿拉斯加海湾",
        name:"蓝心羽",
        sz:"2",
        pdf:" 239%"
        },
         {
        img:"3.jpg",
        title:"Easy",
        name:"Troye Sivan",
        sz:"3",
        pdf:" 239%"
        },
         {
        img:"4.jpg",
        title:"醒不来的梦",
        name:"回小仙",
        sz:"4",
        pdf:" 239%",
        dujia:"1",
        MV:"2"
        },
         {
        img:"5.jpg",
        title:"错季",
        name:"秋原依",
        sz:"5",
        pdf:" 239%"
        },
         {
        img:"6.jpg",
        title:"踏山河",
        name:"薛之谦",
        sz:"6",
        pdf:" 239%"
        },
         {
        img:"7.jpg",
        title:"坠",
        name:"你的大表哥曲甲",
        sz:"7",
        pdf:" 239%"
        },
         {
        img:"8.jpg",
        title:"董小姐",
        name:"宋东野",
        sz:"8",
        pdf:" 239%"
        },
         {
        img:"9.jpg",
        title:"平凡之路",
        name:"朴树",
        sz:"9",
        pdf:" 239%"
        },
         {
        img:"10.jpg",
        title:"后会无期",
        name:"邓紫棋",
        sz:"10",
        pdf:" 239%"
        },
         {
        img:"11.jpg",
        title:"成都",
        name:"赵雷",
        sz:"11",
        pdf:" 239%"
        },
         {
        img:"12.jpg",
        title:"我们一起走过的",
        name:"苏打绿",
        sz:"12",
        pdf:" 239%"
        }, 
         {
        img:"13.jpg",
        title:"虚拟",
        name:"王贰浪",
        sz:"13",
        pdf:" 239%"
        },
         {
        img:"14.jpg",
        title:"听妈妈的话",
        name:"周杰伦",
        sz:"14",
        pdf:" 239%"
        },
         {
        img:"15.jpg",
        title:"春夏秋冬",
        name:"张国荣",
        sz:"15",
        pdf:" 239%"
        }, 
         {
        img:"16.jpg",
        title:"遇见",
        name:"孙燕姿",
        sz:"16",
        pdf:" 239%"
        },
         {
        img:"17.jpg",
        title:"安河桥",
        name:"宋东野",
        sz:"17",
        pdf:" 239%"
        }, 
         {
        img:"18.jpg",
        title:"傻女",
        name:"李克勤",
        sz:"18",
        pdf:" 239%"
        },
         {
        img:"6.jpg",
        title:"你在烦恼什么",
        name:"苏打绿",
        sz:"19",
        pdf:" 239%"
        }, 
         {
        img:"9.jpg",
        title:"起风了",
        name:"周深",
        sz:"20",
        pdf:" 239%"
        },
      ],
      pl:[
        {
       img:"b.jpg",
       title:"奥巴马",
       prcor:"好听",
       shiji:"1月02日 05:01"
        },
         {
       img:"c.jpg",
       title:"特朗普",
       prcor:"非常好",
       shiji:"5月05日 11:37"
        },
         {
       img:"d.jpg",
       title:"拜登",
       prcor:"很棒呀",
       shiji:"3月12日 1:37"
        },
         {
       img:"h.jpg",
       title:"马克龙",
       prcor:"真好听",
       shiji:"2月12日 11:37"
        },
         {
       img:"e.jpg",
       title:"习近平",
       prcor:"国家栋梁",
       shiji:"11月12日 6:37"
        },
         {
       img:"f.jpg",
       title:"普京",
       prcor:"очень хорошо",
       shiji:"4月12日 12:37"
        },
         {
       img:"g.jpg",
       title:"特鲁多",
       prcor:"beyond compare",
       shiji:"1月12日 18:37"
        },
          {
       img:"g.jpg",
       title:"彭明盟",
       prcor:"好好好好",
       shiji:"12月30日 8:23"
        },
      ],
    }
  }
  
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.han-Xinde{
  width: 100%;
  background: #f6f6f6;
  padding-top:40px ;
}
.Xinde{
  width: 1200px;
  display: flex;
  margin: 0 auto;
}
.Xinde ul{
  width:180px;
  border:1px solid #c9c9c9;
  height: 1696px;
}
ul{
 list-style: none;
 padding: 0;
 margin:0;
}
.xidex_top{
  width: 144px;
  height: 61px;
  border-bottom:1px solid #c9c9c9 ;
  margin:0px 15px 15px ;
  padding: 0px !important;
  line-height: 61px;
  font-size: 20px;
}
.center_h1{
  display: flex;
 align-items: center;
 height: 64px;

}
.center_h1 h1{
  padding: 0px 15px;
}
.Xinde ul li a{
  text-decoration: none;
  color: #000;
  font-size: 15px;
  font-weight: 100;
}
.Xinde ul li a:hover{
  color: #31c27c;
}

.xindex_li:nth-child(4){
  background: #31c27c;
  color: #fff;
}

.Xinde .xinde_sty ul li{
  padding: 8.5px 17px;
}
.xinde_center{
text-align: center;
position: relative;;
width:736px;
}
.xinde_center a{
  text-decoration: none;
   margin: 0px 5px;
  display: inline-block;
}
 .center_top{
 background: #31c27c;
 border: 0;
}
.center_a:first-child{
  color: #fff;
}
.center_a{
  width: 123px;
  color: #000;
  height: 25px;
  text-align: center;
  padding: 5px 0px;
  padding-left: 3px;
  border-radius: 2px;
  border: 1px solid #c3c3c3;
}
.center_vi{
  width: 169px;
}
.xinde_center .i{
   position: absolute;
   width: 13px;
    height: 19px;
    vertical-align: -3px;
    background: url('../assets/Xindeimg/icon_sprite.png') 121px 123px;
    left: 15px;
}

.xinde_center .ii{
   position: absolute;
   width: 21px;
    height: 19px;
    vertical-align: -3px;
    background: url('../assets/Xindeimg/icon_sprite.png') -16px 2px;
    left: 155px;
}

.xinde_center .iii{
   position: absolute;
   width: 21px;
    height: 19px;
    vertical-align: -3px;
    background: url('../assets/Xindeimg/icon_sprite.png') -37px -218px;
    left: 301px;
}

.xinde_center .iiii{
   position: absolute;
   width: 21px;
    height: 19px;
    vertical-align: -3px;
    background: url('../assets/Xindeimg/icon_sprite.png') -116px 4px;
    left: 422px;
}

.xinde_center .iiiii{
   position: absolute;
   width: 21px;
    height: 19px;
    vertical-align: -1px;
    background: url('../assets/Xindeimg/icon_sprite.png') -136px -118px;
    left: 572px;
    margin-top:2px ; 
}
.center_button ul{
  width: 990px;
  height: 50px;
  display: flex;
  border: 0;
  font-size: 14px;
}
.center_li{
  width: 536px;
  margin-left: 140px;
  color: #999;
}
.center_lh{
  width: 197px;
}
.center_button .center_lu_bu{
  height: 80px;
  padding: 0px !important;
}
.center_button .center_lu_bu:nth-child(even){
  background: #fff;
}

.center_button .center_lu_bu li img{
  width: 70px;
  height: 70px;
}
.center_sty{
  width: 647px;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
}
.center_span{
  width: 225px; 
}
.center_post{
  color: #999;
  font-size: 14px;
}
.my-center{
  padding: 20px;
  color:#333;
  font-size: 24px;
   width: 20px;
}
.my-center:nth-child(-n+1){
  color: #ff4222;
}
.my-span{
  width: 80px;
  height: 40px;
  line-height: 40px;
  position: relative;
  color: #999;
  font-size: 12px;
}
 .center_lu_bu .my-center-span{
  padding: 0px 10px;
}
.my-span .center-i{
  display: block;
  background: url('../assets/Xindeimg/icon_rank.png') no-repeat center;
  background-position: 0px -60px;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 15px;
  top: -2px;
}
/* hover效果 */
.my-width{
  width:220px;
  height: 36px;
  line-height: 36px;
  position: absolute;
  right: 0;
  display: none;
}
.center_lu_bu li:hover .my-width{
  display: block;
}
.my-width i{
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0px 5px;
}
.my-ai{
  background: url('../assets/Xindeimg/1.png') no-repeat center;
   background-position: 0px 0px;
}
.my-ai:hover{
   background-position: -40px 0px;
}

.my-bi{
 background: url('../assets/Xindeimg/1.png') no-repeat center;
  background-position: -0px -80px;
}
.my-bi:hover{
  background-position: -40px -80px;
}

.my-ci{
 background: url('../assets/Xindeimg/1.png') no-repeat center;
  background-position: 0px -280px;
}
.my-ci:hover{
  background-position: -40px -280px;
}
.my-di{
  background: url('../assets/Xindeimg/1.png') no-repeat center;
  background-position: 0px -40px;
}
.my-di:hover{
  background-position: -40px -40px;
}
/* 底部 */
.my-bottom{
  text-align: center;
  color: #000;
  font-size: 18px;
  /* background: #fff; */
  height: 150px;
  padding-bottom: 30px;
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
.my-pl{
  border: 1px solid #c9c9c9;
  height: 102px;
  /* background: #f5f5f5; */
  position: relative;
}
.my-pl input{
  border: 0;
  outline: 0;
  padding-left: 10px;
  /* background: #f5f5f5; */
  width: 990px;
  padding-bottom:80px ;
}
.my-ply{
  position: absolute;
  right: 4px;
  bottom:5px;
  font-size: 14px;
  color: #999;
}
.my-ply span{
  color: #31c27c;
}
h2{
  font-weight: 200;
  margin-bottom: 10px;
}
.my-pons{
  font-size: 14px;
  color: #999;
}
.miao{
 position: relative;
 width: 990px;
 height: 50px;
}
.miao-i{
  background: url('../assets/Xindeimg/p.png') 0px 0px;
  display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: -1px;
    background-position: 0 0;
    position: absolute;
    right: 89px;
    margin-top: 13px;
}
.miao-a{
  width: 80px;
  height: 27px;
  border-radius:2px ;
 background: #31c27c;
 display:inline-block;
 text-decoration: none;
 color: #fff;
 text-align: center;
 position: absolute;
 right: 0;
 font-size: 14px;
 line-height: 27px;
 margin-top: 10px;
}
/* 评论 */
.center_button .miao-ul{
    flex-wrap: wrap;
    height: 1000px;
}
.center_button .miao-ul .miao-li{
    height: 109px; 
    width: 990px;
    display: flex;
    align-items: center;
    border-bottom: 0.1px solid #EDEDED;
}
.miao-li img{
  width: 38px;
  height: 38px;
  border-radius: 50%;
  padding: 10px 20px 0;
}
.miao-p{
   color: #999;
}
.miao-p p:nth-child(2){
  margin: 5px 0;
  color: #333;
}
</style>
<template>
  <div>
     <div class="Mestr_ul">
       <div>
        <h2>最新上架</h2>
        </div>
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div class="top">
           <img v-lazy="require(`../assets/Shuzuimg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <p><a href="#">{{p.shij}}</a></p>
            <div class="Shuzu">
              <a href="#">立即购买</a>
            </div>
         </li>
       </ul>
     </div>
     <div class="Mestr_ul">
       <div>
        <h2>本周热销</h2>
        </div>
       <ul>
         <li v-for="(p,i) of unm" :key="i">
           <div class="top">
           <img v-lazy="require(`../assets/Shuzuimg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <p><a href="#">{{p.shij}}</a></p>
            <div class="Shuzu">
              <a href="#">立即购买</a>
            </div>
         </li>
       </ul>
     </div>
       <div class="Mestr_ul">
       <div>
        <h2>音乐人专区</h2>
        </div>
       <ul>
         <li v-for="(p,i) of yinyue" :key="i">
           <div class="top">
           <img v-lazy="require(`../assets/Shuzuimg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <p><a href="#">{{p.shij}}</a></p>
            <div class="Shuzu">
              <a href="#">立即购买</a>
            </div>
         </li>
       </ul>
     </div>
      <div class="Mestr_ul">
       <div>
        <h2>2019内地专辑推荐</h2>
        </div>
       <ul>
         <li v-for="(p,i) of qu" :key="i">
           <div class="top">
           <img v-lazy="require(`../assets/Shuzuimg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <p><a href="#">{{p.shij}}</a></p>
            <div class="Shuzu">
              <a href="#">立即购买</a>
            </div>
         </li>
       </ul>
     </div>
  </div>
</template>
<script>
export default {
   components:{
   },
   data(){
     return{
       imgs:[
         {
          img:"6.jpg",
          title:"南山雪",
          titlu:"叶里",
          shij:"2020-12-11"
         },
          {
          img:"7.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
          shij:"2020-12-11"
         },
          {
          img:"8.jpg",
          title:"江湖有侠",
          titlu:" / 汐音社",
          shij:"2020-12-11"
         },
          {
          img:"9.jpg",
          title:"一步之遥 (East)",
          titlu:"阿布",
          shij:"2020-12-11"
         },
          {
          img:"10.jpg",
          title:"无间行者之生死潜行",
          titlu:"王侠",
          shij:"2020-12-11"
         }, 
       ],
       unm:[
         {
          img:"12.jpg",
          title:"南山雪",
          titlu:"叶里",
          shij:"2020-12-11"
         },
          {
          img:"18.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
          shij:"2020-12-11"
         },
          {
          img:"9.jpg",
          title:"江湖有侠",
          titlu:"李常超（Lao乾妈",
          shij:"2020-12-11"
         },
          {
          img:"19.jpg",
          title:"一步之遥 (One)",
          titlu:"阿布",
          shij:"2020-12-11"
         },
          {
          img:"6.jpg",
          title:"无间行者之生死潜行",
          titlu:"王侠",
          shij:"2020-12-11"
         }, 
       ],
        yinyue:[
         {
          img:"13.jpg",
          title:"南山雪",
          titlu:"叶里",
          shij:"2020-12-11"
         },
          {
          img:"14.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
          shij:"2020-12-11"
         },
          {
          img:"15.jpg",
          title:"江湖有侠",
          titlu:"李常超（Lao乾妈",
          shij:"2020-12-11"
         },
          {
          img:"16.jpg",
          title:"一步之遥 ( East)",
          titlu:"阿布",
          shij:"2020-12-11"
         },
          {
          img:"17.jpg",
          title:"无间行生死潜行",
          titlu:"王侠",
          shij:"2020-12-11"
         }, 
       ],
        qu:[
         {
          img:"23.jpg",
          title:"南山雪",
          titlu:"叶里",
          shij:"2020-12-11"
         },
          {
          img:"24.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
          shij:"2020-12-11"
         },
          {
          img:"25.jpg",
          title:"江湖有侠",
          titlu:"李常超（Lao乾妈",
          shij:"2020-12-11"
         },
          {
          img:"26.jpg",
          title:"一步之遥p East)",
          titlu:"阿布",
          shij:"2020-12-11"
         },
          {
          img:"27.jpg",
          title:"无间行者行 电影原声带配乐",
          titlu:"王侠",
          shij:"2020-12-11"
         }, 
       ]
     }
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
.Mestr_ul{
  width: 1200px;
  margin: 0 auto;
}
  .Mestr_ul ul{
  width: 1220px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  height: 350px;
}
.Mestr_ul ul li{
  width: 224px;
  height: 349px;
  position: relative;
   margin-right: 20px;
   padding-bottom:20px ;
}
.Mestr_ul ul li img{
  width: 224px;
  height: 224px;
}
.Mestr_ul ul li i{
    position: absolute;
    left: 50%;
    top: 32%;
    margin: -35px;
    width: 70px;
    height: 70px;
  background: url('../assets/Mestrimg/20.png');
   display: none;
}
.Mestr_ul ul li .top:hover i{
   display: block;
    transition: all ease-in-out .3s;
}
.Mestr_ul ul li .top:hover img{
    transition: 1s;
    transform: scale(.9) translateZ(0);
    transition: .75s;
}
.Mestr_ul ul li p a{
  display: block;
  text-decoration: none;
  color: #999;
}
.Mestr_ul ul li .Mestr_p a{
  color: #000;
}

.Shuzu a{
  text-decoration: none;
  position: absolute;
  right: 0;
  top: 72%;
  color: #000;
  font-size: 12px;
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
}
h2{
  font-weight: 300;
}
</style>
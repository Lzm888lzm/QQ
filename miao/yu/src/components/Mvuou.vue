<template>
  <div>
     <div class="Mestr_ul">
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div>
           <img v-lazy="require(`../assets/mvimg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <div><em class="Mestr-i"></em><span>378</span> 2021-01-19</div>
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
          img:"1.jpg",
          title:"不屑・NEVERMIND",
          titlu:"叶里",
         },
          {
          img:"2.jpg",
          title:"不屑・NEVERMIND",
          titlu:"李玉刚",
         },
          {
          img:"3.jpg",
          title:"不屑・NEVERMIND",
          titlu:"李常超（Lao乾妈） / 汐音社",
         },
          {
          img:"4.jpg",
          title:"不屑・NEVERMIND",
          titlu:"阿布",
         },
          {
          img:"5.jpg",
          title:"不屑・NEVERMIND",
          titlu:"王侠",
         },
          {
          img:"6.jpg",
          title:"不屑・NEVERMIND",
          titlu:"吾恩",
         },
          {
          img:"7.jpg",
          title:"不屑・NEVERMIND",
          titlu:"崔雨鑫",
         },
          {
          img:"8.jpg",
          title:"不屑・NEVERMIND",
          titlu:"喻昕可",
         },
          {
          img:"9.jpg",
          title:"不屑・NEVERMIND",
          titlu:"李飘飘",
         },
          {
          img:"10.jpg",
          title:"不屑・NEVERMIND！",
          titlu:"藤新",
         },
         {
          img:"11.jpg",
          title:"不屑・NEVERMIND",
          titlu:"叶里",
         },
          {
          img:"12.jpg",
          title:"不屑・NEVERMIND",
          titlu:"李玉刚",
         },
          {
          img:"13.jpg",
          title:"不屑・NEVERMIND",
          titlu:"李常超（Lao乾妈） / 汐音社",
         },
          {
          img:"14.jpg",
          title:"不屑・NEVERMIND",
          titlu:"阿布",
         },
          {
          img:"15.jpg",
          title:"不屑・NEVERMIND",
          titlu:"王侠",
         },
          {
          img:"16.jpg",
          title:"不屑・NEVERMIND",
          titlu:"吾恩",
         },
          {
          img:"17.jpg",
          title:"不屑・NEVERMIND",
          titlu:"崔雨鑫",
         },
          {
          img:"18.jpg",
          title:"不屑・NEVERMIND",
          titlu:"喻昕可",
         },
          {
          img:"19.jpg",
          title:"不屑・NEVERMIND",
          titlu:"李飘飘",
         },
          {
          img:"20.jpg",
          title:"不屑・NEVERMIND！",
          titlu:"藤新",
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
  .Mestr_ul ul{
  width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  color: #999;
}
.Mestr_ul ul li {
  width: 305px;
  height: 285px;
  position: relative;
}
.Mestr_ul ul li img{
  width: 285px;
  height: 161px;
  object-fit: cover;
}
.Mestr_ul ul li i{
    position: absolute;
    left: 50%;
    top: 25%;
    margin: -35px;
    width: 70px;
    height: 70px;
   background: url('../assets/Mestrimg/20.png');
    display: none;
}
.Mestr_ul ul li>div:hover i{
    display: block;
     transform: scale(.7) translateZ(0);
  transition-duration: .5s;
  zoom: 1;
}
.Mestr_ul ul li>div:hover img{
    transition: 1s;
    transform: scale(.9) translateZ(0);
    transition: .75s;
}
.Mestr_ul ul li p a{
  display: block;
  text-decoration: none;
  color: #999;
}
.Mestr_p{
    margin-top:10px ;
}
.Mestr-i{
    display: inline-block;
    background: url('../assets/icon_sprite.png')no-repeat;
    width: 19px;
    height: 12px;
    background-position: -180px -20px;
    margin-right: 5px;
    vertical-align: -1px;
}
</style>
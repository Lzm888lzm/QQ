<template>
  <div>
     <div class="Mestr_ul">
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div>
           <img :src="require(`../assets/handeximg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
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
          title:"南山雪",
          titlu:"叶里",
         },
          {
          img:"2.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
         },
          {
          img:"3.jpg",
          title:"江湖有侠",
          titlu:"李常超（Lao乾妈） / 汐音社",
         },
          {
          img:"4.jpg",
          title:"一步之遥 (One Step East)",
          titlu:"阿布",
         },
          {
          img:"5.jpg",
          title:"无间行者之生死潜行 电影原声带配乐",
          titlu:"王侠",
         },
          {
          img:"6.jpg",
          title:"方圆",
          titlu:"吾恩",
         },
          {
          img:"7.jpg",
          title:"天天想你",
          titlu:"崔雨鑫",
         },
          {
          img:"8.jpg",
          title:"当世界倾塌",
          titlu:"喻昕可",
         },
          {
          img:"9.jpg",
          title:"十二月的风铃",
          titlu:"李飘飘",
         },
          {
          img:"10.jpg",
          title:"秦王不要啊！项王不要啊！",
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
}
.Mestr_ul ul li {
  width: 224px;
  height: 300px;
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
.Mestr_ul ul li:hover i{
   display: block;
    transition: all ease-in-out .3s;
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
.Mestr_ul ul li .Mestr_p a{
  color: #000;
}
</style>
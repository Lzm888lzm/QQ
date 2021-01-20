<template>
  <div>
     <div class="Mestr_ul">
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div>
           <img v-lazy="require(`../assets/cityimg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <p><a href="#">{{p.shij}}</a></p>
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
          img:"1s.jpg",
          title:"南山雪",
          titlu:"叶里",
          shij:"2020-12-11"
         },
          {
          img:"2s.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
          shij:"2020-12-11"
         },
          {
          img:"3s.jpg",
          title:"江湖有侠",
          titlu:"李常超（Lao乾妈） / 汐音社",
          shij:"2020-12-11"
         },
          {
          img:"4s.jpg",
          title:"一步之遥 (One Step East)",
          titlu:"阿布",
          shij:"2020-12-11"
         },
          {
          img:"5s.jpg",
          title:"无间行者之生死潜行 电影原声带配乐",
          titlu:"王侠",
          shij:"2020-12-11"
         },
          {
          img:"6s.jpg",
          title:"方圆",
          titlu:"吾恩",
          shij:"2020-12-11"
         },
          {
          img:"7s.jpg",
          title:"天天想你",
          titlu:"崔雨鑫",
          shij:"2020-12-11"
         },
          {
          img:"8s.jpg",
          title:"当世界倾塌",
          titlu:"喻昕可",
          shij:"2020-12-11"
         },
          {
          img:"9s.jpg",
          title:"十二月的风铃",
          titlu:"李飘飘",
          shij:"2020-12-11"
         },
          {
          img:"10s.jpg",
          title:"秦王不要啊！项王不要啊！",
          titlu:"藤新",
          shij:"2020-12-11"
         },
           {
          img:"1s.jpg",
          title:"篮板王",
          titlu:"NeverLu",
          shij:"2020-12-11"
         },
          {
          img:"2s.jpg",
          title:"Secret Lover",
          titlu:"大波浪",
          shij:"2020-12-11"
         },
          {
          img:"3s.jpg",
          title:"路",
          titlu:"蔡程昱上海彩虹室内合唱团",
          shij:"2020-12-11"
         },
          {
          img:"4s.jpg",
          title:"未来的路",
          titlu:"痛仰乐队",
          shij:"2020-12-11"
         },
          {
          img:"5s.jpg",
          title:"Hero",
          titlu:"XXXL/L4WUDU",
          shij:"2020-12-11"
         },
          {
          img:"1s.jpg",
          title:"是少年",
          titlu:"曾吴秋杰",
          shij:"2020-12-11"
         },
          {
          img:"2s.jpg",
          title:"漩涡",
          titlu:"周韦彤",
          shij:"2020-12-11"
         },
          {
          img:"3s.jpg",
          title:"骗",
          titlu:"张珊珊",
          shij:"2020-12-11"
         },
          {
          img:"4s.jpg",
          title:"路",
          titlu:"蔡程昱上海彩虹室内合唱团",
          shij:"2020-12-11"
         },
          {
          img:"5s.jpg",
          title:"未来的路",
          titlu:"痛仰乐队",
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
  .Mestr_ul ul{
  width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.Mestr_ul ul li {
  width: 224px;
  height: 329px;
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
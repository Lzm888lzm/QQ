<template>
  <div>
    <div class="han-Mestr">
     <div class="Mestr_ul">
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div>
           <img v-lazy="require(`../assets/handeximg/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <p><a href="#">{{p.shij}}</a></p>
         </li>
       </ul>
     </div>
  </div>
  </div>
</template>
<script>
import { Pagination , Select } from 'element-ui';
export default {
   components:{
     [Pagination.naem]:Pagination ,
   },
   data(){
     return{
       imgs:[
         {
          img:"1.jpg",
          title:"南山雪",
          titlu:"叶里",
          shij:"2020-12-11"
         },
          {
          img:"2.jpg",
          title:"霓裳飞花",
          titlu:"李玉刚",
          shij:"2020-12-11"
         },
          {
          img:"3.jpg",
          title:"江湖有侠",
          titlu:"李常超（Lao乾妈） / 汐音社",
          shij:"2020-12-11"
         },
          {
          img:"4.jpg",
          title:"一步之遥 (One Step East)",
          titlu:"阿布",
          shij:"2020-12-11"
         },
          {
          img:"5.jpg",
          title:"无间行者之生死潜行 电影原声带配乐",
          titlu:"王侠",
          shij:"2020-12-11"
         },
          {
          img:"6.jpg",
          title:"方圆",
          titlu:"吾恩",
          shij:"2020-12-11"
         },
          {
          img:"7.jpg",
          title:"天天想你",
          titlu:"崔雨鑫",
          shij:"2020-12-11"
         },
          {
          img:"8.jpg",
          title:"当世界倾塌",
          titlu:"喻昕可",
          shij:"2020-12-11"
         },
          {
          img:"9.jpg",
          title:"十二月的风铃",
          titlu:"李飘飘",
          shij:"2020-12-11"
         },
          {
          img:"10.jpg",
          title:"秦王不要啊！项王不要啊！",
          titlu:"藤新",
          shij:"2020-12-11"
         },
           {
          img:"11.jpg",
          title:"篮板王",
          titlu:"NeverLu",
          shij:"2020-12-11"
         },
          {
          img:"12.jpg",
          title:"Secret Lover",
          titlu:"大波浪",
          shij:"2020-12-11"
         },
          {
          img:"13.jpg",
          title:"路",
          titlu:"蔡程昱上海彩虹室内合唱团",
          shij:"2020-12-11"
         },
          {
          img:"14.jpg",
          title:"未来的路",
          titlu:"痛仰乐队",
          shij:"2020-12-11"
         },
          {
          img:"15.jpg",
          title:"Hero",
          titlu:"XXXL/L4WUDU",
          shij:"2020-12-11"
         },
          {
          img:"16.jpg",
          title:"是少年",
          titlu:"曾吴秋杰",
          shij:"2020-12-11"
         },
          {
          img:"17.jpg",
          title:"漩涡",
          titlu:"周韦彤",
          shij:"2020-12-11"
         },
          {
          img:"18.jpg",
          title:"骗",
          titlu:"张珊珊",
          shij:"2020-12-11"
         },
          {
          img:"20.jpg",
          title:"漩涡",
          titlu:"周韦彤",
          shij:"2020-12-11"
         },
          {
          img:"19.jpg",
          title:"骗",
          titlu:"张珊珊",
          shij:"2020-12-11"
         },
        
       ]
     }
   }
}
</script>
<style  scoped>
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
}
.han-Mestr{
  width: 100%;
  background:#f6f6f6;
  padding-top: 40px;
}
.Mestr{
  width: 1200px;
  margin: 0 auto;
}
.Mestr ul{
  display: flex;
}
.Mestr ul li a{
  display: block;
  text-decoration: none;
  color: #000;
  padding: 0px 8px;
  margin: 0px 24px 15px 0px;
  font-size: 15px;
}

.Mestr ul  .Mestr_a a{
  background-color: #31c27c;
  color: #fff;
}
.Mestr_ul ul{
  width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.Mestr_ul ul li {
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
.Mestr_ul ul li>div:hover i{
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
  

<template>
  <div>
     <div class="Mestr_ul">
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div>
           <img v-lazy="require(`../assets/Radio/${p.img}`)" alt="">
            <i></i>
            </div>
            <p class="Mestr_p"><a href="#">{{p.title}}</a></p>
            <p><a href="#">{{p.titlu}}</a></p>
            <!-- <p><a href="#">{{p.shij}}</a></p> -->
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
          img:"12.jpg",
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"13.jpg",
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"14.jpg",
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"15.jpg",
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"16.jpg",
          title:"个性电台",
          titlu:"播放量：1933.8万",
         }
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
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height:640px;
}
.Mestr_ul ul li {
  width: 224px;
  height: 285px;
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
.Mestr_ul ul li:hover img{
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
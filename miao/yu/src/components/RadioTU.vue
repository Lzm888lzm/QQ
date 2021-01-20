<template>
  <div>
     <div class="Mestr_ul">
       <ul>
         <li v-for="(p,i) of imgs" :key="i">
           <div>
           <img v-lazy="require(`../assets/Radio/${p.img}`)" alt="">
            <i></i>
            </div>
            <p><a href=""></a></p>
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
          img:"1.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"2.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"3.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"4.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"5.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"6.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"7.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"8.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"9.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"10.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"11.jpg",
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"12.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"17.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"18.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"19.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"20.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"21.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"个性电台",
          titlu:"播放量：1933.8万",
         },
          {
          img:"22.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"16.jpg",
          titleu:'睡前治愈：小猪佩奇为你唱晚安曲',
          title:"热歌",
          titlu:"播放量：282万",
         },
          {
          img:"17.jpg",
          title:"个性电台",
          titlu:"播放量：1933.8万",
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
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.Mestr_ul ul li {
  width: 237px;
  height: 285px;
  position: relative;
   margin-right: 20px;
   padding-bottom:20px ;
}
.Mestr_ul ul li img{
  width: 224px;
  height: 224px;
}
.Mestr_ul ul li>div i{
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
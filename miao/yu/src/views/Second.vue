<template>
    <div>
     <div class="center">
         <div class="center_bg">
             <div class="center_h2">
             <h2>万千歌手尽在眼前</h2>
             <p>登录查看你关注的歌手</p>
             <a href="javascript:;" @click="imga=show=true">立即登录</a>
         </div>
         <Dun v-if="show" @cancel="show=false"></Dun>
         </div>
         <div class="center_zhong">
          <div class="center_a">
            <ul class="center_ul">
                <li v-for="(elem,index) of str" :key="index" @click="open=index" :class="open==index?'center_li':''"><a href="javascript:;">{{elem}}</a></li>
            </ul>
            <ul>
                <li v-for="(elem,index) of strs" :key="index" @click="add=index" :class="add==index?'center_li':''"><a href="javascript:;">{{elem}}</a></li>
            </ul>
            <ul>
               <li class="center_li"><a href="#">全部</a></li>
                <li v-for="(elem,index) of strss" :key="index"><a href="#">{{elem}}</a></li>
            </ul>
            <ul>
               <li class="center_li"><a href="#">全部</a></li>
                <li v-for="(elem,index) of strsss" :key="index"><a href="#">{{elem}}</a></li>
            </ul>
         </div>
         
         <div class="center_fro">
             <ul>
                 <li v-for="(p,i) of unm" :key="i">
                     <router-link to="/"><img v-lazy="require(`../assets/imgs/${p.img}`)" alt=""></router-link>
                     <a href="javascript:;">{{p.title}}</a>
                 </li>
             </ul>
         </div>
     </div>
     <div class="center_sty">
         <ul >
             <li v-for="(p,i) of unms" :key="i"><a href="#">{{p}}</a></li>
         </ul>
     </div>
     <div class="second">
         <ul>
            <el-pagination
     background
     layout="prev, pager, next"
     :total="1000">
  </el-pagination>
         </ul>
     </div>
     </div>
    </div>
</template>
<script>
import Dun from '../components/Dun'
export default {
    components:{
        Dun,
    },
    data(){
      return{
          show:false,
         str:['热门','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','x','Y','Z','#'],
         strs:['全部','内地','港台','欧美','日本','韩国','其他'],
         strss:['男','女','组合'],
         strsss:['流行','嘻哈','摇滚','民谣','R&B','民歌','轻音乐','爵士','古典','乡村','蓝调'],
         open:0,
         add:0,
         unm:[
             {
            img:"1.jpg",
            title:"周杰伦"
            },
             {
            img:"2.jpg",
            title:"花僮"
            },
             {
            img:"3.jpg",
            title:"任然"
            },
             {
            img:"4.jpg",
            title:"王靖雯不胖"
            },
             {
            img:"5.jpg",
            title:"薛之谦"
            },
             {
            img:"6.jpg",
            title:"陈奕迅"
            },
             {
            img:"7.jpg",
            title:"林俊杰"
            },
             {
            img:"8.jpg",
            title:"李荣浩"
            },
              {
            img:"9.jpg",
            title:"G.E.M. 邓紫棋"
            },
              {
            img:"10.jpg",
            title:"白小白"
            },
         ],
          unms:['蒋雪儿','汪苏泷','张信哲','BEYOND','Vicetone','莫文蔚','梁静茹','周华健','周杰伦','fhsd','周杰伦','fhaxv','张靓颖','BIGBANG (빅뱅)','李宗盛','周杰伦','周杰伦','程响','周杰伦','周杰伦','华晨宇','周杰伦','fhdf','周杰伦','周杰伦','陈雪凝','王一博','周杰伦','周杰伦','周深','魏新雨','绕十三','周杰伦','邓紫棋','孙燕姿','陈鸿宇','好妹妹','fghns','孙露','王杰','杨千嬅','陈雪凝','周杰伦','周杰伦','蒋敦豪','谭咏麟','jfsad','afJUJ','sghs','周杰伦','李建','水木年华','张国荣','宋冬野','比莉','The Chainsmokers','许巍','别话','赵雷','dhdg','bhzdfx ','oiuo伦','fgvsnm','周杰伦','虞姬','陈小春','房东的猫','蚂蚁森林','吴青峰','刘德华','张学友','王菲','wusac','周杰伦','poqow']
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
.center{
  margin-bottom: 20px;
      background: #FAFAFA;
}
 .center .center_bg{
     background: url(../assets/bg_singer.jpg);
     width: 100%;
     height: 376px;
 }
 .center_zhong{
     text-align: center;
     margin: 0 auto;
     background: #FAFAFA;
 }
 .center_h2{
     position: absolute;
     left: 38%;
     color: #fff;
     text-align: center;
     top: 255px;
 }
 .center_h2 h2{
   font-size: 56px;
   font-weight:  100;
 }
 .center_h2 p{
     font-size: 26px;
     padding: 15px 0;
 }
 .center_h2  a{
    display: block;
    text-decoration: none;
    color: #fff;
    width: 174px;
    height: 48px;
    border: 1px solid #ddd;
    line-height: 48px;
    margin-left: 135px;
 }
 .center_a{
     width: 1200px;
     margin: 10px auto;
     /* padding-left: 60px; */
     background: #fbfbfd;
 }
 .center_a ul li{
    padding-right: 30px;
 }
  .center_a ul{
     display: flex;
    padding-top:10px ;
  
 }
 .center_a ul li>a{
    display: block;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    font-weight:300;
 }
/* .center_a ul li>a:hover{
    color: #31c27c;
} */
 .center_a .center_li a{
     padding: 5px;
    background: #31c27c;
    color: #fff;
    margin-right: 10px;
}
/* 图片 */
.center_fro{
  width: 1200px;
  height: 534px;
   margin: 20px auto;
}
.center_fro ul{
   height: 534px;
    width: 1220px;
    display:flex;
    flex-wrap: wrap;
   text-align: center; 
}
.center_fro ul li a{
    display: block;
    text-decoration: none;
    color: #000;
    padding-top:15px ;
}
.center_fro ul li a:hover{
    color: #31c27c;
}
.center_fro ul li{
    width: 224px;
    height: 243px;
    background: #fbfbfd;
   margin-right: 20px;
}
.center_fro ul li img{
    margin-top: 20px;
    border-radius: 50%;
}
.center_sty{
    width: 1220px;
    height: 504px; 
    margin: 0 auto;
    padding-bottom: 50px;
}
.center_sty ul{
   display: flex;
   flex-wrap: wrap;

}
.center_sty li{
    width: 244px;
   height: 36px;
   line-height: 36px;
}
.center_sty li a{
    display: inline-block;
    text-decoration: none;
    color: #000;
    font-size: 14px;
}
.center_sty li a:hover{
    color: #31c27c;
}
.second ul{
    height: 50px;
    width: 1200px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

</style>
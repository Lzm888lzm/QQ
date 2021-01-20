<template>
    <div>
    <div class="Header">
        <div class="Hae_der">
           <div class="Hae_der_img">
            <img src="../assets/logo@2x.png" alt="">
           </div>
           <ul class="Hae_der_ul">
            <li class="Hea_der_ba"><router-link to="/">音乐馆</router-link></li>
            <li><router-link to="/wode">我的音乐</router-link></li>
            <li id="Hae_der_li">
            <a href="#">客户端</a>   
            <img class="Hae_der_li_img" src="../assets/mark_1 (1).png" alt="">
            <div class="Hea_der_div">
              <div class="Hea_der_span">
              <p><i class="p-i"></i> HQ高品质全员开启</p>
              <p><i class="p-ii p-i"></i>独家音效 全面升级</p>
              <p><i class="p-iii p-i"></i>轻盈视觉 动态皮肤</p>
              <p> <span class="Header_vi_span">下载体验</span></p>
              </div>
            </div>
            </li>
            <li><a href="#">开放平台</a></li>
            <li><a href="#">VIP</a></li>
           </ul>
            <div class="Hea_der_input">
              <div>                 
                                 <!--获取焦点        失去焦点 -->
              <input type="text"  @focus="add=true" @blur="add=false" placeholder="搜索音乐、MV、歌单、用户"> 
               <div v-show="add" class="han-der-text">
                  <p> <span class="Han-span">1</span><span class="Han-tilte"> 我们的歌</span> <span class="Han-price">20.3万</span> </p>
                  <p><span class="Han-span">2</span><span class="Han-tilte">冰雪奇缘2</span><span class="Han-price">58.7万</span></p>
                  <p><span class="Han-span">3</span> <span class="Han-tilte">张杰</span>  <span class="Han-price">28.8万</span></p>
                  <p><span class="Han-span">4</span> <span class="Han-tilte"> 桥边姑娘 </span><span class="Han-price">76.6万</span></p>
                  <p><span class="Han-span">5</span> <span class="Han-tilte"> 星辰大海</span> <span class="Han-price">32.4万</span></p>
                  <p><span class="Han-span">6</span> <span class="Han-tilte">莉莉安</span> <span class="Han-price">17.6万</span></p>
                  <p class="Han-p"><span class="Han-span"></span>搜索历史<i class="Han_i"></i></p>
               </div>
               </div>
              <button></button> 
        </div>
          <div class="Hea_der_a">
              <a href="#" @click="Dun=true">登录</a>
          </div>
          <div class="Han-Dun">
            <Dun v-show="Dun" @cancel="Dun=false"></Dun>
          </div>
              <div class="Hea_der_vip">
               <ul>
                   <li><a href="#">开通VIP</a>
                     <div class="Hea_der_p">
                         <p>开通绿砖豪华版</p>
                         <p>开通付费</p>
                     </div>
                   </li>
               </ul>
          </div>
          <div class="Hea_der_br">
              <ul>
                  <li>
                      <a href="#">充值</a>
                      <div class="Hea_der_brp">
                      <p>购买乐比</p>
                      <p>充值饭票</p>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
        <div class="top_ul">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/second">歌手</router-link></li>
        <li><router-link to="/mestr">新碟</router-link></li>
        <li><router-link to="/xinde">排行版</router-link></li>
        <li><router-link to="/classify">分类歌单</router-link></li>
        <li><router-link to="/radio">电台</router-link></li>
        <li><router-link to="/mvmio">MV</router-link></li>
        <li><router-link to="/shuzu">数字专辑</router-link></li>
        <li><router-link to="/Piaju">票务</router-link></li>
      </ul>
    </div>
    <div>
  </div>
        </div>
    </div>
</template>
<script>
 import Dun from './Dun'
export default {
  components:{
  Dun
  },
  data(){
    return{
      add:false,
      Dun:false,
    }
  }
}
</script>
<style scoped>
body,p,h2,h1,h3,h4,h5,ul,div,select,span,a{
  padding: 0;
  margin: 0;
}

a{
    text-decoration: none;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.Header{
  height: 143px;
  background: #fff;
}
.Hae_der{
    display: flex;
    width: 1200px;
    background: #fff;
    margin: 0 auto;
     height: 90px;
   align-items: center;
   border-bottom:1px solid #e9e9e9;
}
.Hae_der_img>img{
    width: 160px;
    height: 40px;
} 
.Hae_der ul li{
    padding: 20px 0;
}
.Hae_der ul li>a{
    display: block;
    text-decoration: none;
    padding: 16px 20px;
    font-size: 14px;
    color: #000000;
    
}   
.Hae_der_ul{
    display: flex;
      align-items: center;
}
.Hae_der_ul a:hover{
     color: #31c27c;
}

.Hae_der_li_img{
    position: absolute;
    top: 29px;
    margin-left: 57px;
     width: 37px;
    height: 14px;
   object-fit: cover;
}
 .Hea_der_div .Hea_der_span span{
    font-size: 10px;
}
 .Hea_der_ba{
    background: #31c27c;
}
  .Hae_der .Hea_der_ba a{
   color: #fff;
}
.Hea_der_span{
    margin-left:20px ;
    width: 130px;
    position: absolute;
    top: 75px;
    font-size:8px;
    padding: 10px 10px;
    line-height:20px;
    text-align: center;
    box-shadow: 0px 0px 5px #333;
    border-radius: 5px;
    display: none;   
}
.Header_vi_span{
    background: #31c27c;
    padding: 3px 30px;
    border-radius:20px ;
    color: #fff;
}
.Hae_der_ul #Hae_der_li:hover .Hea_der_span{
    display:block;
    background: #fff;
    z-index: 999;
}
.Hea_der_span p{
  padding: 5px 0;
}
.p-i{
    background: url('../assets/spr2.png');
    display: inline-block;
    vertical-align: -3px;
    margin-right: 9px;
    width: 14px;
    height: 14px;
    background-position: 0 0;
}
.p-ii{
  background-position: 0 -60px;
  margin-right: 16px;
}
.p-iii{
  background-position: 0 -30px;
  margin-right: 16px;
}
/* input提示框开始 */
.Hea_der_input{
  width: 220px;
  height: 34px;
  border: 1px solid #c9c9c9;
  outline: 0;
  display: flex;
  position: relative;
  color: #333;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 0px  20px 0px 35px;
  z-index: 999;
}
input{
  width: 173px;
  height: 30px;
  padding-left: 10px;
  outline: 0;
  border: 0; 
}
.han-der-text{
  width: 100%;
  background: #fff;
  z-index: 20;
  position: absolute;
  top: 33px;
  border: 1px solid #c9c9c9;
  border-top: none;
}
.han-der-text p{
  padding: 7px 0;
}
.han-der-text p:hover{
  background: #31c27c;
  color: #fff;
}
.Hea_der_input button{
    background: url(../assets/icon_sprite.png)no-repeat 10px -30px;
     width: 30px;
     height: 30px;
     outline: 0;
     border: 0;
     padding: 6px 0;
     position: absolute;
     right: 5px;
     top: -3px;
} 
.Han-span{
  color: red;
  padding: 0px 10px;
  font-size: 14px;
}
.Han-tilte{
   display: inline-block;
  width: 120px;
}
.Han-price{
  color: #999;
  font-size: 12px;
}
/* input框结束 */
.Hea_der_a a{
    display: block;
    text-decoration: none;
    color: #333;   
    padding: 0px 10px;
}

/* 开通VIP */
.Hae_der .Hea_der_vip li a{
    background: #31c27c;
    border-radius:2px;
    padding: 10px 35px;
    color: #fff;

}
.Hea_der_vip li a::after{
    content: "";
    width: 0px;
    height: 0px;
    border: 4px solid transparent;
    border-top-color:  #fff;
    position: absolute;
    margin: 7px  10px;
}
.Hea_der_p{
    position: absolute;
    display: none;
    font-size: 10px;
    text-align: center;
    width: 120px;
    height: 32px;
    
}
.Hea_der_p p{
    border: 1px solid #C9C9C9;
    padding: 7px 0;
    border-radius: 2px;
    background: #fff;
}
.Hea_der_p  p:last-child{
    border-top: 0;
}
.Hea_der_vip li:hover .Hea_der_p{
    display: block;
} 
.Hea_der_vip li :hover::after{
    transform: rotate(-180deg);
}
/* 充值 */
.Hae_der .Hea_der_br li{
    padding: 0px 10px;
    text-align: center;
}
.Hae_der .Hea_der_br li a:hover{
    background: #31c27c;
}
.Hae_der .Hea_der_br li a{
    border: 1px solid #c9c9c9;
    padding:10px 30px ;
    border-radius: 2px;
}
.Hea_der_br li a::after{
  content: "";
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: #333;
  position: absolute;
  margin: 6px 5px;
  
}
.Hea_der_br li:hover a::after{
    border-top-color: #fff;
    transform: rotate(-180deg);
}
.Hea_der_brp{
    position: absolute;
    font-size: 12px;
    width: 90px;
    display: none;
}
.Hea_der_br li:hover .Hea_der_brp{
    display: block;
}
.Hea_der_brp p{
    border: 1px solid #c9c9c9;
    padding: 5px 9px;
    background: #fff;
}
.Hae_der .Hea_der_brp p{
    border-top: 0;
}
.top_ul{
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
}
.top_ul ul{
    display: flex;
    font-size: 15px;
  }
.top_ul ul li:first-child {
  padding-left: 185px;
}
.top_ul ul>li{
  margin-right:42px ;
   padding: 5px 0; 
}
.top_ul ul>li a{
  display: block;
  text-decoration: none;
    color: #000000;
}
.top_ul ul>li a:hover{
   color: #31c27c;
}
.centre{
  text-align: center;
}

.top{
    min-width:780px; 
   
}
.Han-p{
  position: relative;
}
.Han_i{
  background: url("../assets/icon_sprite.png");
  position: absolute;
    top: 50%;
    right: 11px;
    margin-top: -8px;
    width: 16px;
    height: 16px;
    background-position: -100px 0;
}
/* .Han-Dun{
  position: fixed;
  z-index: 100;
  left: 30%;
  top: 30%;
} */
</style>
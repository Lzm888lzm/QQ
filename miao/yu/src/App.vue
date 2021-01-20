<template>
  <div id="app">
   <Header></Header>
    <div class="fixed">
      <img src="./assets/logo@2x.png" alt="">
      <p>千万高品质曲库尽享</p>
      <a href="javascript:;">
         <i></i>
        客户端下载
      </a>
    </div>
    <router-view/>
   <Botton></Botton> 
  </div>
</template>
<script>

import Botton from './components/Bottom'
import Header from './components/Header'
export default {
  components:{
    Header,
    Botton
  },
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.fixed{
  position: fixed;
  width: 165px;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0,0,0,.07);
  padding: 25px 12px;
  top: 164px;
  right: 40px;
  background-color:#fff ;
  border-radius: 4px;
  z-index: 999;
}
.fixed p{
  color: #a6a6a6;
  margin: 10px 0;
}
.fixed img{
 width: 102px;
 height: 27px;
}
.fixed a{
  display:inline-block;
  text-decoration: none;
  background: #31c27c;
  width: 130px;
  height: 26px;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
}
.fixed a:hover{
  opacity: 0.6;
}
.fixed a>i{
  display: inline-block;
  background: url('./assets/icon_sprite.png') no-repeat center;
  background-position: -160px -320px;
  width: 14px;
  height: 13px;
}
</style>

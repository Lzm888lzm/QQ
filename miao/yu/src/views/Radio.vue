<template>
  <div>
    <div class="han-Radio">
    <div class="Radio">
      <div class="Radio-post">
        <ul class="Radio-ul" v-for="(header,index) in 9" :key="index">
          <li v-for="(p,i) of add" :key="i"><a href="javascript:;">{{p}}</a></li>
        </ul>
      </div>
      <div class="Radio-get">
      <div class="Radio-get-hieght">
        <div class="Radio-top">
          <h2>热门<i></i></h2>
        </div>
          <div>
          <RadioTU></RadioTU>
          </div>
        </div>
      <div  v-for="(emle,index) of 4" :key="index">
        <div class="Radio-top">
          <h2>上午<i></i></h2>
        </div>
          <div>
          <Radiopost></Radiopost>
          </div>
        </div>
      </div>
        </div>
        </div>
  </div>
</template>
<script>
import RadioTU from '../components/RadioTU'
import Radiopost from '../components/Radiopost'
export default {
  components:{
  RadioTU,
  Radiopost

  },
  data(){
    return{
    add:["热门","上午","心情","主题","场景","曲风","语言","人群","乐器"]
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
.han-Radio{
  width: 100%;
  background: #f6f6f6;
  padding-top:40px ;
}
.Radio{
  width: 1200px;
  margin: 0 auto;
  display:flex;
  /* flex-wrap: wrap; */
  z-index: 9;
}
.Radio-post{
  width: 93px;
}
.Radio-ul{
 width:93px;
 height: 531px;
  background: url("../assets/Radio/1.png") no-repeat ;
}
.Radio-ul li a{
  height: 59px;
 display: block;
 text-decoration: none;
 color: #333;
 padding-left: 58px;
 line-height: 59px;
}
.Radio-get{
  /* width: 995px; */
  margin-left:112px ;
  margin-top: 16px;
}
.Radio-get-hieght{
  height: 1899px;
}
.Radio-top{
  margin-bottom: 30px;
}
.Radio-top h2{
  font-size: 15px;
  color: #999;
  font-weight: 300px;
  position: relative;
}
.Radio-top h2 i::before{
   content: "";
    position: absolute;
    height: 1px;
    overflow: hidden;
    left: 43px;
    right: 0;
    top: 10px;
    background-color: #ececec;
}

</style>
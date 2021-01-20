<template>
    <div>
    <div class="yu-mv">
    <div class="yu-mv-conter">
        <div>
            <ul class="yu-mv-ul">
                <li><a href="javascript:;">区域</a></li>
                <li v-for="(item,index) in MV" :key="index" @click="add=index"><a href="#" :class="add==index?'title':''">{{item}}</a></li>
            </ul>
            <ul class="yu-mv-ul">
                 <li><a href="javascript:;">区域</a></li>
                <li v-for="(item,index) in BV" :key="index" @click="open=index"><a href="#" :class="open==index?'titile_bottom':''">{{item}}</a></li>
            </ul>
        </div>
        <div class="yu-mv-top">
            <div class="yu-mv-h2">
                <h2>全部MV</h2>
            </div>
            <div class="yu-mv-a">           
                     <!-- 动态class样式 三目运算判断                                               点击 判断循环的下标位置   -->
                <a href="javascript:;" :class="index==ctive?'top':'' " v-for="(item,index) of nav" :key="index" @click="ctive=index">{{item}}</a>
            </div>
        </div>
        <mvuou v-if="ctive"></mvuou>
      <mvuous v-else></mvuous> 
        </div>
        </div>
    </div>
</template>
<script>
import Mvuou from '../components/Mvuou'
import Mvuous from '../components/Mvuous'
export default {
 components:{
     Mvuou,
     Mvuous
    },
    data(){
    return{
      MV:["全部","内地","港台","欧美","韩国","日本"],
      BV:["全部","MV","现场","翻唱","舞蹈","影视","综艺","儿歌"],
      nav:["最新","最热"],
      ctive:0,
      add:0,
      open:0
    }
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
}
.yu-mv{
    width: 100%;
    background: #F6F6F6;
}
.yu-mv-conter{
    width: 1200px;
    margin: 0px auto;
    padding-top: 40px;
}
.yu-mv-ul{
    display: flex;  
}
.yu-mv-ul li{
    margin: 0px 24px 15px 0;
}
.yu-mv-ul li a{
    display: inline-block;
    text-decoration: none;
    color: #000;
    font-size: 14px;
}
.yu-mv-ul li .title{
 background: #31c27c;
  color: #fff;
  padding: 3px 5px;

}

.yu-mv-top{
    display: flex;
    justify-content: space-between;
    margin: 10px 0 20px;
}
.yu-mv-h2 h2{
 font-size: 24px;
 font-weight: 300;
}
.yu-mv-a a{
  display: inline-block;
  text-decoration: none;
  color:#000;
  font-size: 14px;
  padding: 0px 16px;
  height: 38px;
  border: 1px solid #c9c9c9;
  line-height: 38px;
  border-radius: 2px;
}
.yu-mv-a .top{
    border-right: none;
    background: #31c27c;
    color: #fff;
}

.yu-mv-ul li .titile_bottom{
 background: #31c27c;
 color: #fff;
  padding: 3px 5px;
}
</style>
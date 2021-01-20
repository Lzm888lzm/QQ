<template>
    <div>
        <ul class="list_ul">
            <li class="list_li" v-for="(item,index) in list" :key="index">
                <a href="javascript:;" class="list_a">
                    <img :src="item.img" alt="">
                </a>
                <div class="list_top">
                    <h3>{{item.title}}</h3>
                    <p class="list_p">{{item.text}}</p>
                    <p><i  class="list_i"></i>{{item.name}}</p>
                    <p><i class="list_ii list_i"></i>{{item.date}}</p>
                <div class="list_content">
                    <div>
                        <span class="list_span_em"><em class="list_em">¥ 200</em>起</span>
                        <span class="list_span"><i class="list_iii"></i>立减</span>
                    </div>
                     <div class="list_bottom">
                            <a href="javascript:;">立即购买</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
     list:[
       {
           img:require("../assets/Listimg/1.jpg"),
           title:"[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演北京站",
           text:"时间：2021年1月8日（周五）20:30 场地：MAO Livehouse北京地址：北京海淀区复兴路69号院2号136、G23室嘉宾：龍井說唱 孙骁 / 梁老师TSong / SeanT肖恩恩票价：",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
       {
           img:require("../assets/Listimg/2.jpg"),
           title:"熊猫眼乐队“你能开心多久”巡演 北京站",
           text:"正业插科打诨个人史诗巨作副业流行朋克劝人向善寻找快乐扫清心底所有的不快，送上一剂最强有力的“快乐特效药”今年6月熊猫眼乐队全新EP《开心",
           name:"疆进酒·OMNI SPACE",
           date:"2021.01.09"
       },
       {
           img:require("../assets/Listimg/3.jpg"),
           title:"【全场畅饮】爱莲说AlienSaid VOL.9 封箱春晚",
           text:"“爱莲说 封箱春晚”——Alien Said VOL.9 在腊月来临前，2020年终于结束了。这一年，我们的生活经受住了考验，也在把握住生活的契机。在过去的时间",
           name:"MAOlivehouse",
           date:"2021.01.10"
       },
       {
           img:require("../assets/Listimg/4.jpg"),
           title:"跳跳下午茶 青春音乐会",
           text:"1、主题：          跳跳下午茶 青春音乐会          2、时间：2021年1月16日 下午14点-16点3、艺人：糖果跳跳 柳程驭 麻豆乐队4、票价：早鸟",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
       {
           img:require("../assets/Listimg/5.jpg"),
           title:"[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演北京站",
           text:"时间：2021年1月8日（周五）20:30 场地：MAO Livehouse北京地址：北京海淀区复兴路69号院2号136、G23室嘉宾：龍井說唱 孙骁 / 梁老师TSong / SeanT肖恩恩票价：",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
       {
           img:require("../assets/Listimg/6.jpg"),
           title:"[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演北京站",
           text:"时间：2021年1月8日（周五）20:30 场地：MAO Livehouse北京地址：北京海淀区复兴路69号院2号136、G23室嘉宾：龍井說唱 孙骁 / 梁老师TSong / SeanT肖恩恩票价：",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
       {
           img:require("../assets/Listimg/7.jpg"),
           title:"[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演北京站",
           text:"时间：2021年1月8日（周五）20:30 场地：MAO Livehouse北京地址：北京海淀区复兴路69号院2号136、G23室嘉宾：龍井說唱 孙骁 / 梁老师TSong / SeanT肖恩恩票价：",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
       {
           img:require("../assets/Listimg/8.jpg"),
           title:"[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演北京站",
           text:"时间：2021年1月8日（周五）20:30 场地：MAO Livehouse北京地址：北京海淀区复兴路69号院2号136、G23室嘉宾：龍井說唱 孙骁 / 梁老师TSong / SeanT肖恩恩票价：",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
       {
           img:require("../assets/Listimg/9.jpg"),
           title:"[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演北京站",
           text:"时间：2021年1月8日（周五）20:30 场地：MAO Livehouse北京地址：北京海淀区复兴路69号院2号136、G23室嘉宾：龍井說唱 孙骁 / 梁老师TSong / SeanT肖恩恩票价：",
           name:"MAOlivehouse",
           date:"2021.01.08"
       },
        ]
        }
    }
}
</script>
<style scoped>
.list_ul{
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
 }
.list_ul .list_li{
  display: flex;
   height: 315px;
 margin: 20px 0;
 border-bottom: solid 1px rgba(0,0,0,.1)
 
  
 }
.list_a{
    margin-right: 25px;
}
.list_a img{
  width: 224px;
  height: 298px;
  object-fit: cover;
}
.list_top{
    font-size: 16px;
    color: #333;
    width: 100%;
}
.list_p{
    color: #777;
    font-size: 14px;
}
.list_i{
    background: url("../assets/Listimg/sprite_ticket@2x.png");
    display: inline-block;
    vertical-align: -3px;
    margin-right: 5px;
    width: 14px;
    height: 18px;
    background-position: 0 -50px
}
.list_ii{
    background: url("../assets/Listimg/sprite_ticket@2x.png");
    background-position: -25px -50px;
}
.list_iii{
    background: url("../assets/Listimg/sprite_ticket@2x.png");
     display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
    width: 17px;
    height: 13px;
    background-position: -50px -50px;
}
.list_span_em{
    font-size: 14px;
    color: #31c27c;
}
.list_em{
    margin: 0px 10px;
    font-size: 24px;
}
.list_span{
    background: #31c27c;
    color: #fff;
    padding: 3px;
    border-radius:2px ;
    margin-left: 5px;
    font-size: 12px;
}
.list_content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:50px ;
}
.list_bottom a{
      display: block;
    width: 206px;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    background-color: #01bc83;
    transition: all .2s ease-in-out;
    text-decoration: none;
}
</style>
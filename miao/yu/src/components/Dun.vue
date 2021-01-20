<template>
    <div>
        <div class="han-top">
            <div class="top">
            <h2 class="top-h2">
                <!-- 判断    动态样式点击事件等下标                                                      点击事件= for循环的下标--> 
                <a href="javascript:;" :class="add==index?'top-a':''"  v-for="(item,index) in deng" :key="index" @click="add=index">{{item}}</a>
                <span class="top-span" @click="$emit('cancel')">×</span>
            </h2>
            <!-- QQ登录 -->
                      <!-- 下标=0显示 -->
        <div class="center" v-if="add==0">
            <div class="han-center">
                <div class="center-title">快速安全登录</div>
                <div>快速安全登录<span class="han-top-title">QQ手机版</span>扫描二维码</div>
                <p>安全登录，防止盗号。</p>
              <div class="center-img">
                  <img src="../assets/erwei.jpg" alt="">
              </div>
              <div class="han-center-a">
                  <a href="#">帐号密码登录 <span>|</span></a>
                  <a href="#">注册新帐号 <span>|</span></a>
                  <a href="#">意见反馈</a>
              </div>
             <div>
             </div>
            </div>
            <div class="han-center-wx">
                <p class="center-p"></p>
                <p class="center-p-wx"><a href="">QQ音乐</a>将获得以下权限：</p>
                <ul class="han-ul">
                    <li><input type="checkbox">
                    <label for="">全选</label>
                    </li>
                    <li><input type="checkbox" >
                    <label for="">获得您的昵称、头像、性别</label>
                    </li>
                </ul>
                <p  class="center-p-wx">授权后表明你已同意 <a href="#">QQ登录服务协议</a></p>
            </div>
            </div>
            <!-- 微信登录 -->
        <div v-else>
            <div class="center-img">
                  <img src="../assets/erwei.jpg" alt="">
              </div>
              <div class="wx-p">
              <p>请使用微信扫描二维码登录</p>
              <p>“QQ音乐”</p>
              <p >QQ与微信帐号的音乐资产、付费特权不互通</p>
              </div>
        </div>
            <div class="bottom">  <a href="javascript:;">下载客户端 体验更多内容</a></div>
        </div>
        </div>
          
    </div>
</template>
<script>
export default {
    data(){
        return{
         deng:["QQ登录","微信登录"],
         add:0
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
    padding: 0;
    margin: 0;
    list-style: none;
}
.han-top{
    width: 100%;
    margin: 0 auto;
    display: flex;
   align-items: center;
    position: fixed;
     top:50%;
   left: 30%;
   z-index: 999;
}
    .top{
margin: 0 auto;
  width: 702px;
   height: 489px;
     border: 1px solid #bfbfbf;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    text-align: center;
    position: absolute;
    background: #fff;
    z-index: 100;
    }
    .top-h2{
        width: 700px;
        height: 54.4px;
        border-bottom:1px solid #c9c9c9; 
        text-align: center;
        line-height: 54.4px;
        position: relative;
    }
    .top-h2 a{
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        color: #333;
        font-weight: 400;
        margin: 0px 60px;
    }
  .top-h2 .top-a{
        color: #31c27c;
    }
    .top-span{
       position: absolute;
       right: 10px;
    cursor:pointer;
    }
    .center{
        width: 100%;
       display: flex;
       justify-content: center;
       text-align:left;
       color: #666;
    }
    .han-center{
        text-align: center;
        width: 403px;
        height: 325px;
        margin-top:15px ;
        position: relative;
    }

    .center-p{
        padding: 10px 0;
        border-bottom: 1px solid #c9c9c9;
        
    }
    .center-title{
        font-size: 24px;
        margin-bottom: 10px;
    }
    .han-top-title{
        color: #3481cf;
    }
      .center-img{
        padding: 30px 0;
      }
  .center-img img{
      width: 130px;
      height: 130px;
      object-fit: cover;
  }
.han-center-a{
    position: absolute;
    right: 30px;
}
.han-center-a span{
    margin: 0px 5px;
}
.han-center-a a{
    display: inline-block;
    text-decoration: none;
    color: #666;
    font-size: 12px;
}
/* 右边 开始*/
    .han-center-wx{
        padding-left: 20px;
         font-size: 12px;
         border-left: 1px solid #c9c9c9;
    }
    .han-center-wx p{
        padding: 15px 0 10px;
        
    }
    .center-p-wx a{
        color: #51b7ec;
        text-decoration: none;
        margin-right: 8px;
    }
    .han-ul li{
        
        width: 227px;
        height: 33px;
        text-align:left;
        line-height: 33px;
        border-top: 1px solid #c9c9c9;
    }
    label{
        margin-left: 10px;
    }
    .bottom a{
        margin-top:20px ;
        display: inline-block;
        text-decoration: none;
        width: 240px;
        height: 40px;
        color: #fff;
        background: #31c27c;
        line-height: 40px;
        border-radius: 20px;
    }
    /* 微信登录 */
 .wx-p{
    font-size: 13px;
    color: #999;
 }
  .wx-p p{
      height: 28px;
  }
</style>
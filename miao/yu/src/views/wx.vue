<template>
    <div class="top">
        <ul class="top_title">
            <li class="top_li">
                <a href="javascript:;">显示</a>
                <div class="content">
                    <img src="../assets/handeximg/11.jpg" alt="">
                    <img src="../assets/handeximg/12.jpg" alt="">
                    <img src="../assets/handeximg/13.jpg" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
body,html{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
ul{
    list-style: none;
}
.top{
    width: 100%;
    height: 1000px;
}
.top_title{
    width: 1200px;
    height: 300px;
    margin: 20px auto;

}
.top_li a{
 display: inline-block;
 color: #fa0;
 font-size: 24px;
  text-decoration: none;
  font-weight: 100;
}
.top_li a:hover + .content{
    display: block;
}
.content{
    display: none;
}
.content img{
  margin: 10px 10px;
}
</style>
<template>
    <div>
        <div>
            <ul class="top_body">
                {{add}}
                <li v-for="(item,index) in num" :key="index" @click="add=index" :class="add==index?'top_li':''"><a href="javascript:;">{{item}}</a></li>
            </ul>
        </div>
        <div>
            <ul class="top_list">
                {{open}}
                <li v-for="(item,index) in list" :key="index" @click="open=index"><a href="javascript:;">
                    {{item.title}}<i class="top_list_i"  :class="open==index?item.icon:item.image"></i></a></li>
            </ul>
        </div>
        <div>
            <ul class="sty_top">
                <li v-for="(item,index) in sty" :key="index"><a href="javascript:;"><i class="sty_i" :class="item.iconp"></i>{{item.title}}</a></li>
            </ul>
        </div>
        <div>
            <ul class="conter_ul">
                <li><a href="javascript:;"></a>你<i class="conter_i"></i></li>
            </ul>
        </div>
        <div>
            <input type="text"  v-model="ni">
            <div>我是:{{ni}}</div>
        </div>
          <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>

  <input type="text" v-model="poo">
  <div>我是双向绑定:{{poo}}</div>
        <div>
            <ul class="gong_ul">
                <li v-for="(item,index) in  gong" :key="index">{{item}}</li>
            </ul>
        </div>
        <div><a href="javascript:;" @click="login">我是按钮</a></div>
    </div>
      <!-- 下拉框 -->
      

</template>
<script>
export default {
    data(){
        return{
            login:0,
            poo:'',
            gong:["你","我","他","她","您"],
              selected: '',
            ni:'',
            num:["周杰伦","宋东野","林俊杰","五月天"],
            add:0,
            list:[
              {
                title:"张国荣",
                icon:"icon_item_a",
                image:"icon_index_a"
              },
               {
                title:"张学友",
                icon:"icon_item_b",
                image:"icon_index_b"
              },
               {
                title:"黎明",
                icon:"icon_item_c",
                image:"icon_index_c"
              },
               {
                title:"郭富城",
                icon:"icon_item_d",
                image:"icon_index_d"
              },
               {
                title:"谭咏麟",
                icon:"icon_item_e",
                image:"icon_index_e"
              },
                   {
                title:"梅艳芳",
                icon:"icon_item_f",
                image:"icon_index_f"
              },
            ],
            open:0,
            sty:[
                {
                    title:"播放全部",
                    iconp:"sty_icon_a"
                },
                 {
                    title:"添加到",
                    iconp:"sty_icon_b"
                },
                 {
                    title:"下载",
                    iconp:"sty_icon_c"
                },
                 {
                    title:"批量操作",
                    iconp:"sty_icon_d"
                },
                 {
                    title:"评论(245472)",
                    iconp:"sty_icon_e"
                },
            ]
        }
    },
    mounted() {
        this.post();
    },
    methods:{
        post(e){
     
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
    .top_body{
        margin: 0 auto;
        height: 300px;
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .top_body li a{
        display: inline-block;
        text-decoration: none;
        color: #000;
        font-size: 20px;
    }
  .top_body .top_li a{
        color: #fa0;
    }
    .top_list{
    margin: 0 auto;
     width: 1000px;
     height: 200px;
     display: flex;
     justify-content: space-around;
     color: green;
    }
    .top_list li a{
        display: inline-block;
        text-decoration: none;
        color: green;
    }
    .top_list_i{
    display: inline-block;
    vertical-align: -6px;
    margin-right: 7px;
    width: 31px;
    height: 31px;
}
.icon_item_a{
    background: url('../assets/icon_ticket.png')-280px -40px;
}
.icon_index_a{
     background: url('../assets/icon_ticket.png') -280px 0;;
}
.icon_item_b{
    background: url('../assets/icon_ticket.png')-40px -40px;
}
.icon_index_b{
     background: url('../assets/icon_ticket.png')-40px 0;;
}
.icon_item_c{
    background: url('../assets/icon_ticket.png')-360px -40px;;
}
.icon_index_c{
     background: url('../assets/icon_ticket.png')-360px 0;
}
.icon_item_d{
    background: url('../assets/icon_ticket.png')-280px -40px;
}
.icon_index_d{
     background: url('../assets/icon_ticket.png') -280px 0;;
}
.icon_item_e{
    background: url('../assets/icon_ticket.png')-40px -40px;
}
.icon_index_e{
     background: url('../assets/icon_ticket.png')-40px 0;;
}
.icon_item_f{
    background: url('../assets/icon_ticket.png')-360px -40px;;
}
.icon_index_f{
     background: url('../assets/icon_ticket.png')-360px 0;
}
.sty_top{
    display: flex;
    width: 500px;
    margin: 0 auto;
    height: 300px;
    justify-content: space-around;
}
.sty_top li a{
    display: inline-block;
    text-decoration: none;
    color: #000;
}
.sty_i{
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: -3px;
}
.sty_icon_a{
    background: url("../assets/icon_ticket.png") -80px -200px;
}
.sty_icon_b{
  background: url("../assets/icon_ticket.png") -40px -40px;
}
.sty_icon_c{
    background: url("../assets/icon_ticket.png") -360px -40px;
}
.conter_i{
    display: inline-block;
    border: 4px solid transparent;
    border-top-color: #000;
}
.conter_ul li:hover .conter_i{
    transform: rotate(-180deg);
}
.gong_ul{
    margin: 0 auto;
    width: 1000px;
    height: 300px;
    display: flex;
    justify-content: space-between;
}
</style>
<template>
  <div>
    <div class="han-Mestr">
     <div class="Mestr">
       <ul>
         <li v-for="(p,i) of str" :key="i"  @click="add=i"><a href="javascript:;" :class="add==i?'title':''">{{p}}</a></li>
       </ul>
       <mmestr v-if="add==0"></mmestr>
       <radioTU v-if="add==1"></radioTU>
       <mvuous v-if="add==2"></mvuous>
       <mvuou v-if="add==3"></mvuou>
      <tupian v-if="add==4"></tupian>
       <shuzu v-if="add==5"></shuzu>
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
import { Pagination , Select } from 'element-ui';
import RadioTU from '../components/RadioTU'
import Mmestr from '../components/Mmestr'
import Mvuous  from '../components/Mvuous'
import Mvuou  from '../components/Mvuou'
import Shuzu  from '../components/Shuzu'
import tupian from '../components/tupian'
export default {
   components:{
     [Pagination.naem]:Pagination ,
     RadioTU,
     Mmestr,
     Mvuous,
     Mvuou,
     Shuzu,
     tupian
   },
   data(){
     return{
       str:['内地','港台','欧美','韩国','日本','其他'],
       add:0,
     }
   }
}
</script>
<style  scoped>
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
}
.han-Mestr{
  width: 100%;
  background:#f6f6f6;
  padding-top: 40px;
}
.Mestr{
  width: 1200px;
  margin: 0 auto;
}
.Mestr ul{
  display: flex;
}
.Mestr ul li a{
  display: block;
  text-decoration: none;
  color: #000;
  padding: 0px 8px;
  margin: 0px 24px 15px 0px;
  font-size: 15px;
}

.Mestr ul  .Mestr_a a{
  background-color: #31c27c;
  color: #fff;
}

.second ul{
    height: 50px;
    width: 1200px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.Mestr ul li .title{
  background: #31c27c;
  color: #fff;
}

</style>
  

<template>
  <!--elementui 外层大容器-->
  <el-container direction="vertical" id="mastContainer">
    <!--头部-->
    <pageHeader></pageHeader>
    <!--内容容器-->
    <div class="idposButtonDiv">
      <div class="ztreeHeader">项目列表</div>
      <div class="mainHeader">
        <el-row>
          <el-col :span="4" class="mainHeader-contentPosition">项目</el-col>
          <el-col :span="16" class="mainHeader-contentPosition">
              <label>显示</label>
              <label style="margin-left:30px;">条件</label>
          </el-col>
          <!-- <el-col :span="14" class="mainHeader-contentPosition">条件</el-col> -->
          <el-col :span="4" class="mainHeader-contentPosition">收藏</el-col>
        </el-row>
      </div>
    </div>
    <el-container>
      <!--左侧菜单栏-->
      <el-aside>
        <zTreeMenu v-bind:zTreeData="ztreeJson" v-on:ztreeClickFun="dealZtreeClickFun" ref="ztreeMenuObj"></zTreeMenu>
      </el-aside>
      <!--右侧主要内容-->
      <el-main>
        <divDateOption class="textPosition" 
          v-for="item in otpion.timeOption" 
          :key="item.id" :optionParam="item" >
        </divDateOption>
        <selectOption class="textPosition" ></selectOption>
        <divButtonOption class="textPosition"></divButtonOption>
        <divButtonInputOption class="textPosition"></divButtonInputOption>
      </el-main>
    </el-container>
    <!--页脚-->
    <pageFooter></pageFooter>
  </el-container>
</template>

<script>
import zTreeMenu from '@/viewsCompoments/idpos/ZTreeMenu.vue'
import selectOption from '@/viewsCompoments/idpos/OptionForSelectModule.vue'
import divDateOption from '@/viewsCompoments/idpos/DateOption.vue'
import divButtonOption from '@/viewsCompoments/idpos/ButtonOption.vue'
import divButtonInputOption from '@/viewsCompoments/idpos/ButtonInputOption.vue'

export default {
  name:'idpos',
  components:{
    //存放该页面特有的组件
    "zTreeMenu":zTreeMenu,
    "selectOption":selectOption,
    "divDateOption":divDateOption,
    "divButtonOption":divButtonOption,
    "divButtonInputOption":divButtonInputOption
  },
  data:function(){
    return {
      otpion:{timeOption:[],},
      optionParamList:{
        month:{name:"年月",type:"monthrange"},
        date:{name:"日期",type:"daterange"},
        goodsOne:{name:"大分类",type:"goodsOne"},
        goodsTwo:{name:"中分类",type:"goodsTwo"},
        goodsThree:{name:"小分类",type:"goodsThree"},
        storeOne:{name:"分区",type:"storeOne"},
        storeTwo:{name:"分店",type:"storeTwo"},
        storeThree:{name:"分店",type:"storeThree"},
        vipCount:{name:"会员数",type:"vipCount"},
        cusCount:{name:"客户数",type:"cusCount"}
      },
      ztreeJson:[
        {id:"timeOption",pId:"0",name:"时间条件",chkDisabled:true},
        {id:"timeOption_month",pId:"timeOption",name:"年月",checked:true},
        {id:"timeOption_date",pId:"timeOption",name:"日期"},
        {id:"goodsOption",pId:"0",name:"商品条件"},
        {id:"goodsOption_one",pId:"goodsOption",name:"大分类"},
        {id:"goodsOption_two",pId:"goodsOption",name:"小分类"},
        {id:"goodsOption_three",pId:"goodsOption",name:"细分类"},
        {id:"storeOption",pId:"0",name:"商品条件"},
        {id:"storeOption_one",pId:"storeOption",name:"分区"},
        {id:"storeOption_two",pId:"storeOption",name:"分店"},
        {id:"storeOption_three",pId:"storeOption",name:"店铺"},
        {id:"funOption",pId:"0",name:"商品条件"},
        {id:"funOption_vip",pId:"funOption",name:"会员数量"},
        {id:"funOption_cus",pId:"funOption",name:"客户数量"},
        {id:"funOption_price",pId:"funOption",name:"平均单价"},
      ]
    }
  },
  methods:{
    //处理日期时间的事件
    delTimeOption:function(ztreeNode){
      var optionKey = ztreeNode.id.toString().split("_")[1];
      if(ztreeNode && ztreeNode.checked){
        if(this.otpion.timeOption.length > 0 ){
          this.$refs.ztreeMenuObj.ztreeCancelCheck(this.otpion.timeOption[0].name);
        }
        this.otpion.timeOption = [];
        this.otpion.timeOption.push(this.optionParamList[optionKey]);
      }else{
        this.otpion.timeOption = [];
      }
    },
    //处理ztree点击事件
    dealZtreeClickFun:function(ztreeNode){
      //时间条件点击事件
      if((ztreeNode.id+"").indexOf("timeOption") > -1){
        this.delTimeOption(ztreeNode);
      }
    }
  }
}
</script>
<style scoped>
  .el-aside{
    border-right:#E7E7E7 solid 1px;
  }
  .el-main{
    margin:0;
    padding:0;
  }
  .idposButtonDiv{
    background-color:#ECF0F1;
    width:100%;
    height:35px;
  }
  .ztreeHeader{
    width:280px;
    line-height: 35px;
    text-align: left;
    padding-left:20px;
    float:left;
  }
  .mainHeader{
    margin-left:300px;
  }
  .mainHeader-contentPosition{
    text-align: left;
    line-height: 35px;
  }
  .textPosition{
    text-align: left;
    line-height: 40px;
  }
</style>
<template>
  <!--elementui 外层大容器-->
  <el-container direction="vertical" id="mastContainer">
    <!--头部-->
    <pageHeader :favInfo="favList" :favStatus="favStat" @parentDealFav="delFav" @parentUpdateFav="updateFav" @parentFavClick="favClick"></pageHeader>
    <!--内容容器-->
    <div class="idposButtonDiv">
      <div class="ztreeHeader">项目列表</div>
      <div class="mainHeader">
        <el-row>
          <el-col :span="4" class="mainHeader-contentPosition">项目</el-col>
          <el-col :span="14" class="mainHeader-contentPosition">
              <label>显示</label>
              <label style="margin-left:30px;">条件</label>
          </el-col>
          <!-- <el-col :span="14" class="mainHeader-contentPosition">条件</el-col> -->
          <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="fav" size="small" style="width:200px;" maxlength="30">
              <el-button slot="append" icon="el-icon-plus" @click="saveFav()"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-container>
      <!--左侧菜单栏-->
      <el-aside>
        <zTreeMenu v-bind:zTreeData="ztreeJson" ref="ztreeMenuObj"></zTreeMenu>
      </el-aside>
      <!--右侧主要内容-->
      <el-main>
        <divDateOption class="textPosition" :optionParam="dealZtreeDataForDiv('timeOption')" >
        </divDateOption>
        <selectOption class="textPosition" :optionParam="dealZtreeDataForDiv('storeOption')" >
        </selectOption>
        <selectOption class="textPosition" :optionParam="dealZtreeDataForDiv('goodsOption')" >
        </selectOption>
        <divButtonOption class="textPosition" :optionParam="dealZtreeDataForDiv('goodsList')" >
        </divButtonOption>
        <divButtonInputOption class="textPosition" :optionParam="dealZtreeDataForDiv('funOption')">
        </divButtonInputOption>
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
      fav:"",
      favList:{},
      favStat:[],
      ztreeJson:[
        {id:"timeOption",pId:"0",name:"时间条件",chkDisabled:true,checked:false},
        {id:"timeOption_month",pId:"timeOption",name:"年月",checked:false,color:"#E2FEDE",dataType:"monthrange",value:{value:"",show:true}},
        {id:"timeOption_date",pId:"timeOption",name:"日期",checked:false,color:"#E2FEDE",dataType:"daterange",value:{value:"",show:true}},
        {id:"storeOption",pId:"0",name:"店铺条件",checked:false},
        {id:"storeOption_one",pId:"storeOption",name:"分区",checked:false,color:"#FFF4CC",
          selectFlag:false,value:{select:"",module:[],show:true}},
        {id:"storeOption_two",pId:"storeOption",name:"分店",checked:false,color:"#FFF4CC",
          selectFlag:true,value:{select:"",module:[],show:true}},
        {id:"storeOption_three",pId:"storeOption",name:"店铺",checked:false,color:"#FFF4CC",
          selectFlag:true,value:{select:"",module:[],show:true}},
        {id:"goodsOption",pId:"0",name:"商品条件",checked:false},
        {id:"goodsOption_one",pId:"goodsOption",name:"大分类",checked:false,color:"#D4DEFF",
          selectFlag:false,value:{select:"",module:[],show:true}},
        {id:"goodsOption_two",pId:"goodsOption",name:"小分类",checked:false,color:"#D4DEFF",
          selectFlag:true,value:{select:"",module:[],show:true}},
        {id:"goodsOption_three",pId:"goodsOption",name:"细分类",checked:false,color:"#D4DEFF",
          selectFlag:true,value:{select:"",module:[],show:true}},
        {id:"goodsList",pId:"goodsOption",name:"商品选择",checked:false,color:"#D4DEFF",value:{module:[]}},
        {id:"funOption",pId:"0",name:"计算条件",checked:false},
        {id:"funOption_vip",pId:"funOption",name:"会员数量",checked:false,color:"#FFFFFF",
          value:{select:"",input:"",show:true}},
        {id:"funOption_cus",pId:"funOption",name:"客户数量",checked:false,color:"#FFFFFF",
          value:{select:"",input:"",show:true}},
        {id:"funOption_price",pId:"funOption",name:"平均单价",checked:false,color:"#FFFFFF",
          value:{select:"",input:"",show:true}},
      ]
    }
  },
  computed:{
    //用于过滤数据并被v-for循环
    dealZtreeDataForDiv(){
      return function(type){
        var list = [];
        var index = 0 ;
        for ( index in this.ztreeJson){
          if(this.ztreeJson[index].id.toString().indexOf(type) > -1 
            && this.ztreeJson[index].pId != "0"){
            list.push(this.ztreeJson[index]);
          }
        }
        return list;
      }
    }
  },
  watch:{
    //监听div得选中状态。及时改变ztree状态
    ztreeJson:{
      handler() {
        console.log("1");
        var index = 0 ;
        for ( index in this.ztreeJson){
          var ztreeName = this.ztreeJson[index].name.toString();
          var ztreeStatus = this.$refs.ztreeMenuObj.getZtreeCheckBoxStatus(ztreeName)
          if(this.ztreeJson[index].checked != ztreeStatus && this.ztreeJson[index].pId != 0){
            this.$refs.ztreeMenuObj.ztreeCheckStatusChange(this.ztreeJson[index].name,this.ztreeJson[index].checked);
          }
        }
      },
      deep: true
    }
  },
  methods:{
    //收藏fav
    saveFav(){
      var flag = false;
      for (var i = 0 ; i < this.ztreeJson.length ; i ++ ){
        if(this.ztreeJson[i].checked){
          flag = true;
          break;
        }
      }
      if(flag){
        var newObject = $.extend(true, {}, this.ztreeJson);
        this.$set(this.favList, this.fav.toString(), newObject)
        this.fav="";
        this.setFavStat();
        this.$message({
          message: '保存成功',
          type: 'success'
        });
      }
    },
    //删除fav
    delFav(key){
      this.favList = Object.assign({}, delete(this.favList[key]));
      this.setFavStat();
    },
    //修改fav
    updateFav(arr){
      var newObject = $.extend(true, {}, this.favList[arr[1]]);
      delete(this.favList[arr[1]]);
      this.$set(this.favList, arr[0].toString(), newObject)
      // this.setFavStat();
    },
    //重新设置fav的数据
    setFavStat(){
      var arr = [];
      for( var i = 0 ; i < this.favList.length ; i ++){
        arr.push(false);
      }
      this.favStat = arr;
    },
    //还原fav保存条件
    favClick(name){
      this.ztreeJson = $.extend(true, [], this.favList[name]);
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
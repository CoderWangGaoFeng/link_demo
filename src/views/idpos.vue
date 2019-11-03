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
        <zTreeMenu v-bind:zTreeData="ztreeJson"></zTreeMenu>
      </el-aside>
      <!--右侧主要内容-->
      <el-main>
        <divDateOption class="textPosition"></divDateOption>
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
  // props:["ztreeData"],
  data:function(){
    return {
      otpion:[{"id":"1","type":"2"},{"id":"3","type":"4"}],
      ztreeJson:[
        { name:"时间条件",isParent:true,
				  children: [
					{ name:"年月"},
					{ name:"日期"},
				]},
			  { name:"商品条件",isParent:true,
				  children: [
				  { name:"大分类"},
					{ name:"小分类"},
					{ name:"细分类"}
				]},
        { name:"店铺条件", isParent:true,
          children:[{name:"分区"},{name:"分店"},{name:"店铺"}]},
        { name:"聚合条件", isParent:true,children: [
            { name:"会员数量"},
            { name:"客户数量"},
            { name:"单价"}
        ]}
      ]
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
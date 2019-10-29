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
          <el-col :span="2" class="mainHeader-contentPosition">显示</el-col>
          <el-col :span="14" class="mainHeader-contentPosition">条件</el-col>
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
        <selectOption class="textPosition" 
          v-for="item in otpion" :key="item.id">
        </selectOption>
      </el-main>
    </el-container>
    <!--页脚-->
    <pageFooter></pageFooter>
  </el-container>
</template>

<script>
import zTreeMenu from '@/viewsCompoments/idpos/ZTreeMenu.vue'
import selectOption from '@/viewsCompoments/idpos/OptionForSelectModule.vue'

export default {
  name:'idpos',
  components:{
    //存放该页面特有的组件
    "zTreeMenu":zTreeMenu,
    "selectOption":selectOption
  },
  // props:["ztreeData"],
  data:function(){
    return {
      otpion:[{"id":"1","type":"2"},{"id":"3","type":"4"}],
      ztreeJson:[
        { name:"父节点1 - 展开", open:true,
				children: [
					{ name:"父节点11 - 折叠"},
					{ name:"父节点12 - 折叠"},
					{ name:"父节点13 - 没有子节点", isParent:true}
				]},
			    { name:"父节点2 - 折叠",
				children: [
					{ name:"父节点21 - 展开", open:true},
					{ name:"父节点22 - 折叠"},
					{ name:"父节点23 - 折叠"}
				]},
			    { name:"父节点3 - 没有子节点", isParent:true}  
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
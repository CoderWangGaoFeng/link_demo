<template>
  <!--elementui 外层大容器-->
  <el-container direction="vertical" id="mastContainer">
    <!--头部-->
    <pageHeader></pageHeader>
    <!--内容容器-->
    <el-container>
      <!--左侧菜单栏-->
      <el-aside>
        <zTreeMenu></zTreeMenu>
      </el-aside>
      <!--右侧主要内容-->
      <el-main>main</el-main>
    </el-container>
    <!--页脚-->
    <pageFooter></pageFooter>
  </el-container>
</template>

<script>
import zTreeMenu from '@/viewsCompoments/ZTreeMenu.vue'

export default {
  name:'idpos',
  components:{
    //存放该页面特有的组件
    "zTreeMenu":zTreeMenu
  }
}
</script>
<style scoped>
  .el-aside{
    border-right:#E7E7E7 solid 1px;
  }
</style>
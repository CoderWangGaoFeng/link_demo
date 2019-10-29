<template>
    <div id="zTreeMenu">
        <ul id="treeDemo" class="ztree"></ul>
    </div>
</template>

<script>
import $ from 'jquery'
import Ztree from '@ztree/ztree_v3/js/jquery.ztree.core.js'
import '@ztree/ztree_v3/css/zTreeStyle/zTreeStyle.css'
export default {
    //获取父级组件传递过来的参数
    props: ['zTreeData'],
    data:function(){
        //通过return 返回数据，防止有多个ztree之间互相影响
        return {
            //ztree基础设置
            setting:{},                          
        }
    },
    //定义当前组件中的事件
    methods:{},
    //页面渲染后执行
    mounted(){
        //初始化ztree并全部展开
        $.fn.zTree.init($("#treeDemo"), this.setting, this.zTreeData).expandAll(true);
      }
}
</script>
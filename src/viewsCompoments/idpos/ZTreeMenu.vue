<template>
    <div id="zTreeMenu">
        <ul id="treeDemo" class="ztree"></ul>
    </div>
</template>

<script>
import $ from 'jquery'
import '@ztree/ztree_v3/css/zTreeStyle/zTreeStyle.css'
import '@ztree/ztree_v3/js/jquery.ztree.core.js'
import '@ztree/ztree_v3/js/jquery.ztree.excheck.js'
export default {
    //获取父级组件传递过来的参数
    props: ['zTreeData'],
    data:function(){
        //通过return 返回数据，防止有多个ztree之间互相影响
        return {
            //ztree基础设置
            setting:{
                check:{
                    enable:true
                },
                view: {
                    showIcon: false
                },
                callback: {
                    //取消或选中回调函数
                    onCheck: this.ztreeCheck
                }
            },                          
        }
    },
    //定义当前组件中的事件
    methods:{
        //ztree选中事件
        ztreeCheck:function(event, treeId, treeNode){
            //调用父级方法
            console.log(treeNode);
            this.$emit('testtest',[111]);
        }
    },
    //页面渲染后执行
    mounted(){
        //初始化ztree并全部展开
        $.fn.zTree.init($("#treeDemo"), this.setting, this.zTreeData).expandAll(true);
      }
}
</script>
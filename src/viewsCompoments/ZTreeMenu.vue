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
    data:function(){
        //通过return 返回数据，防止有多个ztree之间互相影响
        return {
            //ztree基础设置
            setting:{},
            zTreeData:[
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
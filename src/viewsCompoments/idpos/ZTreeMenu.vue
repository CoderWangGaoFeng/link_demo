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
    props: {
        zTreeData:{
            type:Array,
            require:true
        }
    },
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
                data:{
                    simpleData:{
                        enable:true,
                        idKey:"id",
                        pIdKey:"pId"
                    }
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
            // this.$emit('ztreeClickFun',treeNode);
            var index = 0 ;
            var ztreeId = treeNode.id.toString();
            var parentZtreeIdList = ["goodsOption","storeOption","funOption"];
            if(parentZtreeIdList.indexOf(ztreeId) > -1 ){
                //父级菜单选中事件
                for ( index in this.zTreeData){
                    if(this.zTreeData[index].pId == ztreeId ){
                        this.zTreeData[index].checked=treeNode.checked;
                    }
                }
            }else{
                for ( index in this.zTreeData ){
                    if(this.zTreeData[index].id == treeNode.id){
                        if( treeNode.checked && treeNode.pId.toString() == "timeOption"){
                            //当选中的条件为时间条件下的子类时，需要判断是否需要排斥掉另外一条时间条件
                            this.dealTimeOptionStatus(treeNode.name.toString());
                        }
                        this.zTreeData[index].checked=treeNode.checked;
                    }
                }
            }
        },
        //ztree取消选中
        ztreeCancelCheck:function(name){
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var node = treeObj.getNodeByParam("name", name, null);
            if(node){
                treeObj.checkNode(node, false, true,false);
            }
        },
        //ztree选项框状态
        getZtreeCheckBoxStatus(name){
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var node = treeObj.getNodeByParam("name", name, null);
            return node.checked;
        },
        //处理时间条件互斥
        dealTimeOptionStatus(name){
            for (  var i = 1 ; i < 3 ; i++ ) {
                if(this.zTreeData[i].name != name && this.zTreeData[i].checked == true ){
                    this.zTreeData[i].checked = false;
                }
            }
        }
    },
    //页面渲染后执行
    mounted(){
        //初始化ztree并全部展开
        $.fn.zTree.init($("#treeDemo"), this.setting, this.zTreeData).expandAll(true);
      }
}
</script>
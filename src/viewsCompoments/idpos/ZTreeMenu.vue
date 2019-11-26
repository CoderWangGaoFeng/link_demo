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
            // var parentZtreeIdList = ["goodsOption","storeOption","funOption"];
            if(!treeNode.pId){
                //父级菜单选中事件
                for ( index in this.zTreeData){
                    if(this.zTreeData[index].pId == ztreeId ){
                        this.zTreeData[index].checked=treeNode.checked;
                        if(!treeNode.checked) this.resetDataValue(this.zTreeData[index]);
                    }
                }
            }else{
                //子级选中事件
                for ( index in this.zTreeData ){
                    if(this.zTreeData[index].id == treeNode.id){
                        if( treeNode.checked && treeNode.pId.toString() == "timeOption"){
                            //当选中的条件为时间条件下的子类时，需要判断是否需要排斥掉另外一条时间条件
                            this.dealTimeOptionStatus(treeNode.name.toString());
                        }
                        //店铺、商品三级联动
                        if( (treeNode.pId.toString() == "storeOption" || treeNode.pId.toString() == "goodsOption") 
                            && treeNode.id.toString().indexOf("_")>-1){
                                this.dealSelectMore(treeNode.pId.toString(),ztreeId,treeNode.checked)
                        }
                        this.zTreeData[index].checked=treeNode.checked;
                        if(!treeNode.checked) this.resetDataValue(this.zTreeData[index]);
                    }
                }
            }
            //取消事件

        },
        //ztree因数据改变而状态改变事件
        ztreeCheckStatusChange:function(name,status){
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            var node = treeObj.getNodeByParam("name", name, null);
            var checkFlag = false;
            if(node.pId == "storeOption" || node.pId == "goodsOption") checkFlag = true;
            if(node){
                treeObj.checkNode(node, status, true,checkFlag);
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
        },
        //店铺、商品联动事件
        dealSelectMore(parentId,childId,status){
            var selectArr = ["one","two","three"];
            var index = status ? 0 : 2;
            var endIndex = selectArr.indexOf(childId.split("_")[1]);
            var idList = [];
            //计算出zTreeData的那些id需要修改checked属性
            while(index != endIndex){
                idList.push(parentId + "_" + selectArr[index]);
                if(status){
                    index ++;
                }else{
                    index --;
                }
            }
            for(var i = 0 ; i < this.zTreeData.length ; i++ ){
                if(idList.indexOf(this.zTreeData[i].id.toString()) != -1 
                    &&  this.zTreeData[i].checked != status ){
                    this.zTreeData[i].checked = status;
                }
            }
        },
        //方法用于重置value中的数据
        resetDataValue(data){
            var defaultVlaue = {module:[],select:"",input:"",show:true,value:""}
            var keys = Object.keys(data.value);
            for(var i = 0 ; i < keys.length ; i ++ ){
                data.value[keys[i]] = defaultVlaue[keys[i]];
            }
            //hasOwenProperty有bug
            // if(data.hasOwenProperty("selectFlag") && data.id.toString().split("_")[1] != "one"){
            //     data.selectFlag = true;
            // }
            if(data.selectFlag == false && data.id.toString().split("_")[1] != "one"){
                data.selectFlag = true;
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
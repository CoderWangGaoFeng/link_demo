<template>
<div>
    <div v-for="item in optionParam" :key="item.id" :style="{display:showOrHiddenDiv(item.checked)}">
        <el-row style="background-color:#D4DEFF" class="optionBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="item.checked" style="padding-left:5px;">{{item.name}}</el-checkbox>
                </el-col>
                <el-col :span="20" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionShowOrHide" style="padding-left:5px;"></el-checkbox>
                    <el-button size="small" style="width:300px;margin-left:40px;" @click="moduleShow">默认按钮</el-button>
                </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
    props:{
        optionParam:{
            type:Array
        }
    },
    data:function(){
        return{
            divShowOrHide:true,
            optionShowOrHide:true
        }
    },
    computed:{
        //计算属性，控制div是否显示
        showOrHiddenDiv(){
            return function(status){
                if(status){
                    return "";
                }else{
                    return "none"
                }
            }
        }
    },
    methods:{
        moduleShow(){
            global.prod_instance.show();
        }
    },
    //页面渲染后开始执行
    mounted(){
        global.prod_instance.init({usercd: "10151939",level: "l-m-s-t",elementId: "btn_multi_prod",kigyoucd: "0001"});
    }
}
</script>

<style scoped>
.optionBorder{
    border-top:#ffffff 1px solid;
}
</style>
<template>
    <div>
        <div v-for="item in optionParam" :key="item.id" :style="{display:showOrHiddenDiv(item.checked)}">
            <el-row :style="{backgroundColor:item.color}" class="optionBorder">
                    <el-col :span="4" class="mainHeader-contentPosition">
                        <el-checkbox v-model="item.checked" style="padding-left:5px;">{{item.name}}</el-checkbox>
                    </el-col>
                    <el-col :span="20" class="mainHeader-contentPosition">
                        <el-checkbox v-model="item.value.show" style="padding-left:5px;"></el-checkbox>
                        <el-date-picker
                                v-model="item.value.value"
                                :type="item.dataType"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"  size="small" style="margin-left:40px;width:300px;">
                        </el-date-picker>
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
        return {
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
    }
}
</script>
<style scoped>
.optionBorder{
    border-top:#ffffff 1px solid;
}
</style>
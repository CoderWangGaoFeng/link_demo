<template>
    <div v-if="optionParam.checked">
        <el-row style="background-color:#D4DEFF" class="optionBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionParam.checked" style="padding-left:5px;">{{optionParam.name}}</el-checkbox>
                </el-col>
                <el-col :span="20" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionShowOrHide" style="padding-left:5px;"></el-checkbox>
                    <el-button size="small" style="width:300px;margin-left:40px;">默认按钮</el-button>
                </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props:{
        optionParam:{
            type:Object
        }
    },
    data:function(){
        return{
            divShowOrHide:true,
            optionShowOrHide:true
        }
    }
    
}
</script>

<style scoped>
.optionBorder{
    border-top:#ffffff 1px solid;
}
</style>
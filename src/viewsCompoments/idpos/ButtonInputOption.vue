<template>
    <div>
        <el-row style="background-color:#D4DEFF" class="optionBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="divShowOrHide" style="padding-left:5px;">输出条件</el-checkbox>
                </el-col>
                <el-col :span="20" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionShowOrHide" style="padding-left:5px;"></el-checkbox>
                    <el-button size="small" style="width:300px;margin-left:40px;">默认按钮</el-button>
                    <el-input v-model="input" placeholder="请输入内容" style="margin-left:10px;width:300px;" size="small"></el-input>
                </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            divShowOrHide:true,
            optionShowOrHide:true,
            input:""
        }
    }
}
</script>
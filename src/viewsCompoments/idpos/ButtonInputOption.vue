<template>
    <div v-if="optionParam.checked">
        <el-row :style="{backgroundColor:optionParam.color}" class="optionBottomBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionParam.checked" style="padding-left:5px;">{{optionParam.name}}</el-checkbox>
                </el-col>
                <el-col :span="20" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionShowOrHide" style="padding-left:5px;"></el-checkbox>
                    <el-select v-model="value" filterable placeholder="请选择" size="small" style="width:300px;margin-left:40px;">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="input" placeholder="请输入内容" style="margin-left:10px;width:100px;" size="small"></el-input>
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
            optionShowOrHide:true,
            input:"",
            options:[
                {value: '',label: ''}, 
                {value: '>',label: '>'},
                {value: '>=',label: '>='},
                {value: '<',label: '<'}, 
                {value: '<=',label: '<='},
                {value: '=',label: '='}
            ],
            value: ''
        }
    }
}
</script>

<style scoped>
.optionBottomBorder{
    border-bottom:#ECF0F1 1px solid;
}
</style>
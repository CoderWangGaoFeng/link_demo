<template>
<div>
    <div v-for="item in optionParam" :key="item.id" :style="{display:showOrHiddenDiv(item.checked)}">
        <el-row :style="{backgroundColor:item.color}" class="optionBottomBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="item.checked" style="padding-left:5px;">{{item.name}}</el-checkbox>
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
.optionBottomBorder{
    border-bottom:#ECF0F1 1px solid;
}
</style>
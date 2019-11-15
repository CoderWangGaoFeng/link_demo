<template>
<div>
    <div v-for="(item,index) in optionParam" :key="item.id" :style="{display:showOrHiddenDiv(item.checked)}">
        <el-row :style="{backgroundColor:item.color}" class="optionBottomBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="item.checked" style="padding-left:5px;">{{item.name}}</el-checkbox>
                </el-col>
                <el-col :span="20" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionShowOrHide" style="padding-left:5px;"></el-checkbox>
                    <el-select v-model="item.value.select" filterable placeholder="请选择" size="small" @change="showOrHidenInput(index)" style="width:300px;margin-left:40px;">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="item.value.input" placeholder="请输入内容" :style="inputShowOrHide(index)" size="small"></el-input>
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
            optionShowOrHide:true,
            input:"",
            inputHideOrShow:[false,false,false],
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
        },
        inputShowOrHide(){
            return function(index){
                if(this.inputHideOrShow[index]){
                    return {marginLeft:'10px',width:'100px',display:""}
                }else{
                    return {marginLeft:'10px',width:'100px',display:"none"}
                }
            }
        }
    },
    methods:{
        showOrHidenInput(index){
            if(this.optionParam[index].value.select != ""){
                this.inputHideOrShow[index] = true;
            }else{
                this.inputHideOrShow[index] = false;
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
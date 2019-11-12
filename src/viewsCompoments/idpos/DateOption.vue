<template>
    <div v-if="optionParam.checked">
        <el-row style="background-color:#D4DEFF" class="optionBorder">
                <el-col :span="4" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionParam.checked" style="padding-left:5px;">{{optionParam.name}}</el-checkbox>
                </el-col>
                <el-col :span="20" class="mainHeader-contentPosition">
                    <el-checkbox v-model="optionShowOrHide" style="padding-left:5px;"></el-checkbox>
                    <el-date-picker
                            v-model="optionParam.value.dateValue"
                            :type="optionParam.value.dateType"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"  size="small" style="margin-left:40px;width:300px;">
                    </el-date-picker>
                </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props:["optionParam"],
    data:function(){
            return {
                divShowOrHide:this.optionParam.checked,
                optionShowOrHide:true,
                monthValue: '',
                dayValue: '',
            }
      }
}
</script>
<style scoped>
.optionBorder{
    border-top:#ffffff 1px solid;
}
</style>
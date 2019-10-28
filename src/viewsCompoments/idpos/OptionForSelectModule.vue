<template>
      <el-row style="background-color:#D4DEFF" class="optionBorder">
            <el-col :span="4" class="mainHeader-contentPosition">
                  <el-checkbox v-model="divShowOrHide" style="padding-left:5px;">测试1</el-checkbox>
            </el-col>
            <el-col :span="2" class="mainHeader-contentPosition">
                  <el-checkbox v-model="optionShowOrHide"></el-checkbox>
            </el-col>
            <el-col :span="18" class="mainHeader-contentPosition">
                  <el-select v-model="value" filterable placeholder="请选择" size="small">
                        <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                        </el-option>
                  </el-select>
                  <el-button type="text" style="margin-left:20px;">复数选择</el-button>
                  <el-button type="text" style="margin-left:20px;">清空选择</el-button>
            </el-col>
      </el-row>
</template>

<script>
export default {
      data:function(){
            return {
                  divShowOrHide:true,
                  optionShowOrHide:true,
                  options: [
                        {value: '选项1',label: '黄金糕'}, 
                        {value: '选项2',label: '双皮奶'}, 
                        {value: '选项3',label: '蚵仔煎'}, 
                        {value: '选项4',label: '龙须面'}, 
                        {value: '选项5',label: '北京烤鸭'}
                  ],
                  value: ''                 
            }
      }
}
</script>
<style>
.optionBorder{
      border-top:#ffffff 1px solid;
      border-bottom:#ffffff 1px solid;
}
</style>
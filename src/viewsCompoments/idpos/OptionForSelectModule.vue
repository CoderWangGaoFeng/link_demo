<template>
<div>
      <div v-for="(item,index) in optionParam" :key="item.id" :style="{display:showOrHiddenDiv(item.checked)}">
            <el-row :style="{backgroundColor:item.color}" class="optionBorder">
                  <el-col :span="4" class="mainHeader-contentPosition">
                        <el-checkbox v-model="item.checked" style="padding-left:5px;">{{item.name}}</el-checkbox>
                  </el-col>
                  <el-col :span="20" class="mainHeader-contentPosition">
                        <el-checkbox v-model="item.value.show" style="padding-left:5px;"></el-checkbox>
                        <el-select v-model="item.value.select" :disabled=item.selectFlag @change="getNextSelectOption(index)" filterable placeholder="请选择" size="small" style="width:300px;margin-left:40px;">
                              <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                              </el-option>
                        </el-select>
                        <el-button type="text" style="margin-left:20px;">{{buttonText}}</el-button>
                        <el-button type="text" :style="{marginLeft:'20px',display:clearModuleButton}">清空选择</el-button>
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
                  options: [
                        {value: '',label: ''},
                        {value: '选项1',label: '黄金糕'}, 
                        {value: '选项2',label: '双皮奶'}, 
                        {value: '选项3',label: '蚵仔煎'}, 
                        {value: '选项4',label: '龙须面'}, 
                        {value: '选项5',label: '北京烤鸭'}
                  ],
                  buttonText:"复数选择",
                  clearButtonStatus:"none"
            }
      },
      computed:{
            //计算属性，控制div是否显示
            showOrHiddenDiv(){
                  return function(status){
                        if(status){
                              return "";
                        }else{
                              return "none";
                        }
                  }
            },
            //通过module是是否有值控制按钮显示隐藏
            clearModuleButton(){
                  var vm =this;
                  if(this.optionParam[0].value.module.length > 0){
                        vm.buttonText = "更新选择";
                        return "";
                  }else{
                        vm.buttonText = "复数选择";
                        return "none";
                  }
            }
      },
      methods:{
            //下拉框change事件
            getNextSelectOption(index){
                  if(this.optionParam[index].value.select == ""){
                        //重置当前等级下所有select为不可用
                        for(var i = index+1 ; i < this.optionParam.length ; i++ ){
                              this.optionParam[i].value.select = "";
                              this.optionParam[i].selectFlag = true;
                        }
                  }else{
                        if(index+1 < this.optionParam.length){
                              this.optionParam[index+1].selectFlag = false;
                        }
                  }
            }
      }
}
</script>
<style>
.optionBorder{
      border-top:#ffffff 1px solid;
}
</style>
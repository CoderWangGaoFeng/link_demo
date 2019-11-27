<template>
      <el-header>
            <el-row>
                  <el-col :span="12">
                        <div id="systemName" class="grid-content">
                              System Name
                        </div>
                  </el-col>
                  <el-col :span="12" style="text-align:right">
                        <el-dropdown trigger="click" style="line-height:60px;margin-right:15px;" >
                              <span class="el-dropdown-link el-icon-star-on">
                                    お気に入り<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for="(item,key,index) in dealFavInfo" :key="key" @click.native="childFavChild(key)">
                                          <el-link type="primary" icon="el-icon-delete" @click.stop="delFav(key)" :style="{display:showOrHide(index,true)}"></el-link>
                                          <el-link type="primary" :underline="false" :style="{maxWidth:'260px',overflow:'hidden',display:showOrHide(index,true)}">{{key}}</el-link>
                                          <el-link type="primary" icon="el-icon-edit" :style="{marginLeft:'15px',display:showOrHide(index,true)}" @click.stop="updateFav(key)"></el-link>
                                    </el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" style="line-height:60px;"  placement="bottom">
                              <span class="el-dropdown-link el-icon-user-solid">
                                    10151939<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-switch-button">ログアウト</el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                  </el-col>
            </el-row>
            <el-dialog title="收货地址" :visible.sync="favUpdateFlag">
                  <el-form label-width="100px" >
                        <el-form-item label="新的名称">
                              <el-input v-model="favUpdate" autocomplete="off"></el-input>
                        </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                        <el-button @click="favUpdateFlag = false">取 消</el-button>
                        <el-button type="primary" @click="favUpdateFlag = false">确 定</el-button>
                  </div>
            </el-dialog>
      </el-header>
</template>

<script>
export default {
      name:'systemHeader',
      props:{
            favInfo:{
                  type:Object
            },
            userInfo:{
                  type:Object
            },
            favStatus:{
                  type:Array
            }
      },
      data:function(){
            return {
                  favUpdate:"",
                  favUpdateFlag:false
            }
      },
      computed:{
            dealFavInfo(){
                  return this.favInfo
            },
            //根据index获取key
            getFavKey(){
                  return function(index){
                        return Object.keys(this.favInfo)[index];
                  }
            },
            //编辑时fav的隐藏及显示
            showOrHide(){
                  return function(index,type){
                        if(this.favStatus[index]){
                              return type ? "none" : "";
                        }else{
                              return type ? "" : "none";
                        }
                  }
            }

      },
      methods:{
            //删除fav
            delFav(name){
                  this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                  }).then(() => {
                        this.$emit("parentDealFav",name)
                        this.$message({
                              type: 'success',
                              message: '删除成功!'
                        });
                  }).catch(() => {
                        this.$message({
                              type: 'info',
                              message: '已取消删除'
                        });          
                  });
            },
            //修改fav名字
            updateFav(name){
                  this.$prompt('请输入新的名称', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                        // inputErrorMessage: '邮箱格式不正确'
                  }).then(({ value }) => {
                        // this.favInfo[value] = this.favInfo[name];
                        // delete(this.favInfo[name]);
                        this.$emit("parentUpdateFav",[value,name]);
                        this.$message({
                              type: 'success',
                              message: '修改成功'
                        });
                  }).catch(() => {
                        this.$message({
                              type: 'info',
                              message: '取消输入'
                        });       
                  });
            },
            childFavChild(name){
                  this.$emit("parentFavClick",name)
            }
      }
}
</script>

<style scoped>
      .el-header{
            background:#F8F8F8; 
            border-bottom: #E7E7E7 solid 1px;
      }
      #systemName{
            text-align: left;
            line-height: 60px;
            font-size: 1.3em;
      }
      .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
      }
</style>
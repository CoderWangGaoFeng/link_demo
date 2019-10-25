<template>
      <el-header>
            <el-row>
                  <el-col :span="12">
                        <div id="systemName" class="grid-content">
                              System Name
                        </div>
                  </el-col>
                  <el-col :span="12" style="text-align:right">
                        <el-dropdown trigger="click" style="line-height:60px;margin-right:15px;">
                              <span class="el-dropdown-link el-icon-star-on">
                                    お気に入り<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-close">黄金糕</el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="click" style="line-height:60px;">
                              <span class="el-dropdown-link el-icon-user-solid">
                                    10151939<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-switch-button">ログアウト</el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                  </el-col>
            </el-row>
      </el-header>
</template>

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
</style>
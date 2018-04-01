<template>
<el-row class="tac">
  <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="2" class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo tac"
      @open="handleOpen"
      @close="handleClose"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="icon ion-ios-information"></i>
        <span slot="title">基本信息</span>
      </el-menu-item>  
      <el-menu-item index="5">
        <i class="icon ion-ios-book-outline"></i>
        <span slot="title">教育信息</span>
      </el-menu-item>  
      <el-menu-item index="4">
        <i class="icon ion-ios-paper"></i>
        <span slot="title">个人简介</span>
      </el-menu-item>      
      <el-menu-item index="2">
        <i class="icon ion-ios-calendar"></i>
        <span slot="title">工作经历</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="icon ion-ios-briefcase"></i>
        <span slot="title">项目经验</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="ion-ios-telephone"></i>
        <span slot="title">联系方式</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			handleOpen () {
				
			},
			handleClose () {
				
			}
		}
	}
</script>

<style>
	html,body{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.tac,div{
		height: 100%;
	}
	.tac i{
		padding: 0 8px;
		font-size: 18px;
	}
</style>
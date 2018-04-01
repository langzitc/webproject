<template>
		  <el-header>
				<el-row v-if="isSearch">
					<el-col :span="8">
						<el-button icon="el-icon-search" @click="isSearch = false" :plain="true"></el-button>
					</el-col>
					<el-col :span="8" class="head-title">
						TUCH
					</el-col>
					<el-col :span="8" class="text-right head-right">
						<a href="/">首页</a>
						<a href="/production">联系我</a>
						<el-dropdown>
						  <span class="el-dropdown-link" style="color: #fff;font-size: 12px;margin-left: 15px;">
						    快捷导航<i class="el-icon-arrow-down el-icon--right"></i>
						  </span>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>黄金糕</el-dropdown-item>
						    <el-dropdown-item>狮子头</el-dropdown-item>
						    <el-dropdown-item>螺蛳粉</el-dropdown-item>
						    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
						    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>							
						<span v-if="isLogin">
							<el-dropdown>
							  <span class="el-dropdown-link" style="color: #fff;font-size: 12px;margin-left: 15px;">
							    {{nickName}}<i class="el-icon-arrow-down el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item>个人中心</el-dropdown-item>
							    <el-dropdown-item>发文章</el-dropdown-item>
							    <el-dropdown-item>管理中心</el-dropdown-item>
							    <el-dropdown-item divided>退出</el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>								
						</span>
						<span v-else>
								<a href="javascript:;" @click="login">登录</a>
								<a href="javascript:;" @click="register">注册</a>							
						</span>			
					</el-col>
				</el-row>
				<div class="head-search" v-else>
					  <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
					    <el-select v-model="select" slot="prepend" placeholder="请选择">
					      <el-option label="餐厅名" value="1"></el-option>
					      <el-option label="订单号" value="2"></el-option>
					      <el-option label="用户电话" value="3"></el-option>
					    </el-select>
					    <el-button slot="append" icon="el-icon-search" @click="isSearch = true"></el-button>
					  </el-input>					
				</div>
				<el-dialog
				  title="用户登录"
				  :visible.sync="loginDialogState"
				  width="50%"
				  >
					<div style="margin-bottom: 30px;">
							<el-form ref="form" :model="form" :rules="rules" label-width="80px">
							  <el-form-item label="用户名" prop="username">
							    <el-input v-model="form.username" prefix-icon="el-icon-mobile-phone" placeholder="手机号|邮箱" clearable></el-input>
							  </el-form-item>
							  <el-form-item label="密码" prop="password">
							    <el-input type="password" v-model="form.password" prefix-icon="el-icon-view" placeholder="请输入密码" clearable></el-input>
							  </el-form-item>	
							  <el-form-item label="记住密码">
										<el-switch
										  v-model="form.isRemberPassword"
										  active-text=""
										  inactive-text="">
										</el-switch>
							  </el-form-item>			
							  <el-form-item>
							  	<el-button :loading="login_submit_state" style="width: 100%" type="primary" @click="loginSubmit">登录</el-button>
							  </el-form-item>
							</el-form>						
					</div>
				</el-dialog>
				<el-dialog
				  title="用户注册"
				  :visible.sync="registerDialogState"
				  width="60%"
				  >
					<div style="margin-bottom: 30px;">
							<el-steps :active="stepIndex" finish-status="success" simple style="margin-top: 0px">
							  <el-step title="账号" ></el-step>
							  <el-step title="基本信息" ></el-step>
							  <el-step title="激活" ></el-step>
							</el-steps>						
							<el-form ref="form2" :model="form2" label-width="80px" style="margin-top: 20px;">
							  <el-form-item label="手机号" v-show="stepIndex === 1">
							    <el-input v-model="form2.tel" prefix-icon="el-icon-mobile-phone" placeholder="手机号" clearable></el-input>
							  </el-form-item>
							  <el-form-item label="邮箱" v-show="stepIndex === 1">
							    <el-input v-model="form2.email" prefix-icon="el-icon-message" placeholder="邮箱" clearable></el-input>
							  </el-form-item>							  
							  <el-form-item label="密码" v-show="stepIndex === 1">
							    <el-input type="password" v-model="form2.password" prefix-icon="el-icon-view" placeholder="请输入密码" clearable></el-input>
							  </el-form-item>		
							  <el-form-item v-show="stepIndex > 1">
							  	<el-button style="width: 100%" @click="stepIndex--">上一步</el-button>
							  </el-form-item>
							  <el-form-item v-show="stepIndex < 3">
							  	<el-button style="width: 100%" @click="stepIndex++">下一步</el-button>
							  </el-form-item>
							  <el-form-item v-show="stepIndex === 3">
							  	<el-button :loading="login_submit_state" style="width: 100%" type="primary" @click="loginSubmit">注册</el-button>
							  </el-form-item>
							</el-form>						
					</div>
				</el-dialog>					
		  </el-header>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name: 'page-header',
		data () {
			return {
				isSearch: true,
				input5: '',
				select: '',
				loginDialogState: false,
				login_submit_state: false,
				registerDialogState: false,
				register_submit_state: false,	
				stepIndex: 1,
				form: {
					isRemberPassword: true,
					username: '',
					password: ''
				},
				rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],          
				},
				form2: {
					tel: '',
					email: '',
					password: ''
				}				
			}
		},
		methods: {
			login () {
				this.loginDialogState = true;
			},
			register () {
				this.registerDialogState = true;
			},
			loginSubmit () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
						this.login_submit_state = true;
						this.$store.dispatch("login",{
							username: this.form.username,
							password: this.form.password
						}).then(res=>{
		          this.$message({
		            type: 'success',
		            message: res.msg
		          });							
							this.login_submit_state = false;
							this.loginDialogState = false;
						}).catch(msg=>{
		          this.$message({
		            type: 'warning',
		            message: msg
		          });		
		          this.login_submit_state = false;
						})
          }else {
            return false;
          }
        });				
			},
			registerSubmit () {
				this.register_submit_state = true;
			}
		},
		computed: {
			...mapState({
				isLogin: state => state.isLogin,
				nickName: state => state.user.nickName
			})
		}
	}
</script>

<style>
	.head-right{
		color: #fff;
		font-size: 12px;		
	}
	.head-right a{
		color: #fff;
		font-size: 12px;
		margin-left: 15px;
	}
</style>
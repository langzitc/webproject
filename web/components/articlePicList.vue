<template>
				<el-row :gutter="20">
				  <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(o, index) in 6" :key="index" style="margin-bottom: 25px;">
				    <el-card :body-style="{ padding: '0px' }">
				      <img :src="imgs[0]" class="image">
				      <div style="padding: 14px;">
				        <span>好吃的汉堡</span>
				        <div class="bottom clearfix">
				          <time class="time">{{ currentDate }}</time>
				          <el-button type="text" class="button">操作按钮</el-button>
				        </div>
				      </div>
				    </el-card>
				  </el-col>
				</el-row>	
</template>

<script>
	import Img1 from '../static/1.jpg'
	import Img2 from '../static/2.jpg'
	import Img3 from '../static/3.jpg'
	import Img4 from '../static/4.jpg'	
	export default {
		name: 'article-pic-list',
		data () {
			return {
				imgs: [Img1,Img2,Img3,Img4],
				currentDate: new Date(),
			}
		}
	}
</script>

<style>
</style>
<template>
				    	<div class="article-list">
							<div class="atricle-list-item">
					    		<el-row>
					    			<el-col :span="12" class="article-title">
					    				手机的感觉<el-tag class="circle-tag" type="success">原创</el-tag>
					    			</el-col>
					    			<el-col :span="12" class="article-btn text-right">
					    				<el-button type="success" round size="mini" icon="el-icon-view">551</el-button>
					    			</el-col>
					    		</el-row>
					    		<el-row>
					    			<el-col :span="24" class="article-desc">
					    				等哈时间快点哈萨克的吉安师范卡洛斯
					    			</el-col>
					    		</el-row>
					    		<el-row>
					    			<el-col :span="24">
					    				<img class="small-avatar" :src="imgs[0]" alt="" style="vertical-align: middle;"/>
					    				<span class="article-author">tuchun</span>-
					    				<span class="article-time">2017-01-01发布于</span>
					    			</el-col>
					    		</el-row>								
							</div>
							<div class="atricle-list-item">
					    		<el-row>
					    			<el-col :span="12" class="article-title">
					    				手机的感觉<el-tag class="circle-tag" type="success">原创</el-tag>
					    			</el-col>
					    			<el-col :span="12" class="article-btn text-right">
					    				<el-button type="success" round size="mini" icon="el-icon-view">551</el-button>
					    			</el-col>
					    		</el-row>
					    		<el-row>
					    			<el-col :span="24" class="article-desc">
					    				等哈时间快点哈萨克的吉安师范卡洛斯
					    			</el-col>
					    		</el-row>
					    		<el-row>
					    			<el-col :span="24">
					    				<img class="small-avatar" :src="imgs[0]" alt="" style="vertical-align: middle;"/>
					    				<span class="article-author">tuchun</span>-
					    				<span class="article-time">2017-01-01发布于</span>
					    			</el-col>
					    		</el-row>								
							</div>
							<div class="atricle-list-item">
					    		<el-row>
					    			<el-col :span="12" class="article-title">
					    				手机的感觉<el-tag class="circle-tag" type="success">原创</el-tag>
					    			</el-col>
					    			<el-col :span="12" class="article-btn text-right">
					    				<el-button type="success" round size="mini" icon="el-icon-view">551</el-button>
					    			</el-col>
					    		</el-row>
					    		<el-row>
					    			<el-col :span="24" class="article-desc">
					    				等哈时间快点哈萨克的吉安师范卡洛斯
					    			</el-col>
					    		</el-row>
					    		<el-row>
					    			<el-col :span="24">
					    				<img class="small-avatar" :src="imgs[0]" alt="" style="vertical-align: middle;"/>
					    				<span class="article-author">tuchun</span>-
					    				<span class="article-time">2017-01-01发布于</span>
					    			</el-col>
					    		</el-row>								
							</div>	
							<div class="text-center" style="margin-top: 20px;">
								<el-button plain>查看更多</el-button>
							</div>
				    	</div>	
</template>

<script>
	import Img1 from '../static/1.jpg'
	import Img2 from '../static/2.jpg'
	import Img3 from '../static/3.jpg'
	import Img4 from '../static/4.jpg'		
	export default {
		name: 'article-text-list',
		data () {
			return {
				imgs: [Img1,Img2,Img3,Img4]
			}
		}
	}
</script>

<style>
</style>
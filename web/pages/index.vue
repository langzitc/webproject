<template>
	<div>
		<el-container>
		  <page-header></page-header>
		  <page-banner></page-banner>		  
		  <el-main>	  	
		  		<el-row>
		  			<el-col :xs="24" :sm="{span:22,offset:1}" :md="{span:20,offset:2}" :lg="{span:16,offset:4}" :xl="{span:12,offset:6}">
				  		<article-pic-list></article-pic-list>
					    <el-tabs v-model="activeName" @tab-click="handleClick">
						    <el-tab-pane label="用户管理" name="first">
								<article-text-list></article-text-list>
						    </el-tab-pane>
						    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
						    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
						    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
					    </el-tabs>	
		  			</el-col>
		  		</el-row>			  			
		  </el-main>
		  <el-footer>
		  	<page-footer></page-footer>
		  </el-footer>
		</el-container>		
	</div>
</template>

<script>
import PageFooter from '~/components/footer.vue'
import PageHeader from '~/components/header.vue'
import ArticlePicList from '~/components/articlePicList.vue'
import ArticleTextList from '~/components/articleTextList.vue'
import PageBanner from '~/components/banner.vue'
export default {
	data () {
		return {
			activeName: '',
			keywords: 'tuch',
			description: 'tuch',
			title: '屠春首页'
		}
	},
	methods: {
		handleClick () {
			
		}
	},
    components: {
    	PageHeader,
    	PageFooter,
    	PageBanner,
    	ArticlePicList,
    	ArticleTextList
    },
  	head () {
	    return {
	      title: this.title,
	      meta: [
	        { hid: 'description', name: 'description', content: this.description },
	        { hid: 'keywords', name: 'keywords', content: this.keywords }
	      ]
	    }
  	}    
}
</script>

<style> 
</style>

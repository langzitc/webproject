<template>
	<div>
		<el-container>
		  <page-header></page-header>	  
		  <el-main>	  	
		  		<el-row>
		  			<el-col :xs="24" :sm="{span:22,offset:1}" :md="{span:20,offset:2}" :lg="{span:16,offset:4}" :xl="{span:12,offset:6}">
		  				<article-text-list></article-text-list>
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
	import ArticleTextList from '~/components/articleTextList.vue'
	export default {
		name: 'article_list',
		data () {
			return {
				keywords: 'tuch',
				description: 'tuch',
				title: '列表页'					
			}
		},
	  	head () {
		    return {
		      title: this.title,
		      meta: [
		        { hid: 'description', name: 'description', content: this.description },
		        { hid: 'keywords', name: 'keywords', content: this.keywords }
		      ]
		    }
	  	},
	  	components: {
	  		PageHeader,
	  		PageFooter,
	  		ArticleTextList
	  	}
	}
</script>

<style>
</style>
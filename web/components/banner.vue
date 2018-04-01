<template>
		  <el-carousel indicator-position="outside">
		    <el-carousel-item v-for="(item,index) in imgs" :key="index">
		      <img :src="item" alt="" style="width:100%;height:100%"/>
		    </el-carousel-item>
		  </el-carousel>	
</template>

<script>
	import Img1 from '../static/1.jpg'
	import Img2 from '../static/2.jpg'
	import Img3 from '../static/3.jpg'
	import Img4 from '../static/4.jpg'		
	export default {
		name: 'page-banner',
		data () {
			return {
				imgs: [Img1,Img2,Img3,Img4],
			}
		}
	}
</script>

<style>
</style>
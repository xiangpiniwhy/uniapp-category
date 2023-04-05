<template>
	<view>
		<SwiperCpns :bannerList='bannerList'
					@handleSwiperItem='handleSwiperItem'
		/>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { userHomeStore } from '@/store/home/home.js'
	import { storeToRefs} from 'pinia'
	import SwiperCpns  from '@/pages/home/cpns/swiper.vue'
	const homeStore = userHomeStore()
	const {bannerList, recommendList} = storeToRefs(homeStore)
	
	function handleSwiperItem(item){
		uni.navigateTo({
			url:'/pages/webView/webView?link=' + item.link
		})
	}
	onLoad(()=>{
		homeStore.fetchHomeMultdata()
	
	})

</script>

<style lang="scss">

</style>

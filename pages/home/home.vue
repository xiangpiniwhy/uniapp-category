<template>
	<view>
		<SwiperCpns :bannerList='bannerList'/>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { userHomeStore } from '@/store/home/home.js'
	import { storeToRefs} from 'pinia'
	import SwiperCpns  from '@/pages/home/cpns/swiper.vue'
	const homeStore = userHomeStore()
	const {bannerList, recommendList} = storeToRefs(homeStore)
	onLoad(()=>{
		homeStore.fetchHomeMultdata()
	})

</script>

<style lang="scss">

</style>

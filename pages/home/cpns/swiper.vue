<template>
	<swiper :autoplay="true">
		<template v-for="item in bannerList" :key="item">
			<swiper-item @click="handleSwiperItem(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script setup>
	import {HANDLE_SWIEPER_ITEM} from '@/globel/constant.ts'
	const props = defineProps({
		bannerList:{
			type:Array,
			default:()=>[]
		}
	})
	
	const emit = defineEmits([HANDLE_SWIEPER_ITEM])
	function handleSwiperItem(item){
		emit(HANDLE_SWIEPER_ITEM,item)
	}
</script>

<style lang="scss">
	.image{
		width: 100%;
	}
</style>
import {defineStore} from 'pinia'
import {getHomeMultidata} from '@/service/home.js'

export const userHomeStore = defineStore('home',{
	state:()=>{
		return {
			bannerList:[],
			recommendList:[]
		}
	},
	actions:{
		async fetchHomeMultdata(){
			const res = await getHomeMultidata()
			this.bannerList = res.data?.banner?.list
			this.recommendList = res.data?.recommendList?.list
						console.log(res);
		}
	}
})
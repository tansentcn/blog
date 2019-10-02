<template>
	<div id="menu" :style="style">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>目录</span>
			</div>
			<div>目录功能暂未开启</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			marginTop: 0
		};
	},
	computed: {
		style: function() {
			return "margin-top: " + this.marginTop + "px;";
		}
	},
	mounted() {
		window.addEventListener("scroll", this.scroll, false);
	},
	methods: {
		scroll: function() {
			console.log(window);
			console.log(window.pageYOffset);

			// 监听滚动事件
			var scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			this.marginTop = scrollTop >= 200 ? scrollTop - 180 : 0;
		}
	},
	beforeDestroy() {
		// 移除监听事件
		window.removeEventListener("scroll", this.scroll, false);
	}
};
</script>
<style lang="scss" scoped>
// #menu {
// 	.box-card{
// 		height: 80vh;
// 	}
// }
</style>

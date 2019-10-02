<template>
	<div id="footerBar">
		<div class="container">
			<div class="icp">闽ICP备18011673号-2</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/font";

$footerHeight: auto;

#footerBar {
	// 撑开容器
	height: $footerHeight;
	cursor: default;
	.container {
		// width: 100vh;
		height: 100%;
		margin: 20px auto;
		text-align: center;
		font-size: 2rem;
		color: $font-color-lesser;
		.icp {
			font-size: 0.8rem;
		}
	}
}
@media screen and (max-width: 1100px) and (min-width: 800px) {
	// 一般屏幕时
	.container {
		width: 90vw;
	}
}
@media screen and (min-width: 1100px) {
	// 大屏时
	.container {
		width: 75vw;
	}
}
</style>

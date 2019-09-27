<template>
	<div id="footerBar">
		<div class="container">END</div>
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
$footerHeight: 120px;

#footerBar {
	// 撑开容器
	height: $footerHeight;
	.container {
		width: 80vw;
		height: 100%;
		margin: 0 auto;
		text-align: center;
        font-size: 2rem;
	}
}
</style>

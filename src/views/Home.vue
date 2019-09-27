<template>
	<div class="home">
		<header-bar></header-bar>
		<!-- 主页内容容器 -->
		<div class="container">首页内容设计中……</div>
	</div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";

export default {
	data() {
		return {};
	},
	components: {
		HeaderBar
	}
};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	border: 1px red solid;
	font-size: 5rem;
	text-align: center;
}

@media screen and (min-width: 1280px) {
	.container {
		width: 80vw;
	}
}
</style>

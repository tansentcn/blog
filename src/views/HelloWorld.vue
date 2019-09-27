<template>
	<div id="helloWorld">
		<header-bar :color="color" :bg-color="bgColor" :show-border="false"></header-bar>
		<div class="title">看看这大千世界</div>
	</div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";

export default {
	data() {
		return {
			color: "white",
			bgColor: "transparent"
		};
	},
	components: {
		HeaderBar
	}
};
</script>

<style lang="scss" scoped>
#helloWorld {
	position: relative;
	height: 100vh;
	background: url("../assets/bg3.jpg") no-repeat;
	background-attachment: fixed;
	// 禁止用户选中文字
	user-select: none;
	.title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-size: 5rem;
		font-weight: 800;
		color: white;
		cursor: default;
		// 当文字变小时的过渡效果
		// transition: 0.6s all;
	}
}
</style>

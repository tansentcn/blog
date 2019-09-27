<template>
	<div id="container">
		<div class="slotLeft">
			<slot name="left"></slot>
		</div>
		<div class="slotRight">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
#container {
	display: flex;
	flex-direction: row;
	// width: 100vw;
	margin: 0 auto;
	box-sizing: border-box;
	overflow: hidden;
	.slotLeft {
		box-sizing: border-box;
		padding: 20px;
		width: 100%;
		overflow-x: hidden;
	}
	.slotRight {
		// 小屏时隐藏右侧栏
		display: none;
		box-sizing: border-box;
		padding: 20px;
		overflow-x: hidden;
	}
}

@media screen and (max-width: 1100px) and (min-width: 800px) {
	// 一般屏幕时
	#container {
		width: 90vw;
		.slotLeft {
			width: 65%;
		}
		.slotRight {
			// 大屏时显示右侧栏
			display: block;
			width: 35%;
		}
	}
}
@media screen and (min-width: 1100px) {
	// 大屏时
	#container {
		width: 75vw;
		.slotLeft {
			width: 65%;
		}
		.slotRight {
			// 大屏时显示右侧栏
			display: block;
			width: 35%;
		}
	}
}
</style>
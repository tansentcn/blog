<template>
	<div id="articleThumb">
		<el-card class="articleInfo" shadow="hover">
			<div class="articleTiitle">{{ title }}</div>
			<el-divider></el-divider>
			<div class="articleMsg">{{ msg }}</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		title: String,
		msg: String
	}
};
</script>

<style lang="scss" scoped>
#articleThumb {
	cursor: default;
	margin-bottom: 20px;
	.el-card {
		padding: 0 10px !important;
	}
	.articleInfo {
		flex: 1;
		padding-left: 25px;
		display: flex;
		flex-direction: column;
		// overflow: hidden;
		.articleTiitle {
			margin: 5px 0;
			font-size: 1.5rem;
			font-weight: 600;
			color: #303133;
		}
		.articleMsg {
			// text-indent: 2rem;
			color: #606266;
			// font-size: 0.8rem;
		}
	}
}

@media screen and (max-width: 500px) {
	#articleThumb {
		.el-divider {
			margin: 12px 0;
		}
	}
}
</style>
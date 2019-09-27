<template>
	<div id="infoCard">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>关于我</span>
			</div>
			<div class="content">
				<div class="item">E-mail:</div>
				<el-link class="item" :underline="false">tansentcn@163.com</el-link>

				<div class="item">Github:</div>
				<el-link
					class="item"
					href="https://github.com/tansentcn"
					:underline="false"
					target="_blank"
				>tansentcn</el-link>

				<div class="item">Bilibili:</div>
				<el-link
					class="item"
					href="https://space.bilibili.com/9351431"
					:underline="false"
					target="_blank"
				>TanSentcn</el-link>
			</div>
		</el-card>
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
$fontSize: 0.9rem;

#infoCard {
	margin-bottom: 20px;
	.content {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: 1fr 4fr;
		grid-column-gap: 20px;
		.item {
			display: inline-block;
			margin: 2px;
			font-size: $fontSize;
			// 使前面标题右对齐
			&:nth-child(2n + 1) {
				text-align: right;
			}
		}
	}
}
</style>

<template>
	<div id="articleTemplate">
		<!-- 文章大标题 -->
		<div class="aTitle">{{ title }}</div>
		<!-- 作者信息 -->
		<div class="articleInfo">
			<!-- 作者头像 -->
			<div class="authorPort">
				<img :src="port" />
			</div>
			<!-- 作者名称、发表时间 -->
			<div>
				<div class="author">{{ author }}</div>
				<div class="time">{{ artTime }}</div>
			</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		author: String,
		port: {
			type: String,
			default: "https://api.tansent.top/assets/port-qq.jpg"
		},
		artTime: String
	}
};
</script>

<style lang="scss">
// 这里不能加scoped

// 文章模板模板样式
#articleTemplate {
	color: #606266;
	cursor: default;
	// 文章标题
	.aTitle {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		color: #303133;
	}
	// 作者信息
	.articleInfo {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80px;
		padding: 20px;
		// 作者头像
		.authorPort {
			height: 80px;
			width: 80px;
			border-radius: 50%;
			background-color: #909399;
			margin-right: 20px;
			img {
				height: 80px;
				width: 80px;
				border-radius: 50%;
			}
		}
		.author,
		.time {
			font-size: 0.8rem;
			color: #909399;
		}
	}
	// 1号标题
	.aTitle1 {
		font-size: 1.8rem;
		margin: 15px 0;
		font-weight: bolder;
	}
	// 2号标题
	.aTitle2 {
		font-size: 1.5rem;
		margin: 10px 0;
		font-weight: bold;
	}
	// 3号标题
	.aTitle3 {
		font-size: 1.2rem;
		margin: 5px 0;
		font-weight: 600;
	}
	.aTitle1,
	.aTitle2,
	.aTitle3 {
		&:target {
			a {
				color: #6cb5ff;
				&::before {
					content: "#";
				}
			}
		}
		&::before {
			content: "";
			display: block;
			margin-top: -90px;
			height: 90px;
			visibility: hidden;
		}
		a {
			color: #606266;
		}
	}
	// 段落
	p {
		text-indent: 2rem;
		line-height: 1.7rem;
		margin: 10px 0;
	}
	// 文章中的图片
	.img {
		max-width: 100%;
		margin: 20px 0;
		img {
			display: table;
			margin: 0 auto;
			// 防止图片过高
			// max-height: 30vh;
			// 防止图片过宽
			max-width: 100%;
		}
		// 图片说明
		.imgText {
			margin-top: 4px;
			text-align: center;
			font-size: 0.8rem;
			color: #909399;
		}
	}
}
</style>
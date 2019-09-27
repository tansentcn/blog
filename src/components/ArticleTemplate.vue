<template>
	<div id="articleTemplate">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// 文章模板模板样式
#articleTemplate {
	color: #606266;
	cursor: default;
	// 文章标题
	.aTitle {
		font-size: 2rem;
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
		// 移入特效
		&:hover {
			color: #409eff;
		}
		&::before {
			content: "#";
			color: #409eff;
		}
	}
	// 2号标题
	.aTitle2 {
		font-size: 1.5rem;
		margin: 10px 0;
		// 移入特效
		&:hover {
			color: rgb(83, 168, 255);
		}
		&::before {
			color: rgb(83, 168, 255);
			content: "#";
		}
	}
	// 3号标题
	.aTitle3 {
		font-size: 1.2rem;
		margin: 5px 0;
		// 移入特效
		&:hover {
			color: rgb(102, 177, 255);
		}
		&::before {
			color: rgb(102, 177, 255);
			content: "#";
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
		display: grid;
		grid-template-rows: 1fr auto;
		// 多分几列，防止超大屏时图片不能居中问题
		grid-template-columns: repeat(13, 1fr);
		grid-row-gap: 10px;
		margin: 20px 0;
		img {
			grid-column-start: 7;
			grid-column-end: 8;
			height: 30vh;
			// max-width: 100%;
			// 防止图片过高
			max-height: 200px;
			transition: 0.3s all;
			&:active {
				// 4倍的话： translateY(-37.5%) 不向下扩展 1.5 / 4 = 3 / 8 = 0.375
				transform: scale(3.3) translateY(-25%);
			}
		}
		// 图片说明
		.imgText {
			grid-column-start: 7;
			grid-column-end: 8;
			text-align: center;
			font-size: 0.8rem;
			color: #909399;
		}
	}
}

@media screen and (max-width: 1000px) {
	#articleTemplate {
		// 当屏幕过小是图片变大可能会导致有些地方看不到
		// 所以适当的调整变大倍数
		.img {
			img {
				&:hover {
					transform: scale(2);
				}
			}
		}
	}
}
@media screen and (max-width: 1200px) and (min-width: 1000px) {
	#articleTemplate {
		.img {
			img {
				&:hover {
					transform: scale(3);
				}
			}
		}
	}
}
</style>
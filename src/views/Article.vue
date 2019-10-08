<template>
	<div id="article">
		<header-bar></header-bar>
		<!-- 主页内容容器 -->
		<container>
			<div class="left" slot="left">
				<article-template :title="article.title" :author="article.author" :art-time="article.artTime">
					<!-- 通过html字符串格式载入文章 -->
					<div v-html="article.art"></div>
				</article-template>
				<template v-if="article.star >= 0">
					<div class="articleBottom clearfix">
						<div class="el-icon-star-off star" @click="star(article.id)">star-{{ article.star }}</div>
					</div>
				</template>
			</div>
			<info-card slot="right"></info-card>
			<article-menu slot="right" :menus="article.menu"></article-menu>
		</container>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";
import Container from "@/components/Container";
import InfoCard from "@/components/InfoCard";
import ArticleMenu from "@/components/ArticleMenu";
import ArticleTemplate from "@/components/ArticleTemplate";

export default {
	data() {
		return {
			article: {},
			hasStar: false
		};
	},
	components: {
		HeaderBar,
		FooterBar,
		Container,
		InfoCard,
		ArticleTemplate,
		ArticleMenu
	},
	created() {
		// 路由传参接收this.$route.params
		// console.log(this.$route.params);
		// 通过文章ID获得文章内容
		this.axios
			.get("article.php", {
				params: {
					id: this.$route.params.id
				}
			})
			.then(res => {
				var data =
					typeof res.data == "object" ? res.data : JSON.parse(res.data);
				this.article = data.articles[0];
				// console.log(JSON.parse(this.article.menu));
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		star: function(id) {
			// star + 1
			this.axios
				.get("articleStar.php", {
					params: {
						// 文章id
						id: id,
						star: this.article.star
					}
				})
				.then(res => {
					console.log(res);
					// 本地star + 1
					this.article.star++;
					// 设置已点击样式
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/font";

#article {
	// 文章底部
	.articleBottom {
		text-align: right;
		// 点赞
		.star {
			cursor: pointer;
			transition: 0.3s all;
			&:hover {
				color: $font-color-active;
			}
			&.-active {
				color: $font-color-active;
				cursor: default;
			}
		}
	}
}
</style>

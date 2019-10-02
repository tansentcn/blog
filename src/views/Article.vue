<template>
	<div id="article">
		<header-bar></header-bar>
		<!-- 主页内容容器 -->
		<container>
			<div class="left" slot="left">
				<article-template>
					<!-- 通过html字符串格式载入文章 -->
					<div v-html="article"></div>
				</article-template>
			</div>
			<info-card slot="right"></info-card>
			<article-menu slot="right"></article-menu>
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
			article: ""
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
		// 通过标题获得文章内容
		this.axios
			.get("article.php", {
				params: {
					title: this.$route.params.articleTitle
				}
			})
			.then(res => {
				// console.log(res);
				var data =
					typeof res.data == "object" ? res.data : JSON.parse(res.data);
				this.article = data.articles[0].art;
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

<style lang="scss" scoped>
#article {
}
</style>

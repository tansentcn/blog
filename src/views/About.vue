<template>
	<div class="about">
		<header-bar></header-bar>
		<container>
			<div slot="left">
				<article-template :title="article.title" :author="author" :art-time="article.artTime" :star="-1">
					<!-- 通过html字符串格式载入文章 -->
					<div v-html="article.art"></div>
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
import ArticleTemplate from "@/components/ArticleTemplate";
import InfoCard from "@/components/InfoCard";
import ArticleMenu from "@/components/ArticleMenu";

export default {
	data() {
		return {
			article: "",
			author: "TanSent"
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
		// 通过标题获得文章内容
		this.axios
			.get("about.php")
			.then(res => {
				var data =
					typeof res.data == "object" ? res.data : JSON.parse(res.data);
				this.article = data.articles[0];
				// console.log(data);
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

<style lang="scss" scoped>
</style>

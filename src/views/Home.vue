<template>
	<div class="home">
		<header-bar></header-bar>
		<!-- 主页内容容器 -->
		<!-- <div class="container">首页内容设计中……</div> -->
		<container>
			<div slot="left">
				<div v-for="(article,index) in articles" :key="index" @click="showArt(article.title)">
					<article-thumb :title="article.title" :msg="article.msg"></article-thumb>
				</div>
			</div>
			<info-card slot="right"></info-card>
		</container>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";
import Container from "@/components/Container";
import InfoCard from "@/components/InfoCard";
import ArticleThumb from "@/components/ArticleThumb";

export default {
	data() {
		return {
			articles: [],
			article: "",
			showArticle: false
		};
	},
	components: {
		HeaderBar,
		FooterBar,
		Container,
		InfoCard,
		ArticleThumb
	},
	methods: {
		showArt: function(art) {
			// console.log(art);
			// 跳转至文章页面
			this.$router.push({
				name: "article",
				params: {
					// 传递文章标题
					articleTitle: art
				}
			});
		}
	},
	created() {
		// 获取文章列表
		this.axios
			.get("getArticles.php")
			.then(res => {
				// console.log(res.data);
				var data =
					typeof res.data == "object" ? res.data : JSON.parse(res.data);
				this.articles = data.articles;
			})
			.catch(err => {
				console.log(err);
			});
	}
};
</script>

<template>
	<div class="about">
		<header-bar></header-bar>
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
import ArticleTemplate from "@/components/ArticleTemplate";
import InfoCard from "@/components/InfoCard";
import ArticleMenu from "@/components/ArticleMenu";

export default {
	data() {
		return {
			article: `
<div class="aTitle">我的文章模板</div>
<div class="articleInfo">
    <div class="authorPort">
        <img src="https://eget.tansent.top/port.png" />
    </div>
    <div>
        <div class="author">TanSent</div>
        <div class="time">2019年9月26日22:59:42</div>
    </div>
</div>
<div class="aTitle1">为什么要设立模板？</div>
<p>为了方便，不需要每篇文章都要写HTML代码。</p>
<p>然而我一开始想用Vue做模板。但是大佬跟我说这样不利于SEO。就教我用数据库存储HTML文档，然后后台渲染什么的。但是我目前还不会。就先完成以字符串形式存储，至于什么后台渲染，SEO优化什么的，之后再说吧。边学边做。</p>
<div class="aTitle1">我现在的文章模板</div>
<p>因为在页面中，我是采用v-html载入的HTML字符串。所以我在文章中都不能使用Vue组件，以及我采用的ElementUI。想哭。写的有点丑。</p>
<div class="aTitle2">Vue创建的文章模板</div>
<div class="img">
    <img src="https://eget.tansent.top/article/我的文章模板/Vue文章模板.png">
    <div class="imgText">Vue中的文章模板</div>
</div>
<p>然后吧图片还是不好处理，什么居中啊，太大了什么的。所以我就先设置长按放大。当然要看的话还是[右键]-[从新标签打开]吧！</p>
<p>因为CSS样式都一样，所以全部写在了Vue模板中，之后需要的时候就调用模板。</p>
<div class="aTitle2">Vue中引入文章模板</div>
<p>通过模板中的&lt;slot&gt;&lt;/slot&gt;就可以将我们组件中放置的代码【&lt;div v-html="article"&gt;&lt;/div&gt;】插入进去。</p>
<div class="img">
    <img src="https://eget.tansent.top/article/我的文章模板/Vue中引用文章模板.png">
    <div class="imgText">引用文章模板</div>
</div>
<div class="aTitle2">HTML模板</div>
<p>我之后的文章就可以用这种格式的类名，写完之后放到一个字符串中。放到给v-html中就行。</p>
<div class="img">
    <img src="https://eget.tansent.top/article/我的文章模板/HTML模板.png">
    <div class="imgText">HTML模板</div>
</div>
			`,
			fit: "scale-down",
			fits: ["fill", "contain", "cover", "none", "scale-down"],
			url:
				"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
		};
	},
	components: {
		HeaderBar,
		FooterBar,
		Container,
		InfoCard,
		ArticleTemplate,
		ArticleMenu
	}
};
</script>

<style lang="scss" scoped>
// #about {
// }
</style>

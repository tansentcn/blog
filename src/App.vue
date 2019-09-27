<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
// import HeaderBar from "./components/HeaderBar.vue";

export default {
	name: "app",
	components: {
		// HeaderBar
	}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
}
/* 屏幕变小时缩小字体 */
@media screen and (max-width: 1440px){
	html{
		font-size: 22px;
	}
}
@media screen and (max-width: 1330px){
	html{
		font-size: 20px;
	}
}
@media screen and (max-width: 1200px){
	html{
		font-size: 18px;
	}
}
@media screen and (max-width: 1100px){
	html{
		font-size: 16px;
	}
}
@media screen and (max-width: 960px){
	html{
		font-size: 14px;
	}
}
@media screen and (max-width: 800px){
	html{
		font-size: 12px;
	}
}
</style>

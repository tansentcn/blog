<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "app"
};
</script>

<style lang="scss">
@import "assets/scss/font";

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
	overflow-x: hidden;
	// color: $font-color-default;
}

@include font-size-root;
</style>

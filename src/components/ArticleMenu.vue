<template>
	<div id="menu" :style="style">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>目录</span>
			</div>
			<!-- 菜单 -->
			<div v-for="(value1, name1, index1) in menu" :key="index1">
				<!-- 一级菜单 -->
				<div class="menu1">
					<a :href="tag(name1)">{{ name1 }}</a>
				</div>
				<!-- 判断当前一级菜单下的二级菜单是一个（String）还是多个（Obj） -->
				<template v-if="typeof value1 == typeof {}">
					<!-- 菜单底下有多个二级菜单 -->
					<div v-for="(value2, index2) in value1" :key="index2">
						<!-- 判断二级菜单下是否有三级菜单 -->
						<template v-if="typeof value2 == typeof ''">
							<!-- 二级菜单 -->
							<div class="menu2" style="text-indent: 1rem;">
								<a :href="tag(value2)">{{ value2 }}</a>
							</div>
						</template>
						<template v-else>
							<!-- 有三级菜单 -->
							<div v-for="(value3,name3, index3) in value2" :key="index3">
								<!-- 二级菜单 -->
								<div class="menu2" style="text-indent: 1rem;">
									<a :href="tag(name3)">{{ name3 }}</a>
								</div>
								<!-- 遍历三级菜单 -->
								<!-- 如果三级菜单只有一个 -->
								<template v-if="typeof value3 == typeof ''">
									<!-- 三级菜单 -->
									<div class="menu3" style="text-indent: 2rem;">
										<a :href="tag(value3)">{{ value3 }}</a>
									</div>
								</template>
								<!-- 如果三级菜单有多个 -->
								<template v-else>
									<div v-for="(value4, index4) in value3" :key="index4">
										<!-- 三级菜单 -->
										<div class="menu3" style="text-indent: 2rem;">
											<a :href="tag(value4)">{{ value4 }}</a>
										</div>
									</div>
								</template>
							</div>
						</template>
					</div>
				</template>
				<!-- 一级菜单下只有一个二级菜单 -->
				<template v-else>
					<!-- 二级菜单 -->
					<div class="menu2" style="text-indent: 1rem;">
						<a :href="tag(value1)">{{ value1 }}</a>
					</div>
				</template>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			marginTop: 0
			// 格式化后的菜单数据
			// menu: []
		};
	},
	props: {
		menus: String
	},
	computed: {
		style: function() {
			return "margin-top: " + this.marginTop + "px;";
		},
		menu: function() {
			// 格式化后的菜单数据
			// 判断menus是否已经传值成功，成功后再进行JSON，否则会报错
			return this.menus ? JSON.parse(this.menus) : "";
		}
	},
	mounted() {
		window.addEventListener("scroll", this.scroll, false);
		// 格式化菜单数据
		// this.menu = JSON.parse(this.menus);
	},
	methods: {
		scroll: function() {
			// 监听滚动事件
			var scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;
			this.marginTop = scrollTop >= 200 ? scrollTop - 180 : 0;
		},
		tag: function(tag) {
			return "#" + tag;
		}
	},
	beforeDestroy() {
		// 移除监听事件
		window.removeEventListener("scroll", this.scroll, false);
	}
};
</script>
<style lang="scss" scoped>
#menu {
	.box-card {
		max-height: 60vh;
		overflow-x: hidden;
		overflow-y: auto;
	}
}
</style>

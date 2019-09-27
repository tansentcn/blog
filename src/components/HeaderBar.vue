<template>
	<div id="headerBar">
		<div class="container" :style="style">
			<!-- 存放logo及菜单的容器 -->
			<div class="logoNavContainer">
				<!-- logo -->
				<div class="logo" title="HelloWorld" @click="to('helloWorld')">TanSent</div>
				<!-- 菜单、导航栏 -->
				<nav class="navPC">
					<div class="nav-item" @click="to('home')">首页</div>
					<div class="nav-item" @click="to('home')">留言板</div>
					<div class="nav-item" @click="to('about')">关于</div>
				</nav>
			</div>
			<!-- 用户板块 -->
			<div class="user">
				<!-- 登录状态 -->
				<template v-if="hasLogin">
					<div class="userPort">
						<el-avatar :size="userPortSize" :src="userPort"></el-avatar>
					</div>
					<div class="userName">用户名</div>
					<div class="userExit" @click="hasLogin = false">注销</div>
				</template>
				<!-- 未登录 游客状态 -->
				<template v-else>
					<div class="login" @click="hasLogin = true">登录</div>
					<div class="register">注册</div>
				</template>
			</div>
			<!-- 手机端/小屏时的菜单 -->
			<div class="navMoible">
				<!-- <el-dropdown>
					<span class="el-dropdown-link">
						下拉菜单
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item class="nav-item" @click="to('home')">首页</el-dropdown-item>
						<el-dropdown-item>留言板</el-dropdown-item>
						<el-dropdown-item>关于</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>-->
				<div>=</div>
				<ul>
					<li class="nav-item" @click="to('home')">首页</li>
					<!-- <li class="nav-item" @click="to('home')">留言板</li> -->
					<li class="nav-item" @click="to('about')">关于</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			hasLogin: false,
			userPortSize: "small",
			userPort:
				"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
		};
	},
	props: {
		color: {
			type: String,
			default: "#303133"
		},
		bgColor: {
			type: String,
			default: "#F2F6FC"
		},
		showBorder: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		to: function(page) {
			this.$router.push(page);
		}
	},
	computed: {
		style: function() {
			var color = "color:" + this.color + ";";
			var bgColor = "background-color:" + this.bgColor + ";";
			var border = this.showBorder
				? "border-bottom: 1px solid #DCDFE6;"
				: "border: 0;";
			return color + bgColor + border;
		}
	}
};
</script>

<style lang="scss" scoped>
$headerHeight: 80px;

#headerBar {
	// 撑开容器
	height: $headerHeight;
	box-sizing: border-box;

	width: 100vw;
	.container {
		// 固定于浏览器顶端
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		// 设置置顶
		z-index: 1000;
		// 子元素水平排列
		display: flex;
		flex-direction: row;
		// 对齐方式
		justify-content: space-between;
		box-sizing: border-box;
		height: $headerHeight;
		padding: 5px 20px;
		// 文字垂直居中
		line-height: $headerHeight;
		cursor: default;
		// 布局容器
		.logoNavContainer {
			display: flex;
			flex-direction: row;
			// logo
			.logo {
				font-size: 1.8rem;
				font-weight: 700;
				transition: 0.8s all;
				&:hover {
					color: aqua;
					transform: rotateY(360deg);
				}
			}
			// 导航栏
			.navPC {
				display: flex;
				flex-direction: row;
				margin-left: 100px;
				div {
					// 设置盒模型，防止盒子大小被border改变
					box-sizing: border-box;
					// 过度动画
					transition: 0.3s all;
					// 导航鼠标设置为手形状
					cursor: pointer;
					// 鼠标移入动画
					&:hover {
						border-bottom: 2px aquamarine solid;
						color: aquamarine;
					}
					// 分隔菜单项
					&:nth-child(even) {
						margin: 0 15px;
					}
					// 取消最后一个菜单的右margin
					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
		// 用户
		.user {
			display: flex;
			flex-direction: row;
			margin-right: 40px;
			// 鼠标设置为手形状
			cursor: pointer;
			div {
				// 鼠标移入动画
				&:hover {
					// border-bottom: 2px aquamarine solid;
					color: aquamarine;
				}
				// 分隔菜单项
				&:nth-child(even) {
					margin: 0 10px;
				}
				// 取消最后一个菜单的右margin
				&:last-child {
					margin-right: 0;
				}
			}
		}
		.navMoible {
			display: none;
		}
	}
}
// 小屏/手机时
@media screen and (max-width: 500px) {
	#headerBar {
		// 隐藏电脑/大屏端的菜单
		.navPC {
			display: none !important;
		}
		// 隐藏用户模块
		.user {
			display: none !important;
		}
		// 显示手机端/小屏端导航菜单
		.navMoible {
			display: block !important;
			div {
				font-size: 2rem;
				text-align: center;
				padding: 0 17px;
				height: 100%;
				&:hover ~ ul {
					display: block;
				}
			}
			ul {
				display: none;
				background-color: #f2f6fc;
				// height: auto;
				border: 1px solid #ebeef5;
				border-radius: 2px;
				li {
					// text-align: center;
					font-size: 1.2rem;
					height: 20px;
					line-height: 20px;
					margin: 8px;

					list-style-type: none;
				}
			}
		}
	}
}
</style>

<template>
	<div id="loginCard">
		<!-- 登录框 点击登录后显示-->
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<div style="text-align: center;">登录</div>
			</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item label="用户名" prop="tel">
					<el-input type="password" v-model="ruleForm.tel" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
				tel: "",
				pass: ""
			},
			rules: {
				tel: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
				pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
			}
		};
	}
};
</script>
<style lang="scss" scoped>
#loginCard {
	// 用户登录卡片
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
    // 因为el组件中的图层为2007
	z-index: 99999;
	.el-card {
		width: 20vw;
		padding: 0 5vw;
	}
}
</style>
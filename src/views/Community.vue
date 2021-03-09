<template>
	<v-container class="pa-8">
		<div class="d-flex aliign-center text-h3 font-weight-black my-4">
			<v-icon class="title-icon">mdi-layers</v-icon>
			<span class="mx-4">社区</span>
		</div>
		<v-tabs>
			<v-tab>动态</v-tab>
			<v-tab>好友</v-tab>
			<v-tab>新信息</v-tab>
			<v-tab>私信</v-tab>
		</v-tabs>
	</v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.title-icon {
	color: inherit !important;
	font-size: inherit !important;
}
</style>
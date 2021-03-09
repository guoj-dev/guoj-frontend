<template>
	<v-container class="pt-4 pb-0 px-8">
		<div class="d-flex aliign-center text-h3 font-weight-black my-4">
			<v-icon class="title-icon">mdi-layers</v-icon>
			<span class="mx-4">社区</span>
		</div>
		<div>
			<v-row>
				<v-col cols="8" class="py-0">
					<v-card class="community-container" elevation="6">
						<v-tabs>
							<v-tab>动态</v-tab>
							<v-tab>好友</v-tab>
							<v-tab>新信息</v-tab>
							<v-tab>私信</v-tab>
						</v-tabs>
					</v-card>
				</v-col>
				<v-col cols="4" class="py-0">
					<v-card class="side-container" elevation="6">
						
					</v-card>
				</v-col>
			</v-row>
		</div>
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
.community-container {
	border-top-left-radius: 32px !important;
	border-top-right-radius: 32px !important;
	height: calc(100vh - 64px - 82px);
	overflow: hidden;
}
.side-container {
	border-radius: 32px !important;
	overflow: hidden;
}
</style>
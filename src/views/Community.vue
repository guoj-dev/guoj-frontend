<template>
	<v-container class="pt-4 pb-0 px-8">
		<div class="mt-16">
			<v-row justify="center">
				<v-col cols="6" class="d-flex flex-column py-0">
					<v-card
						class="d-flex card-container my-4 pa-4"
						elevation="6"
					>
						<div class="mr-4">
							<v-avatar size="64">
								<v-img
									src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
								></v-img>
							</v-avatar>
						</div>
						<div class="flex-grow-1">
							<v-textarea
								label="写点什么吧"
								hint="使用GuOJ Favored Markdown编辑"
							></v-textarea>
						</div>
						<div class="d-flex flex-column justify-end ml-2">
							<v-checkbox label="Preview"></v-checkbox>
							<v-btn color="primary" style="margin-bottom: 22px">
								<v-icon left>mdi-send</v-icon>
								Send
							</v-btn>
						</div>
					</v-card>
					<v-card class="community-container" elevation="6">
						<div class="d-flex flex-column fill-height">
							<div
								class="d-flex text-subtitle1 font-weight-thin flex-column mt-16 mx-auto"
							>
								<v-icon>mdi-alert-circle-outline</v-icon>
								<span>目前暂无动态，发点什么?</span>
							</div>
						</div>
					</v-card>
				</v-col>
				<v-col cols="4" class="py-0">
					<v-card class="card-container mt-4 pa-4" elevation="6">
						<span class="text-h5 font-weight-black">活跃好友</span>
						<v-list>
							<v-list-item>
								<v-list-item-avatar>
									<v-avatar color="purple" size="40">
										<v-icon dark>mdi-account</v-icon>
									</v-avatar>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>
										Komeiji Koishi
									</v-list-item-title>
								</v-list-item-content>
								<v-btn icon small>
									<v-icon small>mdi-at</v-icon>
								</v-btn>
								<v-btn icon small>
									<v-icon small>mdi-chat-plus</v-icon>
								</v-btn>
							</v-list-item>

							<v-list-item>
								<v-list-item-avatar>
									<v-avatar color="red" size="40">
										<v-icon dark>mdi-account</v-icon>
									</v-avatar>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>
										Hakurei Reimu
									</v-list-item-title>
								</v-list-item-content>
								<v-btn icon small>
									<v-icon small>mdi-at</v-icon>
								</v-btn>
								<v-btn icon small>
									<v-icon small>mdi-chat-plus</v-icon>
								</v-btn>
							</v-list-item>
							<v-list-item>
								<v-list-item-avatar>
									<v-avatar color="black" size="40">
										<v-icon dark>mdi-account</v-icon>
									</v-avatar>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>
										Kirisame Marisa
									</v-list-item-title>
								</v-list-item-content>
								<v-btn icon small>
									<v-icon small>mdi-at</v-icon>
								</v-btn>
								<v-btn icon small>
									<v-icon small>mdi-chat-plus</v-icon>
								</v-btn>
							</v-list-item>
							<v-list-item>
								<v-list-item-avatar>
									<v-avatar color="pink" size="40">
										<v-icon dark>mdi-account</v-icon>
									</v-avatar>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>
										Remilia Scarlet
									</v-list-item-title>
								</v-list-item-content>
								<v-btn icon small>
									<v-icon small>mdi-at</v-icon>
								</v-btn>
								<v-btn icon small>
									<v-icon small>mdi-chat-plus</v-icon>
								</v-btn>
							</v-list-item>
						</v-list>
					</v-card>
					<v-card class="card-container mt-4 pa-4" elevation="6">
						<span class="text-h5 font-weight-black">推荐</span>
						<v-card-text>
							<div class="pa-8 text-center text-h6">暂无推荐</div>
						</v-card-text>
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
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	height: calc(100vh - 64px - 64px - 4px);
	overflow: hidden;
}
.card-container {
	border-radius: 16px !important;
	overflow: hidden;
}
</style>
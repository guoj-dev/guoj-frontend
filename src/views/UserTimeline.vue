<template>
	<v-container class="px-16">
		<v-row class="px-16">
			<v-col cols="9">
				<v-card>
					<div>
						<v-img
							:aspect-ratio="16 / 4"
							src="https://i.loli.net/2021/03/09/9BIoWGPET8mZwk3.jpg"
						>
						</v-img>
						<v-container class="d-flex pa-0">
							<v-card
								class="rounded-circle"
								style="
									top: -64px;
									margin-left: 32px;
									height: 136px;
									width: 136px;
									padding: 4px;
								"
							>
								<v-avatar size="128">
									<v-img
										src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
									></v-img>
								</v-avatar>
							</v-card>
                            <v-card flat class="ml-2" style="top: -48px; background-color:rgba(0,0,0,0);">
                                <span class="username-container text-h5">Quank123WIP</span>
                            </v-card>
						</v-container>
					</div>
				</v-card>
			</v-col>
			<v-col>
				<v-card>
					<div class="pa-4"></div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.username-container {
    color: #FFF;
    text-shadow: 1px 1px 1px #000;
}
</style>
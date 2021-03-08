<template>
	<div class="ProblemView pa-8">
		<v-container class="py-0">
			<div class="ma-4">
				<div class="d-flex">
					<div class="flex-grow-1">
						<div
							class="my-2 d-flex aliign-center text-h4 font-weight-black"
						>
							<span>T1000 A+B Problem</span>
						</div>
						<div
							class="d-flex my-2 font-weight-light text-subtitle-1"
						>
							<span class="mr-4"
								><v-icon class="title-icon mr-1"
									>mdi-folder</v-icon
								>传统题</span
							>
							<span class="mr-4"
								><v-icon class="title-icon mr-1"
									>mdi-clock</v-icon
								>1000ms</span
							>
							<span class="mr-4"
								><v-icon class="title-icon mr-1"
									>mdi-memory</v-icon
								>128MB</span
							>

							<span class="mr-4"
								><v-icon class="title-icon mr-1"
									>mdi-checkbox-marked-circle-outline</v-icon
								>114</span
							>
							<span class="mr-4"
								><v-icon class="title-icon mr-1"
									>mdi-format-list-bulleted</v-icon
								>514</span
							>
						</div>
						<div class="d-flex my-2 text-h6">
							<v-icon class="title-icon mr-2">mdi-tag</v-icon>
							<v-chip
								color="warning"
								class="font-weight-black mr-2"
								>编程基础</v-chip
							>
							<v-chip
								color="success"
								class="font-weight-black mr-2"
								>入门</v-chip
							>
						</div>

						<div class="d-flex mt-2 mb-4">
							<v-btn
								dark
								color="green"
								class="font-weight-black mr-2"
							>
								<v-icon left>mdi-check</v-icon>
								提交代码
							</v-btn>
							<v-btn
								dark
								color="warning"
								class="font-weight-black mr-2"
							>
								<v-icon left>mdi-format-list-checks</v-icon>
								评测记录
							</v-btn>
							<v-btn
								dark
								color="info"
								class="font-weight-black mr-2"
							>
								<v-icon left>mdi-chart-box</v-icon>
								分析
							</v-btn>
							<v-btn
								dark
								color="cyan"
								class="font-weight-black mr-2"
							>
								<v-icon left>mdi-comment-text-multiple</v-icon>
								讨论
							</v-btn>
						</div>
					</div>
					<div class="d-flex flex-column justify-space-between">
						<div class="align-self-end">
							<v-btn icon>
								<v-icon> mdi-view-dashboard </v-icon>
							</v-btn>
							<v-btn icon>
								<v-icon> mdi-pencil </v-icon>
							</v-btn>
							<v-btn icon>
								<v-icon> mdi-hammer-screwdriver </v-icon>
							</v-btn>
						</div>
						<div>
                            <span class="text-caption">Last Update on 2021/03/08</span>
                        </div>
					</div>
				</div>
				<v-divider />
				<div class="my-2" v-html="problem_content"></div>
			</div>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			problem_content: "<h1>Description<h1/>",
		};
	},
};
</script>

<style scoped>
.title-icon {
	color: currentColor !important;
	font-size: inherit !important;
}
.fill-height {
	min-height: 100% !important;
}
.problem-status-info-layer {
	word-break: keep-all;
}
.problem-status-icon-layer {
	position: absolute;
}
.problem-status-icon {
	color: transparent;
	background-image: linear-gradient(
		120deg,
		rgba(255, 255, 255, 0.9) 40%,
		rgba(255, 255, 255, 0) 100%
	);
	background-clip: text;
}
</style>
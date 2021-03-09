<template>
	<div class="home pa-8">
		<v-container class="mx-0">
			<v-row class="mb-3">
				<v-col cols="8">
					<v-card elevation="3" class="rounded-lg flex-grow-1">
						<v-carousel
							cycle
							:hide-delimiters="$vuetify.breakpoint.mobile"
							show-arrows-on-hover
							class="rounded-lg"
						>
							<v-carousel-item
								v-for="(slide, i) in slides"
								:key="i"
							>
								<v-sheet
									:color="colors[i]"
									height="100%"
									class="mt-3"
								>
									<v-row
										class="fill-height"
										align="center"
										justify="center"
									>
										<div class="text-md-h3 text-h6">
											<span>{{ slide }}</span>
										</div>
									</v-row>
								</v-sheet>
							</v-carousel-item>
						</v-carousel>
					</v-card>
				</v-col>
				<v-col>
					<v-card
						elevation="3"
						class="rounded-lg"
						v-show="!$vuetify.breakpoint.mobile"
                        style="height:100%;"
					>
						<v-card-title>
							<v-icon class="title-icon" large>
								mdi-bullhorn
							</v-icon>
							<span class="mx-4 text-h5 font-weight-black"
								>公告</span
							>
						</v-card-title>
                        <v-card-text>
                            <span class="text-center text-h1">🕊🕊🕊</span>
                        </v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="mb-3">
				<v-col cols="4">
					<home-problem-new class="info-card"></home-problem-new>
				</v-col>
				<v-col cols="4">
					<home-contest-recent
						class="info-card"
					></home-contest-recent>
				</v-col>
				<v-col cols="4">
					<home-trending class="info-card"></home-trending>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="4">
					<home-contributor class="info-card"></home-contributor>
				</v-col>
				<v-col cols="4">
					<home-activity class="info-card"></home-activity>
				</v-col>
				<v-col cols="4">
					<home-question class="info-card"></home-question>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import HomeActivity from "../components/HomeActivity.vue";
import HomeContestRecent from "../components/HomeContestRecent.vue";
import HomeContributor from "../components/HomeContributor.vue";
import HomeProblemNew from "../components/HomeProblemNew.vue";
import HomeTrending from "../components/HomeTrending.vue";
import HomeQuestion from "../components/HomeQuestion.vue";

export default {
	name: "Home",
	components: {
		HomeActivity,
		HomeContestRecent,
		HomeContributor,
		HomeProblemNew,
		HomeTrending,
		HomeQuestion,
	},
	data() {
		return {
			colors: [
				"indigo",
				"warning",
				"pink darken-2",
				"red lighten-1",
				"deep-purple accent-4",
			],
			slides: [
				"GuOJ ❤ Hydro!",
				"GuOJ ❤ Hydro!",
				"GuOJ ❤ Hydro!",
				"GuOJ ❤ Hydro!",
				"GuOJ ❤ Hydro!",
			],
		};
	},
};
</script>

<style scoped>
.square {
	width: 100%;
}
.square:after {
	content: "";
	display: float;
	padding-bottom: 100%;
}
.info-card {
	height: 100%;
}
</style>

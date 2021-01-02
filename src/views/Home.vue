<template>
    <div class="home pa-8">
        <v-container class="d-flex mx-0">
            <div class="flex-grow-1 flex-shrink-0 mb-4" :class="{'mr-4':!$vuetify.breakpoint.mobile}" :style="{'max-width':$vuetify.breakpoint.mobile?'calc(100vw - 164px)':'calc(100vw - 560px)'}">
                <v-card
                    elevation="3"
                    class="rounded-lg flex-grow-1 mb-8"
                    :max-width="$vuetify.breakpoint.mobile?'calc(100vw - 164px)':'calc(100vw - 560px)'"
                >
                    <v-carousel
                        cycle
                        :hide-delimiters="$vuetify.breakpoint.mobile"
                        show-arrows-on-hover
                        class="rounded-lg"
                    >
                        <v-carousel-item v-for="(slide, i) in slides" :key="i">
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
                <div class="d-flex" :max-width="$vuetify.breakpoint.mobile?'calc(100vw - 164px)':'calc(100vw - 560px)'">
                    <div class="d-flex flex-wrap flex-column flex-shrink-1 mr-4" v-if="!$vuetify.breakpoint.mobile">
                        <home-problem-new class="mb-4"></home-problem-new>
                        <home-contributor class="mt-4"></home-contributor>
                    </div>
                    <div class="d-flex flex-wrap flex-column flex-shrink-1 mx-4" v-if="!$vuetify.breakpoint.mobile">
                        <home-activity class="mb-4"></home-activity>
                        <home-contest-recent class="mt-4"></home-contest-recent>
                    </div>
                    <div class="d-flex flex-wrap flex-column flex-grow-1" :class="{'ml-4':!$vuetify.breakpoint.mobile}">
                        <home-trending class="mb-4" :class="{'align-self-stretch':$vuetify.breakpoint.mobile}"></home-trending>
                        <home-question class="mt-4" :class="{'align-self-stretch':$vuetify.breakpoint.mobile}"></home-question>
                    </div>
                </div>
            </div>
            <div class="ml-4" v-if="!$vuetify.breakpoint.mobile">
                <v-card
                    elevation="3"
                    class="rounded-lg mb-4"
                    style="box-sizing: border-box"
                    v-show="!$vuetify.breakpoint.mobile"
                >
                    <div style="height: 100%">
                        <v-card-title>
                            <v-icon class="title-icon" large> mdi-contain </v-icon>
                            <div class="text-h5 font-weight-black mx-4">
                                从这里开始
                            </div>
                        </v-card-title>
                        <v-divider />
                        <v-container class="d-flex flex-column pa-2">
                            <div class="d-flex my-4">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-card
                                            ripple
                                            class="mx-4 rounded-lg transition-swing"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon size="72" class="title-icon ma-8">
                                                mdi-marker-check
                                            </v-icon>
                                        </v-card>
                                    </template>
                                    <span>待办</span>
                                </v-tooltip>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-card
                                            ripple
                                            class="mx-4 rounded-lg transition-swing"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon size="72" class="title-icon ma-8">
                                                mdi-forum
                                            </v-icon>
                                        </v-card>
                                    </template>
                                    <span>讨论</span>
                                </v-tooltip>
                            </div>
                            <div class="d-flex my-4">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-card
                                            ripple
                                            class="mx-4 rounded-lg transition-swing"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon size="72" class="title-icon ma-8">
                                                mdi-album
                                            </v-icon>
                                        </v-card>
                                    </template>
                                    <span>清单</span>
                                </v-tooltip>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-card
                                            ripple
                                            class="mx-4 rounded-lg transition-swing"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            <v-icon size="72" class="title-icon ma-8">
                                                mdi-comment-question
                                            </v-icon>
                                        </v-card>
                                    </template>
                                    <span>提问</span>
                                </v-tooltip>
                            </div>
                        </v-container>
                    </div>
                </v-card>
                <v-card
                    elevation="3"
                    class="info-card rounded-lg mt-8"
                    v-show="!$vuetify.breakpoint.mobile"
                >
                    <v-card-title>
                        <v-icon class="title-icon" large> mdi-calendar-month </v-icon>
                        <span class="mx-4 text-h5 font-weight-black">签到</span>
                    </v-card-title>
                    <v-divider />
                    <v-card-text class="text-h1 text-center"> 🕊🕊🕊 </v-card-text>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
import HomeActivity from "../components/HomeActivity.vue";
import HomeContestRecent from "../components/HomeContestRecent.vue";
import HomeContributor from "../components/HomeContributor.vue";
import HomeProblemNew from "../components/HomeProblemNew.vue";
import HomeTrending from "../components/HomeTrending.vue"
import HomeQuestion from "../components/HomeQuestion.vue"

export default {
    name: "Home",
    components: {
        HomeActivity,
        HomeContestRecent,
        HomeContributor,
        HomeProblemNew,
        HomeTrending,
        HomeQuestion
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
            slides: ["GuOJ ❤ Hydro!", "GuOJ ❤ Hydro!", "GuOJ ❤ Hydro!", "GuOJ ❤ Hydro!", "GuOJ ❤ Hydro!"],
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
    margin-bottom: 32px;
}
</style>

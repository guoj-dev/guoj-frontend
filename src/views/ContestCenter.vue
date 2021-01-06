<template>
    <v-container class="pa-8">
            <div class="d-flex aliign-center text-h3 font-weight-black my-4">
                <v-icon class="title-icon"
                    >mdi-calendar-multiple</v-icon
                >
                <span class="mx-4">比赛中心</span>
            </div>
        <v-container class="pa-0">
            <v-row class="mb-3">
                <v-col :cols="!$vuetify.breakpoint.mobile ? 8 : 12">
                    <v-card class="pa-4 elevation-3 content-card">
                        <div class="text-h4 font-weight-black ma-4">
                            <v-icon class="title-icon"
                    >mdi-chart-box</v-icon
                >
                            我的比赛
                        </div>
                        <v-slide-group class="pa-4" multiple show-arrows>
                            <v-slide-item v-for="n in 14" :key="n">
                                <v-card
                                    class="ma-4 pa-2 rounded-lg elevation-6"
                                >
                                    <div class="pa-4">
                                        <div class="pb-3 d-flex">
                                            <span
                                                class="text-h5 font-weight-black mr-2"
                                            >
                                                GuOJ Round #{{ n + 2 }}
                                            </span>
                                            <v-chip
                                                color="error"
                                                class="mx-1"
                                                dark
                                            >
                                                <v-icon left>
                                                    mdi-chart-box
                                                </v-icon>
                                                OI
                                            </v-chip>
                                            <v-chip
                                                color="amber"
                                                class="mx-1"
                                                dark
                                            >
                                                <v-icon left> mdi-star </v-icon>
                                                Ranked
                                            </v-chip>
                                        </div>
                                        <v-divider />
                                        <div class="pt-3 d-flex">
                                            <v-chip
                                                color="info"
                                                class="mx-1"
                                                dark
                                            >
                                                <v-icon left
                                                    >mdi-calendar</v-icon
                                                >
                                                2038/01/19 03:14
                                            </v-chip>
                                            <v-chip
                                                color="warning"
                                                class="mx-1"
                                                dark
                                            >
                                                <v-icon left
                                                    >mdi-account-multiple-check</v-icon
                                                >
                                                GuOJ Group
                                            </v-chip>
                                        </div>
                                    </div>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-card>
                </v-col>
                <v-col cols="4" v-show="!$vuetify.breakpoint.mobile">
                    <v-card class="pa-4 elevation-3 content-card">
                        <div class="text-h4 font-weight-black mx-6 mb-6 mt-4">
                            <v-icon class="title-icon"
                    >mdi-calendar-text</v-icon
                >
                            比赛日历
                        </div>
                        <v-sheet class="px-6 pb-6">
                            <v-calendar
                                ref="calendar"
                                :weekdays="weekday"
                            ></v-calendar>
                        </v-sheet>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-show="!$vuetify.breakpoint.mobile">
                <v-col cols="7">
                    <v-card class="pa-4 elevation-3 content-card">
                        <div class="text-h4 font-weight-black ma-4">
                            <v-icon class="title-icon">mdi-calendar-multiple</v-icon>
                            比赛列表
                        </div>
                        <v-list>

                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <v-card class="pa-4 elevation-3 content-card-shrink">
                        <div class="text-h4 font-weight-black ma-4">
                            <v-icon class="title-icon">mdi-calendar-multiple-check</v-icon>
                            我参加过的比赛
                        </div>
                        <v-timeline dense>
                            <v-timeline-item
                                fill-dot
                                icon="mdi-grid"
                                color="grey"
                            >
                                <v-card
                                    class="my-4 pa-2 elevation-6 d-flex flex-column justify-center"
                                    style="height: 80px; max-width: 360px"
                                >
                                    <div
                                        class="px-2 d-flex flex-grow-1 align-center"
                                    >
                                        <span
                                            class="text-caption font-weight-black mr-1 text--disabled"
                                        >
                                            GuOJ Round #0
                                        </span>
                                        <v-chip
                                            color="error"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left small>
                                                mdi-chart-box
                                            </v-icon>
                                            OI
                                        </v-chip>
                                        <v-chip
                                            color="amber"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left x-small>
                                                mdi-star
                                            </v-icon>
                                            Ranked
                                        </v-chip>
                                    </div>
                                    <div
                                        class="px-2 d-flex flex-grow-1 align-center"
                                    >
                                        <v-chip
                                            color="info"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left small
                                                >mdi-calendar</v-icon
                                            >
                                            2038/01/19 03:14
                                        </v-chip>
                                        <v-chip
                                            color="warning"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left small
                                                >mdi-account-multiple-check</v-icon
                                            >
                                            GuOJ Group
                                        </v-chip>
                                    </div>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item
                                fill-dot
                                icon="mdi-grid"
                                color="grey"
                            >
                                <v-card
                                    class="my-4 pa-2 elevation-6 d-flex flex-column justify-center"
                                    style="height: 80px; max-width: 360px"
                                >
                                    <div
                                        class="px-2 d-flex flex-grow-1 align-center"
                                    >
                                        <span
                                            class="text-caption font-weight-black mr-1 text--disabled"
                                        >
                                            GuOJ April Round #0
                                        </span>
                                        <v-chip
                                            color="error"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left small>
                                                mdi-chart-box
                                            </v-icon>
                                            ACM
                                        </v-chip>
                                    </div>
                                    <div
                                        class="px-2 d-flex flex-grow-1 align-center"
                                    >
                                        <v-chip
                                            color="info"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left small
                                                >mdi-calendar</v-icon
                                            >
                                            2038/01/19 03:14
                                        </v-chip>
                                        <v-chip
                                            color="warning"
                                            class="mx-1"
                                            dark
                                            small
                                            outlined
                                        >
                                            <v-icon left small
                                                >mdi-account-multiple-check</v-icon
                                            >
                                            GuOJ Group
                                        </v-chip>
                                    </div>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            weekday: [1, 2, 3, 4, 5, 6, 0],
        };
    },
};
</script>

<style scoped>
.title-icon {
    color: inherit!important;
    font-size: inherit!important;
}
.content-card {
    border-radius: 8px;
    height: 100%;
}
.content-card-shrink {
    border-radius: 8px;
}
.contest-timeline-layer {
    height: 1000px;
}
</style>

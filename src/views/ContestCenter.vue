<template>
    <v-container class="pa-10">
        <div class="text-h3 font-weight-black ma-4">Contest Center</div>
        <v-container class="pa-4">
            <v-row>
                <v-col :cols="!$vuetify.breakpoint.mobile ? 8 : 12">
                    <v-card class="pa-4 elevation-3 content-card">
                        <div class="text-h4 font-weight-black ma-4">
                            My Contests
                        </div>
                        <v-slide-group class="pa-4" multiple show-arrows>
                            <v-slide-item v-for="n in 14" :key="n">
                                <v-card
                                    class="ma-4 pa-2 rounded-xl elevation-6"
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
                            Contest Schedule
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
                        <div class="text-h4 font-weight-black mx-6 mb-6 mt-4">
                            Contest TimeLine
                        </div>
                        <div>
                            <v-timeline class="mx-auto" dense>
                                <v-timeline-item
                                    v-for="n in 17"
                                    :key="n"
                                    fill-dot
                                    icon="mdi-grid"
                                >
                                    <v-hover v-slot="{ hover }">
                                        <div class="d-flex">
                                        <v-card
                                            class="my-4 pa-2 rounded-xl elevation-6 d-flex flex-column justify-center"
                                            style="
                                                height: 100px;
                                                min-width: 300px;
                                                max-width: 400px;
                                            "
                                        >
                                            <div
                                                class="d-flex flex-grow-1 px-2 align-center"
                                            >
                                                <span
                                                    class="text-body-2 font-weight-black mr-2"
                                                >
                                                    GuOJ Round #{{ 17 - n }}
                                                </span>
                                                <v-chip
                                                    color="error"
                                                    class="mx-1"
                                                    dark
                                                    small
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
                                                >
                                                    <v-icon left small>
                                                        mdi-star
                                                    </v-icon>
                                                    Ranked
                                                </v-chip>
                                            </div>
                                            <div
                                                class="d-flex flex-grow-1 px-2 align-center"
                                            >
                                                <v-chip
                                                    color="warning"
                                                    class="mx-1"
                                                    dark
                                                    small
                                                >
                                                    <v-icon left small
                                                        >mdi-account-multiple-check</v-icon
                                                    >
                                                    GuOJ Group
                                                </v-chip>
                                                <v-chip
                                                    color="success"
                                                    class="mx-1"
                                                    dark
                                                    small
                                                >
                                                    <v-icon left small
                                                        >mdi-check</v-icon
                                                    >
                                                    Certified
                                                </v-chip>
                                            </div>
                                        </v-card>
                                        <v-slide-x-transition>
                                        <div class="ml-8 d-flex align-center" v-if="hover">
                                            <span>2038/01/19 03:14</span>
                                        </div>
                                        </v-slide-x-transition>
                                        </div>
                                    </v-hover>
                                </v-timeline-item>
                            </v-timeline>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <v-card class="pa-4 elevation-3 content-card-shrink">
                        <div class="text-h4 font-weight-black ma-4">
                            Contest History
                        </div>
                        <v-timeline dense>
                            <v-timeline-item
                                fill-dot
                                icon="mdi-grid"
                                color="grey"
                            >
                                <v-card
                                    class="my-4 pa-2 rounded-xl elevation-6 d-flex flex-column justify-center"
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
                                    class="my-4 pa-2 rounded-xl elevation-6 d-flex flex-column justify-center"
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
            ops: {
                vuescroll: { wheelScrollDuration: 200 },
                scrollPanel: {},
                rail: { background: "#000000" },
                bar: { background: "#888888", opacity: 0.6, size: "10px" },
            },
        };
    },
};
</script>

<style scoped>
.content-card {
    border-radius: 48px;
    height: 100%;
}
.content-card-shrink {
    border-radius: 48px;
}
.contest-timeline-layer {
    height: 1000px;
}
</style>

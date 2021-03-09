<template>
    <v-card
        elevation="3"
        class="rounded-lg"
        v-show="!$vuetify.breakpoint.mobile"
    >
        <v-card-title>
            <v-icon class="title-icon" large> mdi-calendar-multiple </v-icon>
            <span class="mx-4 text-h5 font-weight-black">最近比赛</span>
        </v-card-title>
        <v-divider />
        <v-card-text style="height: calc(100% - 68px);overflow:hidden;" class="d-flex">
            <v-timeline class="pt-2 fill-height" dense>
                <v-timeline-item
                    class="pb-2"
                    color="info"
                    icon="mdi-grid"
                    fill-dot
                >
                    <v-card class="rounded-lg">
                        <div class="px-4 py-2">
                            <div class="d-flex">
                                <span class="h5"> GuOJ Round #2 </span>
                                <v-chip small color="error" class="mx-1" dark>
                                    <v-icon left small> mdi-chart-box </v-icon>
                                    OI
                                </v-chip>
                                <v-chip small color="amber" class="mx-1" dark>
                                    <v-icon left small> mdi-star </v-icon>
                                    Ranked
                                </v-chip>
                            </div>
                            <div class="d-flex">
                                <v-chip small color="info" class="mx-1 mt-2" dark>
                                    <v-icon left small>mdi-calendar</v-icon>
                                    2021/12/32 25:00
                                </v-chip>
                                <v-chip small color="warning" class="mx-1 mt-2" dark>
                                    <v-icon left small
                                        >mdi-account-multiple-check</v-icon
                                    >
                                    GuOJ Group
                                </v-chip>
                            </div>
                        </div>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item
                    class="pb-2"
                    color="info"
                    icon="mdi-grid-off"
                    fill-dot
                >
                    <v-card class="rounded-lg">
                        <div class="px-4 py-2">
                            <div class="d-flex">
                                <span class="h5"> GuOJ April Round #2 </span>
                                <v-chip small color="error" class="mx-1" dark>
                                    <v-icon left small> mdi-chart-box </v-icon>
                                    ACM
                                </v-chip>
                            </div>
                            <div class="d-flex">
                                <v-chip small color="info" class="mx-1 mt-2" dark>
                                    <v-icon left small>mdi-calendar</v-icon>
                                    2021/4/1 25:00
                                </v-chip>
                                <v-chip small color="warning" class="mx-1 mt-2" dark>
                                    <v-icon left small
                                        >mdi-account-multiple-check</v-icon
                                    >
                                    GuOJ Group
                                </v-chip>
                            </div>
                        </div>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item class="pb-2" hide-dot>
                    <v-divider />
                </v-timeline-item>
                <v-timeline-item
                    class="pb-2"
                    color="grey lighten-2"
                    icon="mdi-grid"
                    fill-dot
                >
                    <v-card color="grey lighten-2" class="rounded-lg">
                        <div class="px-4 py-2">
                            <div class="d-flex">
                                <span class="h5"> GuOJ Round #1 </span>
                                <v-chip small color="grey" class="mx-1" dark>
                                    <v-icon left small> mdi-chart-box </v-icon>
                                    IOI
                                </v-chip>
                                <v-chip small color="grey" class="mx-1" dark>
                                    <v-icon left small> mdi-star </v-icon>
                                    Ranked
                                </v-chip>
                            </div>
                            <div class="d-flex">
                                <v-chip small color="grey" class="mx-1 mt-2" dark>
                                    <v-icon left small>mdi-calendar</v-icon>
                                    2019/06/15 14:30
                                </v-chip>
                                <v-chip small color="grey" class="mx-1 mt-2" dark>
                                    <v-icon left small
                                        >mdi-account-multiple-check</v-icon
                                    >
                                    GuOJ Group
                                </v-chip>
                            </div>
                        </div>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.title-icon {
    color: currentColor!important;
}
</style>
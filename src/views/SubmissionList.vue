<template>
    <v-container class="pa-8">
        <div class="d-flex aliign-center text-h3 font-weight-black my-4">
            <v-icon class="title-icon">mdi-code-tags-check</v-icon>
            <span class="mx-4">评测中心</span>
        </div>
        <v-container>
            <div class="d-flex">
                <v-card
                    class="d-inline-flex status-card flex-grow-1 mx-4"
                    min-height="20vh"
                    color="cyan"
                    dark
                >
                    <div class="status-card-icon-layer ma-4">
                        <v-icon class="status-card-icon" size="100">mdi-calendar-today</v-icon>
                    </div>
                    <div class="d-flex status-card-content-layer ma-4">
                        <span class="text-h4 font-weight-bold align-self-end"
                            >今日评测量</span
                        >
                        <span class="text-h1 ml-auto align-self-end">16</span>
                    </div>
                </v-card>
                <v-card
                    class="d-inline-flex status-card flex-grow-1 mx-4"
                    min-height="20vh"
                    color="success"
                    dark
                >
                    <div class="status-card-icon-layer ma-4">
                        <v-icon class="status-card-icon" size="100">mdi-calendar-week</v-icon>
                    </div>
                    <div class="d-flex status-card-content-layer ma-4">
                        <span class="text-h4 font-weight-bold align-self-end"
                            >本周评测量</span
                        >
                        <span class="text-h1 ml-auto align-self-end">54</span>
                    </div>
                </v-card>
                <v-card
                    class="d-inline-flex status-card flex-grow-1 mx-4"
                    min-height="20vh"
                    color="red"
                    dark
                >
                    <div class="status-card-icon-layer ma-4">
                        <v-icon class="status-card-icon" size="100">mdi-server-network</v-icon>
                    </div>
                    <div class="d-flex status-card-content-layer ma-4">
                        <span class="text-h4 font-weight-bold align-self-end"
                            >在线评测机</span
                        >
                        <span class="text-h1 ml-auto align-self-end">4</span>
                    </div>
                </v-card>
                <v-card
                    class="d-inline-flex status-card flex-grow-1 mx-4"
                    min-height="20vh"
                    color="info"
                    dark
                >
                    <div class="status-card-icon-layer ma-4">
                        <v-icon class="status-card-icon" size="100">mdi-account-group</v-icon>
                    </div>
                    <div class="d-flex status-card-content-layer ma-4">
                        <span class="text-h4 font-weight-bold align-self-end"
                            >活跃用户</span
                        >
                        <span class="text-h1 ml-auto align-self-end">2</span>
                    </div>
                </v-card>
            </div>
            <div>
                <v-row class="pa-4">
                    <v-col cols="8">
                        <v-card class="pa-4">
                            <div
                                class="d-flex aliign-center text-h4 font-weight-black mx-5 mt-2 mb-4"
                            >
                                <v-icon class="title-icon"
                                    >mdi-check-network</v-icon
                                >
                                <span class="mx-4">评测列表</span>
                            </div>
                            <v-list>
                                <v-list-item v-for="i in 10" :key="i">
                                    <v-row justify="space-between">
                                        <v-col cols="6">
                                            <div
                                                class="d-flex justify-space-between"
                                            >
                                            <v-row>
                                                <v-col cols="3">
                                                <v-chip color="info">
                                                    <v-icon left size="16"
                                                        >mdi-pound</v-icon
                                                    >
                                                    <span
                                                        class="text-overline"
                                                        >{{ i }}</span
                                                    >
                                                </v-chip>
                                                </v-col>
                                                <v-col cols="9">
                                                <div class="problem-name-layer flex-grow-1">
                                                <span
                                                    class="text-h6 font-weight-bold"
                                                    >T1000 A+B Problem</span
                                                >
                                                </div>
                                                </v-col>
                                            </v-row>
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div
                                                class="d-flex justify-end"
                                            >
                                                <v-chip color="success" class="mx-2">
                                                    <v-icon left size="16"
                                                        >mdi-check</v-icon
                                                    >
                                                    <span class="text-overline"
                                                        >Accepted</span
                                                    >
                                                </v-chip>
                                                <v-chip color="success" class="mx-2">
                                                    <v-icon left size="16"
                                                        >mdi-hexagon-slice-6</v-icon
                                                    >
                                                    <span class="text-overline"
                                                        >100</span
                                                    >
                                                </v-chip>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-list-item>
                            </v-list>
                            <div class="text-center my-4">
                                <v-pagination
                                    v-model="submission_page"
                                    length="3"
                                    total-visible="10"
                                    circle
                                    elevation="4"
                                ></v-pagination>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card class="pa-4">
                            <div
                                class="d-flex aliign-center text-h4 font-weight-black mt-2 mb-4"
                            >
                                <v-icon class="title-icon">mdi-filter</v-icon>
                                <span class="mx-4">筛选</span>
                            </div>
                            <div style="font-size:128px;">
                                🕊🕊🕊🕊🕊🕊🕊🕊
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            submission_page: 1,
        };
    },
};
</script>

<style scoped>
.title-icon {
    color: inherit !important;
    font-size: inherit !important;
}
.status-card {
    box-sizing: border-box;
}
.status-card-content-layer {
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    width: calc(100% - 32px);
    z-index: 1;
}
.status-card-icon {
    color: transparent;
    background-image: linear-gradient(120deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
    background-clip: text;
}
.status-card-icon-layer {
    z-index: 2;
}
.problem-name-layer {
    text-align: start;
}
</style>

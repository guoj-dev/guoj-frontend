<template>
    <v-container class="pa-8">
        <div class="d-flex aliign-center text-h3 font-weight-black ma-4 mb-8">
            <v-icon class="title-icon">mdi-account-network</v-icon>
            <span class="mx-4">团队中心</span>
        </div>

        <v-card class="px-4 pt-6 pb-10 mb-8">
            <div
                class="d-flex aliign-center text-h4 font-weight-black mb-4 mx-4"
            >
                <v-icon class="title-icon">mdi-account-multiple-check</v-icon>
                <span class="mx-4">我的团队</span>
            </div>
            <div class="d-flex">
                <v-slide-group multiple show-arrows>
                    <v-slide-item v-for="i in 8" :key="i">
                        <organization-card
                            background="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=631f1c49083b5bb5bed720f606d2d523/b99f471ed21b0ef450fe85bcd6c451da80cb3e9e.jpg"
                            avatar="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3549253093,2168413788&fm=26&gp=0.jpg"
                            name="下北泽"
                            ispublic="true"
                            isofficial="false"
                            peoplecount="16"
                            contestcount="0"
                            class="mx-4 my-2"
                        ></organization-card
                    ></v-slide-item>
                </v-slide-group>
            </div>
        </v-card>
        <v-row>
            <v-col cols="8">
                <v-card class="pa-4 mb-8">
                    <div
                        class="d-flex aliign-center text-h4 font-weight-black mb-4 mx-4"
                    >
                        <v-icon class="title-icon">mdi-card-search</v-icon>
                        <span class="mx-4">发现</span>
                    </div>
                    <v-row v-for="i in 3" :key="i" class="mx-4">
                        <v-col class="d-flex justify-center">
                            <organization-card
                                background="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=631f1c49083b5bb5bed720f606d2d523/b99f471ed21b0ef450fe85bcd6c451da80cb3e9e.jpg"
                                avatar="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3549253093,2168413788&fm=26&gp=0.jpg"
                                name="下北泽"
                                ispublic="true"
                                isofficial="false"
                                peoplecount="16"
                                contestcount="0"
                                class="mx-4 my-2"
                            ></organization-card>
                        </v-col>
                        <v-col class="d-flex justify-center">
                            <organization-card
                                background="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=631f1c49083b5bb5bed720f606d2d523/b99f471ed21b0ef450fe85bcd6c451da80cb3e9e.jpg"
                                avatar="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3549253093,2168413788&fm=26&gp=0.jpg"
                                name="下北泽"
                                ispublic="true"
                                isofficial="false"
                                peoplecount="16"
                                contestcount="0"
                                class="mx-4 my-2"
                            ></organization-card>
                        </v-col>
                    </v-row>
                    <div class="text-center my-4">
                        <v-pagination
                            v-model="explore_page"
                            length="3"
                            total-visible="10"
                            circle
                            elevation="4"
                        ></v-pagination>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card class="pa-4 mb-8">
                    <div
                        class="d-flex aliign-center text-h4 font-weight-black mb-4 mx-4"
                    >
                        <v-icon class="title-icon">mdi-cloud-search</v-icon>
                        <span class="mx-4">搜索</span>
                    </div>
                    <v-text-field
                        solo
                        hide-details
                        label="团队搜索"
                        prepend-inner-icon="mdi-magnify"
                        append-outer-icon="mdi-send"
                        clearable
                        clear-icon="mdi-close"
                    >
                    </v-text-field>
                    <div class="mt-4 mx-4">
                        <span>
                            搜索点什么吧
                        </span>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import OrganizationCard from "../components/OrganizationCard.vue";
export default {
    components: { OrganizationCard },
    data() {
        return {
            explore_page: 1,
        };
    },
};
</script>

<style scoped>
.title-icon {
    color: inherit !important;
    font-size: inherit !important;
}
</style>
<template>
    <v-app>
        <v-app-bar app fixed clipped-left height="64" class="py-0">
            <v-container
                to="/"
                flat
                text
                ripple="false"
                class="font-weight-black text-h5 ml-4 global-title d-flex align-center"
            >
                <router-link tag="div" to="/" class="home-container"><span class="d-inline-block">GuOJ</span></router-link>
                <navigation></navigation>
            </v-container>
            <v-spacer />
            <v-menu offset-y slide-y rounded="lg" nudge-bottom="4">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" class="mr-4">
                        <v-avatar
                            size="48"
                            color="info"
                            class="rounded-circle"
                        >
                            <v-img
                                src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                            ></v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar size="48">
                            <v-avatar
                                size="48"
                                color="info"
                                class="rounded-circle"
                            >
                                <v-img
                                    src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                                ></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title> 琪露诺 </v-list-item-title>
                            <v-list-item-subtitle>
                                24岁，天才desu
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item to="UserInfo">
                        <v-list-item-icon>
                            <v-icon> mdi-clipboard-account </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> 个人空间 </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon> mdi-alert-circle-check </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> 消息中心 </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon color="warning">
                                mdi-account-settings
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> 设置 </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon color="error"> mdi-logout </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> 注销 </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main>
            <div class="main-view">
                <vuescroll :ops="ops">
                    <div v-if="isDefaultContainer" style="height: 48px"></div>
                    <v-card v-if="isDefaultContainer" class="main-card mx-10" elevation="6">
                        <router-view class="main-container" />
                        <global-footer />
                    </v-card>
                    <div v-else>
                        <router-view class="main-container" />
                    </div>
                </vuescroll>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import vuescroll from "vuescroll";

export default {
    name: "App",

    components: { GlobalFooter, vuescroll, Navigation },

    computed: {
        isDefaultContainer() {
            return this.$route.meta.DefaultView;
        }
    },

    data: () => ({
        ops: {
            vuescroll: { wheelScrollDuration: 200 },
            scrollPanel: {},
            rail: { background: "#000000" },
            bar: { background: "#888888", opacity: 0.6, size: "10px" },
        },
    }),
};
</script>

<style>
.__view {
    height: 100%;
}
</style>

<style scoped>
.main-view {
    height: calc(100vh - 64px);
}
.main-card {
    min-height: calc(100% - 48px);
    border-top-left-radius: 36px !important;
    border-top-right-radius: 36px !important;
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
}
.global-title {
    background-color: inherit !important;
}
.global-title:before {
    opacity: 0 !important;
}
.home-container {
    cursor: pointer;
    user-select:none;
}
</style>

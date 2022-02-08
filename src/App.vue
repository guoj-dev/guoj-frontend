<template>
    <v-app>
        <global-appbar />
        
        <v-main>
            <div class="main-view">
                <vuescroll :ops="ops">
                    <div v-if="isDefaultContainer" style="height: 48px"></div>
                    <v-card
                        v-if="isDefaultContainer"
                        class="main-card mx-10"
                        elevation="6"
                    >
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
import GlobalFooter from "./components/global/Footer.vue";
import GlobalAppbar from "./components/global/Appbar.vue";
import vuescroll from "vuescroll";

export default {
    name: "App",

    components: { GlobalFooter, vuescroll, GlobalAppbar },

    computed: {
        isDefaultContainer() {
            return this.$route.meta.DefaultView;
        },
    },

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
    user-select: none;
}
</style>

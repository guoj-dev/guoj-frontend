<template>
    <v-app-bar app fixed clipped-left height="64" class="py-0">
        <v-container
            to="/"
            flat
            text
            ripple="false"
            class="font-weight-black text-h5 ml-4 global-title d-flex align-center"
        >
            <router-link tag="div" to="/" class="home-container">
                <span class="d-inline-block">GuOJ</span>
            </router-link>
            <navigation></navigation>
        </v-container>
        <v-spacer />
        <v-menu offset-y slide-y rounded="lg" nudge-bottom="4">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" class="mr-4">
                    <v-avatar size="48" color="info" class="rounded-circle">
                        <v-img
                            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                        ></v-img>
                    </v-avatar>
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar size="48">
                        <v-avatar size="48" color="info" class="rounded-circle">
                            <v-img
                                src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                            ></v-img>
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>User Title</v-list-item-title>
                        <v-list-item-subtitle
                            >User Subtitle</v-list-item-subtitle
                        >
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item to="UserInfo">
                    <v-list-item-icon>
                        <v-icon>mdi-clipboard-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>个人空间</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-alert-circle-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>消息中心</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon color="warning">mdi-account-settings</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>设置</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon color="error">mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>注销</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
    components: { Navigation },
};
</script>

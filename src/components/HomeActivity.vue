<template>
    <v-card
        elevation="3"
        class="rounded-lg"
        v-show="!$vuetify.breakpoint.mobile"
    >
        <v-card-title>
            <v-icon class="title-icon" large> mdi-message-alert </v-icon>
            <span class="mx-4 text-h5 font-weight-black">动态</span>
        </v-card-title>
        <v-divider />
        <v-list dense flat class="mb-4">
            <v-list-item link>
                <v-list-item-avatar>
                    <v-avatar color="purple" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        您的好友 Komeiji Koishi 给您发了 4 条消息。
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        还有其他 3 条...
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-avatar>
                    <v-avatar color="red" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        您加入的团队 Gensoukyo 中有 9 条新消息。
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        还有其他 2 个团队...
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-avatar>
                    <v-icon class="title-icon">mdi-message-alert</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        最近有 15 条关于您的动态。
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-avatar>
                    <v-icon class="title-icon">mdi-alert-octagram</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        最近有 24 条您关注的动态。
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {};
</script>

<style>
.title-icon {
    color: currentColor!important;
}
</style>
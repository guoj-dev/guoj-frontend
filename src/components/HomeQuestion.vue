<template>
    <v-card
        elevation="3"
        class="rounded-lg"
        :max-width="$vuetify.breakpoint.mobile?'calc(100vw - 164px)':'calc(100vw - 560px - 689px)'"
    >
        <v-card-title>
            <v-icon class="title-icon" large> mdi-progress-question </v-icon>
            <span class="mx-4 text-h5 font-weight-black">新问题</span>
        </v-card-title>
        <v-divider />
        <v-list two-line>
            <v-list-item inset link>
                <v-list-item-avatar>
                    <v-avatar color="info" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                    <v-icon class="title-icon">mdi-comment-question</v-icon>
                    How to destruct a shrine with a shrine maiden who wears red and white clothes?
                </v-list-item-title>
                <v-list-item-subtitle>
                    Hinanawi Tenshi - <v-icon color="red" small>mdi-heart</v-icon> 6 喜欢 <v-icon class="title-icon" small>mdi-comment-check</v-icon> 4 回答
                </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action-text>
                    4 小时前
                </v-list-item-action-text>
            </v-list-item>
            <v-list-item inset link>
                <v-list-item-avatar>
                    <v-avatar color="black" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-icon class="title-icon">mdi-comment-question</v-icon>
                        How to steal a book from a library?
                </v-list-item-title>
                <v-list-item-subtitle>
                    Kirisame Marisa - <v-icon color="red" small>mdi-heart</v-icon> 2 喜欢 <v-icon class="title-icon" small>mdi-comment-check</v-icon> 1 回答
                </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action-text>
                    4 小时前
                </v-list-item-action-text>
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
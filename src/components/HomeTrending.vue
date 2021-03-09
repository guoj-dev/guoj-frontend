<template>
    <v-card
        elevation="3"
        class="rounded-lg"
    >
        <v-card-title>
            <v-icon class="title-icon" large> mdi-fire </v-icon>
            <span class="mx-4 text-h5 font-weight-black">热门</span>
        </v-card-title>
        <v-divider />
        <v-list two-line>
            <v-list-item inset link>
                <v-list-item-avatar>
                    <v-avatar color="purple" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                    You got a phone call.
                </v-list-item-title>
                <v-list-item-subtitle>
                    Komeiji Koishi - <v-icon color="red" small>mdi-heart</v-icon> 20 赞 <v-icon class="title-icon" small>mdi-comment-text-multiple</v-icon> 16 回复
                </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action-text>
                    4 小时前
                </v-list-item-action-text>
            </v-list-item>
            <v-list-item inset link>
                <v-list-item-avatar>
                    <v-avatar color="red" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>
                    I'm poor, give me money, NOW!
                </v-list-item-title>
                <v-list-item-subtitle>
                    Hakurei Reimu - <v-icon color="red" small>mdi-heart</v-icon> 5 赞 <v-icon class="title-icon" small>mdi-comment-text-multiple</v-icon> 2 回复
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
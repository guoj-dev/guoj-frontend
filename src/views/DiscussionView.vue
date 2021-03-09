<template>
    <v-container class="pa-8">
        <div class="d-flex aliign-center text-h4 font-weight-black my-4">
            <v-icon class="title-icon">mdi-comment-text</v-icon>
            <span class="mx-4">{{ Title }}</span>
        </div>
        <div class="d-flex pa-4">
            <v-card class="d-flex flex-grow-1 mt-7">
                <v-card class="d-flex rounded-lg profile-card my-4 flex-column">
                    <v-avatar class="ma-2" rounded size="80">
                        <v-img
                            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                        ></v-img>
                    </v-avatar>
                    <span class="text-center font-weight-bold mb-2"
                        >琪露诺<v-icon class="title-icon"
                            >mdi-gender-female</v-icon
                        ></span
                    >
                    <span class="text-center font-weight-bold mb-2">
                        <v-chip label x-small color="info">Baka</v-chip>
                    </span>
                </v-card>
                <v-card
                    class="mb-4 ml-4 mr-2 flex-grow-1 rounded-lg content-card-heading"
                ></v-card>
                <div class="d-flex flex-column my-4 mr-2 align-center">
                    <v-chip label>#1</v-chip>
                    <div
                        class="d-flex flex-column my-4 flex-grow-1 align-center justify-space-around"
                    >
                        <v-btn
                            :depressed="upvote"
                            :dark="upvote"
                            :outlined="!upvote"
                            color="info"
                            class="rounded-sm pa-0 vote-btn"
                            @click="(upvote = !upvote), (downvote = false)"
                        >
                            <v-icon>mdi-arrow-up-drop-circle</v-icon>
                        </v-btn>
                        <span class="text-caption text-center">114</span>
                        <v-btn
                            :depressed="downvote"
                            :dark="downvote"
                            :plain="!downvote"
                            color="black"
                            class="rounded-sm pa-0 vote-btn"
                            @click="(downvote = !downvote), (upvote = false)"
                        >
                            <v-icon>mdi-arrow-down-drop-circle</v-icon>
                        </v-btn>
                        <v-menu transition="slide-y-transition" left offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>
                            <v-list dense>
                                <v-subheader class="px-4">更多</v-subheader>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon size="20px" color="warning">
                                            mdi-alert-plus-outline
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>举报</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon size="20px">
                                            mdi-history
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>编辑历史</v-list-item-title>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-subheader class="px-4 warning--text">用户工具</v-subheader>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon color="warning" size="20px">
                                            mdi-archive
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>归档</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon size="20px">
                                            mdi-circle-edit-outline
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>编辑</v-list-item-title>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-subheader class="px-4 error--text">管理员工具</v-subheader>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon color="warning" size="20px">
                                            mdi-archive
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>归档</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon color="error" size="20px">
                                            mdi-trash-can-outline
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>删除</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon color="info" size="20px">
                                            mdi-tag-plus-outline
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>标记此回复</v-list-item-title>
                                </v-list-item>
                                <v-list-item class="dense-list-item" link>
                                    <v-list-item-icon class="my-0">
                                        <v-icon size="20px">
                                            mdi-circle-edit-outline
                                        </v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>编辑</v-list-item-title>
                                </v-list-item>
                                
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </v-card>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            Title: "{{title}}",
            upvote: false,
            downvote: false,
        };
    },
};
</script>

<style scoped>
.title-icon {
    color: inherit !important;
    font-size: inherit !important;
    line-height: inherit !important;
}
.profile-card {
    margin-left: -32px;
}
.vote-btn {
    min-width: 40px !important;
    width: 40px !important;
    height: 40px !important;
}
.content-card-heading {
    margin-top: 16px;
}
.dense-list-item {
    min-height: 24px;
    padding-top: 4px;
    padding-bottom: 4px;
}
</style>
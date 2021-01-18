<template>
    <v-container class="pa-8">
        <div class="d-flex aliign-center text-h3 font-weight-black my-4">
            <v-icon class="title-icon">mdi-comment-text-multiple</v-icon>
            <span class="mx-4">论坛</span>
        </div>
        <v-divider />
        <div class="d-flex pa-4">
            <ForumCard class="mx-4" title="公告" color="orange" icon="mdi-alert-circle" text="发布论坛公告，最新论坛规则。"></ForumCard>
            <ForumCard class="mx-4" title="公告" color="info" icon="mdi-alert-circle" text="发布论坛公告，最新论坛规则。"></ForumCard>
            <ForumCard class="mx-4" title="公告" color="success" icon="mdi-alert-circle" text="发布论坛公告，最新论坛规则。"></ForumCard>
        </div>
    </v-container>
</template>

<script>
import ForumCard from '../components/ForumCard.vue'
export default {
    components: {ForumCard},
    data() {
        return {};
    },
};
</script>

<style scoped>
.title-icon {
    color: inherit !important;
    font-size: inherit !important;
}
.forum-card-content-layer {
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    width: calc(100% - 32px);
    z-index: 1;
}
.forum-card-icon {
    color: transparent;
    background-image: linear-gradient(
        120deg,
        rgba(255, 255, 255, 1) 40%,
        rgba(255, 255, 255, 0) 100%
    );
    background-clip: text;
}
.forum-card-icon-layer {
    position: absolute;
    right: 0px;
    z-index: 2;
}
</style>

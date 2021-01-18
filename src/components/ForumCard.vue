<template>
    <v-card>
        <v-card
            flat
            class="rounded-b-0"
            :color="color"
            dark
            min-height="200px"
            min-width="350px"
        >
            <div class="forum-card-icon-layer ma-4">
                <v-icon class="forum-card-icon" size="100"
                    >{{icon}}</v-icon
                >
            </div>
            <div class="d-flex forum-card-content-layer ma-4">
                <span class="text-h4 font-weight-bold align-self-end"
                    >{{title}}</span
                >
                <span class="ml-auto align-self-end">
                    <v-btn icon>
                        <v-icon> mdi-arrow-right </v-icon>
                    </v-btn>
                </span>
            </div>
        </v-card>
        <div class="pa-2">
            <span class="mx-2">{{text}}</span>
        </div>
    </v-card>
</template>

<script>
export default {
    props:['title','text','icon','color']
};
</script>

<style scoped>
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
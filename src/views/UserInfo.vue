<template>
    <div>
        <v-hover v-slot="{ hover }">
            <v-img
                :aspect-ratio="16 / 5"
                class="user-profile-img"
                src="https://img.toutoupiao.com/Upload/Members/62436/3a67d80a-9e35-4696-aaba-63efa9819d5d.jpg"
            >
                <v-expand-transition style="height: 100%">
                    <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white--text hover-layer"
                    >
                        <v-btn icon x-large class="mx-4" dark>
                            <v-icon> mdi-image-area </v-icon>
                        </v-btn>
                        <v-btn icon x-large class="mx-4" dark>
                            <v-icon> mdi-account-settings </v-icon>
                        </v-btn>
                        <v-btn icon x-large class="mx-4" dark>
                            <v-icon> mdi-circle-edit-outline </v-icon>
                        </v-btn>
                    </div>
                </v-expand-transition>
                <div class="ma-4 py-4 d-flex align-center user-profile-layer">
                    <v-hover v-slot="{ hover }">
                        <v-avatar class="mx-4" color="info" size="100">
                            <v-img
                                src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                            ></v-img>
                            <v-fade-transition style="height: 100%">
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out white--text avatar-hover-layer"
                                    style="height: 100%"
                                >
                                    <v-btn icon x-large class="mx-4" dark>
                                        <v-icon>
                                            mdi-circle-edit-outline
                                        </v-icon>
                                    </v-btn>
                                </div>
                            </v-fade-transition>
                        </v-avatar>
                    </v-hover>
                    <div class="fill-height">
                        <div
                            class="text-h5 font-weight-black title-white"
                        >
                            琪露诺
                        </div>
                        <div
                            class="text-subtitle-2 font-weight-black title-white"
                        >
                            老娘是最强哒！
                        </div>
                    </div>
                </div>
            </v-img>
        </v-hover>
        <v-container class="pa-6 ma-4">
            <v-row>
                <v-col cols="8">
                    <v-card
                        style="height: 100%; width: 100%"
                        class="rounded-lg pa-4"
                        elevation="3"
                    >
                        <v-container>
                            <h1>Markdown Here</h1>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card
                        style="height: 100%; width: 100%"
                        class="rounded-lg pa-4"
                        elevation="3"
                    >
                        <v-container> Userinfo Here </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-profile-img {
    border-top-left-radius: 36px !important;
    border-top-right-radius: 36px !important;
    width: 100%;
}
.user-profile-layer {
    position: absolute;
    bottom: 0px;
    z-index: 2;
}
.hover-layer {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
.avatar-hover-layer {
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
.title-white {
    color: #fff; 
    text-shadow: 1px 1px 3px #333
}
</style>
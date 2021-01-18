<template>
    <v-card class="group-card elevation-4">
        <div class="group-profile-img-layer">
                <v-img
                    class="group-profile-img"
                    :aspect-ratio="16 / 8"
                    width="25vw"
                    :src="background"
                >
                </v-img>
            <div class="d-flex group-profile-layer align-center mx-2">
                <v-avatar size="72" class="group-profile-avatar">
                    <v-img :src="avatar"></v-img>
                </v-avatar>
                <span class="text-h4 font-weight-black title-white mx-2">
                    {{ name }}
                </span>
                <v-chip v-if="ispublic" color="success" small>Public</v-chip>
                <v-chip v-else color="error" small>Private</v-chip>
            </div>
        </div>
        <div class="py-4">
            <div class="under-avatar-layer d-flex-inline justify-center">
                <v-chip v-if="official" x-small color="success">已认证</v-chip>
                <v-chip v-else x-small color="warning">未认证</v-chip>
            </div>
            <span v-if="peoplecount" class="font-weight-black">
                <v-icon class="title-icon">mdi-account</v-icon>{{ peoplecount }}
            </span>
            <span v-if="contestcount" class="font-weight-black">
                <v-icon class="title-icon">mdi-calendar</v-icon
                >{{ contestcount }}
            </span>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        name: String,
        isofficial: Boolean,
        officialtype: String,
        peoplecount: Number,
        contestcount: Number,
        ispublic: Boolean,
        background: String,
        avatar: String,
    },
};
</script>

<style scoped>
.title-icon {
    color: inherit !important;
    font-size: inherit !important;
}
.group-profile-img-layer {
    position: relative;
}
.group-profile-img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
.group-profile-avatar {
    z-index: 2;
}
.group-profile-layer {
    position: absolute;
    margin-bottom: -16px;
    bottom: 0px;
    z-index: 2;
}
.under-avatar-layer {
    display: inline-flex;
    width: 72px;
    margin-left: 8px;
    margin-right: 8px;
}
.title-white {
    color: #fff;
    text-shadow: 1px 1px 3px #333;
}
</style>
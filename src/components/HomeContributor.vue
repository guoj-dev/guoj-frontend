<template>
    <v-card
        elevation="3"
        class="rounded-lg"
        v-show="!$vuetify.breakpoint.mobile"
    >
        <v-card-title>
            <v-icon class="title-icon" large> mdi-account-star </v-icon>
            <span class="mx-4 text-h5 font-weight-black">贡献者</span>
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
                    <v-list-item-title> Komeiji Koishi </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-avatar>
                    <v-avatar color="red" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title> Hakurei Reimu </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-avatar>
                    <v-avatar color="black" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title> Kirisame Marisa </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-avatar>
                    <v-avatar color="pink" size="40">
                        <v-icon dark>mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title> Remilia Scarlet </v-list-item-title>
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
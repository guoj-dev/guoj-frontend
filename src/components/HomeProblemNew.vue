<template>
    <v-card
        elevation="3"
        class="rounded-lg"
        v-show="!$vuetify.breakpoint.mobile"
    >
        <v-card-title>
            <v-icon class="title-icon" large> mdi-new-box </v-icon>
            <span class="mx-4 text-h5 font-weight-black">新题</span>
        </v-card-title>
        <v-divider />
        <v-list dense flat class="mb-4">
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-minus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title> T1000 A+B Problem </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-minus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title> T1000 A+B Problem </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-minus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title> T1000 A+B Problem </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-minus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title> T1000 A+B Problem </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-minus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title> T1000 A+B Problem </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-minus</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title> T1000 A+B Problem </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.title-icon {
    color: currentColor!important;
}
</style>
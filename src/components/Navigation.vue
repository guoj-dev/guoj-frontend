<template>
    <v-container v-show="!$vuetify.breakpoint.mobile" class="mx-8">
        <v-btn text v-for="(obj,i) in list" :key="i" :to="obj.to" class="mx-2">
            <v-icon left>{{obj.icon}}</v-icon>
            {{obj.text}}
        </v-btn>
    </v-container>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            list: [
                {
                    icon: "mdi-format-list-bulleted",
                    to:"ProblemSet",
                    text: "题库",
                },
                {
                    icon: "mdi-account-group",
                    to:"OrganizationCenter",
                    text: "团队",
                },
                {
                    icon: "mdi-code-tags-check",
                    to:"SubmissionList",
                    text: "评测",
                },
                {
                    icon: "mdi-calendar",
                    to:"ContestCenter",
                    text: "比赛",
                },
                {
                    icon: "mdi-forum",
                    to:"DiscussionHome",
                    text: "讨论",
                },
                {
                    icon: "mdi-help-network",
                    to:"",
                    text: "问答",
                },
                {
                    icon: "mdi-layers",
                    to:"",
                    text: "社区",
                },
            ],
        };
    },
};
</script>

<style>
</style>
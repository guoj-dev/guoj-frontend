<template>
    <div class="ProblemView pa-8">
        <v-container class="py-0">
            <div class="d-flex aliign-center text-h4 font-weight-black mt-4 mx-4 mb-2">
                <span>T1000  A+B Problem</span>
            </div>
            <div class="d-flex mx-4 mb-2">
                <v-chip color="warning" class="font-weight-black mr-2">编程基础</v-chip>
                <v-chip color="success" class="font-weight-black mr-2">入门</v-chip>
            </div>
            <div class="d-flex mx-4 mb-2">
                <v-btn dark color="green" class="font-weight-black mr-2">
                    <v-icon left>mdi-check</v-icon>
                    提交代码
                </v-btn>
                <v-btn dark color="warning" class="font-weight-black mr-2">
                    <v-icon left>mdi-format-list-checks</v-icon>
                    评测记录
                </v-btn>
                <v-btn dark color="info" class="font-weight-black mr-2">
                    <v-icon left>mdi-chart-box</v-icon>
                    分析
                </v-btn>
                <v-btn dark color="cyan" class="font-weight-black mr-2">
                    <v-icon left>mdi-comment-text-multiple</v-icon>
                    讨论
                </v-btn>
            </div>
            <v-card class="mx-4 rounded-lg pa-4 flex-grow-1 my-8">
                <div>
                    <h1>Markdown Here</h1>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style>
.title-icon {
    color: currentColor !important;
    font-size: inherit !important;
}
.fill-height {
    min-height: 100%!important;
}
</style>
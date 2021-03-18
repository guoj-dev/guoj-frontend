<template>
    <div class="ProblemSet pa-8">
        <v-container class="py-0">
            <div class="d-flex aliign-center text-h4 font-weight-black ma-4">
                <v-icon class="title-icon"
                    >mdi-format-list-bulleted</v-icon
                >
                <span class="mx-4">题库</span>
            </div>
            <div>
                <v-row>
                    <v-col cols="9">
                        <v-list class="my-4 flex-grow-1">
                            <v-list-item
                                to="ProblemView"
                                class="rounded transition-swing"
                                v-for="(obj, i) in Problems"
                                :key="i"
                            >
                                <v-list-item-avatar>
                                    <v-icon large>mdi-minus</v-icon>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title
                                        class="text-h6 font-weight-bold"
                                    >
                                        {{ obj[0] }} {{ obj[1] }}
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action-text class="d-flex">
                                    <v-chip color="warning" class="mx-1">
                                        <span class="font-weight-black">
                                            编程基础
                                        </span>
                                    </v-chip>
                                    <v-chip color="success" class="mx-1">
                                        <span class="font-weight-black">
                                            入门
                                        </span>
                                    </v-chip>
                                </v-list-item-action-text>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="3">
                        <div class="flex-shrink-1 d-flex flex-column">
                            <v-card elevation="3" class="rounded-lg mb-8">
                                <v-card-title>
                                    <v-icon class="title-icon" large>
                                        mdi-magnify
                                    </v-icon>
                                    <span class="mx-4 text-h5 font-weight-black"
                                        >搜索</span
                                    >
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field
                                        outlined
                                        dense
                                        rounded
                                        hide-details
                                        label="题目搜索"
                                        prepend-inner-icon="mdi-magnify"
                                        append-outer-icon="mdi-send"
                                        clearable
                                        clear-icon="mdi-close"
                                    >
                                    </v-text-field>
                                </v-card-text>
                            </v-card>
                            <v-card elevation="3" class="rounded-lg mb-8">
                                <v-card-title>
                                    <v-icon class="title-icon" large>
                                        mdi-tag-multiple
                                    </v-icon>
                                    <span class="mx-4 text-h5 font-weight-black"
                                        >标签</span
                                    >
                                </v-card-title>
                                <v-card-text>
                                    <v-autocomplete
                                        v-model="selected_tags"
                                        :items="tags"
                                        solo
                                        chips
                                        clearable
                                        deletable-chips
                                        small-chips
                                        label="标签"
                                        item-text="name"
                                        item-value="name"
                                        multiple
                                        dense
                                    >
                                        <template v-slot:item="data">
                                            <v-list-item-content>
                                                <v-list-item-title>{{data.item.name}}</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                    </v-autocomplete>
                                    <span class="text-h7">你可能感兴趣的</span>
                                    <div class="d-flex"></div>
                                </v-card-text>
                            </v-card>
                            <v-card elevation="3" class="rounded-lg mb-8">
                                <v-card-title>
                                    <v-icon class="title-icon" large>
                                        mdi-view-list
                                    </v-icon>
                                    <span class="mx-4 text-h5 font-weight-black"
                                        >其他题库</span
                                    >
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field
                                        outlined
                                        dense
                                        rounded
                                        label="题库搜索"
                                        prepend-inner-icon="mdi-magnify"
                                        append-outer-icon="mdi-send"
                                        clearable
                                        hide-details
                                        clear-icon="mdi-close"
                                    >
                                    </v-text-field>
                                    <v-list dense>
                                        <v-list-item link v-for="i in 5" :key="i">
                                            <v-list-item-title>
                                                Example ProblemSet
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <div class="text-center mb-4">
                <v-pagination
                    v-model="page"
                    length="20"
                    total-visible="10"
                    circle
                ></v-pagination>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Problems: [
                ["T1000", "A+B Problem"],
                ["T1001", "A+B Problem"],
                ["T1002", "A+B Problem"],
                ["T1003", "A+B Problem"],
                ["T1004", "A+B Problem"],
                ["T1005", "A+B Problem"],
                ["T1006", "A+B Problem"],
                ["T1007", "A+B Problem"],
                ["T1008", "A+B Problem"],
                ["T1009", "A+B Problem"],
                ["T1010", "A+B Problem"],
                ["T1011", "A+B Problem"],
                ["T1012", "A+B Problem"],
                ["T1013", "A+B Problem"],
                ["T1014", "A+B Problem"],
                ["T1015", "A+B Problem"],
            ],
            page: 1,
            tags: [
                {
                    name: "数据结构",
                },
                {
                    name: "图论",
                },
                {
                    name: "数论",
                },
                {
                    name: "动态规划",
                },
                {
                    name: "树上问题",
                },
            ],
            selected_tags: [],
        };
    },
};
</script>

<style scoped>
.title-icon {
    color: currentColor !important;
    font-size: inherit !important;
}
</style>
<template>
    <v-card flat class="instagram-frame">
        <!-- 顶部标题 -->
        <v-card-title class="text-h6">{{ title }}</v-card-title>

        <!-- 图片 -->
        <img :src="photo" alt="Step Image" class="step-image bordered"/>

        <!-- 操作按钮 -->
        <v-card-actions>
            <v-btn color="red" icon="mdi-heart" size="small"></v-btn>
            <v-btn color="medium-emphasis" icon="mdi-bookmark" size="small"></v-btn>
            <v-btn color="medium-emphasis" icon="mdi-share-variant" size="small"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import {defineProps} from "vue";

// 定义 Props
defineProps({
    title: {
        type: String,
        default: "",
    },
    photo: {
        type: String,
        required: true, // 必须传入图片路径
    },
});
</script>

<style scoped>
.instagram-frame {
    border-radius: 16px;
    border: black solid 1px;
}

.v-card-title {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.v-card-actions {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.bordered {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: block; /* 确保 img 元素是块级元素，避免底部基线对齐造成的间隙 */
}

.step-image {
    width: 100%; /* 图片宽度占满父容器 */
    height: auto; /* 保持图片比例 */
}
</style>

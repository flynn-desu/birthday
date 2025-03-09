<template>
    <div class="container" v-show="!showPhotoAnimation">
        <div class="card">
            <h2>认真吃饭</h2>
            <i class="fas fa-arrow-right"></i>
            <p>🍫🍟🍓🍰</p>
            <div class="pic"></div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button>
            </button>
        </div>
        <div class="card card2">
            <h2>好好睡觉</h2>
            <i class="fas fa-arrow-right"></i>
            <p>🌙🌃🛌💤</p>
            <div class="pic"></div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button>
            </button>
        </div>
        <span class="wave-line">怎么是灰色的？点点色球试试吧</span>
        <button class="next-button" style="margin: 10px" @click="toPhotoWall">
            下一站
            <span class="arrow">→</span>
        </button>
    </div>
    <div class="container" v-if="showPhotoAnimation">
        <Vue3Lottie
            v-if="showPhotoAnimation"
            ref="lottieAnimation"
            :animation-data="photoAnimation"
            :height="200"
            :width="200"
            :loop="false"
        />
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import photoAnimation from "../assets/Lottie/photo.json";
import {Vue3Lottie} from "vue3-lottie";
import {nextTick, ref} from "vue";

const router = useRouter();

// 展示拍照动画
const showPhotoAnimation = ref(false);
const lottieAnimation = ref(null);

function toPhotoWall() {
    showPhotoAnimation.value = true;
    nextTick(() => {
        if (lottieAnimation.value) {
            const duration = lottieAnimation.value.getDuration(false) * 1000;
            lottieAnimation.value.play();

            // 动画结束后跳转
            setTimeout(() => {
                showPhotoAnimation.value = false;
                router.push({name: 'photoWall'});
            }, duration);
        }
    });
}


</script>

<style scoped>
@import "../assets/styles/stamp.scss";

.wave-line {
    margin: 10px;
    color: #fcbad3;
    text-decoration: underline wavy #ffe2e2; /* 波浪线，颜色为橙色 */
}

.next-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #3f72af;
    color: white;
    border: 3px solid #a8d8ea; /* 添加白色边框 */
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    outline: none; /* 移除按钮点击时的默认边框 */
}

.next-button .arrow {
    margin-left: 8px;
    font-size: 20px;
    transition: transform 0.3s ease;
}

/* 点击时的动画效果 */
.next-button:active {
    transform: scale(0.95); /* 按钮点击时缩小 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 点击时添加阴影效果 */
}

/* 按钮按下时箭头的动画 */
.next-button:active .arrow {
    transform: translateX(5px); /* 箭头向右移动 */
}
</style>
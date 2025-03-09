<template>
    <v-row v-show="!showAnimate">
        <v-col>
            <Vue3Lottie
                ref="lottieAnimation"
                :animation-data="searchAnimation"
                :height="100"
                :width="100"
                style="padding-right: 0; margin-right: 0;"
            />
        </v-col>
        <v-col style="margin-top: 30px">
            <span class="underlined underline-clip">重要的日子是几号呢</span>
        </v-col>
    </v-row>
    <calendar-grid @to-stamp="toStamp" v-show="!showAnimate"/>
    <div class="animate-container">
        <Vue3Lottie
            v-if="showAnimate"
            ref="lottieAnimation"
            :animation-data="envelopeAnimation"
        />
    </div>
    <v-snackbar
        color="pink-lighten-5"
        :timeout="2000"
        v-model="showAlert"
    >
        宝宝猜对啦🎉
    </v-snackbar>

</template>

<script setup>
import searchAnimation from "../assets/Lottie/search.json";
import {Vue3Lottie} from "vue3-lottie";
import CalendarGrid from "./CalendarGrid.vue";
import {nextTick, ref} from "vue";
import envelopeAnimation from "../assets/Lottie/envelope.json";
import {useRouter} from 'vue-router';

const router = useRouter();
const showAlert = ref(false)

// 展示动画
const showAnimate = ref(false)
const lottieAnimation = ref(null);

function toStamp() {
    setTimeout(() => {
        showAlert.value = true;
        showAnimate.value = true;
        nextTick(() => {
            if (lottieAnimation.value) {
                const duration = lottieAnimation.value.getDuration(false) * 1000;
                lottieAnimation.value.play();
                // 动画结束后跳转
                setTimeout(() => {
                    showAnimate.value = false;
                    router.push({name: 'stamp'});
                }, duration);
            }
        });
    }, 800);
}
</script>

<style scoped>
v-row {
    margin-bottom: 0;
    padding-bottom: 0;
}

.underlined {
    /*   background: red; */
    position: relative;
}

.underline-clip:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #ffc7c7;
    clip-path: polygon(0 0, 50% 50%, 100% 0);
}

v-row {
    margin-bottom: 0; /* 确保 v-row 没有额外的下边距 */
}

calendar-grid {
    margin-top: 0; /* 去掉上方的间距 */
    padding-top: 0; /* 去掉内边距 */
}

.animate-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100vh; /* 父容器高度为视口高度 */
}
</style>
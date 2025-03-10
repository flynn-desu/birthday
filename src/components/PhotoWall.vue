<template>
    <div class="center-container">
        <div class="stepper-header" v-show="!showCakeAnimation">
            🌈<span class="mint">世界上最好看的宝宝</span>
            <v-btn style="margin-left: 10px" size="x-small" color="blue" @click="toCake">
                继续旅程
            </v-btn>
        </div>
        <v-stepper :items="['🌼', '🦋', '🌟', '🎃', '🎻']" next-text="→" prev-text="←" v-show="!showCakeAnimation">
            <template v-slot:item.1>
                <instagram :photo="photo1" title="🌼"/>
            </template>

            <template v-slot:item.2>
                <instagram :photo="photo2" title="🦋"/>
            </template>

            <template v-slot:item.3>
                <instagram :photo="photo3" title="🌟"/>
            </template>

            <template v-slot:item.4>
                <instagram :photo="photo4" title="🎃"/>
            </template>

            <template v-slot:item.5>
                <instagram :photo="photo5" title="🎻"/>
            </template>
        </v-stepper>
        <Vue3Lottie
            v-if="showCakeAnimation"
            ref="lottieAnimation"
            :animation-data="cakeAnimation"
            :loop="false"
        />
    </div>
</template>

<script setup>
import photo1 from "../assets/photos/1.jpg";
import photo2 from "../assets/photos/2.jpg";
import photo3 from "../assets/photos/3.jpg";
import photo4 from "../assets/photos/4.jpg";
import photo5 from "../assets/photos/5.jpg";
import Instagram from "./Instagram.vue";
import cakeAnimation from "../assets/Lottie/cake.json";
import {Vue3Lottie} from "vue3-lottie";
import {nextTick, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const showCakeAnimation = ref(false);
const lottieAnimation = ref(null);

function toCake() {
    showCakeAnimation.value = true;
    nextTick(() => {
        if (lottieAnimation.value) {
            const duration = lottieAnimation.value.getDuration(false) * 1000;
            lottieAnimation.value.play();

            // 动画结束后跳转
            setTimeout(() => {
                showCakeAnimation.value = false;
                router.push({name: 'cake'});
            }, duration);
        }
    });
}
</script>

<style scoped>
@font-face {
    font-family: 'RocherLocal';
    src: url(../assets/fonts/RocherColorGX.woff2) format('woff2');
}

@font-face {
    font-family: 'nishiki';
    src: url(../assets/fonts/nishiki-teki-2.ttf) format('truetype');
}

.center-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 92vh; /* 设置高度为 90% 屏幕高度 */
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}

@font-palette-values --Mint {
    font-family: Rocher;
    base-palette: 7;
}

.mint {
    font-family: 'nishiki', sans-serif;
    font-palette: --Mint;
}

.v-stepper {
    width: 100%; /* 保证宽度自适应 */
}
</style>
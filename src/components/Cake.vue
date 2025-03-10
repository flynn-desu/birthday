<template>
    <pacman-divider style="margin-top: 20px"/>
    <!-- 道具栏 -->
    <v-row v-show="!showAnimate">
        <v-col/>
        <v-col :style="{ visibility: isCandlePlaced ? 'hidden' : 'visible' }">
            <v-card
                @click="placeCandle"
                class="prop-card"
                :style="{ border: '2px dashed black' }"
            >
                <div class="prop-candle"></div>
            </v-card>
        </v-col>
        <v-col :style="{ visibility: isFlameLit ? 'hidden' : 'visible' }">
            <v-card
                @click="lightCandle"
                class="prop-card"
                :style="{ border: '2px dashed black' }"
            >
                <div class="prop-flame"></div>
            </v-card>
        </v-col>
        <v-col/>
    </v-row>
    <v-row justify="center" align="center" style="margin-left: -250px" v-show="!showAnimate">
        <v-col class="cake-col" cols="auto">
            <div class="cake">
                <div class="plate"></div>
                <div class="layer layer-bottom"></div>
                <div class="layer layer-middle"></div>
                <div class="layer layer-top"></div>
                <div class="icing"></div>
                <div class="drip drip1"></div>
                <div class="drip drip2"></div>
                <div class="drip drip3"></div>
                <div class="candle" :class="{ 'candle-placed': isCandlePlaced }">
                    <div class="flame" :class="{ 'flame-lit': isFlameLit }"></div>
                </div>
            </div>
        </v-col>
    </v-row>
    <v-row justify="center" style="margin: 40px" v-show="!cakeIsReady">
        <greeting-card/>
    </v-row>
    <Vue3Lottie
        v-if="showAnimate"
        ref="lottieAnimation"
        :animation-data="giftAnimation"
        :loop="false"
    />
    <v-row align="center" justify="center" style="margin-top: 100px" v-show="cakeIsReady && !showAnimate">
        <v-btn class="custom-gift-btn" size="x-large" @click="openGift">
            宝宝好厉害，来拆礼物吧~
            <v-icon
                icon="mdi-gift"
                end
            ></v-icon>
        </v-btn>
    </v-row>
    <v-snackbar
        color="pink-lighten-5"
        :timeout="2000"
        v-model="showAlert"
    >
        宝宝泥...要把蛋糕烧了吗🔥，先放蜡烛
    </v-snackbar>
    <pacman-divider v-show="!cakeIsReady"/>
</template>

<script setup>
import {ref, computed, nextTick} from 'vue';
import PacmanDivider from "./PacmanDivider.vue";
import GreetingCard from "./GreetingCard.vue";
import giftAnimation from "../assets/Lottie/gift.json";
import {Vue3Lottie} from "vue3-lottie";
import {useRouter} from "vue-router";

// 蛋糕交互
const isCandlePlaced = ref(false);
const isFlameLit = ref(false);
const showAlert = ref(false)
const cakeIsReady = computed(() => {
    return isCandlePlaced.value && isFlameLit.value;
});

// 拆礼物动画
const router = useRouter();
const lottieAnimation = ref(null);
const showAnimate = ref(false);

function openGift() {
    showAnimate.value = true;
    nextTick(() => {
        if (lottieAnimation.value) {
            const duration = lottieAnimation.value.getDuration(false) * 1000;
            lottieAnimation.value.play();

            setTimeout(() => {
                showAnimate.value = false;
                router.push({name: 'gift'});
            }, duration);
        }
    });
}

const placeCandle = () => {
    if (!isCandlePlaced.value) {
        isCandlePlaced.value = true;
    }
};

const lightCandle = () => {
    if (!isCandlePlaced.value) {
        showAlert.value = true;
    } else {
        isFlameLit.value = true;
    }
};

</script>

<style scoped>
@import "../assets/styles/cake.scss";

@font-face {
    font-family: 'NishikiTeki';
    src: url('../assets/fonts/yezigongchanghuajuanti.ttf') format('truetype');
}

.v-btn {
    font-family: 'NishikiTeki', sans-serif;
}

.custom-gift-btn {
    background-color: #ff6f61; /* 背景颜色 */
    color: white !important; /* 文字颜色 */
    border-radius: 8px; /* 圆角边框 */
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08); /* 阴影效果 */
    transition: all .2s ease; /* 平滑过渡效果 */
    padding: 10px 20px; /* 内边距 */
}

/* 当鼠标悬停在按钮上时的效果 */
.custom-gift-btn:hover {
    background-color: #ff4b3a; /* 更深的背景颜色 */
    box-shadow: 0 6px 8px rgba(50, 50, 93, .15), 0 2px 4px rgba(0, 0, 0, .1); /* 更明显的阴影 */
    transform: translateY(-2px); /* 微微上移 */
}

/* 当按钮被激活（点击）时的效果 */
.custom-gift-btn:active {
    transform: translateY(1px); /* 向下移动一点 */
    box-shadow: 0 3px 3px rgba(0, 0, 0, .1); /* 减弱阴影 */
}

</style>
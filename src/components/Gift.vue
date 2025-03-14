<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <div class="gift-container" v-if="shuffledGifts.length > 0">
                    <div class="gift-row">
                        <template v-for="(gift, index) in shuffledGifts" :key="gift.name">
                            <gift-box
                                :image="gift.image"
                                :name="gift.name"
                                :box-color-from="giftColors[index].colorFrom"
                                :box-color-to="giftColors[index].colorTo"
                                :style="index !== 0 ? { marginLeft: '25px' } : {}"
                                @box-opened="boxOpened(index)"
                            />
                        </template>
                    </div>
                </div>
                <div v-else>
                    <h1 style="color: #fcbad3; text-align: center; font-size: 30px; font-family: 'NishikiTeki', sans-serif">
                        宝宝生日快乐<br/>哇塞，宝宝全部拿下<br/>快来找我兑奖吧！
                    </h1>
                    <Vue3Lottie
                        :width="200"
                        :height="200"
                        ref="lottieAnimation"
                        :animation-data="fireworksAnimation"
                    />
                </div>
            </v-col>
            <v-col cols="12" v-if="shuffledGifts.length > 0">
                <v-card color="#385F73">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title>
                                宝宝选一个礼物吧
                            </v-card-title>
                            <v-card-subtitle>长按可以下载图片</v-card-subtitle>
                            <v-card-actions>
                                <v-btn
                                    class="ms-2"
                                    size="small"
                                    text="只能选一个噢~"
                                    variant="outlined"
                                ></v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar
                            class="ma-3"
                            rounded="0"
                            size="125"
                        >
                            <v-img src="/hbd.jpeg"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-img src="/xtxg.gif"></v-img>
            </v-col>
            <v-col cols="12">
                <v-dialog v-model="showDialog" max-width="400" v-if="shuffledGifts.length > 0">
                    <v-card elevation="6">
                        <v-card-title>宝宝确定要这个礼物吗？💭</v-card-title>
                        <v-card-text>
                            <h1 style="color: #f08a5d; text-align: center; font-size: 30px">
                                {{ shuffledGifts[selectGiftIndex].desc }}
                            </h1>
                            <v-img :src="shuffledGifts[selectGiftIndex].image">
                            </v-img>
                            <p style="color: #aa96da; text-align: center; font-size: 15px">
                                你可以选择要，或者重新选一次噢！</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="confirmGift">就它了💡</v-btn>
                            <v-btn color="error" @click="shuffleGifts">打乱顺序，再来一次🤓</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col cols="12">
                <v-snackbar v-model="showSnackbar" timeout="2000" color="pink-lighten-5">
                    宝宝真聪明，我可没说要了就不能再选噢~
                </v-snackbar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import GiftBox from "./GiftBox.vue";
import GreetingCard from "/gift/card.jpg";
import TheLittlePrince from "/gift/TheLittlePrince.jpg";
import RedEnvelope from "/gift/RedEnvelope.jpg";
import cake from "/gift/cake.jpg";
import {ref} from "vue";
import fireworksAnimation from "../assets/Lottie/fireworks.json";
import {Vue3Lottie} from "vue3-lottie";

// 定义礼物数据
const giftColors = [
    {
        colorFrom: "#3490de", colorTo: "#a1eafb"
    },
    {
        colorFrom: "#f6416c", colorTo: "#ff809c"
    },
    {
        colorFrom: "#93d92d", colorTo: "#e0f9b5"
    },
    {
        colorFrom: "#e388ac", colorTo: "#fcbad3"
    }
]
const gifts = ref([
    {name: "book", image: TheLittlePrince, desc: "小王子立体书"},
    {name: "card", image: GreetingCard, desc: "手绘贺卡"},
    {name: "money", image: RedEnvelope, desc: "红包"},
    {name: "cake", image: cake, desc: "小蛋糕"},
]);

// 打乱数组顺序
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

// 初始化礼物顺序
const shuffledGifts = ref(shuffleArray([...gifts.value]));
const showDialog = ref(false);
const showSnackbar = ref(false);
const selectGiftIndex = ref(null);

function boxOpened(idx) {
    showDialog.value = true;
    selectGiftIndex.value = idx;
}

function confirmGift() {
    showDialog.value = false;
    showSnackbar.value = true;
    const hiddenGift = shuffledGifts.value[selectGiftIndex.value].name;
    console.log(hiddenGift)
    shuffledGifts.value = shuffledGifts.value.filter(g => g.name !== hiddenGift);
    shuffledGifts.value = shuffleArray([...shuffledGifts.value]);
    selectGiftIndex.value = 0;
}

function shuffleGifts() {
    showDialog.value = false;
    shuffledGifts.value = shuffleArray([...shuffledGifts.value]);
}
</script>

<style scoped>
@font-face {
    font-family: 'NishikiTeki';
    src: url('../assets/fonts/yezigongchanghuajuanti.ttf') format('truetype');
}

.v-card, .v-snackbar, .v-dialog {
    font-family: 'NishikiTeki', sans-serif;
}

.gift-container {
    background-color: #364f6b; /* 与 v-card 相同的背景色 */
    border-radius: 8px; /* 让边角稍微圆润 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto; /* 水平居中 */
}

.gift-row {
    display: flex;
    justify-content: center; /* 使 gift-box 组件水平居中 */
    margin-bottom: 20px;
}

gift-box {
    margin: 50px;
}
</style>
<template>
    <v-app>
        <v-main class="d-flex justify-center align-center grey lighten-3">
            <!-- 贺卡主容器 -->
            <v-card
                v-show="!showFirework"
                width="300"
                class="rounded-xl"
                elevation="6"
                outlined
            >
                <v-card-title>
                    <div class="d-flex flex-column text-center white--text pt-8">
                        <span class="text-h5 font-weight-bold">每天有每天的快乐</span>
                        <span class="caption">今天是生日快乐</span>
                    </div>
                </v-card-title>
                <!-- 封面图片区域 -->
                <v-card-text>
                    <div>
                        <v-img
                            height="200"
                            class="rounded-t-xl"
                            :src="coverImage"
                        >
                        </v-img>
                        <div class="px-4 pt-4">
                            <!-- 歌曲信息 -->
                            <div class="text-center mb-2">
                                <div class="mint">开始旅程</div>
                            </div>

                            <!-- 进度条 -->
                            <v-slider
                                color="pink lighten-1"
                                thumb-color="pink darken-2"
                                track-color="grey lighten-1"
                                v-model="progress"
                                hide-details
                                class="my-2"
                                :max="100"
                                :min="0"
                                :step="1"
                            ></v-slider>

                            <!-- 控制按钮 -->
                            <div class="d-flex justify-space-around align-center" style="margin: 10px">
                                <v-btn fab small color="pink lighten-1" @click="startProgress">
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </v-card-text>
            </v-card>

            <Vue3Lottie
                v-if="showFirework"
                ref="lottieAnimation"
                :animation-data="fireworksAnimation"
            />
        </v-main>
    </v-app>
</template>

<script setup>
import coverImage from '../assets/cover.jpeg';
import {nextTick, ref} from 'vue'
import {Vue3Lottie} from "vue3-lottie";
import fireworksAnimation from '../assets/Lottie/fireworks.json'
import {useRouter} from 'vue-router';

const router = useRouter();

// 进度条
const progress = ref(0)
let interval = null

// 展示烟花
const showFirework = ref(false)
const lottieAnimation = ref(null);

// 点击按钮时开始进度条的变化
const startProgress = () => {
    if (progress.value >= 100) return
    interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += 1
        } else {
            clearInterval(interval)
            showFirework.value = true; // 进度完成后显示烟花

            nextTick(() => {
                if (lottieAnimation.value) {
                    const duration = lottieAnimation.value.getDuration(false) * 1000;
                    lottieAnimation.value.play();

                    // 动画结束后跳转
                    setTimeout(() => {
                        showFirework.value = false;
                        router.push({name: 'calendar'});
                    }, duration);
                }
            });
        }
    }, 20)
}
</script>


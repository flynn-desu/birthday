<template>
    <div class="center-container">
        <v-stepper :items="['🌼', '🦋', '🌟']" next-text="←" prev-text="→">
            <template v-slot:item.1>
                <v-card flat>
                    <img :src="photo1" alt="Step Image" class="step-image"/>
                </v-card>
            </template>

            <template v-slot:item.2>
                <v-card flat>
                    <img :src="photo2" alt="Step Image" class="step-image"/>
                </v-card>
            </template>

            <template v-slot:item.3>
                <v-card flat>
                    <img :src="photo3" alt="Step Image" class="step-image"/>
                </v-card>
            </template>
        </v-stepper>
    </div>
</template>


<script setup>
import photo1 from "../assets/photos/1.jpg";
import photo2 from "../assets/photos/2.jpg";
import photo3 from "../assets/photos/3.jpg";
</script>

<style scoped>
.center-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100vh; /* 设置高度为 100% 屏幕高度 */
    width: 100%; /* 设置宽度为 100% */
    padding: 20px; /* 给容器添加一些内边距 */
    box-sizing: border-box; /* 确保 padding 不影响容器大小 */
}

.v-stepper {
    max-width: 600px; /* 限制最大宽度 */
    width: 100%; /* 保证宽度自适应 */
}

.step-image {
    width: 100%; /* 图片宽度占满父容器 */
    height: auto; /* 保持图片比例 */
    border-radius: 8px; /* 可选：设置圆角 */
}
</style>
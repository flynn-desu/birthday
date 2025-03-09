<template>
    <div class="grid">
        <button class="grid__item grid__item--sun grid__item--lg grid__item--1">
        <span class="grid__item-door">
            1
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--2">
        <span class="grid__item-door">
            2
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--lg grid__item--3">
        <span class="grid__item-door">
            3
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--moss grid__item--lg grid__item--4">
        <span class="grid__item-door">
            4
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--5">
        <span class="grid__item-door">
            5
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--rose grid__item--lg grid__item--6">
        <span class="grid__item-door">
            6
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--7">
        <span class="grid__item-door">
            7
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--8">
        <span class="grid__item-door">
            8
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--9">
        <span class="grid__item-door">
            9
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--10">
        <span class="grid__item-door">
            10
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--sky grid__item--11">
        <span class="grid__item-door">
            11
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--12">
        <span class="grid__item-door">
            12
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--moss grid__item--lg grid__item--13">
        <span class="grid__item-door">
            13
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--14">
        <span class="grid__item-door">
            14
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--rose grid__item--15">
        <span class="grid__item-door">
            15
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--16">
        <span class="grid__item-door">
            24
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--17">
        <span class="grid__item-door">
            17
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--sky grid__item--18">
        <span class="grid__item-door">
            18
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--rose grid__item--19">
        <span class="grid__item-door">
            19
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--20">
        <span class="grid__item-door">
            20
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--sun grid__item--lg grid__item--21">
        <span class="grid__item-door">
            21
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item  grid__item--sun grid__item--22">
        <span class="grid__item-door">
            22
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--23">
        <span class="grid__item-door">
            23
        </span>
            <span class="grid__item-shadow"></span>
        </button>
        <button class="grid__item grid__item--sky grid__item--lg grid__item--24" @click="handleClick">
        <span class="grid__item-door">
            16
        </span>
            <span class="grid__item-shadow"></span>
        </button>
    </div>
</template>

<script setup>
// 定义自定义事件
const emit = defineEmits(['to-stamp']);

// 点击事件处理函数
const handleClick = () => {
    emit('to-stamp');
};
</script>

<style scoped lang="scss">
@import "../assets/styles/calendar.scss";

@media (max-width: 767px) {
    .content {
        flex-direction: column; // 让动画和文字垂直排列
        text-align: center; // 文字居中
    }

    .lottie-animation {
        margin-right: 0; // 移除动画和文字之间的间距
        margin-bottom: 10px; // 添加动画和文字之间的垂直间距
    }

    .grid {
        grid-template-columns: repeat(4, 16vw [col-start]); // 减少列数并使用视口单位
        grid-template-rows: repeat(6, 13vw [row-start]); // 减少行数并使用视口单位
        justify-content: center;
        align-content: center;
        margin-top: 0;
        padding: 0;
    }

    .grid__item {
        font-size: 3vw; // 使用视口单位调整字体大小
    }

    .grid__item--lg {
        font-size: 4vw; // 使用视口单位调整大字体大小
    }
}
</style>
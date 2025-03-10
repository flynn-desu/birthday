<template>
    <div class="page">
        <p class="message">宝宝我们来做蛋糕，试试点点蜡烛和火焰吧</p>
        <div class="cake-container">
            <div class="cake">🎂</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
@font-face {
    font-family: 'NishikiTeki';
    src: url('../assets/fonts/yezigongchanghuajuanti.ttf') format('truetype');
}

.page {
    width: 80%;
    background: white;
    border: 1px solid #ccc;
    position: relative;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    line-height: 2.5em;
    font-family: 'NishikiTeki', sans-serif;
    background: repeating-linear-gradient(
        white,
        white 30px,
        #94acd4 30px,
        #94acd4 31px
    );
}

.message {
    text-align: center;
    font-size: 18px;
}

.cake-container {
    position: absolute;
    bottom: 10px;
    right: -80px;
}

.cake {
    font-size: 80px;
    animation: float 1.5s infinite alternate ease-in-out;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(10px);
    }
}
</style>

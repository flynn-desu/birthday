<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div>
                    <div class="box-body" @click="notifyParent">
                        <img :src="image" class="img" :alt="name"/>
                        <div class="box-lid">
                            <div class="box-bowtie"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue';

// 定义props
const props = defineProps({
    boxColorFrom: {
        type: String,
        default: '#cc231e',
    },
    boxColorTo: {
        type: String,
        default: '#cc231e',
    },
    image: {
        type: String,
        default: '/sleep.jpeg',
    },
    name: {
        type: String,
        default: 'Gift Box',
    },
});

// 定义emit
const emit = defineEmits(['boxOpened']);

// 当礼盒被点击时，触发事件
const notifyParent = () => {
    emit('boxOpened', props.name);
};
</script>

<style scoped>
.box-body {
    position: relative;
    height: 30px;
    width: 50px;
    margin-top: 70px;
    //background-color: v-bind(boxColor);
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
    background: linear-gradient(v-bind(boxColorFrom), v-bind(boxColorTo));
}

.box-body .img {
    opacity: 0;
    ransform: translateY(0%);
    transition: all 0.5s;
    margin: 0 auto;
    display: block;
}

.box-body:hover {
    cursor: pointer;
    -webkit-animation: box-body 1s forwards ease-in-out;
    animation: box-body 1s forwards ease-in-out;
}

.box-body:hover .img {
    opacity: 1;
    z-index: 0;
    transform: translateY(-100px);
}

.box-body:hover .box-lid {
    -webkit-animation: box-lid 1s forwards ease-in-out;
    animation: box-lid 1s forwards ease-in-out;
}

.box-body:hover .box-bowtie::before {
    -webkit-animation: box-bowtie-left 1.1s forwards ease-in-out;
    animation: box-bowtie-left 1.1s forwards ease-in-out;
}

.box-body:hover .box-bowtie::after {
    -webkit-animation: box-bowtie-right 1.1s forwards ease-in-out;
    animation: box-bowtie-right 1.1s forwards ease-in-out;
}

.box-body::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px;
    background: linear-gradient(#ffffff, #ffefa0)
}

.box-lid {
    position: absolute;
    z-index: 1;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 90%;
    background-color: v-bind(boxColorFrom);
    height: 15px;
    width: 65px;
    border-radius: 5%;
    box-shadow: 0 8px 4px -4px rgba(0, 0, 0, 0.3);
}

.box-lid::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px;
    background: linear-gradient(#ffefa0, #fff)
}

.box-bowtie {
    z-index: 1;
    height: 100%;
}

.box-bowtie::before, .box-bowtie::after {
    content: "";
    width: 13.3333333333px;
    height: 13.3333333333px;
    border: 4.6666666667px solid white;
    border-radius: 50% 50% 0 50%;
    position: absolute;
    bottom: 99%;
    z-index: -1;
}

.box-bowtie::before {
    left: 50%;
    -webkit-transform: translateX(-100%) skew(10deg, 10deg);
    transform: translateX(-100%) skew(10deg, 10deg);
}

.box-bowtie::after {
    left: 50%;
    -webkit-transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);
    transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);
}

@-webkit-keyframes box-lid {
    0%,
    42% {
        -webkit-transform: translate3d(-50%, 0%, 0) rotate(0deg);
        transform: translate3d(-50%, 0%, 0) rotate(0deg);
    }
    60% {
        -webkit-transform: translate3d(-85%, -230%, 0) rotate(-25deg);
        transform: translate3d(-85%, -230%, 0) rotate(-25deg);
    }
    90%, 100% {
        -webkit-transform: translate3d(-119%, 225%, 0) rotate(-70deg);
        transform: translate3d(-119%, 225%, 0) rotate(-70deg);
    }
}

@keyframes box-lid {
    0%,
    42% {
        -webkit-transform: translate3d(-50%, 0%, 0) rotate(0deg);
        transform: translate3d(-50%, 0%, 0) rotate(0deg);
    }
    60% {
        -webkit-transform: translate3d(-85%, -230%, 0) rotate(-25deg);
        transform: translate3d(-85%, -230%, 0) rotate(-25deg);
    }
    90%, 100% {
        -webkit-transform: translate3d(-119%, 225%, 0) rotate(-70deg);
        transform: translate3d(-119%, 225%, 0) rotate(-70deg);
    }
}

@-webkit-keyframes box-body {
    0% {
        -webkit-transform: translate3d(0%, 0%, 0) rotate(0deg);
        transform: translate3d(0%, 0%, 0) rotate(0deg);
    }
    25% {
        -webkit-transform: translate3d(0%, 25%, 0) rotate(20deg);
        transform: translate3d(0%, 25%, 0) rotate(20deg);
    }
    50% {
        -webkit-transform: translate3d(0%, -15%, 0) rotate(0deg);
        transform: translate3d(0%, -15%, 0) rotate(0deg);
    }
    70% {
        -webkit-transform: translate3d(0%, 0%, 0) rotate(0deg);
        transform: translate3d(0%, 0%, 0) rotate(0deg);
    }
}

@keyframes box-body {
    0% {
        -webkit-transform: translate3d(0%, 0%, 0) rotate(0deg);
        transform: translate3d(0%, 0%, 0) rotate(0deg);
    }
    25% {
        -webkit-transform: translate3d(0%, 25%, 0) rotate(20deg);
        transform: translate3d(0%, 25%, 0) rotate(20deg);
    }
    50% {
        -webkit-transform: translate3d(0%, -15%, 0) rotate(0deg);
        transform: translate3d(0%, -15%, 0) rotate(0deg);
    }
    70% {
        -webkit-transform: translate3d(0%, 0%, 0) rotate(0deg);
        transform: translate3d(0%, 0%, 0) rotate(0deg);
    }
}

@-webkit-keyframes box-bowtie-right {
    0%,
    50%,
    75% {
        -webkit-transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);
        transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);
    }
    90%,
    100% {
        -webkit-transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
        transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
        box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.3);
    }
}

@keyframes box-bowtie-right {
    0%,
    50%,
    75% {
        -webkit-transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);
        transform: translateX(0%) rotate(90deg) skew(10deg, 10deg);
    }
    90%,
    100% {
        -webkit-transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
        transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
        box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.3);
    }
}

@-webkit-keyframes box-bowtie-left {
    0% {
        -webkit-transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
        transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
    }
    50%,
    75% {
        -webkit-transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
        transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
    }
    90%,
    100% {
        -webkit-transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
        transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
    }
}

@keyframes box-bowtie-left {
    0% {
        -webkit-transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
        transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
    }
    50%,
    75% {
        -webkit-transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
        transform: translate(-50%, -15%) rotate(45deg) skew(10deg, 10deg);
    }
    90%,
    100% {
        -webkit-transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
        transform: translateX(-100%) rotate(0deg) skew(10deg, 10deg);
    }
}

</style>
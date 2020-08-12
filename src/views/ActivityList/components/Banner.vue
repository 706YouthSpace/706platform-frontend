<template>
    <div class="banner">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in swiperData"
                :key="index">
                <div class="banner-item" @click="handleDetail">
                    <img class="banner-item__img" :src="item.imgUrl"/>
                    <div class="banner-item__text">
                        <p class="banner-item__title">
                            {{item.title}}
                        </p>
                        <p class="banner-item__time">
                            <span>时间：</span>
                            <span>{{item.time}}</span>
                        </p>
                        <p class="banner-item__desc">
                            {{item.desc}}
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Banner.vue',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        slidesPerView: 1.2,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      swiperData: [
        {
          title: '如何评估创业想法可行性',
          time: '2020-05-07 17:00 (2小时)',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发先第三段文字',
          imgUrl: require('@/assets/images/banner.png')
        },
        {
          title: '如何评估创业想法可行性',
          time: '2020-05-07 17:00 (2小时)',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发先第三段文字',
          imgUrl: require('@/assets/images/banner.png')
        },
        {
          title: '如何评估创业想法可行性',
          time: '2020-05-07 17:00 (2小时)',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发先第三段文字',
          imgUrl: require('@/assets/images/banner.png')
        },
        {
          title: '如何评估创业想法可行性',
          time: '2020-05-07 17:00 (2小时)',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发先第三段文字',
          imgUrl: require('@/assets/images/banner.png')
        }
      ]
    }
  },
  methods: {
    handleDetail () {
      this.$router.push('/activity_detail')
    }
  }
}
</script>

<style scoped lang="less">
    .banner {
        &-item {
            position: relative;
            width: 80%;
            height: 385px;
            margin: 0 auto;
            cursor: pointer;
            &__img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
</style>

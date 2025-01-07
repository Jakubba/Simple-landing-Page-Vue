<template>
  <section
    class="relative h-[80vh] w-full"
    data-aos="fade-zoom-in"
    data-aos-anchor-placement="top-bottom"
    data-aos-delay="300"
    data-aos-duration="800"
  >
    >
    <swiper :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }" class="main-swiper">
      <swiper-slide>
        <div class="flex items-center justify-center h-full">
          <img
            class="filter drop-shadow-md h-[150px] w-[auto] absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20"
            src="./../assets/image/icons/maxsmagnificentminis-logo-aternis.svg"
            alt=""
          />
          <img
            class="object-cover w-full h-full"
            src="./../assets/image/heroSection/Arythill-Illustration.png"
            alt=""
          />
          <div
            class="absolute h-[40vh] w-full top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-t from-black to-transparent z-10"
          ></div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex items-center justify-center h-full">
          <img
            class="filter drop-shadow-md h-[150px] w-[auto] absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20"
            src="./../assets/image/icons/maxsmagnificentminis-logo-lufianhall.svg"
            alt=""
          />
          <img
            class="object-cover w-full h-full"
            src="./../assets/image/heroSection/major-arcana-crimson-shores-of-lufianhall.jpg"
            alt=""
          />
          <div
            class="absolute h-[40vh] w-full top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-t from-black to-transparent z-10"
          ></div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex items-center justify-center h-full">
          <img
            class="filter drop-shadow-2xl h-[150px] w-[auto] absolute top-[75%] left-[55%] translate-x-[-50%] translate-y-[-50%] z-20"
            src="./../assets/image/icons/maxsmagnificentminis-logo-maeves.svg"
            alt=""
          />
          <img
            class="object-cover w-full h-full"
            src="./../assets/image/heroSection/major-arcana-novitar-the-frozen-crownlands.jpg"
            alt=""
          />
          <div
            class="absolute h-[40vh] w-full top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-t from-black to-transparent z-10"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      :modules="[Thumbs]"
      @swiper="setThumbsSwiper"
      watch-slides-progress="true"
      space-between="10"
      slides-per-view="3"
      loop="false"
      class="!z-20 main-thumbs"
      data-aos-delay="2500"
      data-aos-duration="1000"
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
    >
      <swiper-slide class="border-3 border-[#4a3c27] !w-[80px]">
        <div
          class="flex items-center justify-center p-2 border cursor-pointer hover:bg-[#4a3c27]"
        >
          <img
            class="w-[auto] h-[50px]"
            src="./../assets/image/icons/maxsmagnificentminis-icon-aternis.svg"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="border border-[#4a3c27] !w-[80px]">
        <div
          class="flex items-center justify-center p-2 border cursor-pointer hover:bg-[#4a3c27]"
        >
          <img
            class="w-[auto] h-[50px]"
            src="./../assets/image/icons/maxsmagnificentminis-icon-lufianhall.svg"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="border border-[#4a3c27] !w-[80px]">
        <div
          class="flex items-center justify-center p-2 border cursor-pointer hover:bg-[#4a3c27]"
        >
          <img
            class="w-[auto] h-[50px]"
            src="./../assets/image/icons/maxsmagnificentminis-icon-maeves.svg"
            alt=""
          />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import { ref } from 'vue';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
};
</script>
<style scoped>
.main-swiper {
  width: 100%;
  min-height: 420px;
  height: 80vh;
  position: relative;
  overflow: hidden;
}
.main-thumbs {
  max-width: 80vw;
  position: absolute;
  bottom: 40px;
  left: calc(90% - 250px);
}
</style>

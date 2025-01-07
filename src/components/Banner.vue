<template>
  <section
    class="relative z-10 w-full h-full p-10 overflow-hidden"
    data-aos="fade-zoom-in"
    data-aos-anchor-placement="center-bottom"
    data-aos-delay="800"
    data-aos-duration="800"
  >
    <div
      class="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full background-gradient"
    ></div>
    <img
      class="absolute object-cover w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]"
      src="./../assets/image/heroSection/maxmagnificent_black_dragon.png"
      alt=""
    />
    <div
      class="relative flex items-center justify-center min-h-[60vh] frame p-10 max-w-[1100px] mx-auto"
    >
      <div
        class="w-[auto] h-[250px] z-10 hidden md:block"
        data-aos="fade-zoom-in"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <img class="drop-shadow-lg" src="./../assets/image/figures/1-17.png" alt="" />
      </div>
      <div class="z-10 flex flex-col items-center justify-center p-10">
        <div
          class="h-[100px] w-[auto] mb-10"
          data-aos="fade-zoom-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <img
            class="w-auto h-[100px]"
            src="./../assets/image/icons/maxsmagnificentminis-the-major-arcana.svg"
            alt="test"
          />
        </div>
        <p
          class="text-center"
          data-aos="fade-zoom-in"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          Dive into a magical world with our exclusive Welcome Pack, available for free
          for subscribers of The Major Arcana. This pack features 14 unique miniatures,
          each intricately designed to bring your next adventure to life.
        </p>
      </div>
      <div
        class="w-[auto] h-[250px] z-10 hidden md:block"
        data-aos="fade-zoom-in"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="1500"
        data-aos-duration="1000"
      >
        <img class="drop-shadow-lg" src="./../assets/image/figures/Altair_1.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-gradient {
  background: radial-gradient(circle, rgba(85, 124, 147, 0) 22%, rgba(0, 0, 0, 1) 100%);
}
.frame::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/ornament-top-left.svg'),
    url('./../assets/image/frame/ornament-top-right.svg'),
    url('./../assets/image/frame/ornament-bottom-left.svg'),
    url('./../assets/image/frame/ornament-bottom-right.svg');
  background-size: 93px 93px, 93px 93px, 93px 93px, 93px 93px;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: left top, right top, left bottom, right bottom;
  transform-origin: center;
  transform: rotate(0);
  z-index: 20;
  transition: background-image 0.5s ease-in-out;
}
.frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #a4895a;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center top, center bottom, center left, center right;
  background-size: 100% 8px, 100% 8px, 8px auto, 8px auto;
  transform-origin: center;
  z-index: 15;
  transition: background-image 0.5s ease-in-out;
}
</style>

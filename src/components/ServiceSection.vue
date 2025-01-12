<template>
  <section class="flex flex-col items-center justify-center p-10">
    <h3
      class="mb-10 text-4xl text-center font-secondary"
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-delay="100"
    >
      <strong class="text-5xl text-[#a46e5a]">A</strong>lways get the latest releases
    </h3>
    <div>
      <img src="" alt="" />
    </div>
    <ul
      class="flex flex-wrap items-center justify-center w-full space-y-5 md:flex-row md:space-x-5 md:space-y-0"
    >
      <li
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="linear"
        data-aos-delay="300"
        class="w-full md:w-1/3"
      >
        <div
          class="relative frame md:max-w-[400px] p-20 flex flex-col justify-center items-center overflow-hidden hover:scale-105 bg-gray-800 transition-all ease-in-out"
        >
          <div class="flex items-center justify-center mb-2">
            <h4 class="text-4xl font-bold font-secondary">Adept</h4>
          </div>
          <div class="flex flex-col items-center justify-center mb-8">
            <p class="mb-2 text-2xl font-secondary">$ 9,99</p>
            <p class="mb-4">//MONTH</p>
            <button
              class="p-2 px-6 border-2 border-[#a4895a] rounded-none hover:bg-[#a4895a] hover:border-[white] transition-all ease-in-out"
            >
              Subscribe now
            </button>
          </div>
          <div>
            <p class="mb-6">By becoming a Hero in October, you will receive:</p>
            <ul class="custom-list">
              <li class="relative pl-8">
                The Justiciars of Drechtschild
                <ul class="pl-10 list-disc">
                  <li>1 tarot-themed miniature</li>
                  <li>18 enemy mianitures</li>
                  <li>3 unique heros</li>
                </ul>
              </li>
              <li class="relative pl-8">
                Immediate access to our Welcome Pack Maeve's Magical Menagerie
              </li>
              <li class="relative pl-8">
                Loualty Rewards for 3-, 6-, 9- and 12 months subscribers
              </li>
              <li class="relative pl-8">
                50% off previous releases and individual files while you are subscribed to
                this tier
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li
        class="w-full md:w-1/3"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="linear"
        data-aos-delay="700"
      >
        <div
          class="relative frame-silver md:max-w-[400px] p-20 flex flex-col justify-center items-center overflow-hidden hover:scale-105 bg-gray-800 transition-all ease-in-out"
        >
          <div class="flex items-center justify-center mb-2">
            <h4 class="text-4xl font-bold font-secondary">Hero</h4>
          </div>
          <div class="flex flex-col items-center justify-center mb-8">
            <p class="mb-2 text-2xl font-secondary">$ 14,99</p>
            <p class="mb-4">//MONTH</p>
            <button
              class="p-2 px-6 border-2 border-[#717171] rounded-none hover:bg-[#717171] hover:border-[white] transition-all ease-in-out"
            >
              Subscribe now
            </button>
          </div>
          <div>
            <p class="mb-6">By becoming a Hero in October, you will receive:</p>
            <ul class="custom-list">
              <li class="relative pl-8">
                The Justiciars of Drechtschild
                <ul class="pl-10 list-disc">
                  <li>1 tarot-themed miniature</li>
                  <li>18 enemy mianitures</li>
                  <li>3 unique heros</li>
                </ul>
              </li>
              <li class="relative pl-8">
                Immediate access to our Welcome Pack Maeve's Magical Menagerie
              </li>
              <li class="relative pl-8">
                Loualty Rewards for 3-, 6-, 9- and 12 months subscribers
              </li>
              <li class="relative pl-8">
                50% off previous releases and individual files while you are subscribed to
                this tier
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li
        class="w-full md:w-1/3"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="linear"
        data-aos-delay="900"
      >
        <div
          class="relative frame-red md:max-w-[400px] p-20 flex flex-col justify-center items-center overflow-hidden hover:scale-105 bg-gray-800 transition-all ease-in-out"
        >
          <div class="flex items-center justify-center mb-2">
            <h4 class="text-4xl font-bold text-red-800 font-secondary">Legend</h4>
          </div>
          <div class="flex flex-col items-center justify-center mb-8">
            <p class="mb-2 text-2xl font-secondary">$ 19,99</p>
            <p class="mb-4">//MONTH</p>
            <button
              class="p-2 px-6 border-2 border-[#a45a5a] rounded-none hover:bg-[#a45a5a] hover:border-[white] transition-all ease-in-out"
            >
              Subscribe now
            </button>
          </div>
          <div>
            <p class="mb-6">By becoming a Hero in October, you will receive:</p>
            <ul class="custom-list">
              <li class="relative pl-8">
                The Justiciars of Drechtschild
                <ul class="pl-10 list-disc">
                  <li>1 tarot-themed miniature</li>
                  <li>18 enemy mianitures</li>
                  <li>3 unique heros</li>
                </ul>
              </li>
              <li class="relative pl-8">
                Immediate access to our Welcome Pack Maeve's Magical Menagerie
              </li>
              <li class="relative pl-8">
                Loualty Rewards for 3-, 6-, 9- and 12 months subscribers
              </li>
              <li class="relative pl-8">
                50% off previous releases and individual files while you are subscribed to
                this tier
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.custom-list > li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 3px;
  height: 20px;
  width: 20px;
  background-size: contain;
  background-image: url('./../assets/image/icons/feather-solid.svg');
  filter: brightness(0) invert(1);
  line-height: 1;
  display: block;
  font-size: 27px;
  transform: rotate(-29deg);
}
.frame::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/double-ornament-gold-top-left.svg'),
    url('./../assets/image/frame/double-ornament-gold-top-right.svg'),
    url('./../assets/image/frame/double-ornament-gold-bottom-left.svg'),
    url('./../assets/image/frame/double-ornament-gold-bottom-right.svg');
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
  background-image: url('./../assets/image/frame/double-ornament-gold-top.svg'),
    url('./../assets/image/frame/double-ornament-gold-bottom.svg'),
    url('./../assets/image/frame/double-ornament-gold-left.svg'),
    url('./../assets/image/frame/double-ornament-gold-right.svg');
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center top, center bottom, center left, center right;
  background-size: auto 8px, auto 8px, 8px auto, 8px auto;
  transform-origin: center;
  z-index: 15;
  transition: background-image 0.5s ease-in-out;
}
.frame-red::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/double-ornament-red-top-left.svg'),
    url('./../assets/image/frame/double-ornament-red-top-right.svg'),
    url('./../assets/image/frame/double-ornament-red-bottom-left.svg'),
    url('./../assets/image/frame/double-ornament-red-bottom-right.svg');
  background-size: 93px 93px, 93px 93px, 93px 93px, 93px 93px;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: left top, right top, left bottom, right bottom;
  transform-origin: center;
  transform: rotate(0);
  z-index: 20;
  transition: background-image 0.5s ease-in-out;
}
.frame-red::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/double-ornament-red-top.svg'),
    url('./../assets/image/frame/double-ornament-red-bottom.svg'),
    url('./../assets/image/frame/double-ornament-red-left.svg'),
    url('./../assets/image/frame/double-ornament-red-right.svg');
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center top, center bottom, center left, center right;
  background-size: auto 8px, auto 8px, 8px auto, 8px auto;
  transform-origin: center;
  z-index: 15;
  transition: background-image 0.5s ease-in-out;
}
.frame-silver::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/double-ornament-silver-top-left.svg'),
    url('./../assets/image/frame/double-ornament-silver-top-right.svg'),
    url('./../assets/image/frame/double-ornament-silver-bottom-left.svg'),
    url('./../assets/image/frame/double-ornament-silver-bottom-right.svg');
  background-size: 93px 93px, 93px 93px, 93px 93px, 93px 93px;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: left top, right top, left bottom, right bottom;
  transform-origin: center;
  transform: rotate(0);
  z-index: 20;
  transition: background-image 0.5s ease-in-out;
}
.frame-silver::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/double-ornament-silver-top.svg'),
    url('./../assets/image/frame/double-ornament-silver-bottom.svg'),
    url('./../assets/image/frame/double-ornament-silver-left.svg'),
    url('./../assets/image/frame/double-ornament-silver-right.svg');
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center top, center bottom, center left, center right;
  background-size: auto 8px, auto 8px, 8px auto, 8px auto;
  transform-origin: center;
  z-index: 15;
  transition: background-image 0.5s ease-in-out;
}
</style>

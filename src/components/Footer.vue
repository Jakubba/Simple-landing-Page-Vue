<template>
  <footer
    class="flex flex-col p-6 bg-gray-800"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-easing="linear"
    data-aos-delay="400"
    data-aos-anchor-placement="top-bottom"
  >
    <div class="relative flex flex-wrap justify-center w-full p-10 mx-auto simple-frame">
      <div class="flex flex-wrap justify-center w-full">
        <div class="flex flex-col justify-start w-1/2 p-10 mb-5 md:w-1/4 lg:w-max">
          <img
            class="h-[120px] w-[120px] object-contain"
            src="./../assets/image/icons/logo.svg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-start w-1/2 p-10 mb-5 md:w-1/4 lg:w-max">
          <h4 class="text-3xl font-secondary">The major Arcana</h4>
          <ul>
            <li><a href="">Releases</a></li>
            <li><a href="">The Story</a></li>
            <li>
              <a href="">Subscriptions</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-start w-1/2 p-10 mb-5 md:w-1/4 lg:w-max">
          <h4 class="text-3xl font-secondary">Ordering</h4>
          <ul>
            <li><a href="">Shipping & returns</a></li>
            <li><a href="">Payment methods</a></li>
            <li>
              <a href="">Cancellation Policy</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-start w-1/2 p-10 mb-5 md:w-1/4 lg:w-max">
          <h4 class="text-3xl font-secondary">About us</h4>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Guides</a></li>
            <li>
              <ul class="flex space-x-2">
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center justify-start w-full p-10 lg:w-max">
          <h4 class="mt-5 mb-4 text-2xl font-secondary">Subscribe to our newsletter</h4>
          <form action="" class="flex flex-col m-auto">
            <div class="flex mb-4 space-x-5">
              <input
                type="text"
                placeholder="Full name*"
                class="p-2 bg-white border-2 border-[#a4895a]"
              />
              <input
                type="email"
                placeholder="Email address*"
                class="p-2 bg-white border-2 border-[#a4895a]"
              />
            </div>
            <div class="flex flex-row-reverse justify-end mb-4 space-x-2">
              <label for="checkbox" class="pl-4"
                >I hereby accept the <a href="#">privacy policy</a></label
              >
              <input type="checkbox" />
            </div>
            <input
              type="submit"
              value="Subscribe"
              class="p-2 border-2 border-[#a4895a] w-max m-auto px-6 py-2 lg:ml-0 cursor-pointer hover:bg-[#a4895a] hover:border-[white] transition-all ease-in-out"
            />
          </form>
        </div>
      </div>
      <div class="flex justify-center w-full">
        <p class="w-1/2">@2024 Jacob B</p>
        <ul class="flex justify-between w-max">
          <li class="p-2 px-6">
            <a href="">Imprint</a>
          </li>
          <li class="p-2 px-6">
            <a href="">Privacy Policy</a>
          </li>
          <li class="p-2 px-6">
            <a href="">GTC</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.simple-frame::after {
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
.simple-frame::before {
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

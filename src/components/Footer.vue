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
        <div class="flex flex-col justify-start w-full mb-5 md:p-10 md:w-1/4 lg:w-max">
          <h4 class="text-3xl font-secondary">The major Arcana</h4>
          <ul class="mt-6">
            <li><a class="text-white hover:text-primary" href="">Releases</a></li>
            <li><a class="text-white hover:text-primary" href="">The Story</a></li>
            <li>
              <a class="text-white hover:text-primary" href="">Subscriptions</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-start w-full mb-5 md:p-10 md:w-1/4 lg:w-max">
          <h4 class="text-3xl font-secondary">Ordering</h4>
          <ul class="mt-6">
            <li>
              <a class="text-white hover:text-primary" href="">Shipping & returns</a>
            </li>
            <li><a class="text-white hover:text-primary" href="">Payment methods</a></li>
            <li>
              <a class="text-white hover:text-primary" href="">Cancellation Policy</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-start w-full mb-5 md:p-10 md:w-1/4 lg:w-max">
          <h4 class="text-3xl font-secondary">About us</h4>
          <ul class="mt-6">
            <li><a class="text-white hover:text-primary" href="">FAQ</a></li>
            <li><a class="text-white hover:text-primary" href="">Guides</a></li>
            <li>
              <ul class="flex space-x-2">
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex flex-col justify-start w-full md:items-center md:p-10 lg:w-max">
          <h4 class="mt-5 mb-4 text-2xl font-secondary">Subscribe to our newsletter</h4>
          <form action="" class="flex flex-col m-auto">
            <div class="flex flex-wrap mb-4 space-y-5 sm:space-x-5 sm:space-y-0">
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
      <div
        class="flex flex-col-reverse items-center w-full mt-8 justify--center md:flex-row"
      >
        <p class="w-1/2 mt-8 text-center font-secondary md:mt-0">@2024 Jacob B</p>
        <ul
          class="flex flex-col items-center justify-around w-full space-y-4 md:w-max md:flex-row md:space-x-5 md:space-y-0"
        >
          <li>
            <a class="text-white hover:text-primary font-primary" href="">SLA</a>
          </li>
          <li>
            <a class="text-white hover:text-primary font-primary" href=""
              >Privacy Policy</a
            >
          </li>
          <li>
            <a class="text-white hover:text-primary font-primary" href="">Technology</a>
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

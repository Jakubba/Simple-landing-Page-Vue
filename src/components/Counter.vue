<template>
  <section
    class="bg-[#A4895A] counter-section flex flex-col items-center justify-center gap-10 md:flex-row p-10"
    ref="counterSection"
    data-aos="fade-zoom-in"
    data-aos-duration="300"
    data-aos-easing="linear"
    data-aos-anchor-placement="top-bottom"
  >
    <div
      class="relative flex flex-col items-center justify-center w-full md:w-1/4 frame min-h-[200px]"
      data-aos="fade-zoom-in"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-delay="100"
    >
      <div class="flex items-center justify-center gap-2 mb-4 text-2xl font-secondary">
        <span class="text-3xl font-bold counting" data-count="9075">0</span>+
      </div>
      <p class="uppercase">sprzedanych</p>
    </div>
    <div
      class="relative flex flex-col items-center justify-center w-full md:w-1/4 frame min-h-[200px]"
      data-aos="fade-zoom-in"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-delay="400"
    >
      <div class="flex items-center justify-center gap-2 mb-4 text-2xl font-secondary">
        <span class="text-3xl font-bold counting" data-count="6575">0</span>+
      </div>
      <p class="uppercase">wydrukowanych</p>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full md:w-1/4 relative frame min-h-[200px]"
      data-aos="fade-zoom-in"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-delay="700"
    >
      <div class="flex items-center justify-center gap-2 mb-4 text-2xl font-secondary">
        <span class="text-3xl font-bold counting" data-count="1275">0</span>+
      </div>
      <p class="uppercase">zaprojektowanych</p>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full md:w-1/4 relative frame min-h-[200px]"
      data-aos="fade-zoom-in"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-delay="1000"
    >
      <div class="flex items-center justify-center gap-2 mb-4 text-2xl font-secondary">
        <span class="text-3xl font-bold counting" data-count="1255">0</span>+
      </div>
      <p class="uppercase">zadowoleni klienci</p>
    </div>
  </section>
</template>

<style scoped>
.counter-section {
  background: linear-gradient(
    to top,
    rgba(164, 137, 90, 0) 0%,
    #a4895a 20%,
    #a4895a 80%,
    rgba(164, 137, 90, 0) 100%
  );
}

.frame::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./../assets/image/frame/white-ornament-top-left.svg'),
    url('./../assets/image/frame/white-ornament-top-right.svg'),
    url('./../assets/image/frame/white-ornament-bottom-left.svg'),
    url('./../assets/image/frame/white-ornament-bottom-right.svg');
  background-size: 53px 53px, 53px 53px, 53px 53px, 53px 53px;
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
  border: 1px solid #ffffff;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center top, center bottom, center left, center right;
  background-size: 100% 8px, 100% 8px, 8px auto, 8px auto;
  transform-origin: center;
  z-index: 15;
  transition: background-image 0.5s ease-in-out;
}
</style>

<script>
export default {
  mounted() {
    const allCounters = document.querySelectorAll('.counting');
    const counterSection = this.$refs.counterSection;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          allCounters.forEach((counter) => {
            if (!counter.classList.contains('counting-started')) {
              const countTo = parseInt(counter.getAttribute('data-count'), 10);
              const duration = 3000;
              const stepTime = 50;
              let currentCount = 0;
              const increment = Math.ceil(countTo / (duration / stepTime));

              const updateCounter = () => {
                if (currentCount < countTo) {
                  currentCount += increment;
                  counter.textContent = currentCount > countTo ? countTo : currentCount;
                  setTimeout(updateCounter, stepTime);
                }
              };

              updateCounter();
              counter.classList.add('counting-started');
            }
          });
        }
      });
    }, options);

    observer.observe(counterSection);
  },
};
</script>

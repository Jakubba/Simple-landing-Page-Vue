<template>
  <section class="bg-[#a4895a] flex flex-col items-center justify-center p-2 md:p-10" data-aos="fade-zoom-in" data-aos-anchor-placement="center-bottom" data-aos-delay="800"  data-aos-duration="1000" data-aos-offset="300">
    <div class="flex flex-col justify-center gap-10 md:items-center md:flex-row">
      <div class="relative w-full h-full md:w-1/2 frame-only" data-aos="fade-right"
     data-aos-offset="800"
     data-aos-anchor-placement="top-bottom"
     data-aos-easing="ease-in-sine">
        <img class="relative z-[10]" src="./../assets/image/heroSection/maxmagnificent_black_dragon.png" alt=""></img>
      </div>
      <div class="flex flex-col items-center justify-center w-full h-full md:w-1/2 md:items-start" >
        <h3 class="mb-10 text-4xl text-center font-secondary"  data-aos="fade-left" data-aos-easing="linear"   data-aos-duration="800" data-aos-delay="100"
        >About us</h3>
        <p  data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima accusamus esse 
            in ipsam ullam repellat sed distinctio iure, dolorem tempore eveniet sit iusto ipsa 
            cumque nulla aspernatur id consequuntur.Aspernatur asperiores accusantium, totam animi 
            similique perferendis fuga quam architecto culpa .</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.frame-only {
  position: relative;
  transition: filter 0.3s ease-in-out;
}
.frame-only::after {
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
.frame-only::before{
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    border: 6px solid #4a3c27;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    transition: border 0.5s ease-in-out;
}
</style>
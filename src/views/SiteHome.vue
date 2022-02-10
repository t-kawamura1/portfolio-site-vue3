<template>
  <div class="home background-filter07" ref="home">
    <site-header @scroll="scrollToAnchorPoint($event)" />
    <div class="scrolldown">
      <span>Scroll</span>
    </div>
    <transition name="button-fade">
      <div class="top-button-links-wrapper" v-if="show">
        <external-links class="external-links" />
        <to-top-button
          @scroll="scrollToAnchorPoint('HOME')"
          class="to-top-button" />
      </div>
    </transition>
    <section class="hero">
      <hero-item @scroll="scrollToAnchorPoint($event)"/>
    </section>
    <section class="my-contents">
      <div class="portfolio sec-fadein" ref="portfolio">
        <div class="heading-wrapper">
          <h2 class="heading sec-fadein">PORTFOLIO</h2>
        </div>
        <portfolio-items />
      </div>
      <div class="skills" ref="skills">
        <div class="heading-wrapper small">
          <h2 class="heading sec-fadein">SKILLS</h2>
        </div>
        <skills-set />
      </div>
      <div class="stances" ref="stances">
        <div class="heading-wrapper">
          <h2 class="heading sec-fadein">STANCE</h2>
        </div>
        <stances-items />
      </div>
    </section>
    <section class="profile sec-fadein background-filter03" ref="profile">
      <div class="heading-wrapper small">
        <h2 class="heading sec-fadein">PROFILE</h2>
      </div>
      <profile-item />
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import SiteHeader from '@/components/shared/SiteHeader'
import ToTopButton from '@/components/shared/ToTopButton'
import HeroItem from '@/components/home-view/HeroItem'
import PortfolioItems from '@/components/home-view/PortfolioItems'
import SkillsSet from '@/components/home-view/SkillsSet'
import StancesItems from '@/components/home-view/StancesItems'
import ProfileItem from '@/components/home-view/ProfileItem'
import ExternalLinks from '../components/home-view/ExternalLinks.vue';

export default {
  components: {
    SiteHeader,
    ToTopButton,
    HeroItem,
    PortfolioItems,
    SkillsSet,
    StancesItems,
    ProfileItem,
    ExternalLinks
  },
  setup() {
    let show = ref(false);
    const home = ref(null);
    const portfolio = ref(null);
    const skills = ref(null);
    const stances = ref(null);
    const profile = ref(null);

    const showSection = () => {
      let element = document.querySelectorAll('.sec-fadein')
      if (!element) return
      // let showTiming = 200;
      let scrollY = window.scrollY
      let windowH = window.innerHeight
      for (let i = 0; i < element.length; i++) {
        let elementClientRect = element[i].getBoundingClientRect()
        let elementY = scrollY + elementClientRect.top
        if (scrollY + windowH > elementY) {
          element[i].classList.add('scrollin')
        }
      }
    }
    const showToTopButton = () => {
      show.value = (window.scrollY > 500)
    }
    const addSlideLeft = () => {
      let scrollY = window.scrollY
      let windowH = window.innerHeight
      let element = document.querySelector('.scrolldown')
      let profile = document.querySelector('.profile')
      let profileTop = profile.getBoundingClientRect().top
      if (scrollY > 90) {
        element.classList.add('slide-left')
      } else {
        element.classList.remove('slide-left')
      }
      if (windowH > profileTop) {
        element.classList.add('opacity')
      } else {
        element.classList.remove('opacity')
      }
    }
    const chageBackgroundFilter = () => {
      // let profile = document.querySelector('.profile')
      // let profileTop = profile.getBoundingClientRect().top
    }
    const scrollToAnchorPoint = (refName) => {
      let el;
      switch (refName) {
        case 'HOME':
          el = home
          break
        case 'PORTFOLIO':
          el = portfolio
          break
        case 'SKILLS':
          el = skills
          break
        case 'STANCES':
          el = stances
          break
        case 'PROFILE':
          el = profile
          break
      }
      el.value.scrollIntoView({ behavior: 'smooth'});
    };

    document.addEventListener.call(window, 'scroll', showSection)
    document.addEventListener.call(window, 'scroll', showToTopButton)
    document.addEventListener.call(window, 'scroll', addSlideLeft)

    return {
      show,
      home,
      portfolio,
      skills,
      stances,
      profile,
      showSection,
      showToTopButton,
      addSlideLeft,
      chageBackgroundFilter,
      scrollToAnchorPoint,
    };
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: url('../assets/home-bg.jpg') no-repeat fixed left bottom;
  background-size: cover;
  background-blend-mode: lighten;
  &.background-filter07 {
    background-color:  rgba(255, 255, 255, 0.7);
  }
  &.background-filter03 {
    background-color:  rgba(255, 255, 255, 0.3);
  }
  .scrolldown {
    position: fixed;
    z-index: 9;
    left: 50%;
    bottom: 10px;
    height: 50px;
    font-size: 2rem;
    font-weight: 300;
    transition: all 0.6s ease-out;
    color: #636363;
    > span {
      position: absolute;
      left: -28px;
      top: -24px;
    }
    &.slide-left {
      left: 50px;
    }
    &.opacity {
      opacity: 0;
    }
  }
  .scrolldown::after {
    content: '';
    position: absolute;
    top: 0px;
    width: 1px;
    height: 50px;
    background-color: #636363;
    animation: pathmove 1.4s ease-in-out infinite;
    opacity: 0;
  }
  @keyframes pathmove {
    0% {
      height: 0;
      top: 0;
      opacity: 0;
    }
    30% {
      height: 40px;
      opacity: 1;
    }
    100% {
      height: 0;
      top: 50px;
      opacity: 0;
    }
  }

  .button-fade-enter-active, .button-fade-leave-active {
    transition: opacity 0.2s;
  }
  .button-fade-leave-to {
    opacity: 0;
  }
  .sec-fadein {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.0s;
    &.scrollin {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .heading-wrapper {
    margin: 0 auto;
    width: 200px;
    height: 600px;
    position: relative;
    &.small {
      height: 400px;
    }
  }
  .heading {
    position: absolute;
    top: calc(50% - 15px);
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
  }

  .external-links {
    position: fixed;
    z-index: 9;
    top: 35%;
    right: 15px;
  }
  .to-top-button {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
  }

  .hero {
    padding: 280px 60px 400px;
  }

  .my-contents {
    position: relative;
    z-index: 2;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -2;
      background-color: #fcfcfc;
      transform: skewY(6deg);
    }
    .portfolio {
      padding: 0 90px 240px;
    }
    .skills {
      padding: 0 100px 240px;
      position: relative;
      z-index: 2;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: #f1f1f1;
        transform: skewY(-6deg);
      }
    }
    .stances {
      padding: 0 100px 120px;
    }
  }

  .profile {
    padding: 0 60px 60px;
    p {
      text-align: left;
    }
  }
}

@media (max-width: 768px) {
  .home {
    background: none;
    *:hover {
      opacity: 1;
    }

    .heading {
      margin-bottom: 40px;
      font-size: 2.6rem;
      font-weight: 300;
      &::before, &::after {
        width: 30px;
        height: 2px;
        margin: 0 10px;
        border-bottom: solid 2px;
      }
    }

    .hero {
      background: none;
      padding: 200px 30px 60px;
    }

    .portfolio {
      padding: 50px 30px 40px;
    }

    .skills {
      padding: 50px 30px;
      background: none;
    }

    .stances {
      padding: 50px 30px;
      .stances-title {
        display: none;
      }
    }

    .profile {
      padding: 50px 30px;
    }
  }
}
</style>

<noscript>
  <style scoped>
    .fadein {
      opacity: 1;
      transform: translate(0);
    }
  </style>
</noscript>
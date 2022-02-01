<template>
  <div class="home" ref="home">
    <site-header @scroll="scrollToAnchorPoint($event)" />
    <transition name="button-fade">
      <to-top-button
        v-if="show"
        @scroll="scrollToAnchorPoint('HOME')"
        class="to-top-button" />
    </transition>
    <section class="hero">
      <hero-item @scroll="scrollToAnchorPoint($event)"/>
    </section>
    <section class="portfolio sec-fadein" ref="portfolio">
      <h2 class="heading sec-fadein">PORTFOLIO</h2>
      <portfolio-items />
    </section>
    <section class="skills sec-fadein" ref="skills">
      <h2 class="heading sec-fadein">SKILLS</h2>
      <skills-set />
    </section>
    <section class="stances sec-fadein" ref="stances">
      <h2 class="heading sec-fadein">STANCE</h2>
      <div class="stances-title">世の中を効率的に、かつ おもしろく</div>
      <stances-items />
      <stances-figure-item />
    </section>
    <section class="profile sec-fadein" ref="profile">
      <h2 class="heading sec-fadein">PROFILE</h2>
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
import StancesFigureItem from '@/components/home-view/StancesFigureItem'
import ProfileItem from '@/components/home-view/ProfileItem'

export default {
  components: {
    SiteHeader,
    ToTopButton,
    HeroItem,
    PortfolioItems,
    SkillsSet,
    StancesItems,
    StancesFigureItem,
    ProfileItem
  },
  setup() {
    let show = ref(false);
    const home = ref(null);
    const portfolio = ref(null);
    const skills = ref(null);
    const stances = ref(null);
    const profile = ref(null);

    const showSection = () => {
      let element = document.getElementsByClassName('sec-fadein');
      if (!element) return;
      // let showTiming = 200;
      let scrollY = window.scrollY;
      let windowH = window.innerHeight;
      for (let i = 0; i < element.length; i++) {
        let elementClientRect = element[i].getBoundingClientRect();
        let elementY = scrollY + elementClientRect.top;
        if (scrollY + windowH > elementY) {
          element[i].classList.add('scrollin');
        }
      }
    };
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
    document.addEventListener.call(window, 'scroll', () => {
      show.value = (window.scrollY > 500);
    })

    return {
      show,
      home,
      portfolio,
      skills,
      stances,
      profile,
      showSection,
      scrollToAnchorPoint,
    };
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: rgba(255, 255, 255, 0.7) url('../assets/home-bg.jpg') no-repeat fixed left bottom;
  background-size: cover;
  background-blend-mode: lighten;
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

  .heading {
    margin-bottom: 60px;
    font-size: 2.7rem;
    font-weight: 300;
    letter-spacing: 1px;
    &::before, &::after {
      content: '';
      display: inline-block;
      width: 30px;
      height: 3px;
      margin: 0 10px;
      border-bottom: solid 2px;
    }
  }

  .to-top-button {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
  }

  .hero {
    color: #636363;
    padding: 280px 60px 350px;
  }

  .portfolio {
    padding: 100px 60px;
    color: #fff;
    background-color: #777;
  }

  .skills {
    padding: 100px 30px;
    background-color: #f5f5f5;
  }

  .stances {
    padding: 100px 60px;
    background-color: #777;
    color: #fff;
    .stances-title {
      font-size: 2.2rem;
      margin-bottom: 60px;
      letter-spacing: 1px;
    }
  }

  .profile {
    padding: 100px 60px 100px;
    color: #333;
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
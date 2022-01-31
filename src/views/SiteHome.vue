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
      <section-heading heading="PORTFOLIO"/>
      <portfolio-items />
    </section>
    <section class="skills sec-fadein" ref="skills">
      <section-heading heading="SKILLS"/>
      <!-- <skills-items /> -->
      <skills-set />
    </section>
    <section class="stances sec-fadein" ref="stances">
      <section-heading heading="STANCES"/>
      <div class="stances-title">世の中を効率的に、かつ おもしろく</div>
      <stances-items />
      <stances-figure-item />
    </section>
    <section class="profile sec-fadein" ref="profile">
      <section-heading heading="PROFILE"/>
      <profile-item />
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import SiteHeader from '@/components/shared/SiteHeader'
import ToTopButton from '@/components/shared/ToTopButton'
import HeroItem from '@/components/home-view/HeroItem'
import SectionHeading from '@/components/shared/SectionHeading'
import PortfolioItems from '@/components/home-view/PortfolioItems'
// import SkillsItems from '@/components/home-view/SkillsItems'
import SkillsSet from '@/components/home-view/SkillsSet'
import StancesItems from '@/components/home-view/StancesItems'
import StancesFigureItem from '@/components/home-view/StancesFigureItem'
import ProfileItem from '@/components/home-view/ProfileItem'

export default {
  components: {
    SiteHeader,
    ToTopButton,
    HeroItem,
    SectionHeading,
    PortfolioItems,
    // SkillsItems,
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
      let showTiming = 200;
      let scrollY = window.scrollY;
      let windowH = window.innerHeight;
      for (let i = 0; i < element.length; i++) {
        let elementClientRect = element[i].getBoundingClientRect();
        let elementY = scrollY + elementClientRect.top;
        if (scrollY + windowH - showTiming > elementY) {
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

  .to-top-button {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
  }

  .hero {
    color: #636363;
    padding: 190px 60px 220px;
  }

  .portfolio {
    padding: 100px 60px;
    color: #fff;
    background-color: #777;
  }

  .skills {
    padding: 100px 150px;
    background-color: #f5f5f5;
  }

  .stances {
    padding: 100px 60px;
    background-color: #777;
    color: #fff;
    .stances-title {
      font-size: 2.4rem;
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
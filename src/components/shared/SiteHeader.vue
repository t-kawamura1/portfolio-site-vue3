<template>
  <header class="header" :class="{ opacity: isOpacity }">
    <site-logo class="site-logo"/>
    <div v-if="isMobile">
      <nav class="hamberger-menu" @click="toggleDropdown()">
        <span></span>
        <span></span>
        <span></span>
        <ul class="dropdown-list">
          <li class="dropdown-list-item"
              v-for="(name, index) in homeHeaderNameList"
              :key="index"
              @click="onScroll(name)">
            {{ name }}
          </li>
        </ul>
      </nav>
    </div>
    <div v-else>
      <nav class="home-nav" v-if="isHome">
        <ul class="nav-list">
          <li class="nav-list-item"
              v-for="(name, index) in homeHeaderNameList"
              :key="index"
              @click="onScroll(name)">
            {{ name }}
          </li>
        </ul>
      </nav>
      <nav class="pfdetail-nav" v-if="isPfDetail">
        <ul class="nav-list">
          <li class="nav-list-item"
              v-for="(name, index) in pfDetailHeaderNameList"
              :key="index"
              @click="onScroll(name)">
            {{ name }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import SiteLogo from '@/components/shared/SiteLogo'
import { ref, reactive } from "vue";
import { useRoute } from 'vue-router'

export default {
  components: {
    SiteLogo
  },
  setup(_, context) {
    const isOpacity = ref(false)
    const isMobile = ref(window.matchMedia('(max-width: 768px)').matches)
    const isActive = ref(false)
    const isHome = ref(false)
    const isPfDetail = ref(false)
    const homeHeaderNameList = reactive([
      'PORTFOLIO',
      'SKILLS',
      'STANCES',
      'PROFILE'
    ])
    const pfDetailHeaderNameList = reactive([
      'Lemon Sour DB',
      'T.KAWAMURA',
    ])
    const toggleDropdown = () => {
      const hambergerMenu = document.querySelector('.hamberger-menu')
      isActive.value = !(isActive.value)
      if (isActive.value) {
        hambergerMenu.classList.add('active')
      } else {
        hambergerMenu.classList.remove('active')
      }
    }
    const onScroll = (name) => {
      context.emit('scroll', name)
    }
    const addOpacity = () => {
      isOpacity.value = (window.scrollY > 160)
    }

    /** ヘッダーのルートごとの表示制御 */
    const route = useRoute()
    switch (route.path) {
      case '/':
        isHome.value = true
        isPfDetail.value = false
        break;
      case '/portfolio-detail':
        isHome.value = false
        isPfDetail.value = true
        break
    }

    document.addEventListener.call(window, 'scroll', addOpacity)

    return {
      isMobile,
      isOpacity,
      isHome,
      isPfDetail,
      homeHeaderNameList,
      pfDetailHeaderNameList,
      toggleDropdown,
      onScroll,
      addOpacity,
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #636363;
  padding: 0 30px;
  position: fixed;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 50px;
  &.opacity {
    background-color: rgba(255, 255, 255, 1);
  }
  .home-nav {
    width: 450px;
    .nav-list {
      display: flex;
      justify-content: space-between;
      padding: 0;
      .nav-list-item {
        display: inline-block;
        font-weight: 300;
        color: #636363;
        line-height: 40px;
        font-size: 1.8rem;
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
    }
  }
  .pfdetail-nav {
    width:300px;
    .nav-list {
      display: flex;
      justify-content: space-between;
      padding: 0;
      .nav-list-item {
        display: inline-block;
        font-weight: 300;
        color: #636363;
        line-height: 40px;
        font-size: 1.8rem;
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 10px 0 10px;
    height: 40px;
    .hamberger-menu {
      width: 40px;
      height: 40px;
      position: relative;
      cursor: pointer;
      > span {
        display: inline-block;
        position: absolute;
        left: 7px;
        width: 26px;
        height: 1.5px;
        background-color: #636363;
        border-radius: 1px;
        transition: all 0.4s;
        &:nth-of-type(1) {
          top: 10px;
        }
        &:nth-of-type(2) {
          top: 19px;
        }
        &:nth-of-type(3) {
          top: 28px;
        }
      }

      .dropdown-list {
        padding: 0 10px;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: rgba(255, 255, 255, 0.8);
        opacity: 0;
        transition: all 0.4s;
        .dropdown-list-item {
          padding: 12px 0;
          cursor: pointer;
          font-size: 1.5rem;
        }
      }

      &.active {
        > span {
          &:nth-of-type(1) {
            top: 19px;
            transform: rotate(-45deg);
          }
          &:nth-of-type(2) {
            opacity: 0;
          }
          &:nth-of-type(3) {
            top: 19px;
            transform: rotate(45deg);
          }
        }
        .dropdown-list {
          opacity: 1;
        }
      }
    }
    .home-nav {
      width: 270px;
      height: 40px;
      .nav-list {
        padding: 0;
        .nav-list-item {
          line-height: 40px;
          font-size: 1.3rem;
        }
      }
    }
    .pfdetail-nav {
      width: 220px;
      height: 40px;
      .nav-list {
        padding: 0;
        .nav-list-item {
          line-height: 40px;
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>

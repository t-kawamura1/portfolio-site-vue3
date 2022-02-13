<template>
  <header class="header" :class="{ opacity: isOpacity }">
    <site-logo class="site-logo"/>
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
    let isOpacity = ref(false)
    let isHome = ref(false)
    let isPfDetail = ref(false)
    const homeHeaderNameList = reactive([
      'PORTFOLIO',
      'SKILLS',
      'STANCES',
      'PROFILE'
    ]);
    const pfDetailHeaderNameList = reactive([
      'Lemon Sour DB',
      'T.KAWAMURA',
    ]);
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
      isOpacity,
      isHome,
      isPfDetail,
      homeHeaderNameList,
      pfDetailHeaderNameList,
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
    justify-content: flex-start;
    height: 40px;
    .site-logo {
      margin-right: 30px;
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

<template>
  <header class="header">
    <site-logo/>
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
import { ref, reactive, onMounted } from "vue";
import { useRoute } from 'vue-router'

export default {
  components: {
    SiteLogo
  },
  setup(_, context) {
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

    onMounted(() => {
      const route = useRoute()
      console.log(route.path)
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
    })

    return {
      isHome,
      isPfDetail,
      homeHeaderNameList,
      pfDetailHeaderNameList,
      onScroll
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
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 50px;
  .home-nav {
    width: 500px;
    .nav-list {
      display: flex;
      justify-content: space-between;
      padding: 0;
      .nav-list-item {
        display: inline-block;
        font-weight: 300;
        color: #636363;
        line-height: 40px;
        font-size: 2rem;
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
    }
  }
  .pfdetail-nav {
    width:350px;
    .nav-list {
      display: flex;
      justify-content: space-between;
      padding: 0;
      .nav-list-item {
        display: inline-block;
        font-weight: 300;
        color: #636363;
        line-height: 40px;
        font-size: 2rem;
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
    justify-content: space-between;
    padding: 0 10px 0 10px;
    height: 40px;
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

<template>
  <header class="header">
    <site-logo/>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item"
            v-for="(name, index) in headerNameList"
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
import { reactive } from "vue";

export default {
  components: {
    SiteLogo
  },
  setup(_, context) {
    const headerNameList = reactive([
      'PORTFOLIO',
      'SKILLS',
      'STANCES',
      'PROFILE'
    ]);
    const onScroll = (name) => {
      context.emit('scroll', name)
    }

    return {
      headerNameList,
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
  .nav {
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
}

@media (max-width: 768px) {
  .header {
    justify-content: space-between;
    padding: 0 0 0 10px;
    height: 40px;
    .nav {
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
  }
}
</style>

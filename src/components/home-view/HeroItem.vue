<template>
  <h1 class="title">T.KAWAMURA</h1>
  <p class="sub-title">Make the world efficient and fun.</p>
  <div class="hero-buttons-box">
    <button-dark
      button-text="Portfolio"
      @scroll="onScroll('PORTFOLIO')"
    />
    <button-dark
      button-text="About me"
      @scroll="onScroll('PROFILE')"
    />
  </div>
</template>

<script>
import ButtonDark from '@/components/home-view/ButtonDark'

export default {
  components: {
    ButtonDark,
  },
  setup(_, context) {
    const onScroll = (name) => {
      context.emit('scroll', name)
    }

    return {
      onScroll
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 40px;
  font-weight: 200;
  font-size: 7rem;
  letter-spacing: 4px;
}
.sub-title {
  margin-bottom: 80px;
  font-weight: 300;
  font-size: 2.8rem;
  letter-spacing: 1px;
}
.hero-buttons-box {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 450px;
}

@media (max-width: 768px) {
  .title {
    margin-bottom: 50px;
    font-size: 4rem;
    letter-spacing: 2px;
  }
  .sub-title {
    margin-bottom: 80px;
    font-size: 1.5rem;
  }
  .hero-buttons-box {
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    height: 170px;
    margin-bottom: 50px;
  }
}
</style>
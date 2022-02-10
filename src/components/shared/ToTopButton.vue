<template>
  <div class="to-top-button" @click="clickToScroll">
    <span class="arrow"></span>
    <span class="top">TOP</span>
  </div>
</template>

<script>
export default {
  setup(_, context) {
    const clickToScroll = () => {
      context.emit('scroll');
    }

    return {
      clickToScroll,
    }
  }
}

</script>

<style lang="scss" scoped>
.to-top-button {
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
  border: solid 1px #535353;
  border-radius: 4px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  .arrow {
    display: block;
    position: absolute;
    top: 8px;
    left: 16px;
    width: 15px;
    height: 15px;
    border-top: solid 2px #535353;
    border-left: solid 2px #535353;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 17px;
    left: 16px;
    width: 15px;
    height: 15px;
    border-top: solid 2px #535353;
    border-left: solid 2px #535353;
    transform: rotate(45deg);
  }
  .top {
    position: absolute;
    bottom: 3px;
    left: 10px;
    font-size: 1.4rem;
    color: #535353;
  }
}

@media (max-width: 768px) {

}
</style>
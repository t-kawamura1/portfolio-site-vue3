<template>
  <div class="button-dark" @click="clickToScroll">{{ buttonText }}</div>
</template>

<script>
export default {
  props: {
    buttonText: String
  },
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
.button-dark {
  display: inline-block;
  width: 150px;
  padding: 15px;
  border-radius: 4px;
  background-color: #777;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1.5rem;
  &:hover {
    background-color: #555;
    transition: 0.2s;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .button-dark {
    font-size: 1.5rem;
    &:hover {
      background-color: #777;
    }
  }
}
</style>
  <li class="nav-list-item" @click="clickToScroll">
    {{ navListItemName.toUpperCase() }}
  </li>

<script>
export default {
  props: {
    navListItemName: String
  },
  setup(_, context) {
    const clickToScroll = () => {
      context.emit('scrollTo')
    }

    return {
      clickToScroll
    }
  }
}
</script>

<style lang="scss" scoped>
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

@media (max-width: 768px) {
  .nav-list-item {
    line-height: 40px;
    font-size: 1.3rem;
  }
}
</style>
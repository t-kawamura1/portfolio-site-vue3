<template>
  <div class="skills-container">
    <split-carousel v-bind="options">
      <split-carousel-item v-for="(img, i) in skillImgSrcs" :key="i">
        <transition name="skill-item">
          <div
            class="skill-item"
            @click="onSkillItem(i)"
          >
            <div class="img-box">
              <img
                :src="img"
                alt="スキルイメージ"
                class="skill-image"
              >
              <div class="skill-name">{{ skillNames[i] }}</div>
            </div>

            <div class="skill-text">
              <div class="use">
                <span class="use-tag">使用期間</span>
                <div>{{ periodsOfUse[i] }}</div>
              </div>
              <div class="business">
                <span class="business-tag">業務歴</span>
                <div>{{ businessHistories[i] }}</div>
              </div>
              <p class="description">{{ descriptions[i] }}</p>
            </div>
          </div>
        </transition>
      </split-carousel-item>
    </split-carousel>
  </div>
</template>

<script>
import { reactive, ref } from "vue"

export default {
  setup() {
    const options = reactive({
      speed: 2000,
      interval: 2000,
      'display-amount': 5,
      height: 380,
    })
    let isClicked = ref(false)
    const skillImgSrcs = reactive([
      require('@/assets/rails.svg'),
      require('@/assets/java-14.svg'),
      require('@/assets/vue.svg'),
      require('@/assets/angular.svg'),
      require('@/assets/docker.svg'),
      require('@/assets/aws.svg'),
    ])
    const skillNames = reactive([
      'Ruby on Rails',
      'Java',
      'Vue.js',
      'Angular',
      'Docker',
      'AWS',
    ])
    const periodsOfUse = reactive([
      '2020年8月-2021年9月',
      '2021年9月-現在',
      '2021年1月-現在',
      '2021年10月-現在',
      '2020年10月-現在',
      '2021年8月-現在',
    ])
    const businessHistories = reactive([
      'なし',
      '2021年11月-現在',
      'なし',
      '2021年11月-現在',
      '2021年11月-現在',
      'なし',
    ])
    const descriptions = reactive([
      'Webエンジニアへの足掛かりとなったFW。ガッツリ学習したが、業務歴はない。いつか業務で使う日が来るだろうか。',
      '初めてさわった静的型付けのある言語。業務ではバックのコードを読む程度。実装もできるようキャッチアップは続けよう。',
      'JSとセットで学習を始めたFW。選定理由は他フロントFWよりとっつきやすそうだから。現在は趣味でいじっている。',
      'エンジニアデビューとともに始めたFW。業務ではMeterialを駆使して開発を行なっている。TypeScriptも同時デビュー。',
      '環境構築になくてはならない存在。納得の有料化。プログラミング学習開始当初から意識して使用を続けている',
      'ECS/FARGATE, S3, CloudFront, Route53, RDSの使用経験あり。今後、業務を通じてさらに学んでいきたい。',
    ])
    const onSkillItem = (index) => {
      const items = document.getElementsByClassName('skill-item')
      const imgs = document.getElementsByClassName('img-box')
      const names = document.getElementsByClassName('skill-name')
      const texts = document.getElementsByClassName('skill-text')
      if (!isClicked.value) {
        items[index].classList.add('color-reverse')
        imgs[index].classList.add('move-up')
        names[index].classList.add('fade-in')
        texts[index].classList.add('fade-in')
        isClicked.value = true
      } else {
        items[index].classList.remove('color-reverse')
        imgs[index].classList.remove('move-up')
        names[index].classList.remove('fade-in')
        texts[index].classList.remove('fade-in')
        isClicked.value = false
      }
    }

    return {
      options,
      isClicked,
      skillImgSrcs,
      skillNames,
      periodsOfUse,
      businessHistories,
      descriptions,
      onSkillItem,
    }
  }
}
</script>

<style lang="scss" scoped>
.skills-container {
      box-shadow: 0px 4px 4px #dcdcdc;
  .skill-item-enter-active, .skill-item-leave-active {
    transition: all 0.5s;
  }
  .skill-item {
    transition: all 0.5s;
    width: 240px;
    height: 360px;
    border-radius: 5px;
    margin: 0 30px 18px 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #dcdcdc;
    cursor: pointer;
    &.color-reverse {
      background-color: white;
      box-shadow: 4px 4px 4px #dcdcdc;
    }
    .img-box {
      margin-bottom: 6px;
      transform: translateY(90px);
      transition: all 0.5s;
      &.move-up {
        transform: translateY(0);
        opacity: 1;
      }
      .skill-image {
        height: 120px;
        margin-bottom: 3px;
      }
      .skill-name {
        font-size: 1.2em;
        opacity: 0;
        transition: opacity 0.5s;
        &.fade-in {
          opacity: 1;
        }
      }
    }
    .skill-text {
      text-align: left;
      font-size: 0.9em;
      opacity: 0;
      transition: opacity 0.5s;
      &.fade-in {
        opacity: 1;
      }
      .use {
        letter-spacing: 1.5px;
        margin-bottom: 6px;
        > * {
          margin-bottom: 3px
        }
        .use-tag {
          display: inline-block;
          background-color: #37a34a;
          color: white;
          padding: 3px 6px;
          border-radius: 3px;
          margin-bottom: 3px;
        }
      }
      .business {
        letter-spacing: 1.5px;
        margin-bottom: 12px;
        .business-tag {
          display: inline-block;
          background-color: #008db7;
          color: white;
          padding: 3px 6px;
          border-radius: 3px;
          margin-bottom: 3px;
        }
      }
      .description {
        line-height: 1.2em;
      }
    }
    .text-enter-active, .text-leave-active {
      transition: opacity 0.5s;
    }
    .text-leave-to {
      opacity: 0;
    }
  }
}

@media (max-width: 768px) {
  .skills-container {
    flex-direction: column;
    .skill-image {
      // width: 40%;
      // height: 40%;
    }
  }
}
</style>
<template>
  <div class="skills-container">
    <div class="skill-item" v-for="(title, i) in skillTitles" :key="i">
      <div class="skill-title">{{ title }}</div>
      <img :src="skillImgSrcs[i]" alt="スキルイメージ" class="skill-image">
      <p class="skill-text">{{ skillTexts[i] }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"

export default {
  setup() {
    const skillTitles = reactive([
      'SERVER-SIDE',
      'FRONT-END',
      'INFRASTRUCTURE'
    ])
    const skillImgSrcs = reactive([
      require('@/assets/rails.svg'),
      require('@/assets/vue.svg'),
      require('@/assets/dockeraws.png')
    ])
    const skillTexts = reactive([
      'サーバーサイドの技術として、Ruby on Railsを学びました。Lemon Sour DB（以下、LSDB）では、Rails6をAPIサーバーとして活用しています。現在の仕事ではバックエンドがJava(Spring Boot)のため、そちらの学習に取り組んでいます。',
      'フロントエンドの技術として、Vue.jsを学びました。LSDBのフロントとして、またこのサイト自身もVue.jsを採用しています。現在の仕事ではAngularを使用しています。こちらもVueとはまた違ったおもしろさがありますね。今後はReactにも触れて、3大JSフレームワークを制覇するかと思案中です。',
      'LSDB・当サイトともに、環境の構築にはDockerを用いています。LSDBの本番環境では、AWSのECS/FARGATEを用いてデプロイしました（個人開発ではコストがアホほど高いので、現在は停止中）。必要に応じて適切な環境を選択できるよう、各種技術に精通していきたいと考えています。'
    ])

    return {
      skillTitles,
      skillImgSrcs,
      skillTexts
    }
  }
}
</script>

<style lang="scss" scoped>
.skills-container {
  display: flex;
  justify-content: space-between;
  .skill-item {
    padding-top: 20px;
    width: 30%;
    .skill-title {
      font-size: 2.4rem;
      margin-bottom: 30px;
      letter-spacing: 1px;
    }
    .skill-image {
      display: inline-block;
      margin-bottom: 20px;
      height: 180px;
    }
    .skill-text {
      line-height: 2;
      text-align: left;
    }
  }
}

@media (max-width: 768px) {
  .skills-container {
    flex-direction: column;
    .skills-item {
      width: 100%;
      padding: 30px 0;
      border-bottom: 1px solid #777;
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }
      .skill-title {
        font-size: 2.0rem;
        margin: 10px 0 20px;
      }
      .skill-image {
        margin-bottom: 20px;
        width: 40%;
        height: 40%;
      }
      .skill-text {
        font-size: 1.4rem;
      }
    }
  }
}
</style>
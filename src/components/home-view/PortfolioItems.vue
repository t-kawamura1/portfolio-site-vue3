<template>
  <div class="portfolio-container">
    <div class="portfolio-item" v-for="(src, i) in pfImgSrc" :key="i">
      <img :src="src" alt="サイトスクリーンショット" class="site-image">
      <div class="portfolio-title">{{ pfTitle[i] }}</div>
      <a href="pfURL[i]" class="portfolio-link">
        <fas
          class="portfolio-link-icon"
          icon="external-link-alt"
        ></fas>
        {{ pfURL[i] }}
      </a>
      <p class="portfolio-text">{{ pfText[i] }}</p>
      <button-bright button-text="もっと詳しく" @showMoreDetail="routeToPortfolioDetail"/>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"
import ButtonBright from '@/components/home-view/ButtonBright'
import { useRouter } from 'vue-router'

export default {
  components:{
    ButtonBright
  },
  setup() {
    const pfImgSrc = reactive([
      require('@/assets/lsdb-pc-top.png'),
      require('@/assets/pfsite-pc-top.png')
    ])
    const pfTitle = reactive([
      "Lemon Sour DB",
      "T.KAWAMURA ポートフォリオサイト"
    ])
    const pfURL = reactive([
      "https://lemonsourdb.net",
      "https://www.t-kawamura.com"
    ])
    const pfText = reactive([
      "おうち時間の飲み過ぎ防止に！飲んだレモンサワー（もしくは任意の度数）のアルコール量を計算できるアプリです。日毎の記録をカレンダーから確認することもできます。日々進化し、リリースされるレモンサワー。「あれって何だっけ？」となったときのために、データベース化してみました。今後も少しずつ機能を拡張予定！",
      "このサイト自身です。Vue.jsで作成しました。「先の荒波をみつめて、なお突き進む覚悟」が背景テーマです。「成長を諦めた先に待つのは、ゆるやかな死」です。成長を続けていきましょう。"
    ])

    const router = useRouter()
    const routeToPortfolioDetail = () => {
      router.push('portfolio-detail')
    }

    return {
      pfImgSrc,
      pfTitle,
      pfURL,
      pfText,
      routeToPortfolioDetail,
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .portfolio-item {
    width: 45%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .site-image {
    margin-bottom: 50px;
    width: 100%;
    }
    .portfolio-title {
      font-size: 2rem;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }
    .portfolio-link {
      margin-bottom: 30px;
      color: #fff;
      font-weight: 300;
      &:hover {
        opacity: 0.8;
      }
      .portfolio-link-icon {
        margin-right: 5px;
      }
    }
    .portfolio-text {
      margin-bottom: 30px;
      line-height: 2;
      text-align: left;
    }
  }
}


@media (max-width: 768px) {
  .portfolio-container {
    flex-direction: column;
    .portfolio-item {
      width: 100%;
      &:first-child {
        padding-bottom: 40px;
        border-bottom: 1px solid #fff;
      }
      &:last-child {
        padding-top: 50px;
      }
      .site-image {
        margin-bottom: 30px;
      }
      .portfolio-title {
        font-size: 1.7rem;
      }
      .portfolio-link {
        font-size: 1.5rem;
      }
      .portfolio-link:hover {
          opacity: 1;
      }
      .portfolio-text {
        font-size: 1.4rem;
      }
      &:first-child::after {
        font-size: 2.5rem;
        top: 25%;
        letter-spacing: 2px;
      }
    }
  }
}
</style>
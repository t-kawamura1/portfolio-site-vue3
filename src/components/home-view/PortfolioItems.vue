<template>
  <div class="portfolio-container">
    <div class="portfolio-item1">
      <router-link to="/portfolio-detail">
        <img src="@/assets/lsdb-pc-top.png" alt="サイトスクリーンショット" class="site-image1">
      </router-link>
      <div class="text-box1">
        <router-link to="/portfolio-detail">
          <div class="portfolio-title">Lemon Sour DB</div>
        </router-link>
        <a href="https://lemonsourdb.net" class="portfolio-link">
          https://lemonsourdb.net
        </a>
      </div>
    </div>

    <div class="portfolio-item2">
      <router-link to="/portfolio-detail">
        <img src="@/assets/pfsite-pc-top.png" alt="サイトスクリーンショット" class="site-image2">
      </router-link>
      <div class="text-box2">
        <router-link to="/portfolio-detail">
          <div class="portfolio-title">T.KAWAMURA ポートフォリオサイト</div>
        </router-link>
        <a href="https://www.t-kawamura.com" class="portfolio-link">
          https://www.t-kawamura.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"
import { useRouter } from 'vue-router'

export default {
  components:{},
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
  text-align: left;
  .portfolio-item1 {
    position: relative;
    margin-bottom: 300px;
    .site-image1 {
      width: 630px;
      box-shadow: 8px 8px 8px #dcdcdc;
      transition: all 0.8s;
      &:hover {
        box-shadow: 24px 24px 24px #dcdcdc;
        cursor: pointer;
      }
    }
    .text-box1 {
      width: 450px;
      height: 130px;
      border-radius: 4px;
      box-shadow: 4px 4px 4px #dcdcdc;
      text-align: center;
      background-color: #fefefe;
      position: absolute;
      top: 250px;
      left: 480px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .portfolio-title {
        font-size: 2rem;
        margin-bottom: 20px;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
        }
      }
      .portfolio-link {
        font-weight: 300;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .portfolio-item2 {
    position: relative;
    text-align: right;
    padding-right: 30px;
    .site-image2 {
      width: 630px;
      box-shadow: 8px 8px 8px #dcdcdc;
      position: relative;
      transition: all 0.8s;
      &:hover {
        box-shadow: 24px 24px 24px #dcdcdc;
        cursor: pointer;
      }
    }
    .text-box2 {
      width: 450px;
      height: 130px;
      border-radius: 4px;
      box-shadow: 4px 4px 4px #dcdcdc;
      text-align: center;
      background-color: #fefefe;
      position: absolute;
      top: -45px;
      right: 480px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .portfolio-title {
        font-size: 2rem;
        margin-bottom: 20px;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
        }
      }
      .portfolio-link {
        font-weight: 300;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}


@media (max-width: 768px) {
  .portfolio-container {
    flex-direction: column;
    .portfolio-item {
      width: 100%;
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
    }
  }
}
</style>
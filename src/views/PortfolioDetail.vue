<template>
  <div class="portfolio-detail" ref="portfolio-detail">
    <site-header @scroll="scrollToAnchorPoint($event)" />
    <transition name="button-fade">
      <to-top-button
        v-if="show"
        @scrollTo="scrollToAnchorPoint('portfolio-detail')"
        class="to-top-button"
      />
    </transition>
    <section class="portfolio1" ref="portfolio1">
      <div class="pf1-title">Lemon Sour DB</div>
      <div class="pf1-container">
        <div class="pf1-text-item">
          <p>市販レモンサワーデータベース兼アルコール摂取量計算アプリ。</p>
          <p>レモンサワーを選択してアルコール摂取量を計算、カレンダーに記録を反映することができます。</p>
          <p>フロントエンドをVue.jsで、バックエンドをRailsで構築しました。</p>
          <p class="p-last">環境をDockerで構築し、CircleCIで継続的インテグレーションを実施、最終はAWS FARGATEでデプロイしています。</p>
        </div>
        <Splide :options="options" v-if="isPcWidth" class="pc-splide">
          <SplideSlide v-for="(slide, i) in pcSlides" :key="i" class="pc-slides">
            <img :src="slide" alt="ポートフォリオのイメージ" class="pf1-pc-image">
          </SplideSlide>
        </Splide>
        <Splide :options="options" v-else class="sp-splide">
          <SplideSlide v-for="(slide, i) in spSlides" :key="i" class="sp-slides">
            <img :src="slide" alt="ポートフォリオのイメージ" class="pf1-sp-image">
          </SplideSlide>
        </Splide>
        <table class="pf1-table">
          <tr>
            <th>種類</th>
            <th>名前</th>
            <th>バージョン・URL</th>
          </tr>
          <tr>
            <td>フロント</td>
            <td>
              Vue.js<br>
              (Vue CLI)
            </td>
            <td>
              2.6.14<br>
              (4.5.13)
            </td>
          </tr>
          <tr>
            <td>バック</td>
            <td>
              Ruby on Rails<br>
              (Ruby)
            </td>
            <td>
              6.0.3.7<br>
              (2.7.2)
            </td>
          </tr>
          <tr>
            <td>
              テストフレームワーク
            </td>
            <td>
              Jest<br>
              Puppeteer<br>
              RSpec
            </td>
            <td>
              26.6.3<br>
              8.0.0<br>
              4.0.2
            </td>
          </tr>
          <tr>
            <td>環境構築</td>
            <td>
              Docker<br>
              (Node.js)<br>
              Docker Compose
            </td>
            <td>
              20.10.8<br>
              (14-slim)<br>
              3.8
            </td>
          </tr>
          <tr>
            <td>ソースコード管理</td>
            <td>Github</td>
            <td>
              <a href="https://github.com/t-kawamura1/lemon-sour-db-front">
                https://github.com/t-kawamura1/lemon-sour-db-front
                <fas
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></fas>
              </a>
              <br>
              <a href="https://github.com/t-kawamura1/lemon-sour-db-api">
                https://github.com/t-kawamura1/lemon-sour-db-api
                <fas
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></fas>
              </a>
            </td>
          </tr>
          <tr>
            <td>CIツール</td>
            <td>CircleCI</td>
            <td>2.1</td>
          </tr>
          <tr>
            <td>ホスティング</td>
            <td>AWS ECS/FARGATE</td>
            <td>
              <a href="https://lemonsourdb.net">
                フロント https://lemonsourdb.net
                <fas
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></fas>
              </a>
              <br>
              <a href="https://lsdb-back.work">
                バック https://lsdb-back.work
                <fas
                  class="pf1-table-link-icon"
                  icon="external-link-alt"
                ></fas>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </section>
    <section class="portfolio2" ref="portfolio2">
      <div class="pf2-title-box">
        <div class="pf2-title">T.KAWAMURA</div>
        <div class="pf2-title">ポートフォリオサイト</div>
      </div>
      <div class="pf2-container">
        <div class="pf2-image-item-wrapper">
          <div class="pf2-image-item">
            <div class="pf2-image-box">
              <img src="../assets/pfsite-overall.png" alt="ポートフォリオサイトのイメージ" class="pf2-image">
            </div>
            <p class="note">※ 画像は開発中の画面です。</p>
          </div>
        </div>
        <div class="pf2-text-item">
          <p>扱いに慣れるために、Vue.jsで初めて作成した静的サイト。</p>
          <p>シンプルで見やすいデザインを意識しました。</p>
          <p>規模の小さいサイトですが、学習目的でDockerを導入しています。</p>
          <p>この開発を通じてコンポーネント・CSS設計の重要性を学びました。</p>
          <p>開発過程についても、git-flowを意識したワークフローを取り入れています。</p>
          <p class="p-last">（2022年1月）Vue3にバージョンアップしました。</p>
          <table class="pf2-table">
            <tr>
              <th>種類</th>
              <th>名前</th>
              <th>バージョン・URL</th>
            </tr>
            <tr>
              <td>フロント</td>
              <td>
                Vue.js<br>
                (Vue CLI)
              </td>
              <td>
                3.0.0<br>
                (4.5.0)
              </td>
            </tr>
            <tr>
              <td>環境構築</td>
              <td>
                Docker<br>
                (Node.js)<br>
                Docker Compose
              </td>
              <td>
                20.10.5<br>
                (14.18.3-alpine)<br>
                3.8
              </td>
            </tr>
            <tr>
              <td>ソースコード管理</td>
              <td>Github</td>
              <td>
                <a href="https://github.com/t-kawamura1/portfolio-site-vue3">
                  https://github.com/t-kawamura1/portfolio-site-vue3
                  <fas
                    class="pf2-table-link-icon"
                    icon="external-link-alt"
                  ></fas>
                </a>
              </td>
            </tr>
            <tr>
              <td>ホスティング</td>
              <td>AWS S3 / CloudFront</td>
              <td>
                <a href="https://www.t-kawamura.com">
                  https://www.t-kawamura.com
                  <fas
                    class="pf2-table-link-icon"
                    icon="external-link-alt"
                  ></fas>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import SiteHeader from '@/components/shared/SiteHeader'
import ToTopButton from '@/components/shared/ToTopButton'
import '@splidejs/splide/dist/css/splide.min.css'

export default {
  components: {
    SiteHeader,
    ToTopButton,
  },
  setup() {
    let show = ref(false)
    let isPcWidth = ref(window.outerWidth > 768)
    const portfolio1 = ref(null)
    const portfolio2 = ref(null)
    const options = reactive({
      rewind: true,
      autoplay: true
    })
    const pcSlides = reactive([
      require('../assets/lsdb-pc-top.png'),
      require('../assets/lsdb-pc-sours-index.png'),
      require('../assets/lsdb-pc-sour.png'),
      require('../assets/lsdb-pc-calc.png'),
      require('../assets/lsdb-pc-calendar.png'),
      require('../assets/lsdb-pc-user.png'),
    ])
    const spSlides = reactive([
      require('../assets/lsdb-sp-top.png'),
      require('../assets/lsdb-sp-sours-index.png'),
      require('../assets/lsdb-sp-sour.png'),
      require('../assets/lsdb-sp-calc.png'),
      require('../assets/lsdb-sp-calendar.png'),
      require('../assets/lsdb-sp-user.png'),
    ])

    const scrollToAnchorPoint = (refName) => {
      let el
      switch (refName) {
        case 'Lemon Sour DB':
          el = portfolio1
          break
        case 'T.KAWAMURA':
          el = portfolio2
          break
      }
      el.value.scrollIntoView({ behavior: 'smooth'});
    }

    document.addEventListener.call(window, 'resize', () => {
      isPcWidth.value = (window.outerWidth > 768)
    })
    document.addEventListener.call(window, 'scroll', () => {
      show.value = (window.scrollY > 500);
    })

    return {
      show,
      portfolio1,
      portfolio2,
      options,
      pcSlides,
      spSlides,
      scrollToAnchorPoint,
      isPcWidth,
    }
  },
}
</script>


<style lang="scss" scoped>
.portfolio-detail {
  .button-fade-enter-active, .button-fade-leave-active {
    transition: opacity 0.5s;
  }
  .button-fade-leave-to {
    opacity: 0;
  }

  .portfolio-detail-header {
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
      width: 320px;
      .nav-list {
        display: flex;
        justify-content: space-between;
        padding: 0;
      }
    }
  }

  .to-top-button {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
  }

  .portfolio1 {
    padding: 150px 60px 100px;
    background-color: #f5f5f5;
    .pf1-title {
      display: inline-block;
      font-size: 3rem;
      color: #636363;
      letter-spacing: 2px;
      margin-bottom: 60px;
    }
    .pf1-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.8;
      .pf1-text-item {
        > p {
          text-align: center;
        }
        .p-last {
          margin-bottom: 30px;
        }
      }
      .pc-splide {
        width: 500px;
        height: 273px;
        margin-bottom: 40px;
        .pc-slides {
          .pf1-pc-image {
            width: 500px;
            height: 273px;
            border-radius: 10px;
          }
        }
      }
      .pf1-table {
        border-collapse: collapse;
        background-color: #f1f1f1;
        th, td {
          border: solid 1px #636363;
          padding: 0 5px;
          > a {
            &:hover {
              opacity: 0.7;
            }
            .pf1-table-link-icon {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

  .portfolio2 {
    padding: 150px 60px 90px;
    background-color: #777;
    .pf2-title-box {
      margin-bottom: 90px;
      .pf2-title {
        display: inline-block;
        font-size: 3rem;
        color: #fff;
        letter-spacing: 2px;
        &:last-child {
          margin-left: 20px;
          letter-spacing: 1px;
        }
      }
    }
    .pf2-container {
      display: flex;
      justify-content: space-between;
      .pf2-image-item-wrapper {
        width: 476px;
        height: 580px;
        .pf2-image-item {
          position: relative;
          width: 476px;
          height: 500px;
          border-right: solid 1px #555;
          border-left: solid 1px #555;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(#555, rgba(0, 0, 0, 0));
            width: 100%;
            height: 40px;
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(to top,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
            width: 100%;
            height: 40px;
          }
          .pf2-image-box {
            width: 474px;
            height: 500px;
            margin-bottom: 30px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
              display:none;
            }
            .pf2-image {
              width: 474px;
              height: 1580px;
              &:hover {
                cursor: row-resize;
              }
            }
          }
        }
      }
      .pf2-text-item {
        line-height: 2;
        color: #fff;
        margin-left: 30px;
        > p {
          text-align: left;
          letter-spacing: 1px;
        }
        .p-last {
          margin-bottom: 30px;
        }
        .pf2-table {
          border-collapse: collapse;
          background-color: #666;
          th, td {
            border: solid 1px #fff;
            padding: 0 5px;
            > a {
              color: #fff;
              &:hover {
                opacity: 0.7;
              }
              .pf2-table-link-icon {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .portfolio-detail {
    *:hover {
      opacity: 1;
    }

    .portfolio-detail-header {
      padding: 0 10px;
      height: 40px;
      .nav {
        width: 200px;
        height: 40px;
        .nav-list {
          padding: 0;
        }
      }
    }

    .portfolio1{
      padding: 90px 20px 60px;
      .pf1-title {
        font-size: 2rem;
        margin-bottom: 40px;
        letter-spacing: 1px;
      }
      .pf1-container {
        .pf1-text-item {
          font-size: 1.4rem;
          line-height: 1.8;
        }
        .sp-splide {
          width: 210px;
          height: 455px;
          margin-bottom: 20px;
          .sp-slides {
            .pf1-sp-image {
              width: 210px;
              height: 455px;
              border-radius: 10px;
            }
          }
        }
        .pf1-table {
          font-size: 1rem;
        }
      }
    }

    .portfolio2 {
      padding: 50px 10px;
      .pf2-title-box {
        margin-bottom: 30px;
        .pf2-title {
          display: block;
          font-size: 2rem;
          line-height: 1.5;
          &:last-child {
            margin-left: 0;
          }
        }
      }
      .pf2-container {
        flex-direction: column;
        align-items: center;
        font-size: 1.4rem;
        .pf2-image-item-wrapper {
          width: 318px;
          height: 400px;
          .pf2-image-item {
            width: 318px;
            height: 333px;
            &::before {
              height: 20px;
            }
            &::after {
              height: 20px;
            }
            .pf2-image-box {
              width: 316px;
              height: 333px;
              margin-bottom: 15px;
              overflow-y: scroll;
              -ms-overflow-style: none;
              scrollbar-width: none;
              &::-webkit-scrollbar {
                display:none;
              }
              .pf2-image {
                width: 316px;
                height: 1053px;
                &:hover {
                  cursor: row-resize;
                }
              }
            }
          }
        }
        .pf2-text-item {
          margin-left: 0;
          padding: 0 10px;
          line-height: 1.6;
          .pf2-table {
            font-size: 1rem;
            th, td {
              > a:hover {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
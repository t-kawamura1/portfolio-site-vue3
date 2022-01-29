<template>
  <div class="home" ref="home">
    <!-- <header class="home-header">
      <site-logo/>
      <nav class="nav">
        <ul class="nav-list" v-for="(name, index) in headerNameList" :key="index">
          <nav-list-item
            :nav-list-item-name="name"
            @scrollTo="scrollToAnchorPoint(name)"
          />
        </ul>
      </nav>
    </header> -->
    <site-header @scroll="scrollToAnchorPoint($event)">
    </site-header>
    <transition name="button-fade">
      <to-top-button
        v-if="show"
        @scroll="scrollToAnchorPoint('HOME')"
        class="to-top-button"
      />
    </transition>
    <section class="hero">
      <h1 class="title">T.KAWAMURA</h1>
      <p class="sub-title">Make the world efficient and fun.</p>
      <div class="hero-buttons-box">
        <button-dark
          button-text="Portfolio"
          @scroll="scrollToAnchorPoint('PORTFOLIO')"
        />
        <button-dark
          button-text="About me"
          @scroll="scrollToAnchorPoint('PROFILE')"
        />
      </div>
    </section>
    <section class="portfolio sec-fadein" ref="portfolio">
      <section-heading heading="PORTFOLIO"/>
      <div class="portfolio-container">
        <portfolio-item
          :portfolioImgSrc="portfolioImgSrc[0]"
          portfolio-title="Lemon Sour DB"
          portfolio-url="https://lemonsourdb.net"
          portfolio-text="
            おうち時間の飲み過ぎ防止に！飲んだレモンサワー（もしくは任意の度数）のアルコール量を計算できるアプリです。
            日毎の記録をカレンダーから確認することもできます。
            日々進化し、リリースされるレモンサワー。「あれって何だっけ？」となったときのために、データベース化してみました。
            今後も少しずつ機能を拡張予定！
          "
        />
        <portfolio-item
          :portfolioImgSrc="portfolioImgSrc[1]"
          portfolio-title="T.KAWAMURA ポートフォリオサイト"
          portfolio-url="https://www.t-kawamura.com"
          portfolio-text="
            このサイト自身です。Vue.jsで作成しました。
            「先の荒波をみつめて、なお突き進む覚悟」が背景テーマです。
            「成長を諦めた先に待つのは、ゆるやかな死」です。
            成長を続けていきましょう。
          "
        />
      </div>
    </section>
    <section class="skills sec-fadein" ref="skills">
      <section-heading heading="SKILLS"/>
      <div class="skills-container">
        <skills-item
          skill-title="SERVER-SIDE"
          :skillImgSrc="skillImgSrc[0]"
          skill-text="
            サーバーサイドの技術として、Ruby on Railsを学びました。
            Lemon Sour DB（以下、LSDB）では、Rails6をAPIサーバーとして活用しています。
            現在の仕事ではバックエンドがJava(Spring Boot)のため、そちらの学習に取り組んでいます。
          "
        />
        <skills-item
          skill-title="FRONT-END"
          :skillImgSrc="skillImgSrc[1]"
          skill-text="
            フロントエンドの技術として、Vue.js（2）を学びました。
            LSDBのフロントとして、またこのサイト自身もVue.jsを採用しています。
            現在の仕事ではAngularを使用しています。こちらもVueとはまた違ったおもしろさがありますね。
            今後はReactにも触れて、3大JSフレームワークを制覇するかと思案中です。
          "
        />
        <skills-item
          skill-title="INFRASTRUCTURE"
          :skillImgSrc="skillImgSrc[2]"
          skill-text="
            LSDB・当サイトともに、環境の構築にはDockerを用いています。
            LSDBの本番環境では、AWSのECS/FARGATEを用いてデプロイしました（個人開発ではコストがアホほど高いので、現在は停止中）。
            必要に応じて適切な環境を選択できるよう、各種技術に精通していきたいと考えています。
          "
        />
      </div>
    </section>
    <section class="stances sec-fadein" ref="stances">
      <section-heading heading="STANCES"/>
      <div class="stances-title">世の中を効率的に、かつ おもしろく</div>
      <div class="stances-container">
        <stances-item
          stance-title="効率"
          stance-text="
            効率化はすべての人の利益になります。人々を単純作業の煩わしさから解放して、
            より良い業務等の運用・改善のサイクルへと導くことができます。
            プログラマーの三大美徳の一つ「怠惰」に深く共感し、すべての物事において「効率」を追求していきます。
          "
        />
        <stances-item
          stance-title="おもしろさ"
          stance-text="
            世の中に革新や価値を届けることは「おもしろい」ことです。自分の仕事が世の中に少しでも影響を与えることができれば、
            それ以上のやりがいはありません。ワクワクします。その原動力になるためには、複雑な物事を解決する「技術力」が欠かせません。
            どのような需要や要望にも応える技術力を身につけていきます。
          "
        />
        <stances-figure-item/>
      </div>
    </section>
    <section class="profile sec-fadein" ref="profile">
      <section-heading heading="PROFILE"/>
      <div class="profile-container">
        <div class="profile-image-item">
          <img src="@/assets/my-image-2.jpg" alt="作成者のイメージ" class="my-image">
        </div>
        <div class="profile-item">
          <div class="my-name">河村 智之</div>
          <p class="profile-text">
            2022年現在、とある営業SaaSの自社開発企業に勤務。
            京都府出身。
            趣味はJリーグ観戦、ガンバ大阪サポーター。
            2021年3月、思うところたくさんあって、5年間の公務員生活にピリオドを打つ。
            世の中をもっと効率的に、かつおもしろいものにするために、エンジニアの道へ。
          </p>
        </div>
        <div class="external-link-item">
          <a href="https://github.com/t-kawamura1" class="github"><fab :icon="{ prefix: 'fab', iconName: 'github'}" /></a>
          <a href="https://twitter.com/kossari" class="twitter"><fab :icon="{ prefix: 'fab', iconName: 'twitter-square'}" /></a>
          <a href="https://itiiki.hatenablog.com/" class="hatena"><img src="../assets/hatena.svg" alt="はてなブログロゴ" class="hatena-logo"></a>
          <a href="https://www.wantedly.com/id/t_kawa/connections/impression" class="wantedly"><img src="../assets/wantedly.svg" alt="wantedlyロゴ" class="wantedly-logo"></a>
          <a href="https://qiita.com/t-kawamura1" class="qiita"><img src="../assets/qiita.png" alt="Qiitaロゴ" class="qiita-logo"></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import SiteHeader from '@/components/shared/SiteHeader'
import ToTopButton from '@/components/shared/ToTopButton'
import SectionHeading from '@/components/shared/SectionHeading'
import ButtonDark from '@/components/home-view/ButtonDark'
import PortfolioItem from '@/components/home-view/PortfolioItem'
import SkillsItem from '@/components/home-view/SkillsItem'
import StancesItem from '@/components/home-view/StancesItem'
import StancesFigureItem from '@/components/home-view/StancesFigureItem'

export default {
  components: {
    SiteHeader,
    ToTopButton,
    SectionHeading,
    ButtonDark,
    PortfolioItem,
    SkillsItem,
    StancesItem,
    StancesFigureItem,
  },
  setup() {
    const headerNameList = reactive([
      'portfolio',
      'skills',
      'stances',
      'profile'
    ]);
    let show = ref(false);
    const home = ref(null);
    const portfolio = ref(null);
    const skills = ref(null);
    const stances = ref(null);
    const profile = ref(null);
    const portfolioImgSrc = reactive([
      require('@/assets/lsdb-pc-top.png'),
      require('@/assets/pfsite-pc-top.png')
    ]);
    const skillImgSrc = reactive([
      require('@/assets/rails.svg'),
      require('@/assets/vue.svg'),
      require('@/assets/dockeraws.png')
    ]);

    const showSection = () => {
      let element = document.getElementsByClassName('sec-fadein');
      if (!element) return;
      let showTiming = 200;
      let scrollY = window.pageYOffset;
      let windowH = window.innerHeight;
      for (let i = 0; i < element.length; i++) {
        let elementClientRect = element[i].getBoundingClientRect();
        let elementY = scrollY + elementClientRect.top;
        if (scrollY + windowH - showTiming > elementY) {
          element[i].classList.add('scrollin');
        }
      }
    };
    const scrollToAnchorPoint = (refName) => {
      let el;
      switch (refName) {
        case 'HOME':
          el = home
          break
        case 'PORTFOLIO':
          el = portfolio
          break
        case 'SKILLS':
          el = skills
          break
        case 'STANCES':
          el = stances
          break
        case 'PROFILE':
          el = profile
          break
      }
      el.value.scrollIntoView({ behavior: 'smooth'});
    };

    document.addEventListener.call(window, 'scroll', showSection)
    document.addEventListener.call(window, 'scroll', () => {
      show.value = (window.scrollY > 500);
    })

    return {
      headerNameList,
      show,
      home,
      portfolio,
      skills,
      stances,
      profile,
      portfolioImgSrc,
      skillImgSrc,
      showSection,
      scrollToAnchorPoint,
    };
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: rgba(255, 255, 255, 0.7) url('../assets/home-bg.jpg') no-repeat fixed left bottom;
  background-size: cover;
  background-blend-mode: lighten;
  .button-fade-enter-active, .button-fade-leave-active {
    transition: opacity 0.5s;
  }
  .button-fade-leave-to {
    opacity: 0;
  }
  .sec-fadein {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.0s;
    &.scrollin {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .to-top-button {
    position: fixed;
    z-index: 9;
    bottom: 10px;
    right: 10px;
  }

  .hero {
    color: #636363;
    padding: 190px 60px 220px;
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
  }

  .portfolio {
    padding: 100px 60px;
    color: #fff;
    background-color: #777;
    p {
      text-align: left;
    }
    .portfolio-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  .skills {
    padding: 100px 60px;
    background-color: #f5f5f5;
    .skills-container {
      display: flex;
      justify-content: space-between;
    }
  }

  .stances {
    padding: 100px 60px;
    background-color: #777;
    color: #fff;
    .stances-title {
      font-size: 2.4rem;
      margin-bottom: 60px;
      letter-spacing: 1px;
    }
    .stances-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .profile {
    padding: 100px 60px 100px;
    color: #333;
    p {
      text-align: left;
    }
    .profile-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: #333;
      .profile-image-item {
        width: 40%;
        flex-grow: 1;
        position: relative;
        .my-image {
          width: 55%;
          border-radius: 50%;
        }
      }
      .profile-item {
        width: 60%;
        text-align: left;
        vertical-align: middle;
        flex-grow: 1;
        margin-bottom: 30px;
        .my-name {
          margin-bottom: 30px;
          font-size: 2.5rem;
        }
        .profile-text {
          line-height: 2;
        }
      }
      .external-link-item {
        display: flex;
        align-items: center;
        .github {
          font-size: 4.3rem;
          margin-right: 30px;
        }
        .twitter {
          font-size: 4.5rem;
          margin-right: 20px;
        }
        .hatena {
          margin-right: 5px;
          .hatena-logo {
            width: 60px;
            height: 60px;
          }
        }
        .wantedly {
          margin-right: 15px;
          .wantedly-logo {
            width: 60px;
            height: 60px;
          }
        }
        .qiita-logo {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    background: none;
    *:hover {
      opacity: 1;
    }

    .hero {
      background: none;
      padding: 200px 30px 60px;
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

    .portfolio {
      padding: 50px 30px 40px;
      .portfolio-container {
        flex-direction: column;
      }
    }

    .skills {
      padding: 50px 30px;
      background: none;
      .skills-container {
        flex-direction: column;
      }
    }

    .stances {
      padding: 50px 30px;
      .stances-title {
        display: none;
      }
      .stances-container {
        flex-direction: column;
      }
    }

    .profile {
      padding: 50px 30px;
      .profile-container {
        flex-direction: column;
        .profile-image-item {
          width: 100%;
          .my-image {
            margin-bottom: 30px;
          }
        }
        .profile-item {
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
          .my-name {
            font-size: 1.8rem;
            margin-bottom: 15px;
          }
          .profile-text{
            font-size: 1.4rem;
          }
        }
        .external-link-item {
          justify-content: space-evenly;
          width: 100%;
          & > * {
            margin: 0;
            width: 80%;
          }
        }
      }
    }
  }
}
</style>

<noscript>
  <style scoped>
    .fadein {
      opacity: 1;
      transform: translate(0);
    }
  </style>
</noscript>
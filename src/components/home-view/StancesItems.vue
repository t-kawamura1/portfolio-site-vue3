<template>
  <div class="stances-container">
    <div class="stances-wrapper">
      <div class="stances-title">
        世の中を
        <span class="text-highlight">効率的</span>
        に、かつ
        <span class="text-highlight">おもしろく</span>
      </div>
      <div class="stances-item-wrapper">
        <div class="stances-item1">
          <div class="stance-title text-highlight">効率</div>
          <p class="stance-text">
            効率化を是とします。それはすべての人の利益になり、単純作業の煩わしさから解放してくれるからです。
            <br>社会をより良くしていくために、人は俯瞰的な視点から考える仕事にシフトしていかなくてはなりません。
            <br>プログラマーの三大美徳の一つ「怠惰」に深く共感し、すべての物事において「効率」を追求していきます。
          </p>
        </div>
      </div>
      <div class="stances-item-wrapper">
        <div class="stances-item2">
          <div class="stance-title text-highlight">おもしろさ</div>
          <p class="stance-text">
            世の中に革新や価値を届ける「おもしろさ」を追求していきます。
            <br>自分の仕事が世の中に少しでも影響を与えることができれば、それ以上のやりがいはないでしょう。
            <br>そのためには、複雑な物事を解決する「技術力」が欠かせません。
            <br>あらゆる需要・要望に応える技術力を身につけていきます。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from "vue"

export default {
  setup() {
    const addSlideIn = () => {
      let windowH = window.innerHeight
      let item1 = document.querySelector('.stances-item1')
      let item2 = document.querySelector('.stances-item2')
      let item1Top = item1.getBoundingClientRect().top
      let item2Top = item2.getBoundingClientRect().top
      let showTiming = 200;
      if (windowH > item1Top + showTiming) {
        item1.classList.add('slide-in')
      }
      if (windowH > item2Top + showTiming) {
        item2.classList.add('slide-in')
      }
    }
    document.addEventListener.call(window, 'scroll', addSlideIn)

    return {
      addSlideIn,
    }
  }
}
</script>

<style lang="scss" scoped>
.stances-container {
  width: 100%;
  height: 900px;
  .stances-wrapper {
    width: 100%;
    height: 300px;
    .stances-title {
      font-size: 2.2rem;
      margin-bottom: 150px;
      letter-spacing: 1px;
      // text-align: left;
    }
    .stances-item-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      margin-bottom: 60px;
      .stances-item1 {
        position: absolute;
        top: 0;
        left: 50px;
        transform: translateX(-100%);
        opacity: 0;
        background-color: white;
        padding: 30px 60px;
        width: 900px;
        box-shadow: 4px 4px 4px #dcdcdc;
        transition: all 0.8s;
        &:hover {
          box-shadow: 24px 24px 24px #dcdcdc;
        }
        &.slide-in {
          opacity: 1;
          transform: translateX(0%);
        }
        .stance-title {
          font-size: 2rem;
          margin-bottom: 30px;
          text-align: left;
        }
        .stance-text {
          line-height: 2;
          font-size: 1.5rem;
          text-align: left;
        }
      }

      .stances-item2 {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
        transform: translateX(100%);
        background-color: white;
        padding: 30px 60px;
        width: 900px;
        box-shadow: 4px 4px 4px #dcdcdc;
        transition: all 0.8s;
        &:hover {
          box-shadow: 24px 24px 24px #dcdcdc;
        }
        &.slide-in {
          opacity: 1;
          transform: translateX(0%);
        }
        .stance-title {
          font-size: 2rem;
          margin-bottom: 30px;
          text-align: left;
        }
        .stance-text {
          line-height: 2;
          font-size: 1.5rem;
          text-align: left;
        }
      }
    }
  }
  .text-highlight {
    color: #ff840a;
  }
}

@media (max-width: 768px) {
  .stances-container {
    flex-direction: column;
      .stances-item {
      width: 100%;
      .stance-title {
        font-size: 2rem;
        margin-bottom: 15px;
      }
      .stance-text {
        margin-bottom: 50px;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
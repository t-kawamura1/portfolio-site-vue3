<template>
  <div class="stances-container">
    <div class="stances-item" v-for="(title, i) in stanceTitles" :key="i">
      <div class="stance-title">{{ title }}</div>
      <p class="stance-text">{{ stanceTexts[i] }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"

export default {
  setup() {
    const stanceTitles = reactive([
      '効率',
      'おもしろさ'
    ])
    const stanceTexts = reactive([
      '効率化はすべての人の利益になります。人々を単純作業の煩わしさから解放して、より良い業務等の運用・改善のサイクルへと導くことができます。プログラマーの三大美徳の一つ「怠惰」に深く共感し、すべての物事において「効率」を追求していきます。',
      '世の中に革新や価値を届けることは「おもしろい」ことです。自分の仕事が世の中に少しでも影響を与えることができれば、それ以上のやりがいはありません。ワクワクします。その原動力になるためには、複雑な物事を解決する「技術力」が欠かせません。どのような需要や要望にも応える技術力を身につけていきます。'
    ])

    return {
      stanceTitles,
      stanceTexts
    }
  }
}
</script>

<style lang="scss" scoped>
.stances-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .stances-item {
    width: 40%;
    .stance-title {
      font-size: 2rem;
      margin-bottom: 30px;
    }
    .stance-text {
      line-height: 2;
      text-align: left;
      margin-bottom: 60px;
    }
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
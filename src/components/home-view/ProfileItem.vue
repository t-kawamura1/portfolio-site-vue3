<template>
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
  </div>
</template>

<script>
export default {
  setup(_, context) {
    const onScroll = (name) => {
      context.emit('scroll', name)
    }

    return {
      onScroll
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
      font-size: 2rem;
    }
    .profile-text {
      line-height: 2;
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 768px) {
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
  }
}
</style>
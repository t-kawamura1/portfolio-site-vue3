<template>
  <div class="profile-container">
    <div class="profile-wrapper">
      <div class="profile-image-item">
        <img src="@/assets/my-image-2.jpg" alt="作成者のイメージ" class="my-image">
      </div>
      <div class="profile-item">
        <div class="my-name">河村 智之</div>
        <p>2022年現在、とある営業SaaSの自社開発企業に勤務。</p>
        <p>京都府出身、大阪在住</p>
        <p>趣味はJリーグ観戦。ガンバ大阪サポーター。</p>
        <p>2021年3月、自らの変革を求め、5年間の公務員生活にピリオドを打つ。</p>
        <p>世の中をもっと効率的に、かつおもしろいものにするために、エンジニアの道へ。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-container {
  padding: 0 60px;
  margin-bottom: 90px;
  .profile-wrapper {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 45px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    .profile-image-item {
      margin-right: 60px;
      .my-image {
        width: 250px;
        border-radius: 50%;
      }
    }
    .profile-item {
      text-align: left;
      padding-top: 30px;
      .my-name {
        margin-bottom: 30px;
        font-size: 2rem;
      }
      > p {
        line-height: 2.2;
        font-size: 1.5rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .profile-container {
    padding: 0;
    margin-bottom: 30px;
    .profile-wrapper {
      padding: 0;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .profile-image-item {
        margin: 0 0 30px 0;
        .my-image {
          width: 200px;
          border-radius: 50%;
        }
      }
      .profile-item {
        padding-top: 0px;
        .my-name {
          text-align: center;
          margin-bottom: 30px;
          font-size: 1.8rem;
        }
        > p {
          line-height: 2;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
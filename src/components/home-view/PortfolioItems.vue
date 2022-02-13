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
export default {}
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
    .portfolio-item1 {
      margin-bottom: 100px;
      .site-image1 {
        width: 300px;
      }
      .text-box1 {
        width: 200px;
        height: 60px;
        top: calc(100% - 30px);
        left: calc(50% - 30px);
        .portfolio-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .portfolio-link {
          font-size: 1.2rem;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .portfolio-item2 {
      .site-image2 {
        width: 300px;
      }
      .text-box2 {
        width: 300px;
        height: 60px;
        top: calc(100% - 30px);
        left: 10%;
        .portfolio-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .portfolio-link {
          font-size: 1.2rem;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
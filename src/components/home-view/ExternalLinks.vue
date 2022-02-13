<template>
  <div class="links-container">
    <div class="links-wrapper">
      <a href="https://github.com/t-kawamura1" class="github">
        <fab :icon="{ prefix: 'fab', iconName: 'github'}" class="github-logo"/>
      </a>
      <a href="https://twitter.com/kossari" class="twitter">
        <fab :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="twitter-logo"/>
      </a>
      <a href="https://itiiki.hatenablog.com/" class="hatena">
        <img src="@/assets/hatena.svg.png" alt="はてなブログロゴ" class="hatena-logo">
      </a>
      <a href="https://www.wantedly.com/id/t_kawa" class="wantedly">
        <img src="@/assets/wantedly.svg" alt="wantedlyロゴ" class="wantedly-logo">
      </a>
      <a href="https://qiita.com/t-kawamura1" class="qiita">
        <img src="@/assets/qiita.png" alt="Qiitaロゴ" class="qiita-logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.links-container {
  .links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > * {
      margin-bottom: 9px;
    }
    .github {
      padding: 4px 3px;
      .github-logo {
        font-size: 3rem;
        transition: all 0.2s;
        &:hover {
          font-size: 3.9rem;
        }
      }
    }
    .twitter {
      padding: 6px 3px;
      .twitter-logo {
        font-size: 3.2rem;
        transition: all 0.2s;
        &:hover {
          font-size: 4rem;
        }
      }
    }
    .hatena {
      padding: 3px 3px 0 0;
      .hatena-logo {
        width: 28px;
        height: 28px;
        transition: all 0.2s;
        &:hover {
          width: 35px;
          height: 35px;
        }
      }
    }
    .wantedly {
      .wantedly-logo {
        width: 33px;
        height: 33px;
        transition: all 0.2s;
        &:hover {
          width: 40px;
          height: 40px;
        }
      }
    }
    .qiita {
      padding-right: 3px;
      .qiita-logo {
        width: 27px;
        height: 27px;
        transition: all 0.2s;
        &:hover {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .links-container {
    .links-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      > * {
        margin: 0 9px 0 0;
      }
      .github {
        padding: 4px 3px;
        .github-logo {
          font-size: 3rem;
          transition: all 0.2s;
          &:hover {
            font-size: 3.9rem;
          }
        }
      }
      .twitter {
        padding: 6px 3px;
        .twitter-logo {
          font-size: 3.2rem;
          transition: all 0.2s;
          &:hover {
            font-size: 4rem;
          }
        }
      }
      .hatena {
        padding: 3px 3px 0 0;
        .hatena-logo {
          width: 28px;
          height: 28px;
          transition: all 0.2s;
          &:hover {
            width: 35px;
            height: 35px;
          }
        }
      }
      .wantedly {
        .wantedly-logo {
          width: 33px;
          height: 33px;
          transition: all 0.2s;
          &:hover {
            width: 40px;
            height: 40px;
          }
        }
      }
      .qiita {
        padding-right: 3px;
        .qiita-logo {
          width: 27px;
          height: 27px;
          transition: all 0.2s;
          &:hover {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
}
</style>
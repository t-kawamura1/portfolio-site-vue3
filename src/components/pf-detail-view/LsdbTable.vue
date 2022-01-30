<template>
  <table class="lsdb-table">
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
            class="lsdb-table-link-icon"
            icon="external-link-alt"
          ></fas>
        </a>
        <br>
        <a href="https://github.com/t-kawamura1/lemon-sour-db-api">
          https://github.com/t-kawamura1/lemon-sour-db-api
          <fas
            class="lsdb-table-link-icon"
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
            class="lsdb-table-link-icon"
            icon="external-link-alt"
          ></fas>
        </a>
        <br>
        <a href="https://lsdb-back.work">
          バック https://lsdb-back.work
          <fas
            class="lsdb-table-link-icon"
            icon="external-link-alt"
          ></fas>
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.lsdb-table {
  border-collapse: collapse;
  background-color: #f1f1f1;
  th, td {
    border: solid 1px #636363;
    padding: 0 5px;
    > a {
      &:hover {
        opacity: 0.7;
      }
      .lsdb-table-link-icon {
        margin-left: 5px;
      }
    }
  }
}

@media (max-width: 768px) {
  .lsdb-table {
    font-size: 1rem;
  }
}
</style>
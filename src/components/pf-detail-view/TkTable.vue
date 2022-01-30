<template>
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

@media (max-width: 768px) {
  .pf2-table {
    font-size: 1rem;
    th, td {
      > a:hover {
        opacity: 1;
      }
    }
  }
}
</style>
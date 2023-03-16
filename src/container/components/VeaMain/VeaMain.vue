<template>
  <div class="vea-main">
    <section>
      <VeaRouterView />
    </section>

    <div class="fixed-footer">
      <Vea-footer />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.vea-main {
  padding: 20px;

  section {
    //border: 3px solid blue;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    height: calc(100vh - 160px);
  }

  .fixed-footer {
    background: #fff;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      height: 1px;
      width: 100%;
      background: green;
    }

    //border-top: 1px dashed green;
  }
}
</style>

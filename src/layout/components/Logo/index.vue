<template>
  <div class="logo">
    <img src="../../../../public/vite.svg" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  height: 60px;
  width: 100%;
  will-change: filter;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo img:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script lang="ts" setup></script>

<template>
  <div class="app-header app-justify-between">
    <img class="app-py-4 app-px-4 app-header__logo" src="../assets/logo.svg" alt="wallet-logo" />
    <div class="app-align-center">
      <span>Olá, <b>Usuário</b></span>
      <img src="../assets/avatar.png" alt="avatar" class="app-ml-1" />
    </div>
  </div>
</template>

<style lang="scss">
.app-header__logo {
  border-radius: 0 0 30px 30px;
  background-color: var(--app-color-primary-base);
  width: 150px;
  box-sizing: content-box;
}

.app-header {
  width: 1024px;
  margin: 0 auto;
}
</style>

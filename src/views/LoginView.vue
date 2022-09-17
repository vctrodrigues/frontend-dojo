<script lang="ts" setup></script>

<template>
  <main class="app-main">
    <div class="app-main__column--left"></div>
    <div class="app-main__column--right">
      <div class="app-main__input">
        <input type="text" class="app-main__login" placeholder="digite seu e-mail" />
        <input type="text" class="app-main__password" placeholder="digite sua senha" />
        <button></button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.app-main {
  display: flex;
  justify-content: space-between;
  background-color: #e5e5e5;
}

.app-main__column--left {
  display: flex;
}

.app-main__column--right {
  display: flex;
}

.app-main__login {
  background-color: #645781;
  border-radius: 3px;
}

.app-main__password {
  background-color: #645781;
  border-radius: 3px;
}
</style>

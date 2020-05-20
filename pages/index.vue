<template>
  <div class="container">
    <span v-show="errors.name" class="error">{{ errors.name }}</span>
    <span>名前 : <input v-model="forms.name" type="text"/></span>
    <br />
    <span v-show="errors.email" class="error">{{ errors.email }}</span>
    <span>メールアドレス : <input v-model="forms.email" type="text"/></span>
    <br />
  </div>
</template>

<script lang="ts">
import useInputHandler from '~/handler/InputHandler'
export default {
  setup() {
    return { ...useInputHandler() }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.error {
  color: red;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

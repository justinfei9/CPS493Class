<script setup lang="ts">
import { useLogin } from '@/models/users'
const logins = useLogin()
function googleLogin() {
  logins.googleLogin()
}
</script>

<template>
  <a class="button is-primary">
    <strong>Sign up</strong>
  </a>
  <a class="button is-light" @click.prevent="googleLogin"
    ><i class="icon">
      <image src="https://img.icons8.com/color/48/000000/google-logo.png" />
    </i>
    Google Log in
  </a>
</template>

<style scoped></style>

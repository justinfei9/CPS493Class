<script setup lang="ts">
import { refSession, useLogin } from '@/models/users'
const logins = useLogin()
function googleLogin() {
  logins.googleLogin()
}
const session = refSession()
</script>
<template>
  <a class="button is-primary">
    <strong>Sign up</strong>
  </a>
  <a class="button is-light" @click.prevent="googleLogin" v-if="!session.user">
    <i class="icon">
      <img
        src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
        alt="Google Logo"
        width="20"
      />
    </i>
    Google Log in
  </a>
  <div v-if="session.user" class="user-info">
    <img :src="session.user.image" alt="User Photo" width="50" />
    <h4>
      {{ session.user.firstName }}
      {{ session.user.lastName }}
    </h4>
    <i>{{ session.user.email }}</i>
    <a @click.prevent="logins.logout"> Log out </a>
  </div>
</template>
<style scoped>
.user-info {
  display: flex;
  align-items: center;
}
.user-info img {
  border-radius: 50%;
  margin-right: 1rem;
}
</style>

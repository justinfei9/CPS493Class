<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import FlyoutPanel from '@/components/FlyoutPanel.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import loginBadge from './loginBadge.vue'
const isOpen = ref(false)
const isCartOpen = ref(false)
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <RouterLink to="/about" class="navbar-item">About</RouterLink>
          <RouterLink to="/products" class="navbar-item"> Shop </RouterLink>

          <a class="navbar-item"> Home </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <RouterLink to="/about" class="navbar-item"> About </RouterLink>
              <RouterLink to="/jobs" class="navbar-item" active-class="is-selected">
                Jobs
              </RouterLink>
              <RouterLink to="/contact" class="navbar-item"> Contact </RouterLink>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <loginBadge />
              <button
                class="button is-warning is-light is-active"
                :class="{ 'is-focused': isCartOpen }"
                @click="isCartOpen = !isCartOpen"
              >
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span> </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <FlyoutPanel :is-open="isCartOpen">
    <ShoppingCart />
  </FlyoutPanel>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid blue;
}
</style>

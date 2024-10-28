<script setup lang="ts">
import { refCart, count, total } from '@/models/shoppingCart'

const cart = refCart()
</script>

<template>
  <div class="Cart">
    <h1>Shopping Cart</h1>
    <div v-if="cart.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.product.id">
        <div>{{ item.product.title }}</div>
        <div>{{ item.product.price }}</div>
        <div>{{ item.quantity }}</div>
      </div>
      <p>Total: {{ count }} items = ${{ total }}</p>
    </div>
  </div>
</template>

<style scoped>
.cart {
  padding: 2rem;
}
</style>

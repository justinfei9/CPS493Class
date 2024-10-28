<script setup lang="ts">
import { addToCart } from '@/models/shoppingCart' // Adjust the path accordingly
import type { Product } from '@/models/products'

const props = defineProps<{
  product: Product
}>()

const { product } = props
</script>

<template>
  <div class="box">
    <div class="box-image">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>
    <div class="box-content">
      <h3>{{ product.title }}</h3>
      <i>{{ product.brand }}</i>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <button class="button is-success" @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
i {
  color: #888;
}
.price {
  font-size: 2rem;
  font-weight: bold;
  float: right;
  color: #361a00;
}
</style>

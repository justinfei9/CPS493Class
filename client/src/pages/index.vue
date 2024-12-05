<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { getGoogleContacts, getGooglePhotos, refSession } from '@/models/users'

const sessiion = refSession()
const contacts = ref([])
async function getContacts() {
  const result = await getGoogleContacts()
  contacts.value = result.connections
}

const photos = ref([])

async function getPhotos() {
  photos.value = await getGooglePhotos()
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>Welcome to my Vue App</p>

    <button class="button is-warning" :disabled="!sessiion.token" @click="getContacts">
      Get Google Contacts
    </button>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <img :src="contact.photos[0].url" alt="Contact Photo" width="50" />
        <b>{{ contact.names[0].displayName }}</b>
        <div v-for="number in contact.phoneNumbers" :key="number.value">
          <i>{{ number.value }}</i>
        </div>
      </li>
    </ul>
  </main>
</template>

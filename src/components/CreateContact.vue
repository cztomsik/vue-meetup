<template>
  <form @submit.prevent="save()">
    <h3 class="mb-4">Create contact</h3>

    <ContactForm :contact="contact" />

    <button class="btn btn-primary">Create</button>
    <a href="/" class="btn btn-link">Cancel</a>
  </form>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
  name: 'CreateContact',
  components: {
    ContactForm
  },
  data() {
    return {
      contact: {}
    }
  },
  methods: {
    async save() {
      await fetch('https://jsonplaceholder.typicode.com/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.contact) })

      this.$router.push({ name: 'listing' })
    }
  }
}
</script>

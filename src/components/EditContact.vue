<template>
  <form>
    <h3 class="mb-4">Edit contact</h3>

    <ContactForm :contact="contact" />

    <button class="btn btn-primary" @click.prevent="update()">Update</button>
    <a href="/" class="btn btn-link">Cancel</a>
  </form>
</template>

<script>
import ContactForm from './ContactForm.vue'
import contacts from './contacts.json'

export default {
  name: 'EditContact',
  components: {
    ContactForm
  },
  data() {
    const { id } = this.$route.params
    const contact = contacts.find(c => c.id === id)

    return { contact }
  },
  methods: {
    update() {
      // just redirect for now
      this.$router.push({ name: 'listing' })
    }
  }
}
</script>

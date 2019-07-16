<template>
  <form @submit.prevent="update()">
    <h3 class="mb-4">Edit contact</h3>

    <ContactForm :contact="contact" />

    <button class="btn btn-primary">Update</button>
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

    return { contact: {} }
  },
  created() {
    this.fetchContact()
  },
  methods: {
    async fetchContact() {
      const { id } = this.$route.params
      this.contact = await fetch('http://localhost:3000/contacts/' + id).then(res => res.json())
    },

    async update() {
      const { id } = this.$route.params
      await fetch('http://localhost:3000/contacts/' + id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.contact) })

      this.$router.push({ name: 'listing' })
    }
  }
}
</script>

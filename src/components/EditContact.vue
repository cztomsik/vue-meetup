<template>
  <form>
    <h3 class="mb-4">Edit contact</h3>

    <ContactForm />

    <button class="btn btn-primary">Update</button>
    <a href="/" class="btn btn-link">Cancel</a>
  </form>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
  name: 'EditContact',
  components: {
    ContactForm
  }
}
</script>

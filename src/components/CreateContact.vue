<template>
  <form>
    <h3 class="mb-4">Create contact</h3>

    <ContactForm />

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
  }
}
</script>

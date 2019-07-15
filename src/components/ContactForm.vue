<template>
  <div>
    <div class="form-group">
      <label class="control-label">Name</label>
      <input class="form-control" v-model="contact.name">
    </div>

    <div class="form-group">
      <label class="control-label">E-mail</label>
      <input class="form-control" v-model="contact.email">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    contact: Object
  }
}
</script>
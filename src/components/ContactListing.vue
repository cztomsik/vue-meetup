<template>
  <div>
    <header>
      <router-link :to="{ name: 'create' }" class="btn btn-primary float-right">Create new</router-link>
      <h3>Contact listing</h3>
    </header>

    <table class="table mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for=" c in contacts ">
          <td><router-link :to=" { name: 'edit', params: { id: c.id } } ">{{ c.name }}</router-link></td>
          <td>{{ c.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import contacts from './contacts.json'

export default {
  name: 'ContactListing',
  data() {
    return { contacts: [] }
  },
  created() {
    this.fetchContacts()
  },
  methods: {
    async fetchContacts() {
      this.contacts = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    }
  }
}
</script>
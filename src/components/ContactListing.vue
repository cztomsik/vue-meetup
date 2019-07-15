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
        <tr>
          <td><router-link :to=" { name: 'edit', params: { id: 1 } } ">John Doe</router-link></td>
          <td>john@doe.com</td>
        </tr>
        <tr>
          <td><router-link :to=" { name: 'edit', params: { id: 2 } } ">Joe Bloggs</router-link></td>
          <td>joe@bloggs.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

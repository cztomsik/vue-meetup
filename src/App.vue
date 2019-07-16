<template>
  <div id="app" class="container">
    <h1>Contacts App</h1>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import 'https://unpkg.com/bootstrap@4.3.1/dist/css/bootstrap.min.css';

h1 {
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}
</style>

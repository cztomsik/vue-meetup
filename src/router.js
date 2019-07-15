import Vue from 'vue'
import Router from 'vue-router'
import ContactListing from './components/ContactListing.vue'
import CreateContact from './components/CreateContact.vue'
import EditContact from './components/EditContact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listing',
      component: ContactListing
    },
    {
      path: '/new',
      name: 'create',
      component: CreateContact
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditContact
    },
  ]
})

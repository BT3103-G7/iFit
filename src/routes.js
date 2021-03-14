// Import the components you want to define routes for.
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
]
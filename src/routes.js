// Import the components you want to define routes for.
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Overview from './components/Overview.vue'
import Leaderboard from './components/Leaderboard.vue'
import Locations from './components/Map.vue'
import Schedule from './components/Schedule.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import InputActivity from './components/InputActivity.vue'
import InputClass from './components/InputClass.vue'
import CalsOut from './components/CalsOut.vue'
import DenyAccess from './components/DenyAccess.vue'
import Profile from './components/Profile.vue'
import InputCalories from './components/InputCalories.vue'

export default [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/overview', component: Overview, meta: { authRequired: true } },
  { path: '/members', component: Leaderboard, meta: { authRequired: true } },
  { path: '/locations', component: Locations },
  { path: '/schedule', component: Schedule },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/calsout', component: CalsOut },
  { path: '/inputactivity', component: InputActivity },
  { path: '/inputclass', component: InputClass },
  { path: '/denyaccess', component: DenyAccess },
  { path: '/profile', component: Profile },
  { path: '/inputcalories', component: InputCalories }
]
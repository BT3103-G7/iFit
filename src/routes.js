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

export default [
  {
    path: '/', component: Home, meta: {
      title: 'Home'
    }
  },
  {
    path: '/login', component: Login, meta: {
      title: 'Login'
    }
  },
  {
    path: '/signup', component: SignUp, meta: {
      title: 'Sign Up'
    }
  },
  {
    path: '/overview', component: Overview, meta: {
      authRequired: true,
      title: 'Overview'
    }
  },
  {
    path: '/members', component: Leaderboard, meta: {
      authRequired: true,
      title: 'Members'
    }
  },
  {
    path: '/locations', component: Locations, meta: {
      title: 'Locations'
    }
  },
  {
    path: '/schedule', component: Schedule, meta: {
      title: 'Schedule'
    }
  },
  {
    path: '/about', component: About, meta: {
      title: 'About Us'
    }
  },
  {
    path: '/contact', component: Contact, meta: {
      title: 'Contact Us'
    }
  },
  {
    path: '/calsout', component: CalsOut, meta: {
      title: 'Input Food'
    }
  },
  {
    path: '/inputactivity', component: InputActivity, meta: {
      title: 'Input Activity'
    }
  },
  {
    path: '/inputclass', component: InputClass,
    meta: {
      title: 'Input Class'
    }
  },
  {
    path: '/denyaccess', component: DenyAccess, meta: {
      title: 'Denied Access'
    }
  },
  {
    path: '/profile', component: Profile, meta: {
      title: 'My Profile'
    }
  }
]

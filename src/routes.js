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
import VerifyAccount from './components/VerifyAccount.vue'

export default [
  {
    path: '/', component: Home, meta: {
      title: 'Home',
      header: 1
    }
  },
  {
    path: '/login', component: Login, meta: {
      title: 'Login',
      header: 1
    }
  },
  {
    path: '/signup', component: SignUp, meta: {
      title: 'Sign Up',
      header: 1
    }
  },
  {
    path: '/overview', component: Overview, meta: {
      authRequired: true,
      title: 'Overview',
      header: 1
    }
  },
  {
    path: '/members', component: Leaderboard, meta: {
      authRequired: true,
      title: 'Members',
      header: 1
    }
  },
  {
    path: '/locations', component: Locations, meta: {
      title: 'Locations',
      header: 1
    }
  },
  {
    path: '/schedule', component: Schedule, meta: {
      title: 'Schedule',
      header: 1
    }
  },
  {
    path: '/about', component: About, meta: {
      title: 'About Us',
      header: 1
    }
  },
  {
    path: '/contact', component: Contact, meta: {
      title: 'Contact Us',
      header: 1
    }
  },
  {
    path: '/calsout', component: CalsOut, meta: {
      title: 'Input Food',
      header: 1
    }
  },
  {
    path: '/inputactivity', component: InputActivity, meta: {
      title: 'Input Activity',
      header: 1
    }
  },
  {
    path: '/inputclass', component: InputClass,
    meta: {
      title: 'Input Class',
      header: 1
    }
  },
  {
    path: '/denyaccess', component: DenyAccess, meta: {
      title: 'Denied Access',
      header: 1
    }
  },
  {
    path: '/profile', component: Profile, meta: {
      title: 'My Profile',
      header: 1
    }
  },
  {
    path: '/verify', component: VerifyAccount, meta: {
      title: 'Verify Account',
      header: 2
    }
  }
]

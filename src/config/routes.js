import auth from '../utils/auth.js'
import App from '../app'
import Logout from '../pages/components/login/Logout'
import About from '../pages/components/login/About'
import Login from '../pages/components/login/Login'
import User from '../pages/components/login/User'
import Dashboard from '../pages/components/login/Dashboard'
import Landing from '../pages/components/login/Landing'
import PageOne from '../pages/components/login/PageOne'
import PageTwo from '../pages/components/login/PageTwo'

function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToDashboard(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/')
  }
}

export default {
  component: App,
  childRoutes: [
    { path: '/logout',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, Logout)
        })
      }
    },
    { path: '/about',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, About)
        })
      }
    },

    { onEnter: redirectToDashboard,
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/login',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, Login)
            })
          }
        }
        // ...
      ]
    },

    { onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share the dashboard UI
        { path: '/user/:id',
          getComponent: (location, cb) => {
            require.ensure([], (require) => {
              cb(null, User)
            })
          }
        }
        // ...
      ]
    },

    { path: '/',
      getComponent: (location, cb) => {
        // Share the path
        // Dynamically load the correct component
        if (auth.loggedIn()) {
          return require.ensure([], (require) => {
            cb(null, Dashboard)
          })
        }
        return require.ensure([], (require) => {
          cb(null, Landing)
        })
      },
      indexRoute: {
        getComponent: (location, cb) => {
          // Only load if we're logged in
          if (auth.loggedIn()) {
            return require.ensure([], (require) => {
              cb(null, PageOne)
            })
          }
          return cb()
        }
      },
      childRoutes: [
        { onEnter: redirectToLogin,
          childRoutes: [
            // Protected nested routes for the dashboard
            { path: '/page2',
              getComponent: (location, cb) => {
                require.ensure([], (require) => {
                  cb(null, PageTwo)
                })
              }
            }
            // ...
          ]
        }
      ]
    }

  ]
}

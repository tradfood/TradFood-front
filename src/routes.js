import WelcomeComponent from 'components/Welcome'
import NotFoundComponent from 'components/NotFound'
import AboutComponent from 'components/About'
import CityComponent from 'components/City'
import RecipeComponent from 'components/Recipe'

export default [
  {
    path: '/',
    component: WelcomeComponent
  },
  {
    path: '*',
    component: NotFoundComponent,
    name: '404'
  },
  {
    path: '/a-propos',
    component: AboutComponent
  },
  {
    path: '/:city',
    component: CityComponent,
    name: 'city'
  },
  {
    path: '/:city/:recipe',
    component: RecipeComponent,
    name: 'recipe'
  }
]

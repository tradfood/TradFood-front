import WelcomeComponent from 'components/Welcome'
import AboutComponent from 'components/About'
import CityComponent from 'components/City'
import RecipeComponent from 'components/Recipe'

export default [
  {
    path: '/',
    component: WelcomeComponent
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

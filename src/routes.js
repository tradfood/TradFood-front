import WelcomeComponent from 'components/Welcome'
import NotFoundComponent from 'components/NotFound'
import AboutComponent from 'components/About'
import CityComponent from 'components/City'
import RecipeComponent from 'components/Recipe'

export default [
  {
    path: '/',
    component: WelcomeComponent,
    name: 'home'
  },
  {
    path: '*',
    component: NotFoundComponent,
    name: '404'
  },
  {
    path: '/a-propos',
    component: AboutComponent,
    name: 'about',
    meta: {
      title: 'A Propos'
    }
  },
  {
    path: '/:city',
    component: CityComponent,
    name: 'city',
    meta: {
      title: 'Ville'
    }
  },
  {
    path: '/:city/:recipe',
    component: RecipeComponent,
    name: 'recipe',
    meta: {
      title: 'Recette'
    }
  }
]

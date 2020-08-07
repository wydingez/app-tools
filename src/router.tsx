import Page1 from './pages/page1'
import Page2 from './pages/page2'

export default function () {
  return [
    {
      url: '/page1',
      component: Page1,
      name: 'Page1'
    }, {
      url: '/page2',
      component: Page2,
      name: 'Page2'
    }
  ]
}
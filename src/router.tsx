import JsonUtil from './pages/json-util'
import Page2 from './pages/page2'

export default function () {
  return [
    {
      url: '/json-util',
      component: JsonUtil,
      name: 'JSON'
    }, {
      url: '/page2',
      component: Page2,
      name: 'Page2'
    }
  ]
}
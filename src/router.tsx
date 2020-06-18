import * as path from 'path'
import {promises as fs} from 'fs';

import Page1 from './pages/page1'
import Page2 from './pages/page2'

export default function () {
  console.log(111, fs, path)
  // fs.readdirSync(path.resolve(__dirname, './pages')).forEach(file => {
  //   console.log(file)
  // })

  // let dirs = await fs.readdirSync(path.resolve(__dirname, './pages'))
  // console.log(path.resolve(__dirname, './pages'), dirs)
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
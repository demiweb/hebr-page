import 'core-js/features/symbol'
import 'core-js/features/array/from'
import 'core-js/features/promise'
import 'core-js/features/object/assign'
import 'core-js/features/object/values'
import 'intersection-observer'
import './lib/polyfill'
// import regeneratorRuntime from 'regenerator-runtime'

import classNames from './classNames'

// import sayHello from './lib/sayHello'
import setHTMLClassNames from './methods/setHTMLClassNames'
import setLazy from './methods/setLazy'

// import Menu from './components/Menu/Menu'

// import { NO_SCROLL } from './constants'

class App {
  constructor() {
    this.methods = {}
    this.classNames = classNames
  }

  initMethods() {
    this.methods = {
      // sayHello,
      setHTMLClassNames,
      setLazy,
    }

    Object.values(this.methods).forEach(fn => fn(this))
  }

  init() {
    this.initMethods()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App()
  app.init()
  window.app = app
})

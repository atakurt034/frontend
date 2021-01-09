import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'
import { About } from './screens/about/AboutScreen'
import { Stacks } from './screens/stacks/StacksScreen'
import { Project } from './screens/projects/Project'
import { Contact } from './screens/contact/Contact'
import { Footer } from './components/Footer'
import { Menu } from './components/navitems/SpeedDial'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Menu />
      <About />
      <Stacks />
      <Project />
      <Contact />
      <Footer />
    </Provider>
  )
}

export default App

import * as React from 'react'
import Box from '@mui/material/Box'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePage from './component/HomePage'
import { store } from './app/store'
function App() {
  return (
    <Box>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Provider>
    </Box>
  )
}

export default App

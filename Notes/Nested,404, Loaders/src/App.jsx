import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Finn from './pages/characters/Finn'
import Pb from './pages/characters/Pb'
import CharacterLayout from './layouts/CharacterLayout'
import NotFound from './pages/NotFound'
function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      // Index routes render into their parent's Outlet at their parent's URL (like a default child route).
      // Home
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        {/* Character */}
        <Route path='characters' element={<CharacterLayout />}>
          <Route path='finn' element={<Finn />} />
          <Route path='pb' element={<Pb />} />
        </Route>
          {/* 404 */}
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App

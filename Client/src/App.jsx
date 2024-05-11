import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/Signup'
import Header from './component/Header'
import Footer from './component/Footer'
import PrivateRoute from './component/PrivateRoute'
import OnlyAdminPrivateRoute from './component/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage'
import ScrollToTop from './component/ScrollToTop';
import Search from './pages/Search';

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>

        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

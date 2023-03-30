import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.scss"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import MovieDetail from './component/MovieDetail/MovieDetail'
import PageNotFound from './component/PageNotFound/PageNotFound'
import Footer from './component/Footer/Footer'

function App() {
return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path='*' element={<Navigate to ="PageNotFound" />} />
            </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App

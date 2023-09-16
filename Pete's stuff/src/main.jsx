import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Profile from './Profile.jsx'
import Trip from './Trip.jsx'
import Signup from './SignUp.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
        path="/"
        element={<Home/>}>
        </Route>
        <Route
        path="/profile"
        element={<Profile/>}
        >
        </Route>
        <Route
        path="/profile/trip"
        element={<Trip/>}
        >
        </Route>
        <Route
        path='/signup'
        element={<Signup/>}
        >

        </Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)


{/* <ApolloProvider client={client}>
<Router>
  <div className="flex-column justify-flex-start min-100-vh">
    <Header />
    <div className="container">
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/signup" 
          element={<Signup />} 
        />
        <Route 
          path="/me" 
          element={<Profile />} 
        />
        <Route 
          path="/profiles/:profileId" 
          element={<Profile />} 
        />
         <Route 
          path="/create" 
          element={<Create />} 
        />
      </Routes>
    </div>
    <Footer />
  </div>
</Router>
</ApolloProvider> */}
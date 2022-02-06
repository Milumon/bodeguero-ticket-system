import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Products from "../pages/Products/index"
import Categories from "../pages/Products/index"
import Clients from "../pages/Products/index"
import Sales from "../pages/Products/index"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/products", component: Products },
  { path: "/categories", component: Categories },
  { path: "/clients", component: Clients },
  { path: "/sales", component: Sales },

  // // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }

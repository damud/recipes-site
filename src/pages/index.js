import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Home() {
  return (
  <Layout>

  <h1> Home page</h1>
  <div>
    <Link to="/about">about</Link>
  </div>
  </Layout>
  

  )
}

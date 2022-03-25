import React from 'react'
import Layout from '../components/layout'
import Gallery from './gallery'

const Recipes = () => {
  return (
    <Layout>
          <h1>recipes page</h1>
          <main className="page">
          <Gallery />
          </main>

    </Layout>

  )
}

export default Recipes

import React from 'react'
import Layout from '../components/layout'
import Gallery from './gallery'
import AllRecipes from '../components/AllRecipes'

const Recipes = () => {
  return (
    <Layout>
          <h1>recipes page</h1>
          <main className="page">
            <AllRecipes />
          <Gallery />
          </main>

    </Layout>

  )
}

export default Recipes

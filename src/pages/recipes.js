import React from "react"
import Layout from "../components/layout"
import Gallery from "./gallery"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <h1>recipes page</h1>
      <main className="page">
        <AllRecipes />
        <Gallery />
      </main>
    </Layout>
  )
}

export default Recipes

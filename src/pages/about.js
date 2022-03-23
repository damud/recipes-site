import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
          <main className="page">
            <section className="about-page">
              <article>
                <h2>About me</h2>
                <p>My name is Jasmin and I am a Licensed Photographer with a passion for the creative side of photography.</p>
                <p>I am always interested in new projects to try and grow my portfolio with projects that I feel is a fun and rewarding way to get into the business. I have a great sense of humor and I look forward to hearing from you!</p>
                <Link to='/contact' className='btn'>contact</Link>
              </article>
              <StaticImage src='../assets/images/about.jpeg' 
              alt='Person pouring salt in bowl.' 
              className='about-img'
              placeholder='blurred'/>
            </section>
          </main>
    </Layout>

  )
}

export default About

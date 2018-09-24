import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from './shared/footer/footer'
import Nav from './shared/nav/nav'
import Header from '../components/header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
  <Nav/>
    <div id='view'>
      {children()}
    </div>
      <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import Hero from '../../components/hero/Hero'
import Filter from '../../components/filter/Filter'


function Home() {
    
  return (
    <Layout>
      <Hero />
      <Filter />

    </Layout>
    
  )
}

export default Home
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Order() {
    const context = useContext(myContext)
    const {Name} = context
    return (
      <Layout>
        Order
        <h1>Name: {Name}</h1>
        </Layout>
    )
  }
  
  export default Order
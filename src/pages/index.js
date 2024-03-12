import * as React from "react"
import Layout from "../components/layout"
import Magazines from "../components/magazines"

const IndexPage = () => {
  return (
   <Layout>
    <Magazines/>
   </Layout>
  )
}
export default IndexPage

export const Head = () => <title>Home Page</title>

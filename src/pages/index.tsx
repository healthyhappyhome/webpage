import * as React from "react"
import styled from "styled-components"
import type { HeadFC } from "gatsby"
import Logo from "../components/icons/Logo"

import "../styles/main.css"

const IndexPage = () => {
  return (
    <Layout>
      <ItemsContainer>
        <HHHLogo/>
        <BuildingText>EN CONSTRUCCIÓN...</BuildingText>
      </ItemsContainer>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Healthy & Happy Home - En construcción...</title>

const Layout = styled.main`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C9D8C3;
`

const ItemsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
`

const HHHLogo = styled(Logo)`
  max-width: 15rem;
  max-height: 15rem;
`

const BuildingText = styled.h1`
  font-family: "Inter", sans-serif;
  color: #BCBCBC;
  font-weight: 400;
  font-size: 16px;
  margin-top: .75rem;
  user-select: none;
  color: #76B29E;
`
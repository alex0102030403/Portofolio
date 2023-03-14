import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Wokrs from "./components/Wokrs"

const Container = styled.div`
  height: 100vh;
  
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.avif");
  background-size: 100%;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Wokrs />
      <Contact />
    </Container>

    
  )
}

export default App

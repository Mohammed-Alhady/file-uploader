import {Cta, Brand, Navbar} from "./components";
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./container"
import "./style/css/main.min.css"


const App = () => {

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
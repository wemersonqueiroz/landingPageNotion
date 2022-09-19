import Features from "./containers/Features"
import Footer from "./containers/Footer"
import Hero from "./containers/Hero"
import Main from "./containers/Main"
import Testimonial from "./containers/Testimonial"

function App() {
  return (
    <div>
      <Hero />
      <div className="">
        <Main />
        <Features />
        <Testimonial />
        <Footer />
      </div>
    </div>
  )
}

export default App

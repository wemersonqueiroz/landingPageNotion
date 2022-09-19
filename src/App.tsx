import Features from "./containers/Features"
import Hero from "./containers/Hero"
import Main from "./containers/Main"

function App() {
  return (
    <div>
      <Hero />
      <div className="">
        <Main />
        <Features />
      </div>
    </div>
  )
}

export default App

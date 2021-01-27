import "./styles/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Views
import HomeLayout from "./views/HomeLayout/HomeLayout"
import AboutLayout from "./views/AboutLayout/AboutLayout"
import SingleFilm from "./views/SingleFilm/SingleFilm"
// Components
import Header from "./components/Header/Header"

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomeLayout}></Route>
          <Route path="/about" component={AboutLayout}></Route>
          <Route path={`/film/:id`}>
            <SingleFilm />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App

import './App.css'
// import { Route, BrowserRouter as Router, matchPath } from 'react-router-dom'
// import { Route, Switch } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ScrollTop from './ScrollTop/ScrollTop'
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Blank from './components/blank/blank'
import Footer from './components/Footer/Footer'

// const resetScroll = () => window && window.scroll({ top: 0 })

function App() {
    return (
        <>
            {/* <Nav /> */}
            {/* <Route
                render={({ location }) => (
                    <TransitionGroup component={null}>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={{ enter: 2000, exit: 600 }}
                            onExited={resetScroll}
                        >
                            <div className="page">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route
                                        exact
                                        path="/about"
                                        component={About}
                                    />
                                    <Route
                                        exact
                                        path="/skills"
                                        component={Skills}
                                    />
                                    <Route
                                        exact
                                        path="/portfolio"
                                        component={Portfolio}
                                    />
                                    <Route
                                        exact
                                        path="/contact"
                                        component={Contact}
                                    />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            /> */}
            <Nav />
            <Home />
            <ScrollTop />
            <Blank />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { QuizzesList, QuizzesInsert, QuizzesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/quizzes/list" exact component={QuizzesList} />
                <Route path="/quizzes/create" exact component={QuizzesInsert} />
                <Route
                    path="/quizzes/update/:id"
                    exact
                    component={QuizzesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
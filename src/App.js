import {Component} from "react"
import {Switch,Route} from "react-router-dom"
import FavoriteContext from './Context/FavoriteContext'
import Login from "./components/Login"
import Home from "./components/Home"
import BookShelves from "./components/BookShelves"
import BookItemDetails from "./components/BookItemDetails"
import MyFavorite from "./components/MyFavorite"
import NotFound from "./components/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

import './App.css'

const App = () => {
    state={
        favoriteList:[],
    }

    onToggleFavorite=()=>{

    }

    render() {
        const {favoriteList}=this.state

        return(
            <FavoriteContext.Provider
                value={{
                    favoriteList:[],onToggleFavorite:this.onToggleFavorite
                }}
            >
                <Switch>
                    <Route exact path="login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <ProtectedRoute exact path="/shelf" component={BookShelves} />
                    <ProtectedRoute exact path="favorite" component={MyFavorite} />
                    <ProtectedRoute exact path="books/:id" component={BookItemDetails} />
                    <Route component={NotFound} />
                </Switch>
            </FavoriteContext.Provider>
            )
         }
}

export default App

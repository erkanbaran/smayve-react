import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import JSON from './db.json'

//COMPONENTS
import Header from './components/header'
import NewList from './components/news_list'
import Home from './components/home'
import Profile from './components/profiles'
import Posts from './components/post'
import PostItem from './components/post_item'


class App extends Component {

    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
    }

    render() {
        let newFiltered = this.state.filtered;
        let newsWhole = this.state.news;
        return (
            <div>
                <Header keywords={this.getKeyword}></Header>

                <BrowserRouter>
                    <Link to="/">Home</Link><br />
                    <Link to="/posts">Posts</Link><br />
                    <Link to={{
                        pathname: '/profile'
                    }}>Profile</Link><br />
                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/posts" exact component={Posts}></Route>
                        <Route path="/posts/:id/:username" component={PostItem}></Route>
                        <Route path="/profile" component={Profile}></Route>
                    </div>
                </BrowserRouter>

                <NewList news={newFiltered.length === 0 ? newsWhole : newFiltered}>
                    Free Toilets
             </NewList>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

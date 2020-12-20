import React from 'react';
import axios from 'axios';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { DashboardWrap } from '../../Elements/DashboardWrap/'
import { FavesPanelWrap } from '../../Elements/FavesPanelWrap/';
import { NewsFeedWrap } from '../../Elements/NewsFeedWrap/';

import NewsItem from '../NewsItem/';
import FaveNewsItem from '../FaveNewsItem/';


// const apiKey = '43256f4d342e40d5a57cf8f026b81473';
// const url = `http://newsapi.org/v2/top-headlines?country=ca&pageSize=30&apiKey=${apiKey}`;

const apiKey = 'nmMjFbj1mVIQZAz0kzwABm8NLksOucBq';
const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`;

class Dashboard extends React.Component {
    constructor() {
        super()

        this.state = {
            articles: [],
            faves: []
        };

        this.getNews()
        setInterval(this.getNews, 180000);
    };

      
    getNews = async () => {
        try {
          let data = await axios.get(`${url}`).then(({ data }) => data);
          let articles = data.results;
          this.setState({ articles: articles });
          console.log("New news!");
        } catch (err) {
          console.log(err);
        };
    };

    // is this weird?
    // I put it here so I am just updating it in addFave()
    favesSet = new Set();

    addFave = (index, favesSet) => {
        let faveArticle = this.state.articles[index];
        this.favesSet.add(faveArticle);
        
        let faves = [...this.favesSet]
        this.setState((prevState) => ({
            ...prevState.articles,
            faves: faves
        }));
        
    };

    deleteFave = (index) => {
        let goneArticle = this.state.faves[index];
        this.favesSet.delete(goneArticle);

        let faves = [...this.favesSet]
        this.setState((prevState) => ({
            ...prevState.articles,
            faves: faves
        }));
    }
    

    render() {

      return (
        <DashboardWrap>
            <FavesPanelWrap>
                <h2>Favourites</h2>
                {this.state.faves.map((fave, i) => 
                    <FaveNewsItem 
                        index={i}
                        key={fave.title}
                        image={fave.thumbnail_standard}
                        title={fave.title} 
                        description={fave.abstract}
                        url={fave.url}
                        date={fave.published_date}
                        icon={faTrash} 
                        onClick={this.deleteFave.bind(this, i)}
                    />
                )}
            </FavesPanelWrap>
            <NewsFeedWrap>
                <h2>News Feed</h2>
                {this.state.articles.map((article, i) => 
                    <NewsItem 
                        index={i}
                        key={article.title}
                        image={article.thumbnail_standard}
                        title={article.title} 
                        description={article.abstract}
                        url={article.url}
                        date={article.published_date}
                        icon={faHeart}
                        onClick={this.addFave.bind(this, i)}
                    />
                )}
            </NewsFeedWrap>
        </DashboardWrap>
        )  
    } 
}

export default Dashboard;
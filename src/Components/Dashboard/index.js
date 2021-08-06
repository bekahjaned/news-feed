import React from 'react';
import axios from 'axios';
import * as cron from 'node-cron';

import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DashboardWrap } from '../../Elements/DashboardWrap/';
import { FavesPanelWrap } from '../../Elements/FavesPanelWrap/';
import { NewsFeedWrap } from '../../Elements/NewsFeedWrap/';

import SubHeader from '../SubHeader/';
import NewsItem from '../NewsItem/';

const apiKey = 'nmMjFbj1mVIQZAz0kzwABm8NLksOucBq';
const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?page=50&api-key=${apiKey}`;

class Dashboard extends React.Component {
    state = {
        articles: [],
        faves: [],
        showFavourites: true,
    };

    _isMounted = false;

    getNews = async () => {
        try {
            let data = await axios.get(`${url}`)
                .then(({ data }) => data);
            let articles = data.results;

            if (this._isMounted === true) {
                this.setState({
                    articles: articles
                });
            }
        } catch (err) {
            console.log(err);
        };
    };

    task = cron.schedule('5 * * * * *', () => {
        this.getNews();
    });

    componentDidMount = () => {
        this._isMounted = true;
        this.getNews();
        this.task.start();
    }

    componentWillUnmount = () => {
        this.task.stop();
        this._isMounted = false;
    }

    toggleFavourites = () => {
        this.setState({
            showFavourites: !this.state.showFavourites
        });
    };

    showNews = (articles) => {
        const news = articles.map((article, i) => {
            return (
                <NewsItem
                    index={i}
                    key={article.title}
                    image={article.thumbnail_standard}
                    title={article.title}
                    description={article.abstract}
                    url={article.url}
                    date={article.published_date}
                    icon={this.state.faves.includes(article) ? faHeartSolid : faHeartOutline}
                    onClick={this.addFave.bind(this, i)}
                />
            )
        })
        return news
    }

    showFaves = (faves) => {
        const faveNews = faves.map((fave, i) => {
            return (
                <NewsItem
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
            )
        })
        return faveNews
    }

    favesSet = new Set();

    addFave = (index) => {
        let faveArticle = this.state.articles[index];
        this.favesSet.add(faveArticle);

        let faves = [...this.favesSet];
        this.setState((prevState) => ({
            ...prevState.articles,
            faves: faves,
        }));
    };

    deleteFave = (index) => {
        let goneArticle = this.state.faves[index];
        this.favesSet.delete(goneArticle);

        let faves = [...this.favesSet];
        this.setState((prevState) => ({
            ...prevState.articles,
            faves: faves,
        }));
    };

    render() {
        const { articles, faves, showFavourites } = this.state;
        const news = this.showNews(articles)
        const faveNews = this.showFaves(faves)

        return (
            <DashboardWrap>
                {/* create FavesPanel component, can move deleteFave there */}
                <FavesPanelWrap>
                    <SubHeader
                        text="Favourites"
                        count={faves.length}
                        toggleMethod={this.toggleFavourites.bind(this)}
                        className={showFavourites ? "pivot" : ""}
                        icon={faChevronDown}
                    />
                    <div className={showFavourites ? "show" : "hide"}>
                        {faveNews}
                    </div>
                </FavesPanelWrap>
                {/* create NewsFeed component, can more addFave */}
                <NewsFeedWrap>
                    <h2>News Feed</h2>
                    {/* {news} */}
                    <NewsItem
                        title={"Title"}
                        description={"This describes the title. Okay?"}
                        url={"www.google.com"}
                        icon={faHeartOutline}
                        date={"2021-08-06"}
                    />
                </NewsFeedWrap>
            </DashboardWrap>
        )
    }
}

export default Dashboard;
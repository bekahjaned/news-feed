import React from 'react';
import axios from 'axios';
import * as cron from 'node-cron';

import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
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

    changeIcon = (index) => {
        // if this.state.faves includes article
        // change icon to faHeartSolid
        // else icon should be faHeartOutline
    }

    render() {
        const { articles, faves, showFavourites } = this.state;
        console.log(articles)

        return (
            <DashboardWrap>
                <FavesPanelWrap>
                    <SubHeader
                        text="Favourites"
                        count={faves.length}
                        toggleMethod={this.toggleFavourites.bind(this)}
                        className={showFavourites ? "pivot" : ""}
                        icon={faChevronDown}
                    />
                    <div className={showFavourites ? "show" : "hide"}>
                        {faves.map((fave, i) =>
                            <NewsItem
                                index={i}
                                key={fave.title}
                                image={fave.thumbnail_standard}
                                title={fave.title}
                                description={fave.abstract}
                                url={fave.url}
                                date={fave.published_date}
                                icon={faHeartSolid}
                                onClick={this.deleteFave.bind(this, i)}
                            />
                        )}
                    </div>
                </FavesPanelWrap>
                <NewsFeedWrap>
                    <h2>News Feed</h2>
                    {articles.map((article, i) =>
                        <NewsItem
                            index={i}
                            key={article.title}
                            image={article.thumbnail_standard}
                            title={article.title}
                            description={article.abstract}
                            url={article.url}
                            date={article.published_date}
                            icon={faHeartOutline}
                            onClick={this.addFave.bind(this, i)}
                        />
                    )}
                </NewsFeedWrap>
            </DashboardWrap>
        )
    }
}

export default Dashboard;
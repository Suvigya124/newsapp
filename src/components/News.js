import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor form News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NewsPack - ${this.capitalizeFirstLetter(this.props.category)} News`;
  }

  async componentDidMount(){
    this.props.setProgress(50);
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(100);
    this.setState({
      articles: parsedData.articles,
      totalArticles : parsedData.totalResults,
      loading: false
    })
  }

  fetchMoreData = async () => {
    this.setState({loading: true});
    this.setState({page: this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        loading: false,
        articles: this.state.articles.concat(parsedData.articles),
        totalArticles: parsedData.totalResults,
      })
  };

  render() {
    return (
      <>
        <h1 className="text-center my-3">NewsPack - Top headlines on {this.capitalizeFirstLetter(this.props.category)} category</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalArticles} loader={<Spinner/>}>
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-sm-4"  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
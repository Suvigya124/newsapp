import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

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

  constructor() {
    super();
    console.log("Hello I am a constructor form News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e68cdc71568e4b0b8e3c14a5036bbfa3&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles : parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async ()=>{
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e68cdc71568e4b0b8e3c14a5036bbfa3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page-1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async ()=>{
    if(this.state.page+1<= Math.ceil(this.state.totalArticles/this.props.pageSize))
    {
      this.setState({loading: true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e68cdc71568e4b0b8e3c14a5036bbfa3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        loading: false,
        page: this.state.page+1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsPack - Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-sm-4"  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-2" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark my-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
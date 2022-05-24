import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

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
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e68cdc71568e4b0b8e3c14a5036bbfa3&page=1&pageSize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles : parsedData.totalResults
    })
  }

  handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e68cdc71568e4b0b8e3c14a5036bbfa3&page=${this.state.page - 1}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async ()=>{
    if(this.state.page+1<= Math.ceil(this.state.totalArticles/15))
    {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e68cdc71568e4b0b8e3c14a5036bbfa3&page=${this.state.page + 1}&pageSize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsPack - Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-sm-4"  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-2" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark my-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
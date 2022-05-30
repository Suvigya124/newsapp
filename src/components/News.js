import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async ()=> {
    // document.title = `NewsPack - ${this.capitalizeFirstLetter(props.category)} News`;
    props.setProgress(50);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(100);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults)
    setLoading(false);
  };

  useEffect (() => {
    updateNews();
    // eslint-disable-next-line
  },[])
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
  }

  return (
    <>
      <h1 className="text-center" style={{marginTop: '90px'}}>NewsPack - Top headlines on {capitalizeFirstLetter(props.category)} category</h1>
      {loading && <Spinner/>}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalArticles && articles.length<=40} loader={<Spinner/>}>
      <div className="container my-4">
      <div className="row">
      {articles.map((element)=>{
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
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
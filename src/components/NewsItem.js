import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    
    return (
      <div className="my-2 mx-2">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://gammoc.com/wp-content/uploads/2021/08/newsevents1.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-info">Know more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
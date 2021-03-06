import React from 'react'

const NewsItem = (props)=> {

  let {title, description, imageUrl, newsUrl, author, date, source} = props;
  
  return (
    <div className="my-2 mx-2">
      <div className="card">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '50%', zIndex: '1'}}>{source}</span>
        <img src={imageUrl?imageUrl:"https://gammoc.com/wp-content/uploads/2021/08/newsevents1.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-info">Know more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
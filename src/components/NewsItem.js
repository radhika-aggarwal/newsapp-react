import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsURL, date, author, source}= this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div>
            <span className="badge rounded-pill bg-danger" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}> {source} </span>
          </div>
          <img src={imageurl} className="card-img-top" style= {{}}alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"> <small className="card-text"> By {author? author: "unknown"} on {new Date(date).toUTCString()} </small></p>
            <a rel="noreferrer" href={newsURL} target='_blank' className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

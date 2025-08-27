import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps= {
    country: "in",
    category: "general",
    pageSize: 8
  }
  static propTypes= {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(props){
    super(props);
    this.state= {
      articles: [],
      loading: true,
      page:1,
      noOfPage: 0,
      totalResults:0
    }
    document.title= `${this.props.category} -NewsMonkey `;
  }
   update= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ab0415f74664a39b5e1dcb46029cc3f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: parseddata.articles,
      loading: false,
      totalResults: parseddata.totalResults,
      noOfPage: Math.ceil(parseddata.totalResults / this.props.pageSize)
      })
  }
  // handlePrevClick= async()=>{
  //   await this.setState({page: this.state.page-1});
  //   this.update(this.state.page-1);
  // }

  // handleNextClick= async()=>{
  //   await this.setState({page: this.state.page+1})
  //   this.update();
  // }

  async componentDidMount(){
    this.update();
  }

  fetchMoreData= async()=>{
    this.setState({page: this.state.page+1})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ab0415f74664a39b5e1dcb46029cc3f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata= await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults
    })
  }
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h1 className='text-center' style={{margin: '35px 0px'}}> NewsMonkey- Top {this.props.category} Headlines</h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner/>}
          >
            <div className='container'>
              <div className='row mx-7'>
                {this.state.articles.map((element)=>{
                  return <div className='col-md-4' key={element.url}>
                    <NewsItem  title={element.title? element.title:""} description={element.description? element.description:""} imageurl= {element.urlToImage? element.urlToImage:"https://cdn.onemileatatime.com/wp-content/uploads/2024/02/Air-Canada-Maple-Leaf-Lounge-Montreal-54.jpeg"} newsURL={element.url} date={element.publishedAt} author={element.author} source= {element.source.name}/>
                  </div>
                })}
              </div>
            </div>
            </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1}className="btn btn-dark me-2" onClick={this.handlePrevClick}>&larr; Prev</button>
          <button type="button" disabled={this.state.page>=this.state.noOfPage}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

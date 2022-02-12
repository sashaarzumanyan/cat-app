import React from "react";
import "./App.css"
import Page from "./page";
class App extends React.Component {
  state = {
      data: [],
      category: [],
      limit: 10,
      id: Math.floor(Math.random() * 10)
  }
  componentDidMount() {
       fetch(`https://api.thecatapi.com/v1/images/search?limit=${this.state.limit}&page=1&category_ids=${this.state.id}`)
      .then((response) => response.json())
      .then(dataList => {
          this.setState({ data: dataList });
      });

      fetch(`https://api.thecatapi.com/v1/categories`)
      .then((response) => response.json())
      .then(categoryList => {
          this.setState({ category: categoryList });
      });
      
    }  
   
    
    loadMore=()=>{
      this.setState({limit: this.state.limit + 10})
    }
    
    
    render() {
      console.log(this.state.limit);
      return (
        <div>
           <div className="header">
            <ul className="sidebar ">
              {this.state.category.map((e)=>(
                <li key={e.id}> 
                  <a  className="a" href="#">{e.name}</a> 
                </li>
              ))}
            </ul>
          </div>

          <div className="imgDiv">
            {this.state.data.map((e) => (                  
              <img className="catImg" key={e.id} src={e.url} alt={e.title} />                  
              ))}
          </div>
          <Page data={this.state.data} />         
         
        </div>

      )
  }
}
export default App
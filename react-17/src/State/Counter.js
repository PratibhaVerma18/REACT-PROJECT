import React, { Component } from 'react';
class Counter extends Component {
state={
    name: "mobile",
    price: 45000,
    counter: 0,
    image:"https:rukminim1.flixcart.com/image/312/312/knoxnrk0/mobile/g/1/j/g60-panb0000in-panb0016in-panb0012in-panb0014in-motorola-original-imag2aq9v8hzetbn.jpeg?q=70"
} ;
incHandler=()=>{
    if(this.state.counter>10){
        alert("successfully added 10 items");
    }
this.setState({
    counter:this.state.counter +1
});
}
decHandler=()=>{
    if(this.state.counter>0)
    {
        this.setState({
            counter: this.state.counter -1
            });
    }
}
    render() {
        return (
            <>
              <div className="container mt-5">
                  <div className="row">
                   <div className="col-md-5">
                      <table className="table table-hover  table-info">
                          <thead>
                              <th>Name</th>
                              <th>Image</th>
                              <th>Price</th>
                              <th>Qantity</th>
                              <th>Total Price</th>
                          </thead>
                          <tbody>
                              <tr>
                              <td>{this.state.name}</td>
                              <td ><img src={this.state.image}/></td>
                              <td>{this.state.price}</td>
                               <td>
                              <i className="fas fa-minus-circle"
                               onClick={this.decHandler}></i>

                              {this.state.counter}
                      <i className="fas fa-plus-circle" onClick={this.incHandler}></i>
                      
                      </td>
                      <td>{this.state.price * this.state.counter}</td>
                              </tr>
                          </tbody>
                      </table>
                       </div>   
                  </div>
                  </div>  
            </>
        )
    }
}

export default Counter;

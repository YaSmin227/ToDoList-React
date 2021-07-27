import React, { Component } from 'react'

class Additems extends Component {
    state = {
        name: '',
        age: ''
    }
  
    onsubmitItem = (e) => {
        e.preventDefault();
        if(this.state.name !='' && this.state.age!='' ){
            this.props.allitems(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }else{
            alert('you should enter name and age')
        }
       


    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmitItem}>
                    <input type="text" className='name' placeholder="Enter Your Name ...." id='name' onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} />
                    <input type="number" className='age' placeholder="Enter Your Age ...." id='age' onChange={(e)=>this.setState({age:e.target.value})} value={this.state.age} />
                    <input type='submit' className='btn' value="Add Item" />
                </form>
            </div>
        )
    }
}
export default Additems
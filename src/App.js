import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(){
        super();

        this.state = {

          adj : 0,
          opp : 0,
          hyp : 0
        }


    }

    mySubmitHandler = (event) => {
       event.preventDefault();

         if(this.state.hyp == 0)
        this.setState({hyp : Math.sqrt(Math.pow(this.state.adj,2) + Math.pow(this.state.opp,2))});


        else  if(this.state.adj == 0)
        this.setState({adj : Math.sqrt(Math.pow(this.state.hyp,2) - Math.pow(this.state.opp,2))});


        else  if(this.state.opp == 0)
        this.setState({opp : Math.sqrt(Math.pow(this.state.hyp,2) - Math.pow(this.state.adj,2))});



     }



       myChangeHandlerAdj = (event)=>{
       event.preventDefault();
       this.setState({adj : event.target.value});

     }


     myChangeHandlerOpp = (event)=>{

       event.preventDefault();
       this.setState({opp : event.target.value});

     }




     myChangeHandlerHyp = (event)=>{

       event.preventDefault();
       this.setState({hyp : event.target.value});

     }





    render() {
        return (
            <div>

                    <center><h1>Pythagoras Theorem</h1>
                    <p>Coded by Hari Pravin</p>
                    <form onSubmit={this.mySubmitHandler}>

                       <p>Adjacent</p>
        <input
            type="number" onChange = {this.myChangeHandlerAdj} value = {this.state.adj} min = '0'
          />

          <p>Opposite</p>
        <input
            type="number" onChange = {this.myChangeHandlerOpp} value = {this.state.opp} min = '0'
          />
          <p>Hypotenuse</p>
        <input
          type="number" onChange = {this.myChangeHandlerHyp} value = {this.state.hyp} min = '0'
          />
         <p> </p>
         <input type="submit" value="Find"

          />


        </form>

      </center>

            </div>
        );
    }
}

export default App;

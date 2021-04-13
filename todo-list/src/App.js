import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import uuid from 'react-uuid';
import axios from 'axios';
import AuthenticationService from './components/AuthenticationService';
import TodoDataService from './api/TodoDataService'
import AuthenticatedRoute from './components/AuthenticatedRoute.jsx'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todos from './components/Todos';
import About from './components/pages/About';
import LogoutComponent from './components/pages/LogoutComponent';
import LoginComponent from './components/pages/LoginComponent';
import WelcomeComponent from './components/pages/WelcomeComponent';
import AddTodo from './components/AddTodo';
import './App.css';



class App extends Component {
  state = {
    todos: [
      /*
      {
        id: uuid(),
        title: 'Complete Assignment',
        completed: false
      },
      {
        id: uuid(),
        title: 'Bike Servicing',
        completed: false
      },
      {
        id: uuid(),
        title: 'Car Cleaning',
        completed: false
      },
      {
        id: uuid(),
        title: 'Make Coffee',
        completed: false
      }
      */
    ],
    message: null

  }


  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUsername()
    TodoDataService.retrieveAllTodos(username)
    .then(
      res => {
        this.setState({ todos: res.data }) 
      } 
    )
    .catch(ex => {console.log(ex)});
  }

  // componentDidMount() {
  //   axios.get('http://localhost:8080/todos')
  //   .then(res => this.setState({ todos: res.data }) )
  // }

  // Toggle Complete
  markComplete = (id) => {
    let username = AuthenticationService.getLoggedInUsername()
    TodoDataService.completeTodo(username,id)
      .then(
        res => {
          this.setState({ message: null});
          this.refreshTodos()
        } 
      )
      .catch(ex => {console.log(ex)});
  }

  // Delete Todo
  delTodo = (id) => {
    let username = AuthenticationService.getLoggedInUsername()
    TodoDataService.deleteTodo(username, id)
      .then(res => {
         this.setState({ message: `Deletion of Todo ${id} Successful `});
         this.refreshTodos()
        }
      )
      .catch(ex => {console.log(ex)});   
  }

  // Add Todo
  addTodo = (title) => {
    /*
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    */

    axios.post('http://localhost:8000/todos', {
      title,
      completed:false
    })
    .then(res => {
          this.setState({ message: null});
          this.refreshTodos()
        }
    )
    .catch(ex => {console.log(ex)});
      //this.setState({ todos:
      //[...this.state.todos, res.data] }));
  }

  render() {
  
    return (
      <Router>
        <div className="App">
          
        <Header />
          <div className="container">  
           
              <React.Fragment>

                <Switch>

                <AuthenticatedRoute path="/todos" render={props => (
              
                <React.Fragment>
                  
                  {this.state.message && <div className="alert alert-success">{this.state.message} </div> }
                  
                  <Todos todos={this.state.todos} markComplete={this.markComplete} message={this.state.message}
                  delTodo={this.delTodo} />
                  <AddTodo addTodo={this.addTodo} />
                
                </React.Fragment>
            )} />
                <Route exact path="/" component={LoginComponent} />
                <Route path="/login" component={LoginComponent} />
                
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />

                <Route path="/about" component={About} />
                
                <AuthenticatedRoute path="/doLogout" component={LogoutComponent} />

                <Route component={ErrorComponent} />

            </Switch>
              </React.Fragment>
              
          </div>

          <Footer />
       
        </div>
      </Router>
    );
  }
}

function ErrorComponent() {
  return <div>
          <br />

          <strong> Error 404 not found, Invalid URL
          <br /> Please check again. </strong> 
      </div>
}

export default App;

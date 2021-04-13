import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        // simple method
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
            
        }
        
        
        // longer method
        /* if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        } */
    }

  //  checkStyle = () => {
  //      if(this.props.todo.completed) {
  //          return {
  //          checked: true
  //      }
  //   } else {
  //          return {
  //              checked: false 
  //          }
  //      }    
  //  }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    {/* {this.props.message && <div className="alert alert-success">{this.props.message} </div> } */}
                    
                    <input type="checkbox" defaultChecked={this.props.todo.completed} style={this.checkStyle} onChange={this.props.markComplete.bind
                    (this, id)} 
                    /> {' '}
                    
                    { title }

                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} className="btn-warning">Delete</button>

                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    cursor: 'pointer',
    float: 'right'
}


// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right'
// }

export default TodoItem
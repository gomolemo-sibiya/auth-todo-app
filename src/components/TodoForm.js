import React, { useState, useEffect, useContext } from 'react';
import firebaseConfig from '../config';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from './Auth';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../todostyle';
import Welcome from '../Welcome';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  root: {}
}));

function TodoForm() {
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState('');

  const classes = useStyles();
  const ref = firebaseConfig.firestore().collection('todotasks');

  function getTodos() {
    setLoading(true);

    ref.where('owner', '==', currentUserId).onSnapshot(querySnapshot => {
      const items = [];
      querySnapshot.forEach(doc => {
        items.push(doc.data());
      });
      setTodos(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  function addTask() {
    const owner = currentUser ? currentUser.uid : 'unknown';
    const ownerEmail = currentUser ? currentUser.email : 'unknown';
    const newTask = {
      task,
      id: uuidv4(),
      owner,
      ownerEmail
    };

    ref
      .doc(newTask.id)
      .set(newTask)
      .catch(err => {
        console.error(err);
      });
  }

  function deleteTask(task) {
    ref
      .doc(task.id)
      .delete()
      .catch(err => {
        console.error(err);
      });
  }

  function editTask(updatedTask) {
    setLoading();
    ref
      .doc(task.id)
      .update(updatedTask)
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Time Planner</h1>
      <Welcome />
      <div
        className="inputSection"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <input
          className="todoInput"
          type="text"
          value={task}
          placeholder="Add Task"
          onChange={e => setTask(e.target.value)}
          style={{
            color: '#F2F0F0',
            fontSize: 14,
            padding: 5,
            width: 350,
            height: 40,
            borderRadius: 10,
            border: 'none'
          }}
        />
        <button className="todoInputBtn" onClick={() => addTask()}>
          Submit
        </button>
      </div>

      {loading ? <h1>Loading...</h1> : null}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center'
        }}
      >
        {todos.map(todo => (
          <Paper
            className="todoItem"
            key={todo.id}
            style={{
              height: 50,
              width: 400,
              margin: 10,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 30,
              background: '#F5F5F5',
              opacity: 0.7
            }}
          >
            <p>{todo.task}</p>
            <div style={{ paddingLeft: 75 }}>
              <DeleteIcon>
                <button
                  style={{ display: 'inline-block', float: 'right' }}
                  onClick={() => deleteTask(todo)}
                >
                  X
                </button>
              </DeleteIcon>
              <EditIcon>
                <button onClick={() => editTask(todo)}>Edit</button>
              </EditIcon>
            </div>
          </Paper>
        ))}
      </div>
    </>
  );
}

export default TodoForm;

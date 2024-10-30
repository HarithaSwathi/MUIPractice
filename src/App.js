import { useEffect, useState } from "react"; 
import classes from './styles.module.css';
import TodoItem from './components/todo-item';
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  // State to hold the list of todos
  const [todoList, setTodoList] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(false);
  // State to store error messages
  const [errorMsg, setErrorMsg] = useState(null);
  // State to hold the details of a selected todo
  const [todoDetails, setTodoDetails] = useState(null);
  // State to manage the visibility of the dialog
  const [openDialog, setOpenDialog] = useState(false);

  // Function to fetch the list of todos from an API
  async function fetchListOfTodos() {
    try {
      setLoading(true); // Set loading state to true
      const apiResponse = await fetch('https://dummyjson.com/todos'); // Fetch data from API
      const result = await apiResponse.json(); // Parse JSON response
      console.log(result);
      if (result?.todos && result.todos.length > 0) {
        setTodoList(result.todos); // Update state with fetched todos
        setErrorMsg(''); // Clear error message
      } else {
        setTodoList([]); // Set todoList to empty if no todos found
        setErrorMsg(''); // Clear error message
      }
    } catch (e) {
      console.log(e); // Log any error that occurs
      setErrorMsg('Some error occurred'); // Set error message state
    } finally {
      setLoading(false); // Set loading state to false
    }
  }

  // Function to fetch details of a specific todo by its ID
  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(`https://dummyjson.com/users/${getCurrentTodoId}`); // Fetch details from API
      const details = await apiResponse.json(); // Parse JSON response
      if (details) {
        setTodoDetails(details); // Update state with fetched details
        setOpenDialog(true); // Open the dialog
      } else {
        setTodoDetails(null); // Clear details state if none found
        setOpenDialog(false); // Close the dialog
      }
      console.log(details);
    } catch (error) {
      console.log(error); // Log any error that occurs
    }
  }

  // useEffect hook to fetch the list of todos when the component mounts
  useEffect(() => {
    fetchListOfTodos(); // Call fetchListOfTodos on component mount
  }, []);

  // Render loading skeleton or content based on loading state
  if (loading) {
    return <Skeleton variant="rectangular" width={650} height={650} />;
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo app using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {
          todoList.length > 0 ?
          todoList.map(todoItem => (
            <TodoItem 
              fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} 
              todos={todoItem} 
              key={todoItem.id} 
            />
          )) 
          : 
          <p>No todos available</p> // Provide feedback if no todos are present
        }
      </div>
      <TodoDetails 
        openDialog={openDialog} 
        todoDetails={todoDetails}  
        setTodoDetails={setTodoDetails} 
        setOpenDialog={setOpenDialog} 
      />
    </div>
  );
}

export default App;

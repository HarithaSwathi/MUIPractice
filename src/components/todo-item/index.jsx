import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"; // Import Material-UI components for styling and layout

// TodoItem component definition
function TodoItem({ todos, fetchDetailsOfCurrentTodo }) {
    console.log(todos); // Log the `todos` prop to the console for debugging

    return (
        <Card 
            sx={{
                maxWidth: 350, // Set the maximum width of the Card
                display: 'flex', // Use flexbox layout for the Card
                flexDirection: "column", // Arrange children in a column
                justifyContent: "space-between" // Space out children evenly
            }}
        >
            <CardContent>
                <Typography variant='h5' color={"text.secondary"}>
                    {todos?.todo} {/* Display the todo item text */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    onClick={() => fetchDetailsOfCurrentTodo(todos?.id)} // Call function to fetch details when button is clicked
                    sx={{
                        backgroundColor: '#000000', // Set button background color
                        color: '#fff', // Set button text color
                        opacity: '0.75', // Set button opacity
                        '&:hover': {
                            backgroundColor: '#000000', // Maintain background color on hover
                            color: '#fff', // Maintain text color on hover
                            opacity: '1' // Set button opacity to 1 on hover
                        }
                    }}
                >
                    Details {/* Button text */}
                </Button>
            </CardActions>
        </Card>
    );
}

export default TodoItem; // Export the TodoItem component for use in other parts of the application

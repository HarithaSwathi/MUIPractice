import React, { Fragment } from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

function TodoDetails({ openDialog, todoDetails, setTodoDetails, setOpenDialog }) {
  // Debugging statement to check todoDetails and openDialog
  console.log('Todo Details:', todoDetails);
  console.log('Dialog Open:', openDialog);

  return (
    <Fragment>
      <Dialog 
        onClose={() => setOpenDialog(false)} // Close dialog when the backdrop is clicked
        open={openDialog} // Control the visibility of the dialog based on `openDialog` prop
      >
        <DialogTitle>
          {todoDetails?.todo} {/* Display the title or fallback text */}
        </DialogTitle>
        <DialogActions>
          <Button 
            onClick={() => {
              setTodoDetails(null); // Clear the todo details when button is clicked
              setOpenDialog(false); // Close the dialog
            }}
          >
            Close {/* Button text */}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default TodoDetails;

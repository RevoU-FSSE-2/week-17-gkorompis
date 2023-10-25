import * as React from 'react';
import {Fab, Box, Button, Typography, Modal} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CustomForm from '../custom-form';
import { FormikValues } from 'formik';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props <T> {
    fields: {name:string, label:string, type: string}[]
    initialValues: T,
    url: string,
    navigateTo: string,
    validationSchema: any,
    arrayField: string
}

const CustomModal =<T extends FormikValues> ({fields, initialValues, url, navigateTo, validationSchema, arrayField}:Props<T>)=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="add-icon" onClick={handleOpen} style={{marginLeft: "10px"}}>
        <Fab size="small" color="secondary" aria-label="add" >
          <AddIcon />
        </Fab>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomForm 
            fields={fields}
            initialValues={initialValues}
            url={url}
            navigateTo={navigateTo}
            validationSchema={validationSchema}
            arrayField={arrayField}
          />
        </Box>
      </Modal>
    </div>
  );
}
export default CustomModal;
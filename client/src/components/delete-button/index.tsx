import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
  onClick: ()=> void;
}
const DeleteButton = ({onClick}:Props) => {
    return (
        <div onClick={onClick}>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}
export default DeleteButton
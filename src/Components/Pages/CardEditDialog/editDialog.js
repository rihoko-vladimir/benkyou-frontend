import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeDialog} from "../../../Redux/actions";
import EditKanji from "../../EditKanjiComponent/editKanji";

const EditDialog = () => {
    const isOpen = useSelector(state => state.isEditDialogOpened);
    const selectedCard = useSelector(state => state.selectedCard);
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(closeDialog())
    }
    const onSave = () => {
        console.log("save")
    }

    return <Dialog
        scroll={"paper"}
        open={isOpen}
        onClose={onClose}>
        <DialogTitle>Edit card</DialogTitle>
        <DialogContent dividers={true}>
            <EditKanji card={selectedCard}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSave}>Save</Button>
        </DialogActions>
    </Dialog>
}

export default EditDialog;
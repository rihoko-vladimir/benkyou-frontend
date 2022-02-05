import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch, useSelector, useStore} from "react-redux";
import {closeDialog, saveCard} from "../../../Redux/actions";
import EditKanji from "../../EditKanjiComponent/editKanji";

const EditDialog = () => {
    const store = useStore();
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.isEditDialogOpened);
    const onClose = () => {
        dispatch(closeDialog())
    }
    const onSave = () => {
        dispatch(saveCard(store.getState().editCard))
        console.log("save")
    }
    return <Dialog
        scroll={"paper"}
        open={isOpen}
        onClose={onClose}>
        <DialogTitle>Edit card</DialogTitle>
        <DialogContent dividers={true}>
            <EditKanji/>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSave}>Save</Button>
        </DialogActions>
    </Dialog>
}

export default EditDialog;
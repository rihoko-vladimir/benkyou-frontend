import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch, useSelector, useStore} from "react-redux";
import {closeDialog, saveCard} from "../../../Redux/actions";
import EditKanji from "../../EditKanjiComponent/editKanji";
import {dialogModes} from "../../../Redux/reducers";

const EditDialog = () => {
    const store = useStore();
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.dialog.isOpened);
    const mode = useSelector(state => state.dialog.mode);
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
        <DialogTitle>{mode === dialogModes.edit ? "Edit card" : mode === dialogModes.create ? "Create card" : "?"}</DialogTitle>
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
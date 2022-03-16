import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch, useSelector, useStore} from "react-redux";
import {closeDialog, createSet, saveSet} from "../../Redux/actions";
import EditKanji from "../../Components/EditDialogContent";
import {dialogModes} from "../../Redux/reducers";

const EditDialog = () => {
    const store = useStore();
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.dialog.isOpened);
    const mode = useSelector(state => state.dialog.mode);
    const isLoading = useSelector(state => state.isLoading);
    const onClose = () => {
        if (!isLoading) dispatch(closeDialog())
    }
    const onSave = () => {
        dispatch(saveSet(store.getState().editCard))
        console.log("save")
    }
    const onCreate = () =>{
        dispatch(createSet(store.getState().editCard))
        console.log("create")
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
            <Button onClick={onClose} disabled={isLoading}>Cancel</Button>
            <Button onClick={mode === dialogModes.edit ? onSave : mode === dialogModes.create? onCreate: null} disabled={isLoading}>{mode === dialogModes.edit ? "Save" : mode === dialogModes.create? "Create": null}</Button>
        </DialogActions>
    </Dialog>
}

export default EditDialog;
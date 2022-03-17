import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useDispatch, useSelector, useStore} from "react-redux";
import {closeDialog, createSet, modifySet, saveSet} from "../../Redux/actions";
import EditKanji from "../../Components/EditDialogContent";
import {dialogModes} from "../../Redux/reducers";

const EditDialog = () => {
    const store = useStore();
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.dialog.isOpened);
    const mode = useSelector(state => state.dialog.mode);
    const isLoading = useSelector(state => state.isLoading);
    const editCard = useSelector(state => state.editCard);
    const isAbleToContinue = ()=>{
        const ok = editCard.kanjiList.map(kanji => {
            const char = kanji.kanji;
            const kunyomi = kanji.kunyoumi;
            const onyomi = kanji.onyoumi;
            return (kunyomi.length === 0 && onyomi.length === 0) || char === ""
        }).find(bool => bool === true);
        return ((editCard.kanjiList.length<3 ||
            editCard.name.length === 0 ||
            editCard.description.length === 0) || ok === true);
        }
    const onClose = () => {
        if (!isLoading) dispatch(closeDialog())
    }
    const onSave = () => {
        dispatch(modifySet(store.getState().editCard))
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
        <DialogTitle>{mode === dialogModes.edit ? "Edit set" : mode === dialogModes.create ? "Create set" : "?"}</DialogTitle>
        <DialogContent dividers={true}>
            <EditKanji/>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} disabled={isLoading}>Cancel</Button>
            <Button onClick={mode === dialogModes.edit ? onSave : mode === dialogModes.create? onCreate: null} disabled={isLoading || isAbleToContinue()}>
                {mode === dialogModes.edit ? "Save" : mode === dialogModes.create? "Create": null}
            </Button>
        </DialogActions>
    </Dialog>
}

export default EditDialog;
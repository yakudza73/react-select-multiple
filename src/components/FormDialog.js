import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SingIn from './SingIn'



export default function FormDialog(props) {
    // const [open, setOpen] = React.useState(false);

    // function handleClickOpen() {
    //     setOpen(true);
    // }

    // function handleClose() {
    //     setOpen(false);
    // }

    return (
        <div>
            <Dialog open={props.status} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.form_dialog}</DialogTitle>
                <DialogContent>
                    <SingIn 
                        title_text='Регистрация'
                        label_text='хз' password_text='пароль'
                        checkbox_text='я согласен'
                        actions={'/singin'}
                        onSucces={props.handleClose}
                        hostname={props.hostname}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={props.handleClose} color="primary">
                        Зарегистрироваться
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

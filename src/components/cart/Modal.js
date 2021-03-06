import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({ open, mainMessage, handleClose, full, children }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen={full ? true : false}
            >
                <DialogTitle id="alert-dialog-title">
                    {mainMessage}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {/**El pedido se ha sido completado*/}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {children}
                    <Button onClick={handleClose} autoFocus>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

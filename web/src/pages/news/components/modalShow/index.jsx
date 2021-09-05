import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles';


export default function ModalShow(props){

    const classes = styles();
    const {open, setOpen, newShow} = props;

    const handleClose = () => {
        setOpen(false);
      };

    const content = (
        <div className={classes.modal}>
            <div className={classes.contentImgModal}>
                <img className={classes.imgModal} src={newShow.image} alt="" />
            </div>
            <div className={classes.titleModal}>
                <Typography component="h1" variant="h5">
                    {newShow['title']}
                </Typography>
            </div>
            <div className={classes.content}>
               {newShow.content}
            </div>
            <div>
            <Button className={classes.btnCloseModal} onClick={handleClose}>
                Close
            </Button>
            </div>
        </div>
        )

    return(
        <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modalShow}
        >
            {content}
        </Modal>
    )
}
import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert';


import {convertBase64} from '../../../../shared/utils'
import {createNew} from '../../../../integrations/news'
import styles from './styles';


export default function ModalCreate(props){
    const [baseImage, setBaseImage] = useState("");
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [msgAlert, setMsgAlert] = useState('');


    const classes = styles();
    const {open, setOpen, fetchData} = props;


    const handleTitle = (event)=>{
        setTitle(event.target.value)
    }

    const handleContent = (event)=>{
        setContent(event.target.value)
    }

    const handleClose = () => {
        setOpen(false);
      };

      const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const send = async ()=>{
        try{
            await createNew({
                title,
                content,
                image:baseImage
            }) 
            await fetchData()
            setMsgAlert('Noticia criada com sucesso');
            setSuccess(true)
            setTimeout(()=>setSuccess(false),5000)
        }
        catch(error){
            setMsgAlert(`Houve um erro ao criar a Noticia,
            Verifique se todos os campos estão preenchidos corretamente`);
            setError(true)
            setTimeout(()=>setError(false),5000)
        }
      }

    const body = (
        <div className={classes.modal}>
            {success && 
            (<Alert className={classes.alert} 
            severity="success">
                {msgAlert}
            </Alert>)}
            {error && 
            (<Alert className={classes.alert} 
            severity="error">
                {msgAlert}
            </Alert>)}
            <div className={classes.contentImgModal}>
                <img className={classes.imgModal} src={baseImage} alt="" />
            </div>
            <div style={{marginTop: 10}}>
                <input
                    type="file"
                    onChange={(e) => {
                    uploadImage(e);
                    }}
                />
            </div>
            <div className={classes.titleModal}>
                <TextField 
                style={{width: '100%'}} 
                id="standard-basic" 
                label="Titulo" 
                onChange={handleTitle}
                />
            </div>
            <div className={classes.content}>
                <TextField 
                multiline 
                style={{width: '100%'}} 
                id="standard-basic" 
                label="Conteudo" 
                variant="outlined"
                minRows={6}
                maxRows={6}
                onChange={handleContent}
                />
            </div>
            <div className={classes.btnsModal}>
                <Button 
                    variant="contained" 
                    color='primary' 
                    onClick={send}
                >
                    Salvar
                </Button>
                <Button 
                    variant="contained" 
                    color='secondary' 
                    onClick={handleClose}
                >
                    Sair
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
                {body}
            </Modal>
    )
}
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modalShow:{
    display: 'flex',
    flexDirection: 'column',
  },
  modal: {
    display:'flex',
    flexDirection: 'column',
    width: 400,
    height: 500,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnCloseModal:{
    marginTop: 10,
    width: 20,
    height: 30,
  },
  contentImgModal:{
    display:'flex',
    justifyContent: 'center'
  },
  imgModal:{
    height: 200
  },
  titleModal:{
    borderBottom: '1px solid #aaa',
    width: '100%',
    height:'max-content',
    padding: 10
  },
  content:{
    fontFamily: 'Arial',
    overflowY: 'scroll',
    marginTop: 20,
    minHeight: 180
  }
  
}));
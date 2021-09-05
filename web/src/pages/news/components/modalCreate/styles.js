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
  btnsModal:{
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 10
  },
  contentImgModal:{
    display:'flex',
    justifyContent: 'center'
  },
  imgModal:{
    height: 200
  },
  titleModal:{
    width: '100%',
    height:'max-content',
    padding: 10
  },
  content:{
    fontFamily: 'Arial',
    marginTop: 20,
    height: '200px'
  },
  alert:{
    position: 'absolute',
    top: 0,
    right: 0
  }
  
}));
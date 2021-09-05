import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navBarItems:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    username:{
      margin: '15px',
      color: 'black',
      fontFamily: 'Arial',
      fontSize: '18px'
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    btnLogin:{
      border: '1px solid #000'
    },
}));
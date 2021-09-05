import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';


import {getNews} from '../../integrations/news'
import ModalShow from './components/modalShow'
import ModalCreate from './components/modalCreate';
import ModalEdit from './components/modalEdit';
import {isAuthenticated, logout, getUsername}from '../../shared/utils'
import InputSearch from '../../shared/components/inputSearch'
import styles from './styles';

export default function Album() {
    const [news, setNews] = useState([])
    const [show, setShow] = useState(false)
    const [modalCreate, setModalCreate] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [newCurrent, setNewCurrent] = useState({})
    const classes = styles()
    

    const handleModalShow = (newShow)=>{
        setNewCurrent(newShow)
        setShow(true)        
    }

    const handleModalEdit = (newShow)=>{
        setNewCurrent(newShow)
        setModalEdit(true)        
    }

    const fetchData = async (filters = {})=>{
        const response = await getNews(filters)
        setNews(response)
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <>
        <ModalShow
            open={show}
            setOpen={setShow}
            newShow={newCurrent}
        />
        <ModalCreate
            open={modalCreate}
            setOpen={setModalCreate}
            fetchData={fetchData}
        />
        <ModalEdit 
            open={modalEdit}
            setOpen={setModalEdit}
            newShow={newCurrent}
            fetchData={fetchData}
        />

        <AppBar position="relative"  >
            <Toolbar className={classes.navBarItems}>
                <InputSearch 
                    fetchData={fetchData}
                />
                <div>
                    {isAuthenticated() && (
                    <span className={classes.username}>
                        {getUsername()}
                    </span>)}
                    <Button
                        onClick={isAuthenticated() ? logout : ()=> window.location.href = "/login"}
                        className={classes.btnLogin}
                    >
                    {isAuthenticated() ? 'LOGOUT': 'LOGIN ' }
                    <AccountCircle />
                </Button>
                </div>
            </Toolbar>
        </AppBar>
        <main>
            {isAuthenticated() && (<div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=>setModalCreate(true)}
                >
                    Criar uma Nova Noticia
                  </Button>
                </Grid>
              </Grid>
            </div>)}
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {news.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                        </Typography>
                        <Typography>
                        {card.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small" 
                            color="primary"
                            onClick={()=>handleModalShow({...card})}
                        >
                            Ver
                        </Button>
                        {isAuthenticated() && (
                            <Button 
                                size="small" 
                                color="primary"
                                onClick={()=>handleModalEdit({...card})}
                            >
                                Editar
                            </Button>
                        )}
                        
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
        </main>
        </>
    );
}

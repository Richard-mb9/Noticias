import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


import useStyles from './styles'

export default function InputSearch(props) {
    const [value, setValue] = useState('')
    
    const {fetchData} = props;

    const handleValue = (event) =>{
        setValue(event.target.value)
    }

    const classes = useStyles()

    return (
        <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Pesquise pelo titulo da noticia"
            value={value}
            onChange={handleValue}
        />
        <IconButton 
            className={classes.iconButton} 
            aria-label="search"
            onClick={()=>fetchData({'title':value})}
        >
        
            <SearchIcon />
        </IconButton>
        </Paper>
    );
}
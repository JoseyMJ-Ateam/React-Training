import React, {useEffect} from 'react';
import { 
  makeStyles,
  Grid
} from '@material-ui/core';


const Album = () => {
    const [loading, setLoading] = React.useState(true);
    const [album, setAlbum] = React.useState([]);
    const [albumClicked, setAlbumClicked]= React.useState([]);

      const useStyles = makeStyles({
        table: {
          minWidth: '74vw',
        },
        root: {
          flexGrow: 1,
        },
        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
        },
        tableHead:{           
            fontWeight:600
        }
      });  

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_page1&_limit=10')
          .then(res => res.json())
          .then(response => {
            setAlbum(response);
            setLoading(false);
          })
          .catch(error => console.log(error));
      
        },[]); 

        const handleCard = (a) => {      
            setAlbumClicked(a);            
        }

    const classes = useStyles();
    if(loading){
      return <h3>Loading....</h3>
    }

    return (
        <div className={classes.root}>     
           <Grid container spacing={4} >
             {album.map(a => (
                <Grid key={a.id} item xs={12} md={4} onClick={()=> handleCard(a)}>                
                  {a.id !== albumClicked.id ?
                      <img className={classes.img} alt="complex" src={a.url} />                
                  :
                    <div>
                    <p>{a.id}</p>
                    <h1>{a.title}</h1>
                    </div> 
}
             </Grid>
             ))  
}
           </Grid>
        
        </div>        
    );
}
export default Album;

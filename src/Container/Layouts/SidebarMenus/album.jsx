import React, {useEffect} from 'react';
import { 
  makeStyles,
  Grid
} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumDataBegins, getAlbumDataSuccess } from '../../../Redux/actions/albumActions';

const Album = () => {
    const [loading, setLoading] = React.useState(true);
    const [album, setAlbum] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [albumClicked, setAlbumClicked]= React.useState([]);
    const dispatch = useDispatch();
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

      const albumData = useSelector(state=>state.albumReducer.album.data);
     console.log(albumData)
      useEffect(() => {
        if (album.length === 0) {
          fetchPages();
      
        }
      }, [album]);
    
     const fetchPages = () => {
      dispatch(getAlbumDataBegins());
      axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      .then(response => {
        dispatch(getAlbumDataSuccess(response))
        setAlbum([album.concat(response.data)]);
        console.log(album);
        setLoading(false);
       
      })
      setPage(page + 1)
    }
        const handleCard = (a) => {      
            setAlbumClicked(a);            
        }

    const classes = useStyles();
    if(loading){
      return <h3>Loading....</h3>
    }

    return (
        <div className={classes.root}
        >    
           <Grid container spacing={4} >
           <InfiniteScroll
           dataLength= {100}
           next={fetchPages}
           hasMore={true}
           style={{ display: 'flex', flexDirection: 'column-reverse' }}
           loader={<h4>Loading...</h4>}
          
       >
       
             {albumData.map(a => (
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
  
             </InfiniteScroll>
           </Grid>
        
        </div>        
    );
}
export default Album;

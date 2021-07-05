import React, {useEffect} from 'react';
import { 
  makeStyles,
  Grid,
  CircularProgress
} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumDataBegins, getAlbumDataSuccess } from '../../../redux/actions/albumActions';

const Album = () => {
    const [loading, setLoading] = React.useState(true);
    const [album, setAlbum] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [albumClicked, setAlbumClicked]= React.useState([]);
    const dispatch = useDispatch();
      const useStyles = makeStyles((theme) => ({
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
        },
        loaderClass: {
         display:'flex',
         justifyContent:'center'
        }
      }));  

      const albumData = useSelector(state=>state.albumReducer.album.data);
     console.log(albumData)

     useEffect(()=>{     
     fetchPages();
  } ,[])   
    
     const fetchPages = () => {
       setPage(page + 1);
      dispatch(getAlbumDataBegins());
      axios.get(`photos?_page=${page}&_limit=10`)
      .then(response => {
        dispatch(getAlbumDataSuccess(response))
        setAlbum(album.concat(response.data));
        console.log(album);
        setLoading(false);       
      })
      
    }
        const handleCard = (a) => {      
            setAlbumClicked(a);            
        }

    const classes = useStyles();

    if(loading){
      return <div className={classes.loaderClass}><CircularProgress /></div>
    }

    return (
        <div className={classes.root}
        >    
           <InfiniteScroll
           dataLength= {album.length}
           next={fetchPages}
           hasMore={true}
           loader={<h4>Loading...</h4>}
          
       >
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
             </InfiniteScroll>
        
        </div>        
    );
}
export default Album;

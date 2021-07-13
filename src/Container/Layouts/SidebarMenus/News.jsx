import React, {useEffect} from 'react';
import { 
  makeStyles,
  Grid,
  CircularProgress
} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsDataBegins, getNewsDataFail, getNewsDataSuccess } from '../../../redux/actions/newsActions';
import axios from 'axios';

const News = () => {
    // const [loading, setLoading] = React.useState(true);
    const [news, setNews] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.newsReducer.isLoading);
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
        position:'absolute',
        top:'50%',
        left:'50%'
        }
      }));  

    //   const albumData = useSelector(state=>state.albumReducer.album.data);
    //  console.log(albumData)

     useEffect(()=>{     
     fetchPages();
  } ,[])   
     const fetchPages = () => {
       setPage(page + 1);
      dispatch(getNewsDataBegins());
      axios.get(` https://newsapi.org/v2/everything?q=tesla&from=2021-07-11&sortBy=publishedAt&apiKey=a1e53f4dad6a4f50a37059fa059c2515&page=${page}&_limit=10`)
      .then(response => {
        dispatch(getNewsDataSuccess(response))
        setNews(news.concat(response.data.articles));
        // setLoading(false);       
      })
      .catch(res => {
          dispatch(getNewsDataFail(res))
      })
      
    }

    const classes = useStyles();

    if(isLoading){
      return <div className={classes.loaderClass}><CircularProgress /></div>
    }

    return (
        <div className={classes.root}
        >    
           <InfiniteScroll
           dataLength= {news.length}
           next={fetchPages}
           hasMore={true}
           loader={<h4>Loading...</h4>}
          
       >
           <Grid container spacing={4} >
       
             {news.map((a, index) => (
                <Grid key={index} item xs={12} md={4} >                
                  
                    <div>
                    {/* <p>{a.index}</p> */}
                    <h1>{a.title}</h1>
                    </div> 

             </Grid>
             ))  
}
  
           </Grid>
             </InfiniteScroll>
        
        </div>        
    );
}
export default News;

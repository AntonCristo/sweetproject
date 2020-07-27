import React,{useState,useEffect} from 'react';
import classes from './showfavorites.module.scss';
import Card from '../UI/Card/Card';
import Spinner from '../UI/Spinner/Spinner';

const showFavorites = (props) => {
    
    const [favorites,setFavorites] = useState([]);
    const storage = window.localStorage;
    let myClasses = [classes.loadingstyle];
    let favs = [];

    useEffect(()=>{
        const currentFavoritesObj = JSON.parse(storage.favorites);
        for(let key in currentFavoritesObj){
            favs.push(currentFavoritesObj[key]);
        }
        setFavorites(favs);
    },[])

    const imgs = favorites.map(val => {
        return (<Card key={val.id} src={val.downloadURL} />)
    });

    if(imgs.length>0){
        myClasses = [classes.favs]
    }

    useEffect(()=>{
        console.log('[ShowFavorites.js] rendered...');
    });

    return (    
        <div >
            <h3 style={{margin:'auto',paddingTop:'10px',textAlign:'center',color:'#b12643'}}>FAVORITES</h3>
            <div className={myClasses.join(' ')}> 
                {imgs.length>0 ? imgs : <Spinner/>}
            </div>
        </div>    
    );
}

export default showFavorites;
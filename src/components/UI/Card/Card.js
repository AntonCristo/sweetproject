import React,{useState,useEffect} from 'react';
import classes from './card.module.scss';
import likeIcon from '../../../assets/icons/like.svg';
import delIcon from '../../../assets/icons/delete.svg';
import { connect } from 'react-redux';

const card = (props) => {

    const [liked,setLiked] = useState(false);
    const thisCard = { 
        downloadURL: props.src,
        ref: props.firebaseRef,
        id: props.uid 
    }
    let deleteSection = null;
    let myLabel = <label style={{color:'white'}}  htmlFor="likebtn">Like</label>;
    let controls = null;

    const onlikeClickedHandler = () => {
        setLiked(!liked);
    }

    const addToStorageFavorites = uid => {
        const storage = window.localStorage;
        const currentFavoritesObj = JSON.parse(storage.favorites);
        currentFavoritesObj[uid] = thisCard;
        storage.favorites = JSON.stringify(currentFavoritesObj);
    }

    if(props.isAdmin){
        deleteSection = (
            <div onClick={()=>props.onDelete(props.uid,props.firebaseRef)}>
                <img src={delIcon} id="delbtn" />
                <label style={{color:'white'}}  htmlFor="delbtn">Delete</label>
            </div>
        );
    }

    if(liked){
        myLabel = (<label 
                style={{color:'salmon',fontSize:'1.3em',fontWeight:'bold'}} 
                htmlFor="likebtn">
                Liked!
            </label>);
    }

    if(props.show){
        controls = (
                <React.Fragment>
                    <div onClick={onlikeClickedHandler}>
                        <img src={likeIcon} id="likebtn" />
                        {myLabel}
                    </div>
                    {deleteSection}
                </React.Fragment>
        );
    }


    // const removeFromStorageFavorites = uid => {
    //     const storage = window.localStorage;
    //     const currentFavoritesObj = JSON.parse(storage.favorites);
    //     delete currentFavoritesObj[uid];
    //     storage.favorites = JSON.stringify(currentFavoritesObj);
    // }

    useEffect(() => {

        if(liked){
            addToStorageFavorites(props.uid);
        }
    },[liked])

    return (
        <div className={classes.card}>
            <div className={classes.myImg} >
                <img src={props.src} alt="cake" />
            </div>
            <div className={classes.controls} >
                {controls}
            </div>
        </div>
    );
}



const mapStateToProps = state => {
    return {
        isAdmin: state.auth.uid,
        images: state.fetchImages.images
    }
}

export default connect(mapStateToProps)(card);
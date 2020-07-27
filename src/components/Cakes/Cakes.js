import React,{useEffect} from 'react';
import classes from './cakes.module.scss';
import Card from '../UI/Card/Card';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import Spinner from '../UI/Spinner/Spinner';


const cakes = (props) => {

    let myClass = [classes.loadingstyle]
    let fetchedImages = <Spinner/>;

    const onDeleteImageHandler = (id,ref) => {
        props.deleteImage(id,ref);
        setTimeout(()=>{
            props.fetchImages(ref);
        },500)
    }

    if(!props.isLoading){
        fetchedImages = props.images.map(val => {
            return (
                <Card 
                    show
                    onDelete={onDeleteImageHandler}
                    firebaseRef={props.match.params.dir}
                    key={val.uid} 
                    uid={val.uid}  
                    src={val.downloadURL} />
            );
        })
    }

    if(fetchedImages.length>0){
        myClass = [classes.cakes];
    }
 
    useEffect(()=>{
        props.fetchImages(props.match.params.dir)
    },[props.match.params.dir])

    useEffect(()=>{
        console.log('[Cakes.js] rendered...');
    });

    return (
        <div className={myClass.join(' ')}>
            { fetchedImages.length>0 ? fetchedImages : <Spinner/> } 
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: ref => dispatch(actions.fetchImages(ref)),
        deleteImage: (id,ref) => dispatch(actions.deleteImage(id,ref))
    }
}

const mapStateToProps = state => {
    return {
        images: state.fetchImages.images,
        isLoading: state.fetchImages.loading
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cakes);
import React,{ useState,useRef,useEffect } from 'react';
import classes from './uploadnew.module.scss';
import uploadIcon from '../../../assets/icons/upload.svg';
import Button from '../../UI/Button/Button';
import Progressbar from '../../UI/Progressbar/Progressbar';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

const uploadNew = (props) => {

    const [previewImg,setPreviewImg] = useState(null);
    const [checkedValue,setCheckedValue] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [uploadTask,setUploadTask] = useState(null);
    const selectedFilesRef = useRef();
    const cakesValueBox = useRef();
    const otherValueBox = useRef();

    const onChangeInputHandler = () => {
        selectedFilesRef.current?
        setPreviewImg(URL.createObjectURL(selectedFilesRef.current.files[0])):
        setPreviewImg(null);
    }

    const radioButtonGroupValueExtractor = () => {
        if(!cakesValueBox.current.checked && !otherValueBox.current.checked){
            setCheckedValue(null);
        }
        else{
            if(cakesValueBox.current.checked) setCheckedValue(cakesValueBox.current.value);
            if(otherValueBox.current.checked) setCheckedValue(otherValueBox.current.value)
        }
    }

    const onUploadClickedHandler = () => {
        props.uploadImage(selectedFilesRef.current.files[0],checkedValue,setUploadTask);
    }

    const onCancelUploadHandler = () => {
        uploadTask.cancel();
        props.uploadCanceled();
    }

    useEffect(()=>{
        if(previewImg!==null && checkedValue!==null){
            setDisabled(false);
        }
        else setDisabled(true);
    },[previewImg,checkedValue]);

    useEffect(()=>{
        console.log('[UploadNew.js] rendered...');
    });

    return (
        <form onSubmit={e => e.preventDefault()} className={classes.upload} >
            <div className={classes.inputlabel} >
                <label htmlFor="uploader" >
                    CLICK TO BROWSE 
                    <img src={uploadIcon} />
                </label>
                <input 
                    accept="image/*"
                    onChange={onChangeInputHandler}
                    ref={selectedFilesRef}
                    id="uploader"  
                    type="file" 
                    />
            </div>
            <div className={classes.previewdiv} >
                {previewImg ? <img src={previewImg} /> : <span>preview</span>}
            </div>
            <div onClick={radioButtonGroupValueExtractor} className={classes.checkboxes} >
                <input 
                    ref={cakesValueBox} 
                    style={{width:'min-content',boxShadow:'none'}}
                    type="radio" 
                    id="maincakes" 
                    name="cakes" 
                    value="sweet"/>
                <label htmlFor="maincakes">sweet</label>
                <input  
                    ref={otherValueBox}
                    style={{width:'min-content',boxShadow:'none'}}
                    type="radio" 
                    id="othercakes" 
                    name="cakes" 
                    value="other" />
                <label htmlFor="othercakes">other</label>
            </div>
            <div className={classes.controlbuttons}>
                <Button 
                    clicked={onUploadClickedHandler} 
                    disabled={disabled || (props.uploadProgress>0 && props.uploadProgress<100.00)} 
                    contained >
                    UPLOAD
                </Button>
                <Button
                    disabled={!(props.uploadProgress>0 && props.uploadProgress<100.00)} 
                    outlined 
                    clicked={onCancelUploadHandler}>CANCEL</Button>
            </div>
            <p>{props.uploadProgress}%</p>
            <Progressbar progress={props.uploadProgress} />
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        uploadImage: (file,ref,uploadTaskBundler) => dispatch(actions.uploadImage(file,ref,uploadTaskBundler)),
        uploadCanceled: () => dispatch(actions.uploadImageCanceled())
    }
}

const mapStateToProps = state => {
    return {
        uploadProgress: state.uploadImage.progress
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(uploadNew);
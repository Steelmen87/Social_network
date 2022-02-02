import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusFunction";
import userPhoto from "../../../../assets/images/user.png"
import Contacts from "./Contacts";
import ProfileDataForm from "./ProfileDataForm";
import {getUsersProFile} from "../../../../redux/profile-reduser";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import style from "../../../common/FormsControls/FormsControls.module.css";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then((res) => {
                setEditMode(false)
            })
    }

    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={profile.photos.large || userPhoto} alt='' className={s.mainPhoto}/>

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}/>
                {isOwner &&

                <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        profile={profile}
                        onSubmit={onSubmit}/>
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}/>}

            </div>
        </div>
    )

}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsersProFile(18301));
    }, [dispatch])
    return <div className={style.shadow}>
        {isOwner && <div>
            {/*<button onClick={goToEditMode}>Edit</button>*/}
            <Button type="primary" size="small" onClick={goToEditMode}>Edit</Button>
        </div>}
        <div>
            Full name : {profile.fullName}
        </div>
        <div>
            Looking for a job : {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            My professional skills : {profile.lookingForAJobDescription}
        </div>}
        <div>
            About me : {profile.aboutMe}
        </div>
        <div>
            Contacts : {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export default ProfileInfo;


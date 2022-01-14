import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusFunction";
import userPhoto from "../../../../assets/images/user.png"
import Contacts from "./Contacts";
import ProfileDataForm from "./ProfileDataForm";
import {getUsersProFile} from "../../../../redux/profile-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";


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
        setEditMode(false)
    }

    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={profile.photos.large || userPhoto} alt='' className={s.mainPhoto}/>

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

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
    }, [profile])
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <strong>Full name: </strong>{profile.fullName}
        </div>
        <div>
            <strong>Looking for a job:</strong>{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <strong>
                My professional skills:</strong>
            {profile.lookingForAJobDescription}

        </div>}
        <div>
            <strong>About me:</strong>{profile.aboutMe}
        </div>
        <div>
            <strong>Contacts :</strong>{Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export default ProfileInfo;


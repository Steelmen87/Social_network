import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusFunction";
import userPhoto from "../../../../assets/images/user.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={profile.photos.large || userPhoto} alt='' className={s.mainPhoto}/>

                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>
                    <div>
                        <strong>Full name: </strong>{profile.fullName}
                    </div>
                    <div>
                        <strong>Looking for a job:</strong>{profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob &&
                    <div>
                        <strong>
                            My professional skills:{profile.lookingForAJobDescription}
                        </strong>
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
            </div>
        </div>
    )

}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.padding}><strong>{contactTitle} :</strong> {contactValue}</div>
}

export default ProfileInfo;


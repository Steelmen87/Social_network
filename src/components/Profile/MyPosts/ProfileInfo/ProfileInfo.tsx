import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusFunction";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={profile.photos.large} alt=''/>

                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
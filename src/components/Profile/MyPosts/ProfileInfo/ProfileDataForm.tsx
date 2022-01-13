import React from "react";
import Contacts from "./Contacts";
import { createField, Input } from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
    return <form>
        <button onClick={()=>{}}>Save</button>
        <div>
            <strong>Full name: </strong>{createField("full name", "fullName", {}, Input)}{profile.fullName}
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
            {/*<strong>Contacts :</strong>{Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}*/}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
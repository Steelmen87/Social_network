import React from "react";
import Contacts from "./Contacts";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div>
            <strong>Full name: </strong> {createField("full name", "fullName", [], Input)}
        </div>
        <div>
            <strong>Looking for a job:</strong> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <strong>
                My professional skills: </strong>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <strong>About me: </strong> {createField("about me", "aboutMe", [], Textarea)}
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
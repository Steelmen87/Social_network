import React from "react";
import s from "./ProfileInfo.module.css"
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
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
                <strong>Contacts :</strong>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <strong>{key} : </strong> {createField(key, "contacts." + key, [], Input)}
                </div>
            })}
            </div>
        </form>)
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm)


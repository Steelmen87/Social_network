import s from "./ProfileInfo.module.css";
import React from "react";

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.padding}><strong>{contactTitle} :</strong> {contactValue}</div>
}

export default  Contacts;
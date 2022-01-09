import React from 'react'
import styles from "./Paginator.module.css"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

let Paginator: React.FC<PropsType> = (props) => {
    let {totalUsersCount, pageSize, currentPage, onPageChanged} = props
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.wrap}>
        {pages.map(p => {
            return <span className={currentPage === p ? styles.selectedPage : ""}
                         onClick={() => {
                             onPageChanged(p)
                         }}>{p}*</span>
        })}
    </div>

}
export default Paginator;
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import request from "axios";

import styles from './SidebarAccount.module.scss'
import SuggestedAccounts from "~/components/SuggestedAccounts";
import { followedAccounts, suggestedAccounts } from "~/helpers";

const cx = classNames.bind(styles)

function SidebarAccount() {

    const [suggestAcc, setSuggestAcc] = useState([])
    const [followedAcc, setFollowedAcc] = useState([])

    // call API to get suggested and followed accounts
    useEffect(() => {

        // const suggestAccApi = async () => {
        //     const suggestAccountData = await request.get('http://localhost:3000/suggested_account')
        //     const followedAccountData = await request.get('http://localhost:3000/followed_account')

        //     setSuggestAcc(suggestAccountData.data)
        //     setFollowedAcc(followedAccountData.data)
        // }

        // suggestAccApi()
        
        // mock data
        setSuggestAcc(suggestedAccounts)
        setFollowedAcc(followedAccounts)
    }, [])

    return (
        <div className={cx('wrapper')}>
            <SuggestedAccounts label='Suggested accounts' data={suggestAcc} />
            <SuggestedAccounts label='Followed accounts' data={followedAcc} />
        </div>
    );
}

export default SidebarAccount;
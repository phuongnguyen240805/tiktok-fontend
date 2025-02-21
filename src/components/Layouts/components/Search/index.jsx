import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchServices'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('') // two way binding (input search)
    const [searchResult, setSearchResult] = useState([]) // search result
    const [showResult, setShowResult] = useState(true) // show result search
    const [loading, setLoading] = useState(false) // show status load

    const debounced = useDebounce(searchValue, 500) // delay action 

    const inputRef = useRef()

    // handle fetch api search result
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }

        const searchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounced)
            setSearchResult(result)

            setLoading(false)
        }

        searchApi()
    }, [debounced])

    // clear input and focus
    const handleClear = useCallback(() => {
        setSearchValue('')

        inputRef.current.focus()
    }, [])

    // handle hide result when out click
    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {
                            searchResult.map(searchData => (
                                <AccountItem
                                    key={searchData?.id}
                                    data={searchData}
                                />
                            ))
                        }
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value.trimStart())}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {
                    loading &&
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                }

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
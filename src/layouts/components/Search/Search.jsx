import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('') // two way binding (input search)
    const [searchResult, setSearchResult] = useState([]) // search result
    const [showResult, setShowResult] = useState(false) // show result search
    const [loading, setLoading] = useState(false) // show status load

    const debouncedValue = useDebounce(searchValue, 500) // delay action 

    const inputRef = useRef()

    // handle fetch api search result
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return;
        }

        const searchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debouncedValue)
            setSearchResult(result)

            setLoading(false)
        }

        searchApi()
    }, [debouncedValue])

    // clear input and focus
    const handleClear = () => {
        setSearchValue('')

        inputRef.current.focus()
    }

    // handle hide result when out click
    const handleHideResult = useCallback(() => {
        setShowResult(false)
    }, [])

    // handle enter input empty
    // const handleChange = (e) => {
    //     const searchValue = e.target.value

    //     if (!searchValue.startsWith(' ')) {
    //         setSearchValue(searchValue)
    //     }
    // }

    return (
        // Using a wrapper <div> or <span> tag to avoid warning
        <div>
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
                        onChange={e => setSearchValue(e.target.value.trimStart())} // ko nhap dau cach dau tien
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

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
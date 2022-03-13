import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { SEARCH_QUERY_NAME } from '~/constants'

import { Button } from '../button'
import { TextInput } from '../form-control/TextInput'
import styles from './SearchBox.module.css'

export const SearchBox: React.FC = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (typeof router.query[SEARCH_QUERY_NAME] !== 'undefined') {
      setQuery(router.query[SEARCH_QUERY_NAME] as string)
    }
  }, [router])

  const handleSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({
      pathname: '/',
      query: query !== '' && {
        [SEARCH_QUERY_NAME]: query
      }
    })
  }
  return (
    <div className={styles.search}>
      <TextInput placeholder="Ara" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={handleSearch}>Ara</Button>
    </div>
  )
}

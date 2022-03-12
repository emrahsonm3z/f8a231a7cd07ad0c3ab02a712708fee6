import type { NextPage } from 'next'

import { Button } from '~/components/button'
import { Search } from '~/components/icons'
import { theme } from '~/theme'

const Home: NextPage = () => {
  return (
    <div>
      <main>Start Project</main>
      <section>
        <Button>Click</Button>
        <Search width={32} height={32} color={theme.colors.primary} />
      </section>
    </div>
  )
}

export default Home

import { Page } from 'open-twa'

const webApp = window.Telegram.WebApp

import styles from './ForwardPage.module.scss'

export function ForwardPage(): JSX.Element {
  return (
    <Page>
      Please open{' '}
      <a href="https://t.me/joincommunity_bot" className={styles.link}>
        @joincommunity_bot
      </a>
    </Page>
  )
}

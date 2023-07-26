import cn from 'classnames'

import styles from './welcome.module.scss'

export default {
  title: 'Fragment',
  subTitle: 'Telegram @usernames auctions',
  iconName: 'Fragment',
  iconFill: 'white',
  slug: 'fragment',
  background: 'style-fragment',
  slides: [
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.mb24, styles.center)}>
            <svg
              width="63"
              height="49"
              viewBox="0 0 63 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.0262 0.529297H3.24558C2.36441 0.529297 2.11815 1.7383 2.92912 2.08296L31.3194 14.1489C31.5217 14.2348 31.7501 14.2348 31.9524 14.1489L60.3427 2.08296C61.1537 1.7383 60.9074 0.529297 60.0262 0.529297Z"
                fill="#4689D4"
              />
              <path
                d="M0.782041 7.28283L27.7228 48.4221C28.1632 49.0947 29.2087 48.7828 29.2087 47.9789L29.2087 18.8537C29.2087 18.5343 29.0208 18.2449 28.7292 18.1148L1.7884 6.10067C1.051 5.77183 0.339709 6.60738 0.782041 7.28283Z"
                fill="#4689D4"
              />
              <path
                d="M35.8083 48.4221L62.7491 7.28283C63.1915 6.60738 62.4802 5.77183 61.7428 6.10067L34.802 18.1148C34.5103 18.2449 34.3224 18.5343 34.3224 18.8537L34.3224 47.9789C34.3224 48.7828 35.3679 49.0947 35.8083 48.4221Z"
                fill="#4689D4"
              />
            </svg>
          </div>
          <div className={cn(styles.h1, styles.center)}>Fragment:</div>
          <div
            className={cn(styles.h1, styles.center, styles.mb12, styles.pale)}
          >
            a unique @username
            <br /> or Telegram number
          </div>
        </>
      ),
      mainButton: {
        action: 'next',
        text: 'Next',
      },
    },
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.h1, styles.pale)}>Fragment for</div>
          <div className={cn(styles.h1, styles.mb12)}>@usernames</div>
          <div className={cn(styles.text)}>
            Get a short username or sell your current one for Toncoin in just a
            few clicks
          </div>
        </>
      ),
      mainButton: {
        action: 'next',
        text: 'Next',
      },
    },
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.h1, styles.pale)}>Fragment for</div>
          <div className={cn(styles.h1, styles.mb12)}>Numbers</div>
          <div className={cn(styles.text)}>
            2-in-1: fancy +888 numbers and a totally secure way to access your
            account
          </div>
        </>
      ),
      mainButton: {
        action: 'next',
        text: 'Next',
      },
    },
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.h1, styles.pale)}>Fragment for</div>
          <div className={cn(styles.h1, styles.mb12)}>Telegram Premium</div>
          <div className={cn(styles.text)}>
            Purchase Telegram Premium with Toncoin for yourself or as a gift
          </div>
        </>
      ),
      mainButton: {
        text: 'Go to Fragment',
        action: 'follow',
        value: 'https://fragment.com',
      },
    },
  ],
}

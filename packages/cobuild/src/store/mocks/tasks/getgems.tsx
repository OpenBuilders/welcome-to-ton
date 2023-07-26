import cn from 'classnames'

import styles from './welcome.module.scss'

export default {
  title: 'Getgems',
  subTitle: 'NFT Marketplace',
  iconName: 'Getgems',
  iconFill: 'white',
  slug: 'getgems',
  background: 'style-getgems',
  slides: [
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.mb32)}>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0.5C24 13.7548 13.2548 24.5 0 24.5C0 11.2452 10.7452 0.5 24 0.5ZM24 48.5C10.7452 48.5 0 37.7548 0 24.5C13.2548 24.5 24 35.2452 24 48.5ZM48 24.5C48 37.7548 37.2548 48.5 24 48.5C24 35.2452 34.7452 24.5 48 24.5ZM46 2.5C46 13.5457 37.0457 22.5 26 22.5C26 11.4543 34.9543 2.50001 46 2.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cn(styles.h1, styles.mb16)}>Get the gems</div>
          <div className={cn(styles.text, styles.mb10)}>
            Getgems is the most popular NFT marketplace on TON.
          </div>
          <div className={cn(styles.text)}>
            Explore popular collections, buy and sell NFTs or even create your
            own collection.
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
          <div className={cn(styles.mb32)}>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0.5C24 13.7548 13.2548 24.5 0 24.5C0 11.2452 10.7452 0.5 24 0.5ZM24 48.5C10.7452 48.5 0 37.7548 0 24.5C13.2548 24.5 24 35.2452 24 48.5ZM48 24.5C48 37.7548 37.2548 48.5 24 48.5C24 35.2452 34.7452 24.5 48 24.5ZM46 2.5C46 13.5457 37.0457 22.5 26 22.5C26 11.4543 34.9543 2.50001 46 2.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cn(styles.h1, styles.mb16)}>Low fees</div>
          <div className={cn(styles.text, styles.mb10)}>
            Mint and exchange NFTs with almost free network fees!
          </div>
          <div className={cn(styles.text, styles.mb10)}>
            Huge advantage over other blockchains
          </div>
          <div className={cn(styles.text)}>Ethereum, ciao!</div>
        </>
      ),
      mainButton: {
        text: 'Go to Getgems',
        action: 'follow',
        value: 'https://getgems.io',
      },
    },
  ],
}

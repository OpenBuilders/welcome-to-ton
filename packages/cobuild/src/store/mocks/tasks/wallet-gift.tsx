import cn from 'classnames'

import styles from './welcome.module.scss'

export default {
  title: 'Telegram @wallet',
  subTitle: 'Receive a small gift',
  iconName: 'Send',
  iconStroke: 'white',
  slug: 'wallet-gift',
  background: 'style-wallet',
  slides: [
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.mb24, styles.center)}>
            <svg
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1233_86099)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.750141 12.1347C-0.241699 14.0813 -0.241699 16.6295 -0.241699 21.726V42.656C-0.241699 47.7525 -0.241699 50.3007 0.750141 52.2473C1.62259 53.9596 3.01471 55.3517 4.72699 56.2242C6.67358 57.216 9.22182 57.216 14.3183 57.216H46.6233C51.7198 57.216 54.268 57.216 56.2146 56.2242C57.9269 55.3517 59.319 53.9596 60.1915 52.2473C60.9511 50.7564 61.1289 48.9125 61.1706 45.8411H45.2583C41.0182 45.8411 38.8982 45.8411 37.2259 45.1484C34.9961 44.2248 33.2246 42.4533 32.301 40.2235C31.6083 38.5512 31.6083 36.4312 31.6083 32.1911C31.6083 27.9511 31.6083 25.831 32.301 24.1587C33.2246 21.929 34.9961 20.1574 37.2259 19.2338C38.8982 18.5411 41.0182 18.5411 45.2583 18.5411H61.1706C61.129 15.4696 60.9511 13.6257 60.1915 12.1347C59.319 10.4224 57.9269 9.0303 56.2146 8.15786C54.268 7.16602 51.7198 7.16602 46.6233 7.16602H14.3183C9.22182 7.16602 6.67358 7.16602 4.72699 8.15786C3.01471 9.0303 1.62259 10.4224 0.750141 12.1347Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.2095 25.6289C35.5896 26.8455 35.5896 28.4381 35.5896 31.6234V32.7609C35.5896 35.9462 35.5896 37.5389 36.2095 38.7555C36.7548 39.8257 37.6249 40.6958 38.695 41.241C39.9117 41.8609 41.5043 41.8609 44.6896 41.8609H54.9271C58.1124 41.8609 59.705 41.8609 60.9217 41.241C61.9918 40.6958 62.8619 39.8257 63.4072 38.7555C64.0271 37.5389 64.0271 35.9462 64.0271 32.7609V31.6234C64.0271 28.4381 64.0271 26.8455 63.4072 25.6289C62.8619 24.5587 61.9918 23.6886 60.9217 23.1433C59.705 22.5234 58.1124 22.5234 54.9271 22.5234H44.6896C41.5043 22.5234 39.9117 22.5234 38.695 23.1433C37.6249 23.6886 36.7548 24.5587 36.2095 25.6289ZM45.2584 36.7424C47.7713 36.7424 49.8084 34.7053 49.8084 32.1924C49.8084 29.6795 47.7713 27.6424 45.2584 27.6424C42.7455 27.6424 40.7084 29.6795 40.7084 32.1924C40.7084 34.7053 42.7455 36.7424 45.2584 36.7424Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1233_86099">
                  <rect
                    width="64"
                    height="64"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={cn(styles.h1, styles.mb12, styles.center)}>
            Wallet in your
            <br /> Telegram
          </div>
          <div className={cn(styles.text, styles.center)}>
            Send, buy and store cryptocurrencies
            <br /> directly on Telegram
          </div>
        </>
      ),
      mainButton: {
        text: 'Next',
        action: 'next',
      },
    },
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.h1, styles.mb12, styles.center)}>
            Buy and sell crypto <br /> curriencies
          </div>
          <div className={cn(styles.text, styles.center)}>
            Buy, exchange and sell crypto via card
            <br />
            or peer-to-peer market
          </div>
        </>
      ),
      mainButton: {
        text: 'Next',
        action: 'next',
      },
    },
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.h1, styles.mb12, styles.center)}>
            Send to friends
          </div>
          <div className={cn(styles.text, styles.center)}>
            Choose amount and telegram chat to send the crypto directly to your
            friends
          </div>
        </>
      ),
      mainButton: {
        text: 'Next',
        action: 'next',
      },
    },
    // {
    //   contentPosition: 'center',
    //   content: (
    //     <>
    //       <div className={cn(styles.mb24, styles.center)}>
    //         <img
    //           src="https://cobuild.ams3.cdn.digitaloceanspaces.com/community/ton/welcome-wallet-coin.png"
    //           width="80px"
    //           height="80px"
    //         />
    //       </div>
    //       <div className={cn(styles.h1, styles.mb12, styles.center)}>
    //         Receive a gift!
    //       </div>
    //       <div className={cn(styles.text, styles.center)}>
    //         Activate your first cheque to get a coin
    //       </div>
    //     </>
    //   ),
    //   mainButton: {
    //     text: 'Recieve a gift',
    //     action: 'check',
    //   },
    // },
  ],
}

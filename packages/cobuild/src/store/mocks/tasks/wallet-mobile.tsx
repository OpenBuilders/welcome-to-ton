import cn from 'classnames'

import styles from './welcome.module.scss'

export default {
  title: 'Tonkeeper',
  subTitle: 'Non-custodial wallet for your assets',
  iconName: 'Wallet',
  iconFill: 'white',
  slug: 'wallet-mobile',
  background: 'style-tonkeeper',
  slides: [
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.mb24, styles.center)}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1233_86087)">
                <path
                  d="M31.8258 0L0 14.7424L31.8258 29.1338L63.9975 14.7424L31.8258 0Z"
                  fill="#46AEF5"
                />
                <path
                  d="M31.9434 64.0005L63.9999 14.7422L31.8281 29.1336L31.9434 64.0005Z"
                  fill="#336791"
                />
                <path
                  d="M31.9411 64.0005L0 14.7422L31.8258 29.1336L31.9411 64.0005Z"
                  fill="#3A8CC6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1233_86087">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={cn(styles.h1, styles.mb12, styles.center)}>
            Keep funds closer
          </div>
          <div className={cn(styles.text, styles.center)}>
            Tonkeeper is a non-custodial wallet that gives you full access to
            your funds and supports NFTs and other crypto coins
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
          <div className={cn(styles.mb24, styles.center)}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1233_86087)">
                <path
                  d="M31.8258 0L0 14.7424L31.8258 29.1338L63.9975 14.7424L31.8258 0Z"
                  fill="#46AEF5"
                />
                <path
                  d="M31.9434 64.0005L63.9999 14.7422L31.8281 29.1336L31.9434 64.0005Z"
                  fill="#336791"
                />
                <path
                  d="M31.9411 64.0005L0 14.7422L31.8258 29.1336L31.9411 64.0005Z"
                  fill="#3A8CC6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1233_86087">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={cn(styles.h1, styles.mb12, styles.center)}>
            All-in-one DeFi
          </div>
          <div className={cn(styles.text, styles.center)}>
            In the mobile app you can buy, sell, send, receive tokens and NFTs
            and connect to other web3 services
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
          <div className={cn(styles.mb24, styles.center)}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1233_86087)">
                <path
                  d="M31.8258 0L0 14.7424L31.8258 29.1338L63.9975 14.7424L31.8258 0Z"
                  fill="#46AEF5"
                />
                <path
                  d="M31.9434 64.0005L63.9999 14.7422L31.8281 29.1336L31.9434 64.0005Z"
                  fill="#336791"
                />
                <path
                  d="M31.9411 64.0005L0 14.7422L31.8258 29.1336L31.9411 64.0005Z"
                  fill="#3A8CC6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1233_86087">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={cn(styles.h1, styles.mb12, styles.center)}>
            Setup your Wallet
          </div>
          <div className={cn(styles.text, styles.center)}>
            Download a mobile app and get access to the key tools within TON
            ecosystem
          </div>
        </>
      ),
      mainButton: {
        text: 'Finish the task',
        action: 'next',
      },
    },
  ],
}

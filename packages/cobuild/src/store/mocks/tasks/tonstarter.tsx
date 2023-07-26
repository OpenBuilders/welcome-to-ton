import cn from 'classnames'

import styles from './welcome.module.scss'

export default {
  title: 'Tonstarter',
  subTitle: 'Community incentives',
  iconName: 'Tonstarter',
  iconFill: 'white',
  slug: 'tonstarter',
  background: 'style-tonstarter',
  slides: [
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.mb24)}>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.274 5.60902C37.6324 4.51367 36.4373 3.83331 35.1541 3.83331H8.55542L12.0096 9.73166H31.0309L21.5203 25.9722L24.9744 31.8705L38.274 9.16044C38.9156 8.06509 38.9156 6.70438 38.274 5.60902Z"
                fill="white"
              />
              <path
                d="M19.7951 28.9214L8.55735 9.73166H8.56772L5.11428 3.83331H4.43418C3.15136 3.83331 1.95591 4.51367 1.31431 5.60902C0.672714 6.70438 0.673084 8.06509 1.31431 9.16044L16.6752 35.3909C17.3165 36.4863 18.5119 37.1666 19.7947 37.1666C21.0776 37.1666 22.273 36.4863 22.9146 35.3909L23.2526 34.8139L19.7988 28.9148L19.7951 28.9214ZM17.7333 32.4418C17.7341 32.4403 17.7352 32.4388 17.7359 32.4374C17.7352 32.4388 17.7344 32.4403 17.7333 32.4418Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cn(styles.h1, styles.mb12)}>Launchpad</div>
          <div className={cn(styles.text, styles.mb10)}>
            Tonstarter allows projects to launch their tokens and reward the
            community
          </div>
          <div className={cn(styles.text)}>
            Over $3 million has been raised and distributed through early-stage
            fundraising, public sales, and community incentive programs
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
          <div className={cn(styles.mb24)}>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.274 5.60902C37.6324 4.51367 36.4373 3.83331 35.1541 3.83331H8.55542L12.0096 9.73166H31.0309L21.5203 25.9722L24.9744 31.8705L38.274 9.16044C38.9156 8.06509 38.9156 6.70438 38.274 5.60902Z"
                fill="white"
              />
              <path
                d="M19.7951 28.9214L8.55735 9.73166H8.56772L5.11428 3.83331H4.43418C3.15136 3.83331 1.95591 4.51367 1.31431 5.60902C0.672714 6.70438 0.673084 8.06509 1.31431 9.16044L16.6752 35.3909C17.3165 36.4863 18.5119 37.1666 19.7947 37.1666C21.0776 37.1666 22.273 36.4863 22.9146 35.3909L23.2526 34.8139L19.7988 28.9148L19.7951 28.9214ZM17.7333 32.4418C17.7341 32.4403 17.7352 32.4388 17.7359 32.4374C17.7352 32.4388 17.7344 32.4403 17.7333 32.4418Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cn(styles.h1, styles.mb12)}>Explore TON DeFi</div>
          <div className={cn(styles.text)}>
            Be the first to know about rewards for contributing to projects on
            TON and token sales
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
          <div className={cn(styles.mb24)}>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.274 5.60902C37.6324 4.51367 36.4373 3.83331 35.1541 3.83331H8.55542L12.0096 9.73166H31.0309L21.5203 25.9722L24.9744 31.8705L38.274 9.16044C38.9156 8.06509 38.9156 6.70438 38.274 5.60902Z"
                fill="white"
              />
              <path
                d="M19.7951 28.9214L8.55735 9.73166H8.56772L5.11428 3.83331H4.43418C3.15136 3.83331 1.95591 4.51367 1.31431 5.60902C0.672714 6.70438 0.673084 8.06509 1.31431 9.16044L16.6752 35.3909C17.3165 36.4863 18.5119 37.1666 19.7947 37.1666C21.0776 37.1666 22.273 36.4863 22.9146 35.3909L23.2526 34.8139L19.7988 28.9148L19.7951 28.9214ZM17.7333 32.4418C17.7341 32.4403 17.7352 32.4388 17.7359 32.4374C17.7352 32.4388 17.7344 32.4403 17.7333 32.4418Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cn(styles.h1, styles.mb12)}>Contribute</div>
          <div className={cn(styles.text)}>
            Participate in any ongoing event on Tonstarter and receive rewards
            at the end of the program
          </div>
        </>
      ),
      mainButton: {
        text: 'Go to Tonstarter',
        action: 'follow',
        value: 'https://tonstarter.com',
      },
    },
  ],
}

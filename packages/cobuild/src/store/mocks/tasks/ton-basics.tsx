import cn from 'classnames'

import styles from './welcome.module.scss'

export default {
  title: 'TON Story',
  iconName: 'Ton',
  iconStroke: 'white',
  slug: 'ton-basics',
  background: 'style-ton-basics',
  slides: [
    {
      contentPosition: 'center',
      content: (
        <>
          <div className={cn(styles.h1, styles.line)}>
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.14893 0.5H21.9894C22.6206 0.5 23.2513 0.592699 23.9104 0.899992C24.7005 1.26817 25.1195 1.84879 25.413 2.27809C25.4359 2.31149 25.4572 2.34591 25.477 2.38113C25.8221 2.99549 26 3.65881 26 4.37234C26 5.05031 25.8387 5.78895 25.477 6.43273C25.4736 6.43886 25.47 6.445 25.4665 6.45113L14.1952 25.8128C13.9466 26.2397 13.4892 26.5017 12.9951 26.5C12.501 26.4982 12.0454 26.233 11.7999 25.8043L0.73554 6.48385C0.732359 6.47874 0.729178 6.4734 0.725998 6.46817C0.472779 6.05091 0.0811949 5.40566 0.0126931 4.57284C-0.0502423 3.80717 0.121863 3.0399 0.506633 2.37465C0.891402 1.70929 1.47066 1.17741 2.16738 0.851824C2.91442 0.502726 3.67146 0.5 4.14893 0.5ZM11.617 3.26597H4.14893C3.65829 3.26597 3.46993 3.29619 3.33827 3.35776C3.15617 3.44274 3.00326 3.58247 2.90102 3.75934C2.79878 3.93622 2.75254 4.14116 2.76935 4.34621C2.77901 4.4639 2.82695 4.5984 3.1097 5.06474C3.11561 5.07451 3.1214 5.08439 3.12708 5.09428L11.617 19.9192V3.26597ZM14.383 3.26597V19.9924L23.0695 5.07076C23.1676 4.89263 23.234 4.63521 23.234 4.37234C23.234 4.15911 23.1898 3.97394 23.091 3.78297C22.9873 3.63393 22.9241 3.55498 22.8713 3.5009C22.826 3.45466 22.7911 3.4299 22.7418 3.40695C22.5364 3.31119 22.3262 3.26597 21.9894 3.26597H14.383Z"
                fill="white"
              />
            </svg>
            &nbsp;TON:
          </div>
          <div className={cn(styles.h1, styles.mb32)}>The Open Network</div>

          <ul className={styles.ul}>
            <li className={cn(styles.text)}>
              A decentralized and open internet
            </li>
            <li className={cn(styles.text)}>Built by community</li>
            <li className={cn(styles.text)}>Designed by Telegram</li>
          </ul>
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
          <div className={cn(styles.h1, styles.mb4, styles.center)}>
            Audience access
          </div>
          <div className={cn(styles.text, styles.mb36, styles.center)}>
            Monthly Active Users
          </div>

          <div className={styles.grid}>
            <div className={styles.gridRow}>
              <div className={styles.gridCell}>
                <div className={cn(styles.h1, styles.mb4)}>19M</div>
                <div className={cn(styles.text)}>Bitcoin</div>
              </div>
              <div className={styles.gridCell}>
                <div className={cn(styles.h1, styles.mb4)}>13M</div>
                <div className={cn(styles.text)}>Ethereum</div>
              </div>
            </div>
            <div className={styles.gridRow}>
              <div className={styles.gridCell}>
                <div className={cn(styles.h1, styles.mb4)}>7M</div>
                <div className={cn(styles.text)}>Solana</div>
              </div>
              <div className={styles.gridCell}>
                <div className={cn(styles.h1, styles.mb4)}>700M 💥</div>
                <div className={cn(styles.text)}>Telegram</div>
              </div>
            </div>
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
          <div className={cn(styles.h1, styles.mb4, styles.center)}>
            Telegram & TON
          </div>
          <div className={cn(styles.text, styles.mb36, styles.center)}>
            use cases
          </div>

          <div className={styles.ulRow}>
            <div className={cn(styles.text)}>1.</div>&nbsp;
            <div className={cn(styles.text, styles.bold)}>Wallet</div>
          </div>
          <div className={cn(styles.text, styles.ulSubrow, styles.mb24)}>
            Buy, exchange, send coins to your friends
          </div>

          <div className={styles.ulRow}>
            <div className={cn(styles.text)}>2.</div>&nbsp;
            <div className={cn(styles.text, styles.bold)}>Mobile</div>
          </div>
          <div className={cn(styles.text, styles.ulSubrow, styles.mb24)}>
            Always have internet
            <br /> with a travel E-SIM in X countries
          </div>

          <div className={styles.ulRow}>
            <div className={cn(styles.text)}>2.</div>&nbsp;
            <div className={cn(styles.text, styles.bold)}>Fragment</div>
          </div>
          <div className={cn(styles.text, styles.ulSubrow, styles.mb24)}>
            Get your favourite telegram @username or phone number
          </div>

          <div
            className={cn(styles.text, styles.center, styles.pale, styles.bold)}
          >
            More to come!
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
          <div className={cn(styles.h1, styles.mb4)}>TON</div>
          <div className={cn(styles.text, styles.mb32)}>2022 → Now </div>

          <div className={cn(styles.h1, styles.mb8)}>
            2.3M<span className={cn(styles.text, styles.pale)}> x20</span>
          </div>
          <div className={cn(styles.text, styles.mb24)}>
            the number of network
            <br /> accounts on TON
          </div>

          <div className={cn(styles.h1, styles.mb8)}>100+</div>
          <div className={cn(styles.text, styles.mb24)}>
            Projects alive in the ecosystem
          </div>

          <div className={cn(styles.h1, styles.mb8)}>
            Top 26<span className={cn(styles.text, styles.pale)}> +113</span>
          </div>
          <div className={cn(styles.text)}>rating global cryptocurrencies</div>
        </>
      ),
      mainButton: {
        action: 'next',
        text: 'Finish the task',
      },
    },
  ],
}

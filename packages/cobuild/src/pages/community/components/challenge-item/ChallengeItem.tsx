import { Challenge } from '@store'
import { Content, Image, Text } from 'open-twa'
import { useNavigate } from 'react-router-dom'

import styles from './ChallengeItem.module.scss'

interface ChallengeItemProps {
  challenge: Challenge
}

export const ChallengeItem = ({
  challenge,
}: ChallengeItemProps): JSX.Element => {
  const {
    id,
    title,
    description,
    imageUrl,
    listImageUrl,
    prize,
    footer,
    price,
  } = challenge
  const navigate = useNavigate()

  return (
    <Content
      className={styles.root}
      padding="16-0"
      onClick={() => navigate(`/challenge/${id}`)}
    >
      <Content grow column spacingChild="2">
        <Text weight="semibold">{title}</Text>
        <Text type="subhead" color="secondary" margin="0-0-8-0">
          {description}
        </Text>
        <Content align="center">
          {price ? (
            <div className={styles.price}>
              TON {price}
              <span className={styles.dot}>•</span>
            </div>
          ) : null}
          <div className={styles.footer}>{footer}</div>
          <div className={styles.prizeBadge}>{prize}</div>
        </Content>
      </Content>
      <Image src={listImageUrl} height="96px" />
    </Content>
  )
}

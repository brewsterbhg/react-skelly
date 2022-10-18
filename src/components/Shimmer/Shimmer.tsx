/** @jsxImportSource @emotion/react */
import invisibleSquare from './invisible_square.png'
import * as styles from './Shimmer.styles'

interface ShimmerProps {
  useImage?: boolean
}

export function Shimmer({ useImage = false }: ShimmerProps) {
  return (
    <div css={styles.shimmerStyle}>
      {useImage !== false ? (
        <img src={invisibleSquare} alt='' css={styles.animationStyle} />
      ) : (
        <span css={styles.animationStyle} data-testid='react-skelly-shimmer' />
      )}
    </div>
  )
}

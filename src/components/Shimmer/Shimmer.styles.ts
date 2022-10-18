import { css, keyframes } from '@emotion/react'

const shimmerAnimation = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const animationStyle = css({
  animationDuration: '1.5s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationName: shimmerAnimation,
  animationTimingFunction: 'linear',
  background: '#eff1f3',
  backgroundImage: 'linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  display: 'inline-block',
  position: 'relative',
  width: '100%'
})

const shimmerStyle = css({
  display: 'inline-block',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  width: '100%'
})

export { animationStyle, shimmerStyle }

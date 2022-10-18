import { render, screen } from '@testing-library/react'

import { Shimmer } from '../Shimmer'

describe('<Shimmer />', () => {
  it('renders', () => {
    render(<Shimmer />)

    expect(screen.getByTestId('react-skelly-shimmer')).toBeInTheDocument()
  })

  it('renders as an <img /> when useImage prop is provided', () => {
    render(<Shimmer useImage />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})

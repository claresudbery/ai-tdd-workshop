import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react-native'

// mock expo-router to intercept navigation calls
jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn()
  }
}))

// mock useProfile so the component renders predictably
jest.mock('@/profile', () => ({
  useProfile: () => ({ profile: { name: 'Jane' }, isLoaded: true })
}))

import Page from './username'

describe('username page', () => {
  it('navigates to /thanks when Next pressed', () => {
    const { router } = require('expo-router')

    render(<Page />)

    fireEvent.press(screen.getByText('Next'))

    expect(router.navigate).toHaveBeenCalledWith('/thanks')
  })
})

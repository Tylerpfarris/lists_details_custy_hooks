import React from 'react';
import {render, screen } from '@testing-library/react'
import AnimalCrossingContainer from './AnimalCrossingContainer';

describe('AnimalCrossingContainer', () => {
   it('displays Animal Crossing characters', async () => {
      render(<AnimalCrossingContainer />)
      screen.getByText('Hey')

      const ulEl = await screen.getByLabelText('characters')
   })
})


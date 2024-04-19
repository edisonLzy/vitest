import { expect, test, vi } from 'vitest'

import { squared } from '../src/basic.js'

// Edit an assertion and save to see HMR in action

// vi.mock('rc-motion/es/util/motion', async (importOrigin) => {
//   console.log('asdasdasdasd')

//   return {
//     ...importOrigin(),
//     supportTransition: true,
//   }
// })

// vi.mock('rc-motion', async (importOrigin) => {
//   console.log('yyyyyy', await importOrigin())

//   return {
//     ...importOrigin(),
//     supportTransition: true,
//   }
// })

test('Squared', () => {
  vi.stubGlobal('AnimationEvent', {
    name: 'asd',
  })
  vi.stubGlobal('TransitionEvent', {})
  console.log(window.AnimationEvent)

  expect(window.AnimationEvent).toBeDefined()
  expect(squared(2)).toBe(4)
  expect(squared(12)).toBe(144)

  vi
})

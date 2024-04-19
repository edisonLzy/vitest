import CSSMotion from 'rc-motion'
import { createElement } from 'react'

export function squared(n: number) {
  return n * n
}

const el = createElement(CSSMotion)

export {
  CSSMotion,
}

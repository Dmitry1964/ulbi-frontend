import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./about-page'))

// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//   // @ts-expect-error
//   setTimeout(() => resolve(import('./about-page')), 1500)
// }))
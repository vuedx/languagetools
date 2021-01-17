// eslint-disable-next-line @typescript-eslint/naming-convention
declare var __non_webpack_require__: any

export const requireModule = (typeof __non_webpack_require__ !== 'undefined'
  ? __non_webpack_require__
  : require) as NodeJS.Require

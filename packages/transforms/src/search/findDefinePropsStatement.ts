import * as T from '@babel/types'
import { memoizeByFirstArg } from '@vuedx/shared'
import { findTopLevelCall } from './findTopLevelCall'

export const findDefinePropsStatement = memoizeByFirstArg((ast: T.File) => {
  const withDefaults = findTopLevelCall(ast, 'withDefaults')

  if (withDefaults != null) {
    const fn = T.isCallExpression(withDefaults)
      ? withDefaults
      : withDefaults.init
    if (T.isCallExpression(fn)) {
      const args = fn.arguments
      if (T.isCallExpression(args[0])) return args[0]
      return null
    }
  }

  return findTopLevelCall(ast, 'defineProps')
})

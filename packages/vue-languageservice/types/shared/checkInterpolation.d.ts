export function checkInterpolation(
  value: string | boolean | number | null | undefined,
): string

/**
 * @deprecated - You should not be using interpolation to render objects.
 */
export function checkInterpolation(value: object | symbol | unknown[]): string

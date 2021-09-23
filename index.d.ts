/**
 * Convert a Cypress $Chainer instance to a Promise
 *
 * ```ts
 * const text = await promisify(cy
 *   .get('someselector')
 *   .then(el => el.text())
 * )
 * console.log(text) // logs text of someselector element
 * ```
 * @param chain Cypress $Chainer instance
 * @returns Promise of the last subject in the Cypress chain
 */

// {
//   "compilerOptions": {
//      "types": ["cypress", "cypress-plugin-snapshots"]
//    }
// }

declare namespace Cypress {
  interface Chainable<Subject = any> {
    toMatchSnapshot(
      options?: Partial<{
        ignoreExtralFields: boolean
        ignoreExtraArrayItems: boolean
        normalizeJson: boolean
        replace: any
        name: string
      }>
    ): Chainable<null>

    toMatchImageSnapshot(
      options?: Partial<{
        imageConfig: Partial<{
          createDiffImage: boolean
          threshold: number
          thresholdType: "percent" | "pixels"
          resizeDevicePixelRatio: boolean
        }>
        screenshotConfig: Partial<ScreenshotDefaultsOptions>
        name: string
        separator: string
      }>
    ): Chainable<null>
  }
}

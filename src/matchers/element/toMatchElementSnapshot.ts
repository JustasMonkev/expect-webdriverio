import { toMatchSnapshot as jestToMatchSnapshot, toMatchInlineSnapshot as jestToMatchInlineSnapshot } from 'jest-snapshot'
export async function toMatchElementSnapshot(el: WebdriverIO.Element, ...args: any) {
    this.expectation = this.expectation || 'matchElementSnapshot'
    return jestToMatchSnapshot.call(this, await el.getHTML(), ...args);
}

export async function toMatchElementInlineSnapshot(el: WebdriverIO.Element, ...args: any) {
    this.expectation = this.expectation || 'matchElementInlineSnapshot'
    return jestToMatchInlineSnapshot.call(this, await el.getHTML(), ...args)
}

import { Selector, t, ClientFunction } from 'testcafe';

/**
 * @param {Selector} selector - The TestCafe selector for the element to check.
 * @param {string} expectedDisplayValue - The expected CSS display value (e.g., 'block', 'none').
 */

export async function assertDisplayValue(selector, expectedDisplayValue) {
  const currentDisplayValue = await selector.getStyleProperty('display');
  await t
    .expect(currentDisplayValue)
    .eql(
      expectedDisplayValue,
      `The current value of the CSS Property "Display" is "${currentDisplayValue}", but the expected value was "${expectedDisplayValue}"`,
    );
}

/**
 * @param {string} key - The key for the local storage item.
 * @param {string} expectedKeyValue - The expected value for the local storage item.
 */

export async function assertLocalStorageKeyValue(key, expectedKeyValue) {
  const getLocalStorageItem = ClientFunction((key) => {
    return localStorage.getItem(key);
  });

  const currentKeyValue = await getLocalStorageItem(key);
  await t.expect(currentKeyValue).eql(expectedKeyValue);
}

/**
 * @param {Selector} selector - The TestCafe selector for the element to check.
 * @param {string} expectedText - The expected text content of the element.
 */

export async function assertText(selector, expectedText) {
  const currentText = await selector.innerText;
  await t
    .expect(currentText)
    .contains(
      expectedText,
      `The current text of "${selector}" is "${currentText}", but the expected text was "${expectedText}"`,
    );
}

// Replacing the previous assertions with new assertions using built-in method "visible"

export async function assertElementVisible(selector) {
  await t.expect(selector.visible).ok();
}

export async function assertElementNotVisible(selector) {
  await t.expect(selector.visible).notOk();
}

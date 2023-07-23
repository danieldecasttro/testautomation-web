import { Selector, t, ClientFunction } from 'testcafe';

export async function assertDisplayValue(selector, expectedDisplayValue) {
  const currentDisplayValue = await Selector(selector).getStyleProperty(
    'display',
  );
  await t
    .expect(currentDisplayValue)
    .eql(
      expectedDisplayValue,
      `The current value of the CSS Property "Display" is "${currentDisplayValue}", but the expected value was "${expectedDisplayValue}"`,
    );
}

export async function assertLocalStorageKeyValue(key, expectedKeyValue) {
  const getLocalStorageItem = ClientFunction((key) => {
    return localStorage.getItem(key);
  });

  const currentKeyValue = await getLocalStorageItem(key);
  await t.expect(currentKeyValue).eql(expectedKeyValue);
}

export async function assertText(selector, expectedText) {
  const currentText = await selector.innerText;
  await t
    .expect(currentText)
    .contains(
      expectedText,
      `The current text of "${selector}" is "${currentText}", but the expected text was "${expectedText}"`,
    );
}

import { triggerEvent } from '@ember/test-helpers';
import type { Target } from '@ember/test-helpers';

/**
 * Simulates a user pasting a value into a target element.
 *
 * @param {Target} target - The target element to paste the value into
 * @param {string} value - The value to paste
 * @return {Promise<void>} A Promise that resolves when the paste event is triggered
 */
export function simulateUserPasteValue(
  target: Target,
  value: string,
): Promise<void> {
  const getData = (): string => value;
  return triggerEvent(target, 'paste', {
    clipboardData: {
      getData,
    },
  });
}

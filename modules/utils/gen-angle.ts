import { Ref, unref } from 'vue';

const hasDegRegexp = /[0-9]+deg$/;

/**
 * Generate an angle value in degrees
 * @param angle - Angle value
 * @param defaultAngle - Default angle value returned if none provided
 * @returns Angle value in degrees
 */
export default function genAngle(
  angle: Ref<string | number | null> | string | number | null,
  defaultAngle = '0deg'
): string {
  const angleValue: string | number | null = unref(angle);

  if (!angleValue) return defaultAngle;
  // In case of a string value
  if (typeof angleValue === 'string') {
    if (hasDegRegexp.test(angleValue)) {
      // Check if string is already of form {number + 'deg'}
      return angleValue;
    } else if (isNaN(Number(angleValue))) {
      return defaultAngle;
    }
  }
  return angleValue + 'deg';
}

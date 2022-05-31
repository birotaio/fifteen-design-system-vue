import { unref, Ref } from 'vue';

/**
 * Calculate a tangent value from an angle value in degrees
 * @param degrees - Angle value in degrees
 * @returns Tangent value for the provided angle
 */
export default function getTanFromDegrees(
  degrees: Ref<number> | number
): number {
  const value = unref(degrees);

  return value ? Math.tan((value * Math.PI) / 180) : 0;
}

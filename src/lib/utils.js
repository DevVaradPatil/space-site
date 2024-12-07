/**
 * Utility function to concatenate class names conditionally.
 * @param  {...(string | undefined | null | boolean)} classes - Class names or conditional expressions.
 * @returns {string} - Concatenated class names.
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
/**
 * 先頭文字を大文字に変換する
 * @param str
 * @returns
 */
export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

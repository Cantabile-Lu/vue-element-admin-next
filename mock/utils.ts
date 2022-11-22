export type Recordable<T = any> = Record<string, T>;
export function resultSuccess<T = Recordable>(
  result: T,
  { message = "success" } = {}
) {
  return {
    code: 200,
    result,
    message
  };
}

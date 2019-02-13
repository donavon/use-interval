declare module '@use-it/use-interval' {
  /**
   * A custom React Hook that provides a declarative useInterval..
   */
  export default function useInterval(
    callback: () => void,
    delay: number
  ): void;
}

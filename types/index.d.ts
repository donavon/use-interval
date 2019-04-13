declare module '@use-it/interval' {
  /**
   * A custom React Hook that provides a declarative useInterval..
   */
  export default function useInterval(
    callback: () => void,
    delay: number | null
  ): void;
}

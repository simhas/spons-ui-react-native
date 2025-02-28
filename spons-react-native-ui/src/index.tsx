export function multiply(a: number, b: number): number {
  return a * b;
}

export * from './types';
export { useTheme, SpThemeProvider } from './theme-provider';
export { SpButton } from './components/sp-button';
export { SpTypo } from './components/sp-typo';
export { SignInView } from './views/sign-in-view';
export { handleAuthCodeExchange } from './utils/handle-auth-code-exchange';
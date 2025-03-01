export function multiply(a: number, b: number): number {
  return a * b;
}

export * from './types';
export { useTheme, SpThemeProvider } from './theme-provider';
export { SpButton } from './components/sp-button';
export { SpTypo } from './components/sp-typo';
export { LoadingView } from './views/loading-view';
export { SignInView } from './views/sign-in-view';
export { handleAuthCodeExchange } from './utils/handle-auth-code-exchange';
export { useAuthSetup } from './utils/use-auth-setup';
export { useAuthState } from './utils/use-auth-state';
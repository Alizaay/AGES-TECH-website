import { ThemeProvider } from './ThemeProvider'
import { AppProvider } from './AppProvider'
import { QueryProvider } from './QueryProvider'

/**
 * Composed application providers.
 */
export const AppProviders = ({ children }) => (
  <ThemeProvider>
    <AppProvider>
      <QueryProvider>{children}</QueryProvider>
    </AppProvider>
  </ThemeProvider>
)

export default AppProviders
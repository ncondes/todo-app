import { TodoContainer } from '../TodoContainer';
import { ThemeProvider } from '../ThemeContext';

const App = () => (
  <>
    <ThemeProvider>
      <TodoContainer/>
    </ThemeProvider>
  </>
)

export { App }
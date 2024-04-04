
import './App.css';
import Main from './components/main/Main.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContextProvider from './components/context/context.tsx';

function App() {
  const queryClient = new QueryClient()
  return (
    <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main />
      </div>
    </QueryClientProvider>
    </ContextProvider>
  );
}

export default App;

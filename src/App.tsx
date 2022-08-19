
import {QueryClientProvider, QueryClient, useQuery} from 'react-query';
import Routers from './routes/Routes';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
  );
}

export default App;

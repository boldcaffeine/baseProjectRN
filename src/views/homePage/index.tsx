import {View} from 'react-native';
import {QueryClient, QueryClientProvider, focusManager} from 'react-query';
import TopBar from './features/TopBar';
console.log(focusManager);

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <TopBar></TopBar>
      </View>
    </QueryClientProvider>
  );
}

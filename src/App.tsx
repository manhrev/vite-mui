import Layout from './layout/Layout';
import CombinedProvider from './layout/CombinedProvider';
import { routes } from './routes';
import { theme } from './theme';
import { AuthService } from './api/greetv1/auth_connect';
import { createConnectTransport, createGrpcWebTransport } from '@connectrpc/connect-web';
import { ConnectError, createPromiseClient } from '@connectrpc/connect';

const transport = createConnectTransport({
  baseUrl: 'https://connect-backend-enbwmscxnq-as.a.run.app',
});

const client = createPromiseClient(AuthService, transport);
try {
  console.log(
    await client.me(
      {
        // password: 'manh',
        // username: 'manh',
      },
      {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbmgiLCJzdWIiOiIxIiwiZXhwIjoxNzEwMDYzODY4fQ.f-ssb7-3khdc8d7-ama-ApBEDJyIX0vJ9ybTM7YTpKQ',
        },
      },
    ),
  );
} catch (err) {
  // console.log(err);
  const errC = ConnectError.from(err);
  console.log({
    ...errC,
  });
  console.log(
    errC.metadata.forEach((val, key) => {
      console.log(val, key);
    }),
  );
}
const App: React.FC = () => {
  return (
    <CombinedProvider theme={theme}>
      <Layout routes={routes} />
    </CombinedProvider>
  );
};

export default App;

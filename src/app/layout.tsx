import '../styles/global.css';
import { HomeLayout } from './components/layout/HomeLayout.client';
import { StateManagementProvider } from './components/layout/RecoilProvider.client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateManagementProvider>
      <HomeLayout>{children}</HomeLayout>
    </StateManagementProvider>
  );
}

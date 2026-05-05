import './globals.css';
import MotionProvider from '../components/MotionProvider';

export const metadata = {
  title: 'Aether One | Electric Motorcycle',
  description: 'A modern product website for the Aether One electric motorcycle.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

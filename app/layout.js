import './globals.css';
import MotionProvider from '../components/MotionProvider';

export const metadata = {
  title: 'Aether One | Futuristic Electric Motorcycle',
  description: 'A premium dark-mode landing page for a futuristic electric motorcycle built with Next.js, Tailwind CSS, and Framer Motion.'
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

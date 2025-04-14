import { ReactNode, useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';
import LoadingOverlay from '../components/LoadingOverlay';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isLoading, setIsLoading } = useLoading();
  const giphyUrl = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2FueHF2Z3l1OWtoYmwzYWh3b2JzcW5mbG4zYjBxNTR2cmYwOG5qbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TZ2oBnEvY9iMgJWuRS/giphy.gif';

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="main-layout">
      {isLoading && <LoadingOverlay giphyUrl={giphyUrl} />}
      {children}
    </div>
  );
}
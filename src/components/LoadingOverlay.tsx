
import './LoadingOverlay.css';

interface LoadingOverlayProps {
  giphyUrl?: string;
}

export default function LoadingOverlay({ giphyUrl = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN21qaXJxcTc5M3RjdnJuYnN4b2RqOWRhd2lmbjk3c2R6OXB4cGhjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TZ2oBnEvY9iMgJWuRS/giphy.gif' }: LoadingOverlayProps) {
  return (
    <div className="loading-overlay">
      <img src={giphyUrl} alt="Loading" className="loading-gif" />
    </div>
  );
}

import './LoadingOverlay.css';

interface LoadingOverlayProps {
  giphyUrl?: string;
}

export default function LoadingOverlay({ giphyUrl = 'YOUR_DEFAULT_GIPHY_URL' }: LoadingOverlayProps) {
  return (
    <div className="loading-overlay">
      <img src={giphyUrl} alt="Loading" className="loading-gif" />
    </div>
  );
}
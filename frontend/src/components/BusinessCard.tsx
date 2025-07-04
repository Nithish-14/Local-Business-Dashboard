import type { BusinessData } from '../types';

interface Props {
  data: BusinessData;
  onRegenerate: () => void;
}

export default function BusinessCard({ data, onRegenerate }: Props) {
  return (
    <div className="mt-8 max-w-md mx-auto bg-white shadow p-6 rounded text-center">
      <h2 className="text-xl font-semibold mb-3">{data.headline}</h2>
      <p className="text-gray-600">⭐ <strong>{data.rating}</strong> Rating</p>
      <p className="text-gray-600 mb-4">📝 <strong>{data.reviews}</strong> Reviews</p>
      <button
        onClick={onRegenerate}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all"
      >
        🔁 Regenerate SEO Headline
      </button>
    </div>
  );
}

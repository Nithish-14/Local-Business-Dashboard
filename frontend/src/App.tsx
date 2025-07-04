import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import type { BusinessData } from './types';
import './index.css';

function App() {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (name: string, location: string) => {
    setLoading(true);
    setBusinessData(null);
    setName(name);
    setLocation(location);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/business-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location }),
      });
      const data = await res.json();
      setBusinessData(data);
    } catch (error) {
      console.error('API Error:', error);
      alert('Failed to fetch business data');
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!name || !location) return;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`
      );
      const data = await res.json();
      if (businessData) {
        setBusinessData({ ...businessData, headline: data.headline });
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('Failed to regenerate headline');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-700 mb-6">📊 Local Business Dashboard</h1>
      <BusinessForm onSubmit={handleSubmit} />
      {loading && (
        <div className="flex justify-center mt-6">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!loading && businessData && (
        <BusinessCard data={businessData} onRegenerate={regenerateHeadline} />
      )}
    </div>
  );
}

export default App;

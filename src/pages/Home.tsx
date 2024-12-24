import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-green-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <div className="flex justify-center mb-6">
            <Gift className="w-16 h-16 animate-bounce text-yellow-300" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-8">Julegaver 2023</h1>
          <div className="space-y-4">
            <Link 
              to="/odd-harald"
              className="block w-full p-4 text-center bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              Gave til Odd Harald & May Linn
            </Link>
            <Link 
              to="/tonje"
              className="block w-full p-4 text-center bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              Gift for Tonje & Andrew
            </Link>
            <Link 
              to="/torstein"
              className="block w-full p-4 text-center bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              Gave til Torstein
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
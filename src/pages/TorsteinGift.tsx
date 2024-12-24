import React, { useState } from 'react';
import { Gift, PalmtreeIcon } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function TorsteinGift() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-green-700 text-white">
      {!showGift ? (
        <Countdown onComplete={() => setShowGift(true)} />
      ) : (
        <div className="container mx-auto px-4 py-12 relative">
          <Snowfall />
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl animate-fade-in">
            <div className="flex justify-center mb-6">
              <Gift className="w-16 h-16 animate-bounce text-yellow-300" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-6 animate-slide-up">
              God Jul!
            </h1>
            <h2 className="text-2xl text-center mb-4">
              Til Torstein
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Her er 500 NOK til ditt Filippinene-eventyr! 
                Håper reisen din blir fylt med fantastiske 
                opplevelser i dette tropiske paradiset! 🎄🌴
              </p>
              <div className="flex justify-center gap-4">
                <PalmtreeIcon className="w-8 h-8 animate-sway" />
              </div>
              <p className="text-lg italic mt-8">
                Med kjærlig hilsen fra Opdal-familien i Kenya ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
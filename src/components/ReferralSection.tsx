import React from 'react';
import { Share2, Copy, Gift } from 'lucide-react';

const ReferralSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const referralCode = "AAYOJAN2025";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://aayojan.com/refer?code=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-white mb-4">Refer & Earn Rewards</h2>
              <p className="text-gray-300 mb-6">
                Invite your friends to Aayojan and both of you get exclusive rewards, discounts on event tickets, and more!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium">Share your unique code</h3>
                    <p className="text-gray-400 text-sm">Copy your referral link and share it with friends</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium">Friends sign up</h3>
                    <p className="text-gray-400 text-sm">When they create an account using your code</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium">Both get rewards</h3>
                    <p className="text-gray-400 text-sm">You both receive rewards for their first event booking</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/5 bg-gray-800 p-6 rounded-xl shadow-inner">
              <div className="text-center mb-6">
                <Gift className="w-12 h-12 mx-auto text-red-500 mb-2" />
                <h3 className="text-xl font-bold text-white">Your Referral Code</h3>
              </div>
              
              <div className="bg-gray-700 p-3 rounded-lg flex items-center justify-between mb-6">
                <span className="text-white font-mono font-bold">{referralCode}</span>
                <button 
                  onClick={copyToClipboard}
                  className="p-1 text-gray-300 hover:text-white"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <button 
                  onClick={copyToClipboard}
                  className="relative w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 hover:from-red-700 hover:to-red-800"
                >
                  <Share2 className="h-5 w-5" />
                  <span>{copied ? "Copied!" : "Share Your Link"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
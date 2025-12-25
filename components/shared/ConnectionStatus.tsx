'use client';

import { useSocket } from '@/components/providers/SocketProvider';
import { Wifi, WifiOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ConnectionStatus() {
  const { isConnected } = useSocket();

  return (
    <AnimatePresence>
      {!isConnected && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-lg shadow-md"
        >
          <WifiOff className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-800">
            Reconnecting...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ConnectionIndicator() {
  const { isConnected } = useSocket();

  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{
          scale: isConnected ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isConnected ? Infinity : 0,
        }}
        className={`w-2 h-2 rounded-full ${
          isConnected ? 'bg-green-500' : 'bg-gray-400'
        }`}
      />
      <span className="text-xs text-gray-600">
        {isConnected ? 'Live' : 'Offline'}
      </span>
    </div>
  );
}

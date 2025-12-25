'use client';

import { useSocket } from '@/components/providers/SocketProvider';
import { toast } from 'sonner';
import { isSubscribedToPush, subscribeToPushNotifications } from '@/utils/pushNotifications';
import { useState, useEffect } from 'react';

export function NotificationTestPanel() {
  const { isConnected, socket } = useSocket();
  const [isPushSubscribed, setIsPushSubscribed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth();
    checkPushSubscription();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  };

  const checkPushSubscription = async () => {
    const subscribed = await isSubscribedToPush();
    setIsPushSubscribed(subscribed);
  };

  const handleEnablePush = async () => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      toast.error('Please login first');
      return;
    }

    const subscription = await subscribeToPushNotifications(token);
    
    if (subscription) {
      toast.success('Push notifications enabled!');
      setIsPushSubscribed(true);
    } else {
      toast.error('Failed to enable push notifications');
    }
  };

  const handleTestNotification = () => {
    toast.success('Test Notification', {
      description: 'This is a test notification',
      duration: 5000,
    });
  };

  const handleTestBrowserNotification = async () => {
    if (Notification.permission !== 'granted') {
      toast.error('Please enable push notifications first');
      return;
    }

    // Test browser notification
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.showNotification('Test Browser Notification', {
        body: 'This is a test browser notification from your service worker',
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        // vibrate: [200, 100, 200],
        tag: 'test-notification',
      });
      toast.success('Browser notification sent!');
    } catch (error) {
      console.error('Failed to show notification:', error);
      toast.error('Failed to show browser notification');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed bottom-4 right-4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg max-w-sm">
        <p className="text-sm text-gray-600">Please login to test notifications</p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg max-w-sm space-y-3">
      <h3 className="font-bold text-sm">Notification Test Panel</h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Socket.IO:</span>
          <span className={`font-semibold ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
            {isConnected ? '✅ Connected' : '❌ Disconnected'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Push Notifications:</span>
          <span className={`font-semibold ${isPushSubscribed ? 'text-green-600' : 'text-gray-600'}`}>
            {isPushSubscribed ? '✅ Enabled' : '⚠️ Disabled'}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {!isPushSubscribed && (
          <button
            onClick={handleEnablePush}
            className="w-full px-3 py-2 text-xs font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            Enable Push Notifications
          </button>
        )}
        
        <button
          onClick={handleTestNotification}
          className="w-full px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
        >
          Test Toast Notification
        </button>

        {isPushSubscribed && (
          <button
            onClick={handleTestBrowserNotification}
            className="w-full px-3 py-2 text-xs font-semibold text-white bg-purple-600 rounded hover:bg-purple-700 transition-colors"
          >
            Test Browser Notification
          </button>
        )}
      </div>

      <p className="text-[10px] text-gray-500 mt-2">
        Login from another device/browser to test real-time login notifications
      </p>
    </div>
  );
}

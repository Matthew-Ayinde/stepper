'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { socketService } from '@/services/socket';
import { subscribeToPushNotifications } from '@/utils/pushNotifications';
import { toast } from 'sonner';

interface SocketContextType {
  isConnected: boolean;
  socket: typeof socketService;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within SocketProvider');
  }
  return context;
}

interface SocketProviderProps {
  children: ReactNode;
}

export function SocketProvider({ children }: SocketProviderProps) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      // Connect to Socket.IO
      socketService.connect(token);

      // Setup Socket.IO event listeners
      socketService.on('connect', () => {
        setIsConnected(true);
      });

      socketService.on('disconnect', () => {
        setIsConnected(false);
      });

      // Listen for login notifications
      socketService.on('login_notification', (data: any) => {
        console.log('🔐 Login notification received:', data);
        
        toast.warning(data.title || 'New Login Detected', {
          description: data.message,
          duration: 10000,
          action: {
            label: 'View Details',
            onClick: () => {
              console.log('Login details:', data.loginInfo);
            },
          },
        });
      });

      // Listen for order updates
      socketService.on('order_update', (data: any) => {
        console.log('📦 Order update received:', data);
        
        toast.success('Order Update', {
          description: data.message,
          duration: 5000,
        });
      });

      // Listen for cart updates
      socketService.on('cart_update', (data: any) => {
        console.log('🛒 Cart update received:', data);
        
        toast.info('Cart Updated', {
          description: data.message,
          duration: 3000,
        });
      });

      // Listen for general notifications
      socketService.on('notification', (data: any) => {
        console.log('🔔 Notification received:', data);
        
        const notificationType = data.type === 'error' ? 'error' : 
                                data.type === 'warning' ? 'warning' : 
                                data.type === 'success' ? 'success' : 'info';
        
        toast[notificationType](data.title || 'Notification', {
          description: data.message,
          duration: 5000,
        });
      });

      // Listen for flash sale events
      socketService.on('flash_sale_start', (data: any) => {
        console.log('🔥 Flash sale started:', data);
        
        toast.success('Flash Sale Started!', {
          description: `${data.flashSale?.name} - ${data.flashSale?.discount}% OFF`,
          duration: 10000,
        });
      });

      socketService.on('flash_sale_end', (data: any) => {
        console.log('Flash sale ended:', data);
        
        toast.info('Flash Sale Ended', {
          description: data.message,
          duration: 5000,
        });
      });

      // Cleanup on unmount
      return () => {
        // Don't disconnect on unmount, keep connection alive
        // Only disconnect on logout
      };
    }
  }, []);

  return (
    <SocketContext.Provider value={{ isConnected, socket: socketService }}>
      {children}
    </SocketContext.Provider>
  );
}

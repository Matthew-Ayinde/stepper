import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private connected: boolean = false;
  private listeners: Map<string, Function[]> = new Map();
  private readonly url: string = 'http://localhost:5000';

  /**
   * Connect to Socket.IO server with JWT token
   * @param token - JWT authentication token
   */
  connect(token: string): Socket {
    if (this.socket?.connected) {
      console.log('✅ Already connected to Socket.IO');
      return this.socket;
    }

    console.log('🔌 Connecting to Socket.IO server...');

    this.socket = io(this.url, {
      auth: {
        token: token,
      },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    this.setupEventHandlers();
    return this.socket;
  }

  /**
   * Setup core Socket.IO event handlers
   */
  private setupEventHandlers(): void {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('✅ Connected to Socket.IO server');
      console.log('Socket ID:', this.socket?.id);
      this.connected = true;
    });

    this.socket.on('disconnect', (reason) => {
      console.log('❌ Disconnected from Socket.IO:', reason);
      this.connected = false;
    });

    this.socket.on('connect_error', (error) => {
      console.error('🔴 Socket connection error:', error.message);
    });

    this.socket.on('reconnect', (attemptNumber) => {
      console.log('🔄 Reconnected to Socket.IO after', attemptNumber, 'attempts');
    });

    this.socket.on('reconnect_attempt', (attemptNumber) => {
      console.log('🔄 Reconnection attempt', attemptNumber);
    });

    this.socket.on('reconnect_error', (error) => {
      console.error('🔴 Reconnection error:', error.message);
    });

    this.socket.on('reconnect_failed', () => {
      console.error('❌ Failed to reconnect to Socket.IO');
    });
  }

  /**
   * Listen for a specific event
   * @param event - Event name
   * @param callback - Handler function
   */
  on(event: string, callback: Function): void {
    if (!this.socket) {
      console.error('Socket not connected. Call connect() first.');
      return;
    }

    this.socket.on(event, callback as any);

    // Store listener for cleanup
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  /**
   * Emit an event to server
   * @param event - Event name
   * @param data - Data to send
   */
  emit(event: string, data?: any): void {
    if (!this.socket?.connected) {
      console.error('Socket not connected. Cannot emit event:', event);
      return;
    }

    this.socket.emit(event, data);
  }

  /**
   * Remove event listener
   * @param event - Event name
   * @param callback - Handler to remove (optional)
   */
  off(event: string, callback?: Function): void {
    if (!this.socket) return;

    if (callback) {
      this.socket.off(event, callback as any);
    } else {
      this.socket.off(event);
      this.listeners.delete(event);
    }
  }

  /**
   * Join a specific room
   * @param room - Room name
   */
  joinRoom(room: string): void {
    this.emit('join_room', { room });
  }

  /**
   * Leave a specific room
   * @param room - Room name
   */
  leaveRoom(room: string): void {
    this.emit('leave_room', { room });
  }

  /**
   * Disconnect from Socket.IO
   */
  disconnect(): void {
    if (this.socket) {
      console.log('🔌 Disconnecting from Socket.IO...');

      // Remove all listeners
      this.listeners.forEach((callbacks, event) => {
        callbacks.forEach((callback) => {
          this.socket?.off(event, callback as any);
        });
      });
      this.listeners.clear();

      this.socket.disconnect();
      this.socket = null;
      this.connected = false;
    }
  }

  /**
   * Check if socket is connected
   */
  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  /**
   * Get socket instance (for advanced usage)
   */
  getSocket(): Socket | null {
    return this.socket;
  }
}

// Export singleton instance
export const socketService = new SocketService();

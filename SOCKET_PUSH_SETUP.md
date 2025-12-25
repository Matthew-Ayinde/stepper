# Socket.IO & Web Push Notifications Setup

## 🎉 Setup Complete!

Your Next.js app is now configured with:
- ✅ Socket.IO real-time connection
- ✅ Web Push Notifications
- ✅ NextAuth session management
- ✅ Auto-request notification permissions on login
- ✅ Beautiful toast notifications with Sonner

## 📁 Files Created/Modified

### New Files
- `services/socket.ts` - Socket.IO service singleton
- `utils/pushNotifications.ts` - Push notification utilities
- `public/sw.js` - Service Worker for web push
- `app/api/auth/[...nextauth]/route.ts` - NextAuth configuration
- `components/providers/SocketProvider.tsx` - Socket provider wrapper
- `components/shared/ConnectionStatus.tsx` - Connection indicator
- `.env.local` - Environment variables

### Modified Files
- `app/layout.tsx` - Added SessionProvider and SocketProvider
- `components/login/LoginPage.tsx` - Updated to use NextAuth
- `app/api/apiRoutes.ts` - Added push subscription endpoint

## 🚀 How to Test

### 1. Start Your Backend
Make sure your backend is running on `http://localhost:5000`

### 2. Start the Frontend
```bash
npm run dev
```

### 3. Test Login Notifications

1. Open the app at `http://localhost:3000`
2. Navigate to `/login`
3. Enter your credentials and login
4. You should see:
   - ✅ A browser notification permission request (click "Allow")
   - ✅ Socket.IO connection in console: "✅ Connected to Socket.IO server"
   - ✅ Push subscription confirmation: "✅ Push notifications enabled"

5. Login from another browser/device with the same account
6. You should receive:
   - 🔔 Browser push notification (even if app is closed)
   - 🟡 Toast notification in the app
   - 📱 Socket.IO real-time event

## 🔔 Notification Events

The app automatically listens for these Socket.IO events:

### 1. `login_notification`
Triggered when someone logs into your account
```javascript
{
  type: 'login_notification',
  title: '🔐 New Login Detected',
  message: 'Login from New York, US',
  loginInfo: {
    ipAddress: '192.168.1.1',
    location: 'New York, US',
    device: 'macOS 13.0',
    browser: 'Chrome 120.0'
  }
}
```

### 2. `order_update`
Real-time order status changes
```javascript
{
  orderId: '...',
  status: 'shipped',
  message: 'Your order has been shipped'
}
```

### 3. `cart_update`
Cart synchronization across devices
```javascript
{
  action: 'add',
  cart: {...},
  message: 'Item added to cart'
}
```

### 4. `notification`
General notifications
```javascript
{
  type: 'order_shipped',
  title: 'Order Shipped',
  message: 'Your order #12345 has been shipped'
}
```

### 5. `flash_sale_start`
Flash sale alerts
```javascript
{
  flashSale: {
    name: 'Summer Sale',
    discount: 50
  }
}
```

### 6. `flash_sale_end`
Flash sale ended
```javascript
{
  message: 'Flash sale has ended'
}
```

## 🔧 Configuration

### Environment Variables
Edit `.env.local`:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_VAPID_PUBLIC_KEY=BG4EN4tamtIqfk8Yf6STajey7X4dqU6WKZ_BeQxuX83cevUfMXTuxcM53OyEOp-qjhQ-DHTUr-fmiWo5RI4FZyw
```

### Change Backend URL
Update `services/socket.ts`:
```typescript
private readonly url: string = 'http://localhost:5000';
// Change to your production URL
```

## 🎨 Customization

### Add Custom Notification Handler
Edit `components/providers/SocketProvider.tsx`:
```typescript
socketService.on('my_custom_event', (data: any) => {
  toast.info('Custom Event', {
    description: data.message,
  });
});
```

### Disable Auto Push Subscription
Remove this from `SocketProvider.tsx`:
```typescript
// Comment out or remove these lines
subscribeToPushNotifications(token)
  .then(...)
  .catch(...);
```

### Add Connection Status to Navbar
```typescript
import { ConnectionIndicator } from '@/components/shared/ConnectionStatus';

// In your Navbar component:
<ConnectionIndicator />
```

## 🐛 Troubleshooting

### Issue: Notifications not appearing
**Solution:**
1. Check browser console for errors
2. Ensure backend is running on `http://localhost:5000`
3. Verify notification permissions are granted
4. Check if service worker is registered: `navigator.serviceWorker.controller`

### Issue: Socket.IO not connecting
**Solution:**
1. Check if backend has CORS enabled for `http://localhost:3000`
2. Verify JWT token is present in session
3. Check backend Socket.IO logs
4. Open browser console and look for connection errors

### Issue: Push notifications not working
**Solution:**
1. Ensure VAPID public key matches your backend
2. Check if service worker is registered
3. Verify notification permission is granted
4. Test in a supported browser (Chrome, Firefox, Edge)

### Issue: "SessionProvider" error
**Solution:**
```bash
npm install next-auth@beta
```

## 📱 Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Socket.IO | ✅ | ✅ | ✅ | ✅ |
| Web Push | ✅ | ✅ | ❌* | ✅ |
| Service Worker | ✅ | ✅ | ✅ | ✅ |

*Safari supports push on macOS Ventura+ and iOS 16.4+

## 🔐 Security Notes

1. **NEXTAUTH_SECRET**: Generate a strong secret for production
   ```bash
   openssl rand -base64 32
   ```

2. **HTTPS Required**: Web Push only works on HTTPS in production

3. **Token Storage**: Tokens are stored in JWT session (not localStorage)

4. **CORS**: Ensure backend allows your frontend origin

## 📚 Additional Resources

- [Socket.IO Client Docs](https://socket.io/docs/v4/client-api/)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Web Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## 🎯 Next Steps

1. ✅ Test login notifications
2. ✅ Test push notifications
3. ✅ Customize toast messages
4. 🔄 Add notification preferences page
5. 🔄 Implement notification history
6. 🔄 Add sound alerts
7. 🔄 Create admin dashboard for broadcasting

---

**Need Help?** Check the browser console for detailed logs!

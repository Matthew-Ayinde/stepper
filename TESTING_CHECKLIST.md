# ✅ Socket.IO & Push Notifications - Testing Checklist

## 🎯 Complete Testing Guide

### Pre-Flight Check
- [ ] Backend running on `http://localhost:5000`
- [ ] Frontend running on `http://localhost:3000`
- [ ] `.env.local` file exists with correct values
- [ ] Browser console open (F12)

---

## 1️⃣ Initial Setup Test

### Service Worker Registration
- [ ] Open: `http://localhost:3000`
- [ ] Open Console
- [ ] Look for: `✅ Service Worker registered successfully`
- [ ] Verify in: DevTools → Application → Service Workers
- [ ] Status should be: **Activated and running**

**Expected Console Output:**
```
✅ Service Worker registered successfully
```

---

## 2️⃣ Login Flow Test

### Login and Authentication
- [ ] Navigate to: `http://localhost:3000/login`
- [ ] Enter valid credentials
- [ ] Click "Login"
- [ ] Watch console for logs

**Expected Console Output:**
```
🔌 Connecting to Socket.IO server...
✅ Connected to Socket.IO server
Socket ID: abc123xyz...
✅ Subscribed to push notifications
✅ Push notifications enabled
```

**Expected UI:**
- [ ] Redirected to homepage
- [ ] Green toast: "Login successful!"
- [ ] Test panel appears (bottom-right)
- [ ] Test panel shows: "Socket.IO: ✅ Connected"

---

## 3️⃣ Permission Request Test

### Browser Notification Permission
- [ ] Browser shows notification permission popup
- [ ] Click **"Allow"**
- [ ] Check test panel
- [ ] Shows: "Push Notifications: ✅ Enabled"

**Expected Browser Popup:**
```
Allow [Your Site] to show notifications?
[Block] [Allow]
```

**Verify Permission:**
```javascript
// In console, run:
Notification.permission
// Should return: "granted"
```

---

## 4️⃣ Socket.IO Connection Test

### Connection Status
- [ ] Look at top of page
- [ ] Should NOT see yellow "Reconnecting..." banner
- [ ] Test panel shows green checkmark
- [ ] Connection indicator shows "Live"

**Verify in Console:**
```javascript
// Run in console:
socketService.isConnected()
// Should return: true
```

---

## 5️⃣ Real-Time Notification Test

### Test from Multiple Browsers

#### Browser 1 (Primary):
- [ ] Login with your account
- [ ] Keep window open
- [ ] Watch for notifications

#### Browser 2 (Test):
- [ ] Open in **incognito** or **different browser**
- [ ] Navigate to login page
- [ ] Login with **SAME account** as Browser 1
- [ ] Complete login

#### Expected Results in Browser 1:
- [ ] 🔔 **Browser push notification** appears (even if minimized!)
- [ ] 🟡 **Toast notification** appears in app
- [ ] 📝 **Console log** shows login details

**Expected Toast:**
```
⚠️ New Login Detected
Login from [Location]
[10 seconds]
[View Details] button
```

**Expected Push Notification:**
```
🔐 New Login Detected
Login from New York, US
```

**Expected Console:**
```
🔐 Login notification received: {
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

---

## 6️⃣ Toast Notification Test

### Manual Toast Test
- [ ] Stay logged in
- [ ] Look at test panel (bottom-right)
- [ ] Click **"Test Toast Notification"**
- [ ] Toast appears with: "Test Notification"

**Expected:**
- [ ] Green success toast
- [ ] Shows for 5 seconds
- [ ] Smooth animation

---

## 7️⃣ Connection Recovery Test

### Test Reconnection
- [ ] Keep app open
- [ ] Stop backend server
- [ ] Yellow banner appears: "Reconnecting..."
- [ ] Test panel shows: "Socket.IO: ❌ Disconnected"
- [ ] Start backend server again
- [ ] Banner disappears
- [ ] Test panel shows: "✅ Connected"

**Expected Console:**
```
❌ Disconnected from Socket.IO: transport close
🔄 Reconnection attempt 1
🔄 Reconnection attempt 2
✅ Connected to Socket.IO server
🔄 Reconnected to Socket.IO after 2 attempts
```

---

## 8️⃣ Service Worker Test

### Verify Service Worker
- [ ] Open DevTools → Application tab
- [ ] Click "Service Workers" in left sidebar
- [ ] See service worker for `http://localhost:3000`
- [ ] Status: **activated and is running**

### Test Push Subscription
```javascript
// In console, run:
navigator.serviceWorker.ready
  .then(reg => reg.pushManager.getSubscription())
  .then(sub => console.log(sub))

// Should show: PushSubscription object with endpoint
```

---

## 9️⃣ Background Notification Test

### Test When App is Minimized
- [ ] Keep logged in
- [ ] Minimize browser
- [ ] Login from another device/browser
- [ ] Browser notification appears even when minimized! 🎉
- [ ] Click notification → Opens app

---

## 🔟 Multi-Device Test

### Test Across Devices
- [ ] Login on Device 1 (e.g., laptop)
- [ ] Login on Device 2 (e.g., phone/tablet)
- [ ] Both should be connected
- [ ] Login on Device 3
- [ ] Both Device 1 and 2 receive notification

---

## 🎨 Visual Checks

### UI Elements Present
- [ ] Navbar visible
- [ ] Footer visible
- [ ] Theme picker visible
- [ ] Test panel visible (bottom-right)
- [ ] No yellow "Reconnecting" banner (when connected)
- [ ] Toasts appear in top-right

### Styling
- [ ] Notifications are styled beautifully
- [ ] Animations are smooth
- [ ] Colors match theme
- [ ] No layout shifts

---

## 🐛 Troubleshooting Checks

### If Socket.IO Not Connecting
- [ ] Backend is running: `curl http://localhost:5000`
- [ ] Check backend CORS settings
- [ ] Check JWT token in session
- [ ] Check console for errors

### If Push Not Working
- [ ] Notification permission granted
- [ ] Service Worker registered
- [ ] VAPID key matches backend
- [ ] Using supported browser (not Safari on old versions)

### If Session Issues
- [ ] NextAuth installed: `npm list next-auth`
- [ ] `.env.local` has NEXTAUTH_SECRET
- [ ] Check Application → Cookies for session

---

## 📊 Success Criteria

### ✅ All Green Means Success!
- [x] Service Worker registered
- [x] Socket.IO connected
- [x] Push subscription active
- [x] Login notifications working
- [x] Toast notifications showing
- [x] Push notifications appearing
- [x] Connection recovery working
- [x] Multi-browser tested
- [x] No console errors
- [x] UI looking good

---

## 🎉 Final Verification

### Complete System Check
```javascript
// Run in console for full status:

console.log('Session:', session?.user ? '✅' : '❌');
console.log('Socket:', socketService.isConnected() ? '✅' : '❌');
console.log('Notifications:', Notification.permission === 'granted' ? '✅' : '❌');

navigator.serviceWorker.ready
  .then(reg => reg.pushManager.getSubscription())
  .then(sub => console.log('Push:', sub ? '✅' : '❌'));
```

**Expected Output:**
```
Session: ✅
Socket: ✅
Notifications: ✅
Push: ✅
```

---

## 📝 Test Results Template

Copy and fill this out:

```
=== Socket.IO & Push Notifications Test Results ===

Date: _______________
Browser: _______________
OS: _______________

1. Service Worker Registered:        [ ] Pass  [ ] Fail
2. Socket.IO Connected:               [ ] Pass  [ ] Fail
3. Push Subscription Active:          [ ] Pass  [ ] Fail
4. Login Notification Received:       [ ] Pass  [ ] Fail
5. Toast Shows Correctly:             [ ] Pass  [ ] Fail
6. Browser Push Appears:              [ ] Pass  [ ] Fail
7. Multi-Browser Works:               [ ] Pass  [ ] Fail
8. Reconnection Works:                [ ] Pass  [ ] Fail
9. Background Notifications Work:     [ ] Pass  [ ] Fail
10. UI Displays Correctly:            [ ] Pass  [ ] Fail

Overall Status: [ ] ✅ ALL PASS  [ ] ⚠️ SOME ISSUES  [ ] ❌ FAILED

Notes:
_________________________________________________
_________________________________________________
_________________________________________________
```

---

## 🎯 Quick Test (5 Minutes)

Minimal test to verify everything works:

1. [ ] Open `http://localhost:3000/login`
2. [ ] Login
3. [ ] Allow notifications
4. [ ] Check console - see "Connected" logs
5. [ ] Open incognito window
6. [ ] Login with same account
7. [ ] First window receives notification ✅

**If all above work → System is working! 🎉**

---

## 📞 Getting Help

If tests fail:
1. Check console for errors
2. Verify backend is running
3. Check browser compatibility
4. Review `QUICKSTART.md`
5. Check `TROUBLESHOOTING.md`

---

**Testing Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

**Date**: ______________
**Tester**: ______________
**Result**: ______________

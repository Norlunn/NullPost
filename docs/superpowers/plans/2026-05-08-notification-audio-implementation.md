# Notification Audio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add unread-count tab title updates, hidden-tab notification sound, and a persistent mute toggle to the channel screen.

**Architecture:** Keep the feature entirely client-side in `static/app.js` with a small amount of channel-header markup and styling. Trigger unread and sound updates only from user-visible incoming peer content, using `document.visibilityState` as the hidden-tab signal and Web Audio for the notification tone.

**Tech Stack:** Plain ES modules, DOM APIs, Web Audio API, localStorage, existing FastAPI/pytest suite for regression coverage

---

### Task 1: Add a regression test for the new header control

**Files:**
- Modify: `C:\devops\NullPost\tests\test_main.py`
- Test: `C:\devops\NullPost\tests\test_main.py`

- [ ] **Step 1: Write the failing test**

```python
    def test_channel_header_contains_notifications_toggle(self):
        resp = client.get("/static/index.html")
        assert resp.status_code == 200
        assert 'id="btn-notifications"' in resp.text
```

- [ ] **Step 2: Run test to verify it fails**

Run: `Set-Location -LiteralPath C:\devops\NullPost; python -m pytest tests/test_main.py::TestHttpEndpoints::test_channel_header_contains_notifications_toggle -v`
Expected: `FAIL` because the button is not in `static/index.html` yet.

- [ ] **Step 3: Keep the test in place and move to implementation**

No production code in this task. The next tasks will satisfy the failing assertion by adding the new header control.

- [ ] **Step 4: Re-run test after implementation**

Run: `Set-Location -LiteralPath C:\devops\NullPost; python -m pytest tests/test_main.py::TestHttpEndpoints::test_channel_header_contains_notifications_toggle -v`
Expected: `PASS`

### Task 2: Add the mute-toggle markup and styling

**Files:**
- Modify: `C:\devops\NullPost\static\index.html`
- Modify: `C:\devops\NullPost\static\style.css`

- [ ] **Step 1: Add the header button markup**

Add a compact bell button between the existing theme/help controls and disconnect button:

```html
<button
    id="btn-notifications"
    class="btn-notifications"
    aria-label="Mute notifications"
    data-i18n-aria="muteNotifications"
    data-i18n-title="muteNotifications"
    aria-pressed="false"
>
    <!-- bell-on svg -->
    <!-- bell-off svg -->
</button>
```

- [ ] **Step 2: Add matching header styles**

Add a compact button style that matches the existing channel-header controls:

```css
.btn-notifications {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
}

.btn-notifications.active {
    color: var(--warning);
    border-color: rgba(227, 179, 65, 0.35);
    background: rgba(227, 179, 65, 0.08);
}
```

- [ ] **Step 3: Ensure only one icon is visible per state**

Use stateful selectors so enabled/muted visuals are obvious:

```css
.btn-notifications .icon-bell-off { display: none; }
.btn-notifications.active .icon-bell-on { display: none; }
.btn-notifications.active .icon-bell-off { display: block; }
```

### Task 3: Add unread-count and notification-sound state

**Files:**
- Modify: `C:\devops\NullPost\static\app.js`

- [ ] **Step 1: Add the new DOM reference and state**

Add the new button reference plus local state near the existing header controls:

```js
const btnNotifications = document.getElementById("btn-notifications");

let unreadCount = 0;
let notificationsMuted = false;
let notificationAudioContext = null;
```

- [ ] **Step 2: Add title and mute-render helpers**

Create focused helpers:

```js
function updateDocumentTitle() {
    document.title = unreadCount > 0
        ? `(${unreadCount}) ${t("title")}`
        : t("title");
}

function renderNotificationsToggle() {
    btnNotifications.classList.toggle("active", notificationsMuted);
    btnNotifications.setAttribute("aria-pressed", String(notificationsMuted));
    const key = notificationsMuted ? "unmuteNotifications" : "muteNotifications";
    btnNotifications.setAttribute("aria-label", t(key));
    btnNotifications.title = t(key);
}
```

- [ ] **Step 3: Add hidden-tab and unread helpers**

```js
function shouldNotifyForUnread() {
    return document.visibilityState !== "visible";
}

function clearUnreadCount() {
    unreadCount = 0;
    updateDocumentTitle();
}

function incrementUnreadCount() {
    unreadCount++;
    updateDocumentTitle();
}
```

- [ ] **Step 4: Add a small audio helper**

Use Web Audio with graceful failure:

```js
async function playNotificationSound() {
    if (notificationsMuted || !shouldNotifyForUnread()) return;
    // lazy-create AudioContext, create oscillator/gain, short envelope, swallow errors
}
```

### Task 4: Wire the new behavior into receive paths and lifecycle

**Files:**
- Modify: `C:\devops\NullPost\static\app.js`

- [ ] **Step 1: Add one shared unread trigger helper**

```js
async function notifyUnreadActivity() {
    if (!shouldNotifyForUnread()) return;
    incrementUnreadCount();
    await playNotificationSound();
}
```

- [ ] **Step 2: Trigger unread handling for incoming peer text**

After the received text message is appended and accepted:

```js
const wrap = appendMessage(parsed.m, "received", parsed.n, parsed.mask === true);
if (parsed.exp > 0) scheduleExpiry(wrap, parsed.exp);
sendMsgAck(parsed.n);
void notifyUnreadActivity();
```

- [ ] **Step 3: Trigger unread handling for completed incoming files**

After the completed file UI is finalized and the transfer is removed from `incomingFiles`:

```js
receivedFiles.set(fileId, entry.ui.getWrap());
if (entry.exp > 0) scheduleExpiry(entry.ui.getWrap(), entry.exp);
incomingFiles.delete(fileId);
void notifyUnreadActivity();
```

- [ ] **Step 4: Clear unread count on visibility restore and cleanup**

```js
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        clearUnreadCount();
        flushPendingAcks();
    }
});
```

Also clear unread count in `disconnectCleanup()` and `disconnect()`.

- [ ] **Step 5: Restore persisted mute preference on load**

Read from `localStorage`, default to `false`, and call the render helper during startup.

### Task 5: Add i18n strings and hook up the toggle button

**Files:**
- Modify: `C:\devops\NullPost\static\app.js`
- Modify: `C:\devops\NullPost\static\i18n.js`

- [ ] **Step 1: Add i18n keys in the translation object**

Add four keys beside the existing UI labels in every language entry:

```js
muteNotifications: "Mute notifications",
unmuteNotifications: "Unmute notifications",
notificationsSoundOn: "Sound on",
notificationsSoundOff: "Sound off",
```

- [ ] **Step 2: Bind the button click handler**

```js
btnNotifications.addEventListener("click", () => {
    notificationsMuted = !notificationsMuted;
    localStorage.setItem("notificationsMuted", notificationsMuted ? "1" : "0");
    renderNotificationsToggle();
});
```

- [ ] **Step 3: Keep title updates compatible with language changes**

Update the existing language-application flow to call `updateDocumentTitle()` instead of setting `document.title` directly.

### Task 6: Verify the feature

**Files:**
- Test: `C:\devops\NullPost\tests\test_main.py`

- [ ] **Step 1: Run the focused regression test**

Run: `Set-Location -LiteralPath C:\devops\NullPost; python -m pytest tests/test_main.py::TestHttpEndpoints::test_channel_header_contains_notifications_toggle -v`
Expected: `PASS`

- [ ] **Step 2: Run the full test suite**

Run: `Set-Location -LiteralPath C:\devops\NullPost; python -m pytest tests -v`
Expected: existing suite passes except for any known unrelated failures already present in the repo.

- [ ] **Step 3: Run lint on changed files**

Run: `Set-Location -LiteralPath C:\devops\NullPost; python -m ruff check static/app.js static/index.html static/style.css static/i18n.js tests/test_main.py`
Expected: exit `0`

- [ ] **Step 4: Manual verification**

1. Open two peers.
2. Hide one peer tab.
3. Send a text message and confirm title count increments and sound plays.
4. Send a file and confirm the count increments once after receive completes.
5. Toggle mute and confirm title still updates while sound no longer plays.
6. Return to the hidden tab and confirm the unread count clears immediately.

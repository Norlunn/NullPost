# NullPost Unread Title and Sound Notifications

## Goal

Add lightweight unread-message notifications for the channel screen:

- show the unread count in the browser tab title
- play a short sound for unseen peer activity
- let users mute the sound with a persistent toggle

This behavior applies only when the page is hidden or unfocused from the user's point of view. System messages and protocol events are not counted.

## Scope

In scope:

- incoming peer text messages
- completed incoming file transfers
- title updates for unread count
- bell toggle in the channel header
- persisted mute preference in `localStorage`

Out of scope:

- changes to server behavior
- OS-level notification sound control
- counting typing indicators, read receipts, system messages, or partial file chunks
- adding bundled audio files

## User Experience

### Title behavior

- When the app receives a peer text message while the tab is hidden, increment an in-memory unread counter.
- When the app completes an incoming file transfer while the tab is hidden, increment the same unread counter once for that file.
- Update `document.title` to `(<count>) <translated app title>`.
- When unread count is zero, restore the normal translated app title.
- When the tab becomes visible again, clear the unread count immediately and restore the normal title.

### Sound behavior

- Play a short notification tone only for hidden-tab unread events.
- Play the tone for:
  - incoming peer text messages
  - completed incoming file transfers
- Do not play the tone for:
  - system messages
  - connection state changes
  - typing indicators
  - acknowledgements
  - file chunks before completion
- The default state is sound enabled.

### Mute control

- Add a bell toggle button to the channel header near the existing language/theme/help controls.
- The button reflects enabled vs muted state visually.
- The button uses translated `aria-label` and tooltip text.
- Persist the setting in `localStorage` so it survives reloads.

## Technical Design

### App state

Add frontend-only state in `static/app.js`:

- `unreadCount`
- `notificationsMuted`
- `audioContext` or lazy-created audio helper state

Provide small helper functions for:

- checking whether unread notifications should trigger
- incrementing and clearing unread count
- refreshing the tab title
- toggling and rendering mute state
- playing the notification tone

### Hidden/unfocused detection

Use `document.visibilityState !== "visible"` as the trigger condition.

This matches the approved behavior and fits the app's existing read-receipt logic, which already distinguishes visible vs hidden tabs.

### Notification tone

Use Web Audio to synthesize a short tone instead of shipping a static sound file.

Design constraints:

- lazy-create the audio context only when needed
- keep the sound brief and low-complexity
- swallow playback errors so unsupported or locked-down browsers do not break message handling

If the browser blocks playback because audio was never user-activated, unread count and title updates must still work.

### Message integration points

Trigger unread/sound handling from the receive path after actual user-visible peer content is accepted:

- peer text message branch in `handleDecryptedPayload()`
- completed incoming file branch after the file message UI is finalized

This ensures:

- replay-rejected messages do not count
- partial file chunks do not count
- system/status events do not count

### Reset behavior

Clear unread count when:

- `visibilitychange` reports `visible`
- the user disconnects or cleanup runs

This prevents stale counts from leaking across sessions.

## UI and Styling

Add a new header button in `static/index.html` and style it in `static/style.css`.

Design constraints:

- match the existing compact header control style
- remain usable on mobile layouts
- avoid shifting existing controls unpredictably

The implementation can either reuse an existing small-button class or add a narrow variant specifically for the bell toggle.

## Internationalization

Add i18n keys for:

- notifications sound on
- notifications sound off
- mute notifications
- unmute notifications

The page title should keep using the translated base app title and prepend the unread count without introducing language-specific grammar complexity.

## Error Handling

- Audio playback failures must be ignored silently.
- Missing `localStorage` access should fall back to sound enabled for the current session.
- Browsers without usable Web Audio still update unread count and title correctly.

## Testing

Automated verification:

- run the existing `pytest` suite to ensure no unrelated backend regressions

Manual verification:

1. Connect two peers.
2. Hide one tab.
3. Send a text message from the other peer and verify:
   - unread title count increments
   - sound plays if unmuted
4. Send a file and verify:
   - count increments once on completed receive
   - sound plays if unmuted
5. Bring the hidden tab to the foreground and verify:
   - unread count clears
   - normal title returns
6. Toggle mute on, repeat steps 3-4, and verify:
   - title still updates
   - sound does not play

## Risks and Mitigations

- Mobile browsers may restrict audio autoplay.
  - Mitigation: degrade gracefully and keep title-based unread indication working.

- Hidden-tab detection can differ from focus semantics on some platforms.
  - Mitigation: intentionally standardize on `visibilityState` to match the approved requirement and current app behavior.

- File transfer completion timing could produce duplicate notifications if hooked too early.
  - Mitigation: trigger only after the received file UI is finalized once per file.

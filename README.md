# 📺 YouTube AutoPause Chrome Extension

A simple **Chrome Extension** (Manifest V3) that:

- ⏸️ **Pauses YouTube videos** when you switch tabs, minimize Chrome, or move to another app.  
- ▶️ **Resumes videos** automatically when you return.  
- ⚡ Provides a **popup toggle (Enable / Disable)** to control the feature.  

---

## 📂 Project Structure

├── manifest.json
├── content-script.js
├── popup.html
├── popup.css
└── popup.js


---

## ⚙️ Features

1. **Auto-Pause**:  
   - Detects when the YouTube tab is hidden or window loses focus.  
   - Instantly pauses the playing video.  

2. **Auto-Resume**:  
   - When you return to the tab, it resumes playback.  

3. **Popup Toggle**:  
   - Enable/disable the functionality from the extension popup.  
   - Saves your preference in `chrome.storage.local`.  

---

## 🚀 Installation

1. Download or clone this repository.  
2. Open Chrome and go to **`chrome://extensions/`**.  
3. Enable **Developer Mode** (top-right corner).  
4. Click **Load unpacked** and select the project folder.  
5. The extension will appear in your extensions bar.  

---

## 🖥️ Usage

1. Open a YouTube video in Chrome.  
2. Play the video.  
3. Switch to another tab, minimize Chrome, or change to another app:  
   - ✅ The video will automatically pause.  
4. Return to the YouTube tab:  
   - ✅ The video will automatically resume.  
5. Use the popup toggle to **Enable / Disable** the feature anytime.  

---

## ⚠️ Notes

- Chrome’s **autoplay policy** may sometimes block automatic `video.play()`.  
  - If blocked, just click Play manually once; afterward it should work fine.  
- Works only on **YouTube watch pages** (not embeds).  
- Toggle allows disabling without uninstalling the extension.  

---

## 📌 Example Popup

+-------------------------+
| YouTube AutoPause |
| [ Enable / Disable ] |
| Status: Enabled |
+-------------------------+


---

## 📜 License

This project is open-source and free to use. 🎉

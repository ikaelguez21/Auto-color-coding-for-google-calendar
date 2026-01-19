# Google Calendar Auto-Colorizer

A simple Google Apps Script that automatically color-codes your Google Calendar events based on keywords in the event title.

## 🚀 Features

* **Automatic Coloring:** Scans your calendar daily and applies colors to events based on a predefined list.
* **Case Insensitive:** Works regardless of whether you type in uppercase or lowercase (e.g., "Gym" and "GYM" work the same).
* **Efficient:** Checks if the color is already correct before applying changes to save API quota.

## ⚙️ Configuration (Important!)

The script uses a list of keywords to decide which color to apply. **You must customize this list to match your own schedule.**

1.  Open the `main.js` file.
2.  Locate the `KEYWORD_COLOR_MAP` object.
3.  **Replace the placeholders:** You will see keys like `"[STUDY]"`, `"[WORKOUT]"`, etc. You should change the text inside the quotes to the actual words you use in your calendar.

**Example:**
If you write "Math Homework" in your calendar, change:
`"[STUDY]": CalendarApp.EventColor.MAUVE,`
To:
`"math": CalendarApp.EventColor.MAUVE,` (or `"homework"`)

> **Note:** You do not need to keep the brackets `[]` unless you actually use them in your calendar event titles.

## 🛠️ Installation

1.  Go to [Google Calendar](https://calendar.google.com).
2.  Click the gear icon (**Settings**) > **Settings**.
3.  Select your calendar, scroll down, and usually, you can find **Apps Script** (or go directly to [script.google.com](https://script.google.com)).
4.  Create a new project and paste the code from `main.js`.
5.  Save the project.
6.  Run the `setupTriggers` function **once** to enable the automatic daily updates.
    * You will be asked to grant permissions. Click **Review Permissions** > Choose Account > **Advanced** > **Go to (Project Name) (unsafe)** > **Allow**.

## 📄 License

Copyright (C) 2026 Ika Elguez. All Rights Reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.

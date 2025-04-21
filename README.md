# FeedFetcher

A clean, minimal web app that fetches live headlines from BBC using Python and displays them in a responsive UI built with Tailwind CSS.

![screenshot](preview.png)

## Features

- **Live News Feed:** Parses BBC's RSS feed in real-time using `feedparser`.
- **Responsive UI:** Card-based layout with thumbnail images and hover effects.
- **Dark/Light Theme Toggle:** Seamless theme switching with Tailwind.
- **Article Redirects:** Clickable cards take users directly to the original article.
- **Built from Scratch:** Designed, built, and styled without using templates or UI libraries.

## Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML, Tailwind CSS
- **Data Source:** BBC World News RSS Feed
- **Other:** Feedparser, Requests

## Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/feedfetcher.git
   cd feedfetcher

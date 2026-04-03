# 🔗 URL Shortener

A simple backend application that converts long URLs into short, shareable links.

---

## 🚀 Features

- Generate short URLs from long links
- Redirect short URL to original URL
- REST API-based implementation
- Input validation for URL

---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📌 How It Works

1. User sends a long URL via API request
2. Server generates a unique short code
3. Short URL is created using the code
4. When user visits short URL, it redirects to original link

---

## 📡 API Endpoints

### 🔹 Create Short URL

- **POST** `/shorten`

#### Request Body:
```json
{
  "url": "https://example.com"
}

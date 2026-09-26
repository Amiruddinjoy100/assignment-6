# FitLog — Workout Library

FitLog is a responsive workout library and workout planning web application built with Next.js. Users can browse workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and manage their workout plan from a dedicated My Plan page.

## 🔗 GitHub Repository

https://github.com/Amiruddinjoy100/assignment-6

## 🌐 Live Website



---

## 🚀 Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- React Context API
- Lucide React
- React Hot Toast

---

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Displays all workouts from the FitLog API
- Dynamic workout details page
- Add workouts to **Today's Plan**
- Save workouts for later
- Live **Plan** and **Saved** counters in the navbar
- Maximum 5 workouts can be added to Today's Plan
- Dedicated **My Plan** page
- Today's Plan and Saved workout tabs
- Live exercise, duration, and calorie statistics
- Sort workouts by Duration, Calories, and Rating
- Mark workouts as completed
- Remove workouts from Today's Plan
- Remove workouts from Saved list
- Toast notifications for user actions
- Loading animation while fetching workout data
- Custom 404 page for invalid routes
- Active navbar route highlighting
- Smooth navigation using Next.js Link

---

## 🔌 API

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

Example:

```text
https://api.abcz.workers.dev/api/fitlog/1
```

---

## 📍 Routes

| Route | Description |
|---|---|
| `/` | Home page and workout library |
| `/workouts/[id]` | Dynamic workout details page |
| `/my-plan` | Today's Plan and Saved workouts |

---

## 📁 Project Structure

```text
src/
│
├── app/
│   ├── context/
│   │   └── workoutContext.tsx
│   │
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workouts/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── assets/
│   ├── banner.png
│   └── logo.png
│
├── Components/
│   ├── buttonDetail/
│   │   ├── saveForLaterButton.tsx
│   │   └── todayButton.tsx
│   │
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutList.tsx
│   └── WorkoutLoading.tsx
│
└── types/
    └── workout.ts
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Amiruddinjoy100/assignment-6.git
```

Go to the project directory:

```bash
cd assignment-6
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To check the production build:

```bash
npm run build
```

Then run:

```bash
npm start
```

---

## 🏋️ How It Works

1. Visit the home page.
2. Browse workouts from **The Library**.
3. Click any workout card to view its details.
4. Add the workout to **Today's Plan** or **Save for Later**.
5. Open **My Plan** from the navbar.
6. View Today's Plan or Saved workouts.
7. Sort workouts by duration, calories, or rating.
8. Mark exercises as done or remove them from the list.

---

## 📱 Responsive Design

The application is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

---

## 👨‍💻 Author

**Amiruddin Joy**

GitHub:  
https://github.com/Amiruddinjoy100

---

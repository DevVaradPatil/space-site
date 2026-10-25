# Rocket Club | Godavari Global University

The website for the GGU Rocket Club, a student club that gives members hands-on experience in
model rocketry, satellite technology and space innovation.

**Live:** [stellar-explorers.vercel.app](https://stellar-explorers.vercel.app)

## Features

- 3D hero with Spline / React Three Fiber scenes and a meteor-shower background
- About, Inspiration, Showcase of student projects, Events, and stat counters
- **Team** and **Activities** sections loaded live from Firestore
- Animated testimonials, 3D tilt cards and hyper-text effects
- **Admin page** (`/admin`) for adding and editing team members and activities without a redeploy
- Contact section with toast feedback

## Tech stack

React · Vite · Tailwind CSS · Three.js (React Three Fiber, Drei) · Spline · Framer Motion ·
Firebase (Firestore) · Lottie · Number Flow · React Router · Vercel

## Project structure

```
src/
  components/      page sections (Heroes, About, Showcase, Events, Team, Activities, Contact, Admin)
  components/ui/   3D card, animated testimonials, meteors, hyper-text
  data/            static project data
firebase.js        Firebase config
vercel.json        SPA rewrites
```

## Getting started

```bash
npm install
npm run dev
```

Team and activity content lives in the Firestore `team` and `activities` collections.

## Admin access

`/admin` signs in with Firebase Authentication (email and password). Only accounts listed in the
Firestore `admins` collection get in. One-time setup in the Firebase console (project
`stellar-explorers`):

1. **Authentication → Sign-in method:** enable *Email/Password*.
2. **Authentication → Users → Add user:** create the admin account and copy its **User UID**.
3. **Firestore → Data:** create collection `admins` with a document whose ID is that UID. The
   document can be empty.
4. **Firestore → Rules:** paste in [`firestore.rules`](firestore.rules) and publish. Anyone can read
   team and activities, only admins can write them, and `admins` can't be changed from the client.

To add another admin, repeat steps 2-3.

# React + TypeScript Exercises Repository

This repository contains a small React application created to practice the use of **TypeScript in a React environment**, focusing on strict typing, reusable components, and clean code principles.

The goal of this project is not to build a complex user interface, but to demonstrate how TypeScript improves safety and structure when working with React.

---

## 📁 Project Structure
react/
├── src/
│   ├── components/
│   ├── types/
│   ├── utils/
│   └── App.tsx
├── docs/
└── vite.config.ts

The project follows a simple and organized structure to separate components, types, utilities, and documentation.

---

## ⚛️ React Module: TypeScript in React

This module applies TypeScript concepts inside a React application.

Main concepts covered:
- React components written in TypeScript.
- Generic components using `<T>` (e.g. reusable `DataTable`).
- Strictly typed props and state.
- Use of `keyof` to safely access object properties.
- Partial typing with `Partial<T>` for edit states.
- Discriminated unions for application state modeling.
- Exhaustive checks using the `never` type.
- Integration of an external typed library (`date-fns`).

The focus is on correctness, reusability, and preventing runtime errors through compile-time checks.

---

## 🛠️ Tech Stack & Tools

- Library: React
- Language: TypeScript
- Bundler: Vite
- Runtime: Node.js
- Package Manager: npm

---

## 🚀 How to Run

To run the project locally:

```bash
npm install
npm run dev

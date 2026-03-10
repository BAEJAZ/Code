# Exercise: Routing the Country App

Add client-side routing to your existing Country and Population app using **React Router**.

---

## Objectives

By the end of this exercise, you should be able to:

- Create and configure routes with `react-router-dom`
- Use `Link`, `NavLink`, and `useParams` for navigation and dynamic pages
- Use `useNavigate` to change routes programmatically

---

## Tasks

### 1. Setup React Router

- Install React Router:

  ```bash
  npm install react-router-dom
  ```

- Wrap your app in a `<BrowserRouter>` inside `main.jsx`.

---

### 2. Create Pages

Inside the `src/pages` folder, create:

- `Home.jsx` – Display a welcome message or summary of the app  
- `About.jsx` – Add a short description of what the app does  
- `CountryList.jsx` – Show the list of available countries  
- `CountryDetail.jsx` – Display details for a specific country using a dynamic route `/countries/:name`

---

### 3. Configure Routes

In `App.jsx`:

- Import `{ Routes, Route }` from `react-router-dom`
- Define routes for `/`, `/about`, `/countries`, and `/countries/:name`
- Add a navigation menu with `<NavLink>` components for each page

---

### 4. Dynamic Routing

In `CountryDetail.jsx`:

- Use `useParams()` to read the country name from the URL
- Fetch and display that country’s population data

---

### 5. Programmatic Navigation (Stretch)

Add a “Back to list” button that uses `useNavigate()` to return to `/countries`.

---

## Success Criteria

- [ ] Users can navigate between Home, About, and Countries pages  
- [ ] Selecting a country updates the URL and displays correct data  
- [ ] “Back to list” navigates programmatically  
- [ ] Navigation works without full page reloads  
- [ ] App structure follows good routing practices

---

## Notes

- You can reuse your existing API functions and components from previous exercises  
- Focus on wiring routes correctly — not on adding new styling or features

---

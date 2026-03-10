# React Components Testing Exercise – Cohort Cards

In this exercise, you’ll write and run **React component tests** using **Vitest** and **Testing Library**.

You’ll focus on testing **behaviour**, not implementation details — checking that components render correctly, accept props, and conditionally display content.

---

## 🧪 Getting Started

Make sure dependencies are installed:

```bash
npm install
npm run test
```

Complete the test cases in the testing files found in `src/components`.

---

## 🧩 What You’ll Be Testing

### 🧱 Card Component

Your Card component should:
- Render any child elements passed through `props.children`
- Handle multiple children correctly (a heading and paragraph together)

You do **not** need to test for inline styles or colours - focus on **what** is rendered, not **how** it looks.

---

### 👤 Profile Component

Your Profile component should:
- Display the person’s **name**, **role**, and **avatar**
- Conditionally render the **note** only when it’s provided  
  (show “Loves React” if the prop exists, but not otherwise)

---

## ✅ Learning Outcomes

By completing this exercise, you’ll:
- Practise using **Vitest** and **@testing-library/react**
- Understand how to test **props** and **children**
- Learn how to test **conditional rendering**
- Write tests that focus on **behaviour** rather than internal styling

---

## 💡 Tips

- Use `screen.getByText`, `screen.getByRole`, or `screen.queryByText` for assertions.  
- Avoid testing inline styles or implementation details.  
- Run tests frequently (`npm run test`) to see immediate feedback.

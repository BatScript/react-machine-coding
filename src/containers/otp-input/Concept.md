## useRef — DOM ka Remote Control

React mein normally hum state se sab kuch control karte hain. But kabhi kabhi **seedha DOM node chahiye hota hai** — jaise focus karna.

`useRef` ek box hai jisme tum kuch bhi store kar sakte ho **bina re-render trigger kiye**.

---

### Yahan kya hua?

```js
const refs = useRef([])
```

Ek array banaya jisme **har input ka reference** store hoga.

```jsx
ref={el => { refs.current[index] = el }}
```

Jab React input ko render karta hai, woh uska actual DOM node is array mein daal deta hai.

---

### Flow

1. User box 1 mein type karta hai
2. `onChange` fires → `refs.current[1].focus()` call hota hai
3. Browser **seedha** us input pe jump kar jaata hai
4. Backspace press karo empty box mein → previous box pe wapas

---

> **State** batata hai *kya dikhana hai.*
> **Ref** deta hai *kisi cheez ko pakadne ki power* — bina scene badle.

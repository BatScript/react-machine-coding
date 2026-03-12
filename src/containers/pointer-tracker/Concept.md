## useEffect + Browser Events

React ko pata nahi hota ki mouse kahan hai. Toh hum browser se directly sun'te hain.

`useEffect` mein ek baar `pointermove` listener lagao — **mount pe register, unmount pe cleanup.**

---

### Flow

```
Mouse hilta hai
   → Browser fires `pointermove`
   → handler(e) chalti hai
   → setCoOrdinates({ x, y })
   → React re-renders
   → Circle ka `left/top` update
```

---

### Circle kaise center hoti hai?

```js
left: x - 12,  // width ka aadha
top:  y - 12   // height ka aadha
```

`clientX/Y` pointer ka top-left corner hai. Minus half size karo → **centered.**

---

### `pointer-events-none` kyun?

Bina iske circle khud `pointermove` block kar deta — flicker aata. Isse circle **ghost** ban jaati hai, events pass-through ho jaate hain.

---

> **State** stores position. **CSS** renders it. **Browser event** bridges them.

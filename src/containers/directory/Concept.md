## Recursion in React

Ek component jo **khud ko call karta hai** — yahi hai recursive component.

Tree data hota hai jisme ek node ke andar aur nodes hote hain. Normal loop se yeh handle nahi hota kyunki depth fixed nahi hoti.

---

### Structure

```
{ name, children: [ { name, children: [...] } ] }
```

Kitni bhi deep ho — same component render karta rehta hai.

---

### Flow

```
<RecursiveDirectory data={root} />
  → renders root
  → root.children? → map karo
    → <RecursiveDirectory data={child1} />
    → <RecursiveDirectory data={child2} />
      → child2.children? → aur neeche...
```

---

### Toggle kaise kaam karta hai?

Har node ka **apna state** hota hai (`hide`). Parent ka toggle sirf uske children pe affect karta hai — doosre nodes independent rehte hain.

```js
const [hide, setHide] = useState(false)
```

Ek chhoti si state, poori subtree control kar rahi hai.

---

> Tree ko loop nahi kar sakte. **Recursion** hi natural solution hai.

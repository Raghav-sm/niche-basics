Let’s include HTML examples along with the explanations for clarity:

````markdown
# CSS Selectors: Comprehensive Guide with HTML Examples

---

## Universal Selector (`*`)

The universal selector matches **all elements** on the page.  
**CSS:**

```css
* {
  margin: 0;
  padding: 0;
}
```
````

**HTML Example:**

```html
<div>Content</div>
<p>Paragraph</p>
```

The above CSS will reset the margin and padding for all elements (`div`, `p`, etc.).  
**Tip:** Use for resets sparingly as it affects performance.

---

## Type Selector

Targets elements by their **HTML tag name**.  
**CSS:**

```css
p {
  color: blue;
}
```

**HTML Example:**

```html
<p>This is a paragraph.</p>
<div>This is a div.</div>
```

Here, only the `<p>` tag will have blue text.  
**Tip:** Use type selectors for generic styles but rely on classes for more specific designs.

---

## Class Selector (`.`)

Targets elements with a specific **class attribute**.  
**CSS:**

```css
.card {
  background-color: #fff;
  border-radius: 8px;
}
```

**HTML Example:**

```html
<div class="card">Card Content</div>
<div class="card">Another Card</div>
```

All elements with the `card` class will share the same style.  
**Tip:** Classes are the most reusable and preferred for production.

---

## ID Selector (`#`)

Targets elements by their **unique ID**.  
**CSS:**

```css
#header {
  background-color: #333;
  color: white;
}
```

**HTML Example:**

```html
<div id="header">This is the header</div>
```

Only the element with the ID `header` will be styled.  
**Tip:** Avoid using IDs for styling as they have high specificity and are not reusable.

---

## Attribute Selector

Targets elements based on **attributes or attribute values**.  
**CSS:**

```css
input[type="text"] {
  border: 1px solid #ccc;
}
```

**HTML Example:**

```html
<input type="text" placeholder="Enter your name" />
<input type="password" placeholder="Enter your password" />
```

Only the text input will have the specified border.  
**Tip:** Combine with classes for better maintainability.

---

## Pseudo-class Selector

Targets elements in a specific **state** (like `:hover`, `:focus`, or `:nth-child`).  
**CSS:**

```css
a:hover {
  color: red;
}
```

**HTML Example:**

```html
<a href="#">Hover over this link</a>
```

The link changes to red when hovered over.  
**Tip:** Use pseudo-classes to improve interactivity and user experience.

---

# Selector Hierarchy in Production:

1. **Classes (`.`)**: Used for most styling due to reusability and flexibility.
2. **Pseudo-classes**: Essential for interactivity (e.g., `:hover`, `:focus`).
3. **Attribute Selectors**: Useful for specific use cases like forms.
4. **Type Selectors**: For general, broad styles.
5. **ID Selectors (`#`)**: Use sparingly for unique elements.
6. **Universal Selector (`*`)**: Limited to resets or very generic rules.

**Final Tip:** Always aim for **low specificity** and prioritize classes to keep your CSS modular and maintainable.

```

```

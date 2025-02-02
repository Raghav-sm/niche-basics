# **Understanding the Node.js File Server Code**  

This Node.js script creates a **simple HTTP server** that serves static files (HTML, CSS, JavaScript, images, etc.) and handles **404 errors** (file not found) and **500 errors** (server errors).  

---

## **1️⃣ What This Code Does**  
1. **Creates an HTTP server** using `http.createServer()`.  
2. **Serves static files** (like `index.html`, `styles.css`, etc.) based on incoming requests.  
3. **Handles MIME types** to return proper content (HTML, CSS, JS, PNG, etc.).  
4. **Handles errors**:  
   - **404 Error**: If a file is not found, it returns a custom error message.  
   - **500 Error**: If there's an unexpected server error, it returns a `500: Internal Server Error`.  

---

## **2️⃣ Breaking Down the Code**  

### **1. Importing Required Modules**  
```javascript
const http = require('http');   // Core HTTP module to create the server
const fs = require('fs');       // File System module to read files
const path = require('path');   // Path module to handle file paths
```
- **`http`** → Used to create an HTTP server.  
- **`fs`** → Used to read and serve files.  
- **`path`** → Used to handle file paths dynamically.  

---

### **2. Setting Up the Server on Port 3000**  
```javascript
const port = 3000;
```
- The server will listen on **port 3000** (`http://localhost:3000`).  
- You can change it to any other available port.  

---

### **3. Creating the HTTP Server**  
```javascript
const server = http.createServer((req, res) => { ... });
```
- **`req` (Request Object)** → Contains details of the client's request (e.g., URL, HTTP method).  
- **`res` (Response Object)** → Used to send responses back to the client.  

---

### **4. Resolving the Requested File Path**  
```javascript
const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
console.log(filePath);
```
- **`req.url`** → Captures the URL requested by the client.  
- If the user accesses `/` (root URL), it serves `index.html`.  
- Otherwise, it serves the requested file (`/styles.css`, `/script.js`, etc.).  
- **Example Requests & Resolved File Paths**:  
  - **Request: `/`** → Serves `index.html` (`/home/user/project/index.html`)  
  - **Request: `/styles.css`** → Serves `/styles.css` (`/home/user/project/styles.css`)  

---

### **5. Determining the MIME Type (Content Type)**  
```javascript
const extensionName = String(path.extname(filePath)).toLowerCase();
```
- Extracts the file extension (`.html`, `.css`, `.js`, `.png`, etc.).  
- **Example**:  
  - `/index.html` → `.html`  
  - `/styles.css` → `.css`  

```javascript
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'text/png',
};
```
- **Maps file extensions to their MIME types**.  
- Helps browsers interpret the file correctly.  

```javascript
const contentType = mimeTypes[extensionName] || 'application/octet-stream';
```
- If the file type is **not in the list**, it defaults to **`application/octet-stream`** (generic binary data).  

---

### **6. Reading the File & Sending Response**  
```javascript
fs.readFile(filePath, (err, content) => { ... });
```
- **`fs.readFile(filePath, callback)`** → Reads the file asynchronously.  
- **`err`** → Contains the error (if any).  
- **`content`** → Contains the file's data if read successfully.  

---

### **7. Handling Errors (404 & 500)**  

#### **Case 1: File Not Found (404 Error)**
```javascript
if (err) {
  if (err.code === "ENOENT") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404: Congrats, classic 404 error</h1>", "utf-8");
  }
```
- **`err.code === "ENOENT"`** → This means the file **does not exist**.  
- Sends a `404 Not Found` response with a custom error message.  

#### **Case 2: Server Error (500 Error)**
```javascript
else {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end("500: Internal Server Error");
}
```
- If the error **is NOT a missing file**, it means something went wrong in the server.  
- Sends a `500: Internal Server Error` message.  

---

### **8. Serving the File (Success Case)**
```javascript
res.writeHead(200, { "Content-Type": contentType });
res.end(content, "utf-8");
```
- If the file **exists**, it sends a **200 OK** response with the file content.  
- **Example Responses**:  
  - `index.html` → `text/html`  
  - `styles.css` → `text/css`  

---

### **9. Starting the Server**
```javascript
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```
- Starts the server on **port 3000**.  
- Logs `Server is listening on port 3000`.  

---

## **3️⃣ Example Scenarios**  

| **Request URL**  | **Resolved File Path**  | **Response**  |
|-----------------|------------------------|--------------|
| `/`             | `index.html`            | Serves `index.html` |
| `/styles.css`   | `styles.css`            | Serves `styles.css` |
| `/script.js`    | `script.js`             | Serves `script.js` |
| `/unknown.png`  | `unknown.png` (not found) | 404: Custom Error |
| `/invalid.txt`  | `invalid.txt` (not mapped) | `application/octet-stream` |

---

## **4️⃣ Key Concepts Explained**  

### **📌 1. What is a Web Server?**
A **web server** is software that:
- Listens for requests from clients (browsers, apps).  
- Processes those requests.  
- Responds with the requested resource (HTML, CSS, JS, images).  

Here, **Node.js** and the `http` module are used to create a simple web server.  

---

### **📌 2. What is MIME Type?**
MIME (**Multipurpose Internet Mail Extensions**) types tell browsers how to interpret files.  

- `text/html` → HTML file  
- `text/css` → CSS file  
- `text/javascript` → JavaScript file  
- `image/png` → PNG image  

---

### **📌 3. What is Localhost & Port?**
- **`localhost`** → A special hostname that points to your **own computer**.  
- **Port `3000`** → The server is listening on port **3000**.  

**Example:**  
If you open `http://localhost:3000/index.html`, the browser requests `index.html`, and the server returns it.

---

## **5️⃣ Summary**
- **✅ Handles static files (HTML, CSS, JS, images).**  
- **✅ Detects correct content type using MIME types.**  
- **✅ Handles 404 errors (file not found).**  
- **✅ Handles 500 errors (unexpected server issues).**  
- **✅ Uses `http`, `fs`, and `path` modules.**  
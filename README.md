<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <h1>VocaBoost - Vocabulary Learning App</h1>
</head>
<body>

<h1>📌 VocaBoost - Vocabulary Learning App</h1>
<p>VocaBoost is a <b>React-based vocabulary learning app</b> that helps users organize and review words efficiently.</p>
<p>It is built using <b>JavaScript, React.js, MongoDB, and Render</b> to provide a <b>full-stack experience</b> with a dynamic backend and seamless UI.</p>

<ul>
    <li>🚀 <b>Live Demo:</b> <a href="https://kbyunghak.github.io/React_VocaBoost/">VocaBoost on GitHub Pages</a></li>
    <li>🔗 <b>Backend API:</b> <a href="https://voca-backend-i7hh.onrender.com/api/days">Hosted on Render</a></li>
</ul>

<hr>

<h2>🛠 Tech Stack</h2>
<ul>
    <li><b>Frontend:</b> React.js, JavaScript</li>
    <li><b>Backend:</b> Node.js, Express.js, MongoDB (Atlas)</li>
    <li><b>Database:</b> MongoDB (NoSQL)</li>
    <li><b>Hosting:</b> GitHub Pages (Frontend), Render (Backend)</li>
</ul>

<hr>

<h2>📂 Features</h2>
<ul>
    <li>✅ View Vocabulary Days – Displays a list of available study days</li>
    <li>✅ Add New Words – Users can add new words and their meanings</li>
    <li>✅ Delete Words – Easily remove words from the database</li>
    <li>✅ Mark Words as Learned – Toggle words as learned or not</li>
    <li>✅ Dynamic MongoDB Storage – Data is stored and retrieved from MongoDB Atlas</li>
    <li>✅ Full CRUD Operations – Create, Read, Update, and Delete functionality</li>
</ul>

<hr>

<h2>⚡ Getting Started</h2>
<h3>1️⃣ Clone the Repository</h3>
<pre><code>git clone https://github.com/kbyunghak/React_VocaBoost.git
cd React_VocaBoost</code></pre>

<h3>2️⃣ Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>3️⃣ Start the Development Server</h3>
<pre><code>npm start</code></pre>

<p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>

<hr>

<h2>🚀 Backend Setup (MongoDB + Render)</h2>
<h3>1️⃣ Clone the Backend Repository</h3>
<pre><code>git clone https://github.com/kbyunghak/voca-backend.git
cd voca-backend</code></pre>

<h3>2️⃣ Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>3️⃣ Create a `.env` File</h3>
<pre><code>touch .env</code></pre>

<p><b>Inside `.env`:</b></p>
<pre><code>MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/Develop?retryWrites=true&w=majority
PORT=8080</code></pre>

<h3>4️⃣ Start the Backend Server</h3>
<pre><code>node server.js</code></pre>

<hr>

<h2>📡 API Endpoints</h2>
<p>The backend provides RESTful API endpoints for managing vocabulary.</p>

<h3>📌 GET All Days</h3>
<pre><code>GET /api/days</code></pre>

<h3>📌 GET Words for a Day</h3>
<pre><code>GET /api/words?day=1</code></pre>

<h3>📌 ADD a New Word</h3>
<pre><code>POST /api/words</code></pre>

<h3>📌 DELETE a Word</h3>
<pre><code>DELETE /api/words/{word_id}</code></pre>

<hr>

<h2>🛠 Deployment</h2>

<h3>Frontend Deployment (GitHub Pages)</h3>
<pre><code>npm run build
npm run deploy</code></pre>

<h3>Backend Deployment (Render)</h3>
<pre><code>git add .
git commit -m "Deploy to Render"
git push origin main</code></pre>

<ul>
    <li>Go to <a href="https://render.com/">Render</a> and create a new Web Service.</li>
    <li>Connect GitHub repo and add <b>MONGODB_URI</b> as an environment variable.</li>
    <li>Deploy & get API URL.</li>
</ul>

<hr>

<h2>🔗 Links</h2>
<ul>
    <li><b>Frontend (GitHub Pages):</b> <a href="https://kbyunghak.github.io/React_VocaBoost/">VocaBoost App</a></li>
    <li><b>Backend (Render API):</b> <a href="https://voca-backend-i7hh.onrender.com/api/days">VocaBoost API</a></li>
    <li><b>GitHub Repositories:</b></li>
    <ul>
        <li><a href="https://github.com/kbyunghak/React_VocaBoost">Frontend Repo</a></li>
        <li><a href="https://github.com/kbyunghak/voca-backend">Backend Repo</a></li>
    </ul>
</ul>

<hr>

<h2>📜 License</h2>
<p>This project is open-source and available under the <b>MIT License</b>.</p>

<hr>

<h2>🎉 Enjoy Learning Vocabulary with VocaBoost! 🚀</h2>

</body>
</html>

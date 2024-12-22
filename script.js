/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and Font */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: linear-gradient(to right, #f3efef, #e2e1e1);
    color: #333;
    margin: 0;
    padding: 0;
}


header {
    background: #333;
    color: white;
    padding: 10px 0;
}

header .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

h1 {
    font-size: 2rem;
}

/* Section Styling */
section {
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.skill-bar {
    background: #ddd;
    border-radius: 25px;
    overflow: hidden;
    margin: 10px 0;
    height: 20px;
}

.skill-bar .progress {
    background: #28a745;
    height: 100%;
    line-height: 20px;
    color: white;
    text-align: center;
    border-radius: 25px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.resume section {
    animation: fadeIn 1.5s ease-in-out;
}


h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

ul {
    list-style: none;
}

ul li {
    margin-bottom: 8px;
}

/* Footer */
footer {
    background: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
}

footer .container {
    width: 80%;
    margin: 0 auto;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        align-items: flex-start;
    }

    header nav ul {
        flex-direction: column;
        align-items: flex-start;
    }

    header nav ul li {
        margin-left: 0;
        margin-bottom: 10px;
    }
}

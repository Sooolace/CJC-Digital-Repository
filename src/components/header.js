// src/components/header.js
function loadHeader() {
    const headerHTML = `
        <header>
            <div class="header-container">
                <a href="home.html">
                    <img src="../src/assets/images/cjcrepologo.png" alt="CJC Repository Logo" class="logo">
                </a>
                <nav>
                    <a href="home.html">Home</a>
                    <a href="search.html">Search</a>
                    <a href="#">Resources</a>
                    <a href="#">Help</a>
                    <a href="login.html" class="sign-in-btn">Sign In</a>
                </nav>
            </div>
        </header> 
    `;

    // Inject the header HTML into the `header` container
    document.getElementById("header").innerHTML = headerHTML;
}

// Call the function once the page has loaded
window.onload = loadHeader;

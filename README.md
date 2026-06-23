# Interactive UI & Frontend Development (Task 2)

This repository contains my submission for Task 2 of the ApexPlanet Full-Stack Web Development Internship (Days 13-24). The project implements a mobile-first login and registration system utilizing a premium dark Espresso Brown and Burnished Gold visual layout framework.

## Key Project Features
- **Bootstrap 5 Framework integration:** Mobile-first layout using rows, responsive grid columns, and utility classes.
- **Dynamic JavaScript interactions:** Includes secure client-side form verification, interactive eye-icon password toggles, and matching validation.
- **Real PHP & MySQL AJAX Integration:** Asynchronously queries the database via the Fetch API to verify username availability instantly without refreshing the page.
- **Interactive UI Additions:** Features a specialized golden particle star trail cursor tracker responding dynamically to user mouse paths.

## Local Project Structure
```bash
├── 📁 css/
│   └── style.css            # Custom espresso brown & gold utility overrides
├── 📁 js/
│   └── auth_validation.js   # Client-side validation, password toggles, star trail, & AJAX
├── navbar.php               # Component header navigation bar
├── footer.php               # Component footer layout
├── index.php                # System home presentation interface
├── login.php                # Authentication page block
├── register.php 
├── verify_login.php             # New record signup container
└── check_user.php           # Asynchronous PHP backend database lookup engine
```
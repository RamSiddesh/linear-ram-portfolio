# Linear Ram Portfolio

This is a personal portfolio website built with React, TypeScript, and Vite, designed to showcase projects and skills. It features a clean, modern design inspired by Linear's aesthetic.

## ✨ Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Interactive UI:** Smooth animations and transitions for a better user experience.
*   **Contact Form:** Integrated with Formspree for easy contact, including validation and spam prevention.
*   **GitHub Pages Deployment:** Streamlined deployment process using npm scripts.
*   **SEO Optimized:** Basic SEO meta tags included for better search engine visibility.
*   **Dark Mode (Conceptual):** While not fully implemented, the design considers a potential dark mode.



## ✨ My Portfolio 
   https://ramsiddesh.github.io/linear-ram-portfolio/



## 🛠️ Technologies Used

*   **Frontend:**
    *   React
    *   TypeScript
    *   Vite (Build Tool)
    *   Tailwind CSS (Styling)
    *   Framer Motion (Animations)
*   **Contact Form:**
    *   Formspree
*   **Deployment:**
    *   GitHub Pages
*   **Linting & Formatting:**
    *   ESLint
    *   Prettier

## 🚀 Local Development Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/<YOUR_USERNAME>/linear-ram-portfolio.git
    cd linear-ram-portfolio
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Start the development server:**
    ```sh
    npm run dev
    ```
    This will start the development server, typically at `http://localhost:5173` (or the port Vite chooses if 5173 is busy). The base path for the dev server is configured in `vite.config.ts` as `/linear-ram-portfolio/`, so the accessible URL will likely be `http://localhost:5173/linear-ram-portfolio/`.

## 📝 Contact Form Setup (Formspree)

This project uses Formspree to handle contact form submissions. To make it work, you need to:

1.  **Create a Formspree account** if you don't have one: [https://formspree.io/](https://formspree.io/)
2.  **Create a new form** in Formspree and get your form endpoint URL. It will look something like `https://formspree.io/f/YOUR_UNIQUE_ID`.
3.  **Update the `ContactSection.tsx` file**:
    *   Open `src/components/sections/ContactSection.tsx`.
    *   The Formspree endpoint URL (e.g., `https://formspree.io/f/YOUR_UNIQUE_ID`) is used directly within the `fetch` call inside the `onSubmit` function.
    *   Ensure this URL is updated to your specific Formspree endpoint. The current implementation uses the URL provided during setup (`https://formspree.io/f/xrbzgrnr`).
4.  **Configure your Formspree form settings** to send emails to your desired address (e.g., `ramsid4407@gmail.com`) and customize the subject line if needed (though the code sets it to "Portfolio Contact: [Sender's Name]").

## 🚢 Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages.

**Prerequisites:**

*   Ensure your repository is on GitHub.
*   You have `npm` and `git` installed.

**Deployment Steps:**

1.  **Install dependencies** (if you haven't already):
    ```sh
    npm install
    ```
2.  **Build and deploy the project**:
    ```sh
    npm run deploy
    ```
    This command will first build your project into the `dist` folder (`npm run predeploy` script, which runs `npm run build`) and then push the contents of the `dist` folder to the `gh-pages` branch of your repository (`npm run deploy` script, which runs `gh-pages -d dist`).

3.  **Configure GitHub Pages in your repository settings**:
    *   Go to your GitHub repository.
    *   Click on "Settings".
    *   Navigate to the "Pages" section in the left sidebar.
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   For "Branch", select `gh-pages` and the `/ (root)` folder.
    *   Click "Save".

Your site should be live at `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/` (e.g., `https://ramsiddesh.github.io/linear-ram-portfolio/`) after a few minutes.

**Custom Domain:**

If you plan to use a custom domain later:

1.  Configure your custom domain in the GitHub Pages settings.
2.  Add a `CNAME` file to your `public` directory with your custom domain (e.g., `yourdomain.com`). Vite will automatically include files from the `public` directory in the build output.

## 💡 Additional Optimizations Implemented

*   **Contact Form:** Integrated with validation, loading/success/error states, and a honeypot for spam prevention.
*   **GitHub Pages Deployment:** Configured `vite.config.ts` and `package.json` for easy deployment.
*   **SEO Meta Tags:** Basic SEO meta tags are present in `index.html`. You can customize `og:image` and `twitter:image` further.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/<YOUR_USERNAME>/linear-ram-portfolio/issues).

## License

This project is [MIT](./LICENSE) licensed.
**Edit a file directly in GitHub**

- Navigate to the desired file(s).

## Contact Form Setup (Formspree)

This project uses Formspree to handle contact form submissions. To make it work, you need to:

1.  **Create a Formspree account** if you don't have one: [https://formspree.io/](https://formspree.io/)
2.  **Create a new form** in Formspree and get your form endpoint URL. It will look something like `https://formspree.io/f/YOUR_UNIQUE_ID`.
3.  **Update the `ContactSection.tsx` file**:
    *   Open `src/components/sections/ContactSection.tsx`.
    *   The Formspree endpoint URL (e.g., `https://formspree.io/f/YOUR_UNIQUE_ID`) is used directly within the `fetch` call inside the `onSubmit` function.
    *   Ensure this URL is updated to your specific Formspree endpoint if it changes. The current implementation uses the URL provided during setup.
4.  **Configure your Formspree form settings** to send emails to `ramsid4407@gmail.com` and customize the subject line if needed (though the code sets it to "Portfolio Contact: [Sender's Name]").

## Deployment to GitHub Pages

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
    This command will first build your project into the `dist` folder (`npm run predeploy` script) and then push the contents of the `dist` folder to the `gh-pages` branch of your repository (`npm run deploy` script).

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

## Additional Optimizations Implemented

*   **Contact Form:** Integrated with validation, loading/success/error states, and a honeypot for spam prevention.
*   **GitHub Pages Deployment:** Configured `vite.config.ts` and `package.json` for easy deployment.
*   **SEO Meta Tags:** Basic SEO meta tags are present in `index.html`. You can customize `og:image` and `twitter:image` further.
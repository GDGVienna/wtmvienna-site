# Welcome to Women Techmakers Vienna

A responsive static website built with [Eleventy](https://www.11ty.dev/), HTML, CSS, and JavaScript. This project serves as the official website for Women Techmakers Vienna, featuring sections such as a hero banner, about, schedule, partners, and more.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Building for Production](#building-for-production)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## Prerequisites

- **Node.js**: Make sure you have Node.js installed (version 12 or higher is recommended).
- **npm**: Comes pre-installed with Node.js.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GDGVienna/wtmvienna-site.git
   cd wtmvienna-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Development

To run the development server with live reloading, execute:

```bash
npx eleventy --serve
```

This command starts the Eleventy server, and you can view your site in a browser at [http://localhost:8080](http://localhost:8080).

## Project Structure

```
/your-repo
├── .eleventy.js         # Eleventy configuration file
├── package.json         # Project metadata and dependencies
├── README.md            # This file
└── src                  # Source files
    ├── _includes        # Template partials (header, footer, etc.)
    ├── assets           # CSS, JavaScript, images, etc.
    ├── index.md         # Homepage content (Markdown)
    ├── schedule.md      # Schedule page content
    └── ...              # Other pages and content
```

## Building for Production

To generate a static version of your site, run:

```bash
npx eleventy
```

The output will be generated in the `_site` directory, which you can deploy to any static hosting service.

## Customization

- **Templates:** Edit your HTML or Markdown files in the `src/` directory. Use the `_includes` folder for reusable components like headers and footers.
- **Styling:** Modify your CSS files in `src/assets/css/` to adjust the look and feel of your site.
- **JavaScript:** Place custom scripts in `src/assets/js/` and include them in your templates as needed.

## Deployment

You can deploy the contents of the `_site` directory to any static hosting service, such as:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## License

This project is open-source and available under the [ISC License](LICENSE).

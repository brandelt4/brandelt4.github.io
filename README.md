# Alex Zakharov - Personal Academic Website

A minimalist, modern personal website for Alex Zakharov, PhD student in Machine Learning at the University of Oxford.

## 🎨 Design Features

- **Minimalist & Clean**: Modern, academic-focused design with clean typography
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast & Lightweight**: Optimized CSS and minimal JavaScript for fast loading
- **Accessible**: Semantic HTML and proper contrast ratios
- **Professional**: Perfect for academic and research purposes

## 🛠️ Built With

- **Jekyll** - Static site generator
- **Custom CSS** - Minimalist design system with CSS variables
- **Vanilla JavaScript** - Smooth animations and interactions
- **GitHub Pages** - Hosting and deployment

## 📱 Features

- Hero section with profile image and social links
- Research showcase with publication cards
- Responsive navigation with mobile hamburger menu
- Smooth scroll animations
- Professional color scheme
- Modern typography using system fonts

## 🚀 Local Development

To run the site locally:

```bash
# Install dependencies
bundle install

# Serve the site
bundle exec jekyll serve

# Or with live reload
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Main layout
│   └── page.html        # Page layout
├── _includes/           # Reusable components
├── public/              # Static assets
│   ├── css/
│   │   └── minimalist.css  # Main stylesheet
│   └── js/
│       └── main.js      # JavaScript functionality
├── assets/              # Images and media
├── index.html           # Homepage
├── about.md             # About page
└── research.md          # Research page
```

## 🎯 Pages

- **Home** (`/`) - Hero section with bio and recent research
- **About** (`/about`) - Detailed biography and background
- **Research** (`/research`) - Complete list of publications and projects

## 🔧 Customization

The design uses CSS custom properties (variables) for easy customization:

```css
:root {
  --primary-color: #2c3e50;
  --accent-color: #3498db;
  --text-color: #333;
  --background: #ffffff;
  /* ... more variables */
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

## 🤝 Contact

- **Email**: brandelt4@gmail.com
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=x17I0JcAAAAJ&hl=en)
- **Twitter**: [@az_prd](https://twitter.com/az_prd)
- **GitHub**: [brandelt4](https://github.com/brandelt4)

---

Built with ❤️ using Jekyll and modern web technologies.

# Slides Directory

This directory is for storing presentation slides and related files.

## Structure

```
public/slides/
├── README.md                   # This file
├── presentations/             # Presentation files
│   ├── portfolio-overview.pptx    # Original PowerPoint file
│   ├── portfolio-overview.pdf     # Web-friendly PDF version
│   ├── project-presentation.pdf
│   └── technical-talk.pdf
└── images/                    # Slide images and thumbnails
    ├── portfolio-thumbnail.png    # Main thumbnail (16:9 ratio)
    ├── portfolio-slide-1.png      # Individual slide images
    ├── portfolio-slide-2.png
    ├── projects-thumbnail.png
    └── datascience-thumbnail.png
```

## Usage

### PDF Presentations

Store your PDF slide decks in the `presentations/` directory:

```jsx
// Link to a PDF presentation
<a href="/slides/presentations/portfolio-overview.pdf" target="_blank">
  View Portfolio Overview
</a>

// Embed PDF in iframe
<iframe 
  src="/slides/presentations/portfolio-overview.pdf" 
  width="100%" 
  height="600px"
/>
```

### Slide Images

Store slide thumbnails and individual slide images in the `images/` directory:

```jsx
// Display slide thumbnail
<img 
  src="/slides/images/portfolio-thumbnail.jpg" 
  alt="Portfolio Overview Slide"
  className="w-full h-48 object-cover rounded-lg"
/>
```

## Best Practices

- **File Naming**: Use descriptive, kebab-case names (e.g., `portfolio-overview.pdf`)
- **File Sizes**: Keep PDFs under 10MB for optimal loading
- **Thumbnails**: Create 16:9 aspect ratio thumbnails for consistency
- **Alt Text**: Always include descriptive alt text for images
- **Accessibility**: Ensure PDFs are accessible with proper headings and structure

## Supported Formats

- **PDF**: Best for presentations and slide decks
- **Images**: JPG, PNG, WebP for thumbnails and individual slides
- **Videos**: MP4, WebM for presentation recordings (store in `/videos/presentations/`)

## Example Files

1. **Portfolio Overview**: `portfolio-overview.pdf`
2. **Project Deep Dive**: `project-presentation.pdf`
3. **Technical Talk**: `technical-talk.pdf`
4. **Thumbnails**: `*-thumbnail.jpg`

---

**Note**: This directory is publicly accessible, so only include content you want to share publicly.

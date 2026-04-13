# Videos Directory

This directory contains video files for the portfolio website.

## File Structure
```
public/videos/
├── elevator-pitch.mp4          # Main elevator pitch video
├── project-demos/              # Project demonstration videos
│   ├── mymental-demo.mp4
│   ├── mychat-demo.mp4
│   └── antique-cafe-demo.mp4
├── background/                 # Background videos
│   └── hero-background.mp4
└── README.md                   # This file
```

## Usage in Components

### Basic Video Player
```jsx
<video controls className="w-full rounded-lg">
  <source src="/videos/elevator-pitch.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Video with Poster/Thumbnail
```jsx
<video 
  controls 
  poster="/images/video-thumbnail.jpg"
  className="w-full rounded-lg"
>
  <source src="/videos/elevator-pitch.mp4" type="video/mp4" />
</video>
```

### Responsive Video
```jsx
<video 
  controls 
  className="w-full h-auto max-w-4xl mx-auto rounded-lg"
  preload="metadata"
>
  <source src="/videos/elevator-pitch.mp4" type="video/mp4" />
</video>
```

## File Guidelines

- **Format**: Use MP4 (H.264) for best compatibility
- **Size**: Keep files under 10MB for optimal loading
- **Resolution**: 1920x1080 (1080p) maximum for web
- **Duration**: Keep videos concise (30-60 seconds for elevator pitch)
- **Compression**: Use tools like HandBrake to compress videos

## Video Optimization

1. **Compress videos** before uploading
2. **Use WebM format** as fallback for better compression
3. **Add poster images** for better UX
4. **Consider lazy loading** for videos below the fold

## Example Implementation

```jsx
// In your component
const VideoPlayer = ({ src, poster, title }) => (
  <div className="relative">
    <video 
      controls 
      poster={poster}
      className="w-full rounded-lg shadow-lg"
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
      Your browser does not support the video tag.
    </video>
    {title && (
      <h3 className="mt-2 text-lg font-semibold text-center">{title}</h3>
    )}
  </div>
);

// Usage
<VideoPlayer 
  src="/videos/elevator-pitch.mp4"
  poster="/images/elevator-pitch-thumbnail.jpg"
  title="My Elevator Pitch"
/>
```

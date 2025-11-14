# 🎯 Portfolio Management Guide

Your portfolio is now set up for easy editing and automatic deployment! Here's how to manage it:

## 📁 Easy Content Management

All your portfolio content is now stored in a single JSON file: `src/data/portfolio.json`

### Adding New Projects

**Option 1: Use the helper script**

```bash
node scripts/add-content.js
```

**Option 2: Edit JSON directly**
Open `src/data/portfolio.json` and add to the `projects` array:

```json
{
  "id": "my-new-project",
  "name": "My New Project",
  "description": "Description of what the project does",
  "tags": [
    {
      "name": "React",
      "color": "text-blue-500"
    }
  ],
  "image": "https://example.com/image.jpg",
  "youtube": "",
  "github": "https://github.com/username/repo",
  "demo": "https://demo-url.com",
  "featured": true
}
```

### 🎥 **YouTube Video Support**

You can now use YouTube videos instead of images for your projects! Simply add a YouTube URL to the `youtube` field:

```json
{
  "id": "video-project",
  "name": "My Video Project",
  "description": "A project showcased with a YouTube video",
  "tags": [{ "name": "React", "color": "text-blue-500" }],
  "image": "",
  "youtube": "https://www.youtube.com/watch?v=VIDEO_ID",
  "github": "https://github.com/username/repo",
  "demo": "",
  "featured": true
}
```

**Supported YouTube URL formats:**

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

💡 **Tip:** Leave `youtube` empty (`""`) to use an image instead.

### Adding New Experiences

Edit the `experiences` array in `portfolio.json`:

```json
{
  "id": "company-name",
  "title": "Job Title",
  "company": "Company Name",
  "logo": "https://company-logo.com/logo.png",
  "date": "2024 - Present",
  "description": "What you did at this job",
  "skills": ["React", "Node.js", "Python"],
  "current": true
}
```

### Adding New Technologies

Edit the `technologies` array:

```json
{
  "name": "Technology Name",
  "icon": "tech-icon.png",
  "category": "frontend" // or "backend", "tools"
}
```

## 🚀 Automatic Deployment

Your portfolio automatically deploys to GitHub Pages when you:

1. **Push to main branch** - Triggers automatic deployment
2. **Commit changes** - GitHub Actions builds and deploys your site

### Manual Deployment

If you prefer manual control:

```bash
npm run build
npm run deploy
```

## 📝 Available Color Classes for Tags

- `text-blue-500` - Blue
- `text-green-500` - Green
- `text-yellow-500` - Yellow
- `text-purple-500` - Purple
- `text-red-500` - Red
- `text-gray-500` - Gray
- `text-pink-500` - Pink
- `text-indigo-500` - Indigo

## 🔧 Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📂 Project Structure

```
src/
├── data/
│   └── portfolio.json    # ← Edit this file to update content
├── constants/
│   └── index.js         # ← Imports from portfolio.json
└── components/          # React components
```

## 🎨 Customization Tips

1. **Images**: Use high-quality images (1200x630 recommended for projects)
2. **Descriptions**: Keep them concise but informative
3. **Tags**: Use consistent naming and colors
4. **Featured projects**: Set `featured: true` for your best work
5. **Current job**: Set `current: true` for your current position

## 🚨 Common Issues

- **Build fails**: Check JSON syntax in `portfolio.json`
- **Images not loading**: Ensure URLs are publicly accessible
- **Deployment issues**: Check GitHub Actions tab in your repo

That's it! Your portfolio is now super easy to maintain and will automatically deploy whenever you push changes to GitHub! 🎉

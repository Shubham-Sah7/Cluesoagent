# Professional Editor Workspace Redesign

## Current State
The editor feels like a review screen with:
- Large video preview
- AI suggestion cards
- Basic timeline with colored rectangles
- Generic properties panel

## Target State
Transform into a professional content production workspace like Canva Video, Descript, Loom, Guidde, and Riverside.

## 4-Panel Structure

### 1. Left Sidebar (240px)
**Professional workspace sections:**
- **Scenes** - Scene cards with thumbnails, duration, script preview
- **Script** - Full script editor with timestamps
- **Captions** - Caption editor with styling options
- **Assets** - Media library (images, videos, audio)
- **Voiceover** - Voice recording and AI voice options
- **Documentation** - Side-by-side doc editor
- **Interactive Demo** - Hotspot and tooltip editor
- **Translations** - Multi-language management

### 2. Center Canvas
**Large video preview with:**
- Scene title and indicator
- Previous/Next scene navigation
- Preview mode toggle (Desktop/Tablet/Mobile)
- Fullscreen preview
- Professional video controls

### 3. Bottom Timeline (200px)
**Professional multi-track timeline:**
- **Video track** - Draggable scene blocks
- **Voiceover track** - Audio waveforms
- **Captions track** - Text blocks
- **Callouts track** - Annotations
- **Cursor track** - Mouse movements
- **Zoom track** - Zoom effects
- **Chapters track** - Section markers

**Timeline features:**
- Drag to reorder scenes
- Split scene
- Merge scenes
- Trim scene
- Duplicate scene
- Zoom in/out timeline
- Playhead scrubbing

### 4. Right Panel (320px)
**Contextual editing panel** (changes based on selection):

**When scene selected:**
- Scene Settings (title, duration, start/end time)
- Visual Enhancements (auto zoom, spotlight, highlight cursor, blur data, crop, aspect ratio)
- Narration (script, rewrite, shorten, expand, change tone)
- Captions (style, position, font, size)

**AI Copilot (chat interface):**
- "Make this shorter"
- "Remove filler words"
- "Improve narration"
- "Create documentation"
- "Generate demo"
- "Translate to Spanish"
- "Highlight key features"

## Visual Design Changes

### Remove AI Dashboard Feel
- ❌ Remove AI badge cards
- ❌ Remove purple AI suggestion boxes
- ❌ Remove sparkle icons everywhere
- ❌ Remove "AI Generated" labels

### Professional Color Palette
- **Primary UI**: White, Black, Gray
- **Purple accent**: Only for active states
- **Reduce purple usage by 40%**

### Clean Design System
- Reduce corner radius (12px → 8px)
- Add subtle borders instead of shadows
- Monochrome toolbar icons
- Professional typography
- Minimal decorative elements

## Key Features

### Scene Management
Scene cards showing:
- Thumbnail preview
- Duration
- Script preview (first 2 lines)
- Status indicator
- Click to select and edit

### Documentation Workflow
Side-by-side editor:
- Left: Video preview
- Right: Documentation editor
- Selecting a step highlights matching scene
- Real-time sync

### Interactive Demo Workflow
Hotspot layer overlay:
- Add hotspot directly on video frame
- Add tooltip
- Add spotlight
- Add guided step
- Visual hotspot editor

### Professional Timeline
Resembles Premiere Pro / Final Cut:
- Multi-track layout
- Waveform visualization
- Precise trimming
- Snap-to-grid
- Keyboard shortcuts
- Zoom controls

## Top Toolbar Actions
Clean monochrome icons:
- Cut
- Duplicate
- Crop
- Zoom
- Blur
- Callout
- Annotation
- Voiceover
- Music
- Caption

## Success Criteria
✅ Feels like a professional production studio
✅ Users can spend 2+ hours editing without needing another tool
✅ Closer to Canva/Descript/Loom quality
✅ Timeline is the heart of the editor
✅ AI feels like a copilot, not marketing
✅ Contextual panels show relevant options
✅ Professional visual design (Linear/Arc quality)

## Implementation Priority
1. **Timeline redesign** - Most important
2. **Left sidebar structure** - Scene management
3. **Right panel contextual editing** - Scene settings
4. **AI copilot chat** - Remove suggestion cards
5. **Visual design cleanup** - Remove purple overuse
6. **Documentation side-by-side** - Professional workflow
7. **Interactive demo hotspots** - Advanced feature

## Design References
- **Canva Video Editor** - Clean UI, professional timeline
- **Descript** - Script-based editing, waveforms
- **Loom** - Simple but powerful
- **Guidde** - Interactive demo creation
- **Riverside** - Professional recording studio feel
- **Linear** - Clean, minimal, professional
- **Arc Browser** - Modern, restrained design

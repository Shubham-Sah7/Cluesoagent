"use client"

import { useState } from "react"
import { 
  Play, Pause, Volume2, Maximize2, SkipBack, SkipForward,
  Scissors, Copy, Crop, ZoomIn, MessageSquare, Type,
  Music, Mic, Image as ImageIcon, Wand2, ChevronDown,
  Share2, Download, Check, Clock, Search, Plus,
  ChevronLeft, ChevronRight, Monitor, Tablet, Smartphone,
  Maximize, Grid3x3, Move, MousePointer, Eye, EyeOff,
  Settings, ArrowRight, Sparkles, FileText, Languages,
  Presentation, Zap, CheckCircle2, AlertCircle, Loader2,
  MoreHorizontal, Trash2, SplitSquareHorizontal, Layers
} from "lucide-react"

export function EditorWorkspace() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeLeftTab, setActiveLeftTab] = useState<"scenes" | "script" | "captions" | "assets" | "voiceover" | "documentation" | "demo" | "translations">("scenes")
  const [selectedScene, setSelectedScene] = useState(2)
  const [previewMode, setPreviewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [activeRightPanel, setActiveRightPanel] = useState<"properties" | "ai" | "comments">("properties")

  const scenes = [
    { id: 1, title: "Introduction", duration: "0:24", status: "complete" as const, thumbnail: "/images/screenshot-1.png" },
    { id: 2, title: "Feature Overview", duration: "1:12", status: "complete" as const, thumbnail: "/images/screenshot-2.png" },
    { id: 3, title: "Setup Guide", duration: "2:05", status: "processing" as const, thumbnail: "/images/screenshot-3.png" },
    { id: 4, title: "Advanced Features", duration: "1:45", status: "pending" as const, thumbnail: "/images/screenshot-4.png" },
    { id: 5, title: "Conclusion", duration: "0:30", status: "pending" as const, thumbnail: "/images/screenshot-5.png" },
  ]

  return (
    <div className="flex flex-col h-screen bg-[#FAFAFA]">
      {/* Top Toolbar */}
      <header className="h-12 border-b border-[#E4E4E7] bg-white flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <h1 className="text-[14px] font-semibold text-[#18181B]">Product Onboarding Flow</h1>
          <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA]">
            <Clock className="w-3 h-3" strokeWidth={1.5} />
            <span>Saved 2m ago</span>
          </div>
        </div>

        {/* Quick Actions Toolbar */}
        <div className="flex items-center gap-1">
          <ToolbarButton icon={Scissors} label="Cut" />
          <ToolbarButton icon={Copy} label="Duplicate" />
          <ToolbarButton icon={Crop} label="Crop" />
          <ToolbarButton icon={ZoomIn} label="Zoom" />
          <div className="w-px h-5 bg-[#E4E4E7] mx-1" />
          <ToolbarButton icon={MessageSquare} label="Callout" />
          <ToolbarButton icon={Type} label="Caption" />
          <ToolbarButton icon={Mic} label="Voiceover" />
          <ToolbarButton icon={Music} label="Music" />
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-[12px] font-medium text-[#71717A] bg-white border border-[#E4E4E7] rounded-[8px] hover:border-[#D4D4D8] transition-all">
            <Share2 className="w-3.5 h-3.5 inline mr-1" strokeWidth={1.5} />
            Share
          </button>
          <button className="px-3 py-1.5 text-[12px] font-medium text-[#71717A] bg-white border border-[#E4E4E7] rounded-[8px] hover:border-[#D4D4D8] transition-all">
            <Download className="w-3.5 h-3.5 inline mr-1" strokeWidth={1.5} />
            Export
          </button>
          <button className="px-4 py-1.5 text-[12px] font-medium text-white bg-[#8F8CFF] rounded-[8px] hover:bg-[#7B77FF] transition-all">
            <Check className="w-3.5 h-3.5 inline mr-1" strokeWidth={2} />
            Publish
          </button>
        </div>
      </header>

      {/* Main Editor Area - 4 Panel Structure */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT SIDEBAR - 240px */}
        <aside className="w-[240px] border-r border-[#E4E4E7] bg-white flex flex-col">
          {/* Tab Navigation */}
          <div className="border-b border-[#E4E4E7] p-2">
            <div className="grid grid-cols-4 gap-1">
              <TabButton
                icon={Layers}
                label="Scenes"
                active={activeLeftTab === "scenes"}
                onClick={() => setActiveLeftTab("scenes")}
              />
              <TabButton
                icon={FileText}
                label="Script"
                active={activeLeftTab === "script"}
                onClick={() => setActiveLeftTab("script")}
              />
              <TabButton
                icon={Type}
                label="Captions"
                active={activeLeftTab === "captions"}
                onClick={() => setActiveLeftTab("captions")}
              />
              <TabButton
                icon={ImageIcon}
                label="Assets"
                active={activeLeftTab === "assets"}
                onClick={() => setActiveLeftTab("assets")}
              />
            </div>
            <div className="grid grid-cols-4 gap-1 mt-1">
              <TabButton
                icon={Mic}
                label="Voice"
                active={activeLeftTab === "voiceover"}
                onClick={() => setActiveLeftTab("voiceover")}
              />
              <TabButton
                icon={FileText}
                label="Docs"
                active={activeLeftTab === "documentation"}
                onClick={() => setActiveLeftTab("documentation")}
              />
              <TabButton
                icon={MousePointer}
                label="Demo"
                active={activeLeftTab === "demo"}
                onClick={() => setActiveLeftTab("demo")}
              />
              <TabButton
                icon={Languages}
                label="i18n"
                active={activeLeftTab === "translations"}
                onClick={() => setActiveLeftTab("translations")}
              />
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-auto">
            {activeLeftTab === "scenes" && (
              <div className="p-3 space-y-2">
                {scenes.map((scene) => (
                  <SceneCard
                    key={scene.id}
                    scene={scene}
                    active={selectedScene === scene.id}
                    onClick={() => setSelectedScene(scene.id)}
                  />
                ))}
              </div>
            )}

            {activeLeftTab === "script" && (
              <div className="p-4">
                <div className="space-y-4">
                  <ScriptBlock
                    time="0:00"
                    text="Welcome to our product onboarding guide. In this video, we'll walk you through the key features."
                    active
                  />
                  <ScriptBlock
                    time="0:24"
                    text="Let's start with the dashboard. Here you can see all your projects at a glance."
                  />
                  <ScriptBlock
                    time="1:36"
                    text="Now, let's dive into the setup process. Click on the settings icon in the top right."
                  />
                </div>
              </div>
            )}

            {activeLeftTab === "captions" && (
              <div className="p-4">
                <div className="mb-4">
                  <label className="text-[11px] text-[#71717A] mb-2 block">Caption Style</label>
                  <select className="w-full px-3 py-2 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF]">
                    <option>Bottom Center</option>
                    <option>Top Center</option>
                    <option>Bottom Left</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <CaptionBlock time="0:00" text="Welcome to our product" />
                  <CaptionBlock time="0:03" text="onboarding guide" />
                  <CaptionBlock time="0:06" text="In this video, we'll walk" />
                </div>
              </div>
            )}

            {activeLeftTab === "assets" && (
              <div className="p-3">
                <button className="w-full py-2 text-[12px] font-medium text-[#8F8CFF] bg-[#F5F5FF] border border-[#E8E7FF] rounded-[8px] hover:bg-[#EBEBFF] transition-all mb-3">
                  <Plus className="w-4 h-4 inline mr-1" strokeWidth={1.5} />
                  Upload Asset
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <AssetThumbnail src="/images/screenshot-1.png" />
                  <AssetThumbnail src="/images/screenshot-2.png" />
                  <AssetThumbnail src="/images/screenshot-3.png" />
                  <AssetThumbnail src="/images/screenshot-4.png" />
                </div>
              </div>
            )}

            {activeLeftTab === "voiceover" && (
              <div className="p-4">
                <div className="mb-4">
                  <label className="text-[11px] text-[#71717A] mb-2 block">Voice</label>
                  <select className="w-full px-3 py-2 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF]">
                    <option>AI Voice - Professional</option>
                    <option>AI Voice - Casual</option>
                    <option>Record Custom</option>
                  </select>
                </div>
                <button className="w-full py-2.5 text-[13px] font-medium text-white bg-[#8F8CFF] rounded-[8px] hover:bg-[#7B77FF] transition-all">
                  <Mic className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
                  Record Voiceover
                </button>
              </div>
            )}

            {activeLeftTab === "documentation" && (
              <div className="p-4">
                <p className="text-[12px] text-[#71717A] mb-3">
                  Generate step-by-step documentation from your video.
                </p>
                <button className="w-full py-2.5 text-[13px] font-medium text-white bg-[#8F8CFF] rounded-[8px] hover:bg-[#7B77FF] transition-all">
                  Generate Docs
                </button>
              </div>
            )}

            {activeLeftTab === "demo" && (
              <div className="p-4">
                <p className="text-[12px] text-[#71717A] mb-3">
                  Add interactive hotspots and tooltips to create a clickable demo.
                </p>
                <button className="w-full py-2.5 text-[13px] font-medium text-white bg-[#8F8CFF] rounded-[8px] hover:bg-[#7B77FF] transition-all">
                  <MousePointer className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
                  Add Hotspot
                </button>
              </div>
            )}

            {activeLeftTab === "translations" && (
              <div className="p-4">
                <div className="space-y-2">
                  <LanguageItem language="Spanish" status="complete" />
                  <LanguageItem language="French" status="processing" />
                  <LanguageItem language="German" status="pending" />
                </div>
                <button className="w-full py-2.5 text-[13px] font-medium text-[#8F8CFF] bg-[#F5F5FF] border border-[#E8E7FF] rounded-[8px] hover:bg-[#EBEBFF] transition-all mt-3">
                  <Plus className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
                  Add Language
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* CENTER CANVAS */}
        <div className="flex-1 flex flex-col bg-[#F8F9FA]">
          {/* Canvas Header */}
          <div className="h-12 border-b border-[#E4E4E7] bg-white flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <button className="p-1.5 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded-[6px] transition-all">
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <span className="text-[13px] font-medium text-[#18181B]">
                Scene {selectedScene}: {scenes.find(s => s.id === selectedScene)?.title}
              </span>
              <button className="p-1.5 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded-[6px] transition-all">
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Preview Mode Toggle */}
            <div className="flex items-center gap-1 bg-[#F8F9FA] p-1 rounded-[8px]">
              <PreviewModeButton
                icon={Monitor}
                active={previewMode === "desktop"}
                onClick={() => setPreviewMode("desktop")}
              />
              <PreviewModeButton
                icon={Tablet}
                active={previewMode === "tablet"}
                onClick={() => setPreviewMode("tablet")}
              />
              <PreviewModeButton
                icon={Smartphone}
                active={previewMode === "mobile"}
                onClick={() => setPreviewMode("mobile")}
              />
            </div>

            <button className="p-1.5 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded-[6px] transition-all">
              <Maximize className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Video Preview */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className={`w-full ${previewMode === "desktop" ? "max-w-5xl" : previewMode === "tablet" ? "max-w-3xl" : "max-w-md"} transition-all duration-300`}>
              <div className="aspect-video bg-[#18181B] rounded-[8px] shadow-2xl relative overflow-hidden group">
                {/* Video Content Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all cursor-pointer"
                      onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" strokeWidth={1.5} />
                      ) : (
                        <Play className="w-10 h-10 text-white ml-1" strokeWidth={1.5} />
                      )}
                    </div>
                    <p className="text-white/60 text-[13px]">Scene {selectedScene}: {scenes.find(s => s.id === selectedScene)?.title}</p>
                  </div>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" strokeWidth={1.5} />
                      ) : (
                        <Play className="w-5 h-5" strokeWidth={1.5} />
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden cursor-pointer">
                        <div className="bg-[#8F8CFF] h-full rounded-full" style={{ width: "35%" }} />
                      </div>
                    </div>

                    <span className="text-white text-[13px] font-mono">1:24 / 4:02</span>

                    <button className="text-white hover:text-white/80 transition-colors">
                      <Volume2 className="w-5 h-5" strokeWidth={1.5} />
                    </button>

                    <button className="text-white hover:text-white/80 transition-colors">
                      <Settings className="w-5 h-5" strokeWidth={1.5} />
                    </button>

                    <button className="text-white hover:text-white/80 transition-colors">
                      <Maximize className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL TIMELINE - 200px */}
          <div className="h-[200px] border-t border-[#E4E4E7] bg-white">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#E4E4E7]">
              <h3 className="text-[12px] font-semibold text-[#18181B]">Timeline</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded transition-all">
                  <ZoomIn className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <button className="p-1 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded transition-all">
                  <ZoomIn className="w-4 h-4 rotate-180" strokeWidth={1.5} />
                </button>
                <div className="w-px h-4 bg-[#E4E4E7] mx-1" />
                <button className="p-1 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded transition-all">
                  <SplitSquareHorizontal className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="p-3 space-y-2 overflow-auto h-[calc(200px-40px)]">
              <TimelineTrack label="Video" color="#8F8CFF" segments={scenes} />
              <TimelineTrack label="Voiceover" color="#10B981" segments={[
                { start: 0, end: 30, label: "Intro" },
                { start: 35, end: 80, label: "Main" },
                { start: 85, end: 100, label: "Outro" }
              ]} />
              <TimelineTrack label="Captions" color="#F59E0B" segments={[
                { start: 0, end: 25 },
                { start: 25, end: 50 },
                { start: 50, end: 75 },
                { start: 75, end: 100 }
              ]} />
              <TimelineTrack label="Callouts" color="#EC4899" segments={[
                { start: 10, end: 20 },
                { start: 40, end: 55 },
                { start: 70, end: 85 }
              ]} />
              <TimelineTrack label="Cursor" color="#71717A" segments={[
                { start: 0, end: 100 }
              ]} />
              <TimelineTrack label="Zoom" color="#06B6D4" segments={[
                { start: 15, end: 25 },
                { start: 60, end: 70 }
              ]} />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Contextual Editing - 320px */}
        <aside className="w-[320px] border-l border-[#E4E4E7] bg-white flex flex-col">
          {/* Panel Tabs */}
          <div className="flex border-b border-[#E4E4E7]">
            <button
              onClick={() => setActiveRightPanel("properties")}
              className={`flex-1 px-4 py-3 text-[12px] font-medium border-b-2 transition-colors ${
                activeRightPanel === "properties"
                  ? "text-[#18181B] border-[#18181B]"
                  : "text-[#71717A] border-transparent hover:text-[#18181B]"
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => setActiveRightPanel("ai")}
              className={`flex-1 px-4 py-3 text-[12px] font-medium border-b-2 transition-colors ${
                activeRightPanel === "ai"
                  ? "text-[#18181B] border-[#18181B]"
                  : "text-[#71717A] border-transparent hover:text-[#18181B]"
              }`}
            >
              AI Copilot
            </button>
          </div>

          {/* Properties Panel */}
          {activeRightPanel === "properties" && (
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-6">
                {/* Scene Settings */}
                <PropertySection title="Scene Settings">
                  <PropertyField label="Title" value={scenes.find(s => s.id === selectedScene)?.title || ""} />
                  <PropertyField label="Duration" value={scenes.find(s => s.id === selectedScene)?.duration || ""} />
                  <PropertyField label="Start Time" value="1:36" />
                  <PropertyField label="End Time" value="3:41" />
                </PropertySection>

                {/* Visual Enhancements */}
                <PropertySection title="Visual Enhancements">
                  <PropertyToggle label="Auto Zoom" enabled={true} />
                  <PropertyToggle label="Spotlight Click" enabled={false} />
                  <PropertyToggle label="Highlight Cursor" enabled={true} />
                  <PropertyToggle label="Blur Sensitive Data" enabled={false} />
                  
                  <div className="pt-2">
                    <label className="text-[11px] text-[#71717A] mb-2 block">Aspect Ratio</label>
                    <select className="w-full px-3 py-2 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF]">
                      <option>16:9 (Landscape)</option>
                      <option>9:16 (Portrait)</option>
                      <option>1:1 (Square)</option>
                      <option>4:5 (Instagram)</option>
                    </select>
                  </div>
                </PropertySection>

                {/* Narration */}
                <PropertySection title="Narration">
                  <div className="bg-[#F8F9FA] p-3 rounded-[8px] text-[12px] text-[#52525B] leading-relaxed mb-2">
                    Now, let's dive into the setup process. Click on the settings icon in the top right.
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="px-3 py-2 text-[11px] font-medium text-[#71717A] bg-[#F8F9FA] rounded-[6px] hover:bg-[#F5F5F3] transition-all">
                      Rewrite
                    </button>
                    <button className="px-3 py-2 text-[11px] font-medium text-[#71717A] bg-[#F8F9FA] rounded-[6px] hover:bg-[#F5F5F3] transition-all">
                      Shorten
                    </button>
                    <button className="px-3 py-2 text-[11px] font-medium text-[#71717A] bg-[#F8F9FA] rounded-[6px] hover:bg-[#F5F5F3] transition-all">
                      Expand
                    </button>
                    <button className="px-3 py-2 text-[11px] font-medium text-[#71717A] bg-[#F8F9FA] rounded-[6px] hover:bg-[#F5F5F3] transition-all">
                      Change Tone
                    </button>
                  </div>
                </PropertySection>

                {/* Captions */}
                <PropertySection title="Captions">
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] text-[#71717A] mb-2 block">Style</label>
                      <select className="w-full px-3 py-2 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF]">
                        <option>Modern</option>
                        <option>Classic</option>
                        <option>Minimal</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-[#71717A] mb-2 block">Position</label>
                      <select className="w-full px-3 py-2 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF]">
                        <option>Bottom Center</option>
                        <option>Top Center</option>
                        <option>Bottom Left</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-[#71717A] mb-2 block">Font Size</label>
                      <input
                        type="range"
                        min="12"
                        max="32"
                        defaultValue="18"
                        className="w-full"
                      />
                    </div>
                  </div>
                </PropertySection>
              </div>
            </div>
          )}

          {/* AI Copilot Panel */}
          {activeRightPanel === "ai" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Chat Messages */}
              <div className="flex-1 overflow-auto p-4 space-y-4">
                <AIMessage
                  message="I've analyzed your video. I can help you improve narration, generate documentation, create translations, or add interactive elements."
                  timestamp="2m ago"
                />
                <UserMessage
                  message="Make the narration more concise"
                  timestamp="1m ago"
                />
                <AIMessage
                  message="I've shortened the narration for Scene 3 from 45 seconds to 30 seconds while keeping the key points. Would you like me to apply this to other scenes?"
                  timestamp="Just now"
                  actions={["Apply to All", "View Changes"]}
                />
              </div>

              {/* Quick Actions */}
              <div className="border-t border-[#E4E4E7] p-3">
                <div className="text-[11px] text-[#71717A] mb-2">Quick Actions</div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <QuickActionButton label="Shorten" />
                  <QuickActionButton label="Translate" />
                  <QuickActionButton label="Add Captions" />
                  <QuickActionButton label="Generate Docs" />
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-[#E4E4E7]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask AI to help..."
                    className="w-full pl-4 pr-10 py-2.5 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF] focus:bg-white transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8F8CFF] hover:text-[#7B77FF] transition-colors">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
                <p className="text-[10px] text-[#A1A1AA] mt-2">
                  Try: "Remove filler words" or "Translate to Spanish"
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

// Helper Components

function ToolbarButton({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button
      className="p-2 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded-[6px] transition-all group relative"
      title={label}
    >
      <Icon className="w-4 h-4" strokeWidth={1.5} />
    </button>
  )
}

function TabButton({ icon: Icon, label, active, onClick }: { 
  icon: React.ElementType; 
  label: string; 
  active: boolean; 
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-2 py-2 rounded-[6px] transition-all ${
        active
          ? "bg-[#F5F5FF] text-[#8F8CFF]"
          : "text-[#71717A] hover:bg-[#F8F9FA] hover:text-[#18181B]"
      }`}
    >
      <Icon className="w-4 h-4" strokeWidth={1.5} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  )
}

interface SceneCardProps {
  scene: {
    id: number
    title: string
    duration: string
    status: "complete" | "processing" | "pending"
    thumbnail: string
  }
  active: boolean
  onClick: () => void
}

function SceneCard({ scene, active, onClick }: SceneCardProps) {
  const statusColors = {
    complete: "bg-[#10B981]",
    processing: "bg-[#8F8CFF]",
    pending: "bg-[#E4E4E7]"
  }

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-[8px] border transition-all ${
        active
          ? "border-[#8F8CFF] bg-[#F5F5FF]"
          : "border-[#E4E4E7] bg-white hover:border-[#D4D4D8] hover:shadow-sm"
      }`}
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-[#F8F9FA] rounded-t-[8px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8F8CFF]/10 to-[#8F8CFF]/5" />
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white font-mono">
          {scene.duration}
        </div>
      </div>
      
      {/* Info */}
      <div className="p-2.5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-[12px] font-medium text-[#18181B] leading-tight flex-1">
            {scene.title}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${statusColors[scene.status]}`} />
        </div>
        <div className="text-[10px] text-[#71717A]">Scene {scene.id}</div>
      </div>
    </div>
  )
}

function ScriptBlock({ time, text, active }: { time: string; text: string; active?: boolean }) {
  return (
    <div className={`p-3 rounded-[8px] border transition-all ${
      active ? "border-[#8F8CFF] bg-[#F5F5FF]" : "border-[#E4E4E7] bg-white hover:border-[#D4D4D8]"
    }`}>
      <div className="text-[10px] text-[#71717A] font-mono mb-1.5">{time}</div>
      <div className="text-[12px] text-[#18181B] leading-relaxed">{text}</div>
    </div>
  )
}

function CaptionBlock({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-start gap-2 p-2 rounded-[6px] hover:bg-[#F8F9FA] transition-all cursor-pointer">
      <span className="text-[10px] text-[#71717A] font-mono flex-shrink-0 mt-0.5">{time}</span>
      <span className="text-[12px] text-[#18181B] flex-1">{text}</span>
    </div>
  )
}

function AssetThumbnail({ src }: { src: string }) {
  return (
    <div className="aspect-video bg-[#F8F9FA] rounded-[6px] overflow-hidden border border-[#E4E4E7] hover:border-[#D4D4D8] cursor-pointer transition-all group">
      <div className="w-full h-full bg-gradient-to-br from-[#8F8CFF]/10 to-[#8F8CFF]/5 group-hover:from-[#8F8CFF]/20 group-hover:to-[#8F8CFF]/10 transition-all" />
    </div>
  )
}

function LanguageItem({ language, status }: { language: string; status: "complete" | "processing" | "pending" }) {
  const statusConfig = {
    complete: { icon: CheckCircle2, color: "text-[#10B981]", bg: "bg-[#10B981]/10", label: "Complete" },
    processing: { icon: Loader2, color: "text-[#8F8CFF]", bg: "bg-[#8F8CFF]/10", label: "Processing" },
    pending: { icon: Clock, color: "text-[#71717A]", bg: "bg-[#E4E4E7]", label: "Pending" }
  }
  
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className="flex items-center justify-between p-3 bg-white border border-[#E4E4E7] rounded-[8px]">
      <span className="text-[13px] font-medium text-[#18181B]">{language}</span>
      <div className={`flex items-center gap-1.5 px-2 py-1 ${config.bg} rounded-full`}>
        <Icon className={`w-3 h-3 ${config.color} ${status === "processing" ? "animate-spin" : ""}`} strokeWidth={1.5} />
        <span className={`text-[10px] font-medium ${config.color}`}>{config.label}</span>
      </div>
    </div>
  )
}

function PreviewModeButton({ icon: Icon, active, onClick }: { 
  icon: React.ElementType; 
  active: boolean; 
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={`p-1.5 rounded-[6px] transition-all ${
        active
          ? "bg-white text-[#18181B] shadow-sm"
          : "text-[#71717A] hover:text-[#18181B]"
      }`}
    >
      <Icon className="w-4 h-4" strokeWidth={1.5} />
    </button>
  )
}

interface TimelineTrackProps {
  label: string
  color: string
  segments: any[]
}

function TimelineTrack({ label, color, segments }: TimelineTrackProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-[#71717A] w-16 flex-shrink-0">{label}</span>
      <div className="flex-1 h-8 bg-[#F8F9FA] rounded-[6px] flex gap-0.5 p-0.5 relative">
        {/* Timeline ruler */}
        <div className="absolute inset-0 flex">
          {[0, 25, 50, 75, 100].map((mark) => (
            <div
              key={mark}
              className="absolute top-0 bottom-0 w-px bg-[#E4E4E7]"
              style={{ left: `${mark}%` }}
            />
          ))}
        </div>
        
        {/* Segments */}
        {Array.isArray(segments) && segments.length > 0 && (
          typeof segments[0] === 'object' && 'start' in segments[0] ? (
            // Complex segments with start/end
            segments.map((seg, i) => (
              <div
                key={i}
                className="absolute top-0.5 bottom-0.5 rounded-[4px] cursor-pointer hover:opacity-80 transition-all group"
                style={{
                  left: `${seg.start}%`,
                  width: `${seg.end - seg.start}%`,
                  backgroundColor: color
                }}
              >
                {seg.label && (
                  <span className="absolute inset-0 flex items-center justify-center text-[9px] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {seg.label}
                  </span>
                )}
              </div>
            ))
          ) : (
            // Simple segments (scenes)
            segments.map((seg, i) => (
              <div
                key={i}
                className="flex-1 rounded-[4px] cursor-pointer hover:opacity-80 transition-all"
                style={{ backgroundColor: color, opacity: 0.8 }}
              />
            ))
          )
        )}
      </div>
      <button className="p-1 text-[#71717A] hover:text-[#18181B] hover:bg-[#F8F9FA] rounded transition-all flex-shrink-0">
        <MoreHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
      </button>
    </div>
  )
}

function PropertySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold text-[#18181B] mb-3">{title}</h4>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

function PropertyField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-[11px] text-[#71717A] mb-1.5 block">{label}</label>
      <input
        type="text"
        value={value}
        className="w-full px-3 py-2 text-[13px] bg-[#F8F9FA] border border-[#E4E4E7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#8F8CFF] focus:bg-white transition-all"
        readOnly
      />
    </div>
  )
}

function PropertyToggle({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[12px] text-[#18181B]">{label}</span>
      <button
        className={`relative w-10 h-5 rounded-full transition-all ${
          enabled ? "bg-[#8F8CFF]" : "bg-[#E4E4E7]"
        }`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${
            enabled ? "left-5" : "left-0.5"
          }`}
        />
      </button>
    </div>
  )
}

function AIMessage({ message, timestamp, actions }: { 
  message: string; 
  timestamp: string; 
  actions?: string[] 
}) {
  return (
    <div className="flex gap-2">
      <div className="w-6 h-6 rounded-full bg-[#F5F5FF] flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-[#8F8CFF]" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <div className="bg-[#F8F9FA] rounded-[8px] p-3 text-[12px] text-[#18181B] leading-relaxed">
          {message}
        </div>
        {actions && (
          <div className="flex gap-2 mt-2">
            {actions.map((action, i) => (
              <button
                key={i}
                className="text-[11px] font-medium text-[#8F8CFF] hover:text-[#7B77FF] transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        )}
        <div className="text-[10px] text-[#A1A1AA] mt-1">{timestamp}</div>
      </div>
    </div>
  )
}

function UserMessage({ message, timestamp }: { message: string; timestamp: string }) {
  return (
    <div className="flex gap-2 justify-end">
      <div className="flex-1 text-right">
        <div className="bg-[#18181B] text-white rounded-[8px] p-3 text-[12px] leading-relaxed inline-block">
          {message}
        </div>
        <div className="text-[10px] text-[#A1A1AA] mt-1">{timestamp}</div>
      </div>
    </div>
  )
}

function QuickActionButton({ label }: { label: string }) {
  return (
    <button className="px-3 py-2 text-[11px] font-medium text-[#71717A] bg-[#F8F9FA] rounded-[6px] hover:bg-[#F5F5F3] hover:text-[#18181B] transition-all">
      {label}
    </button>
  )
}

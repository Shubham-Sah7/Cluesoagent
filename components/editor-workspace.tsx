"use client"

import { useState } from "react"
import { 
  Play, Pause, Volume2, Maximize, Settings, ChevronDown, 
  Users, Share2, Download, Check, Clock, Sparkles, 
  FileText, Languages, Presentation, Image, Video,
  MessageSquare, AlertCircle, CheckCircle2, Loader2,
  Plus, Search, MoreHorizontal, Zap, ArrowRight, X
} from "lucide-react"

export function EditorWorkspace() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState<"overview" | "scenes" | "script" | "assets" | "documentation" | "translations" | "demo">("overview")
  const [activeRightPanel, setActiveRightPanel] = useState<"ai" | "properties" | "comments">("ai")

  return (
    <div className="flex flex-col h-screen bg-[#FAFAF8]">
      {/* Top Bar */}
      <header className="h-14 border-b border-[#E8E8E6] bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-[15px] font-semibold text-[#18181B]">Product Onboarding Flow</h1>
            <div className="flex items-center gap-1.5 text-[12px] text-[#71717A]">
              <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Auto-saved 2m ago</span>
            </div>
          </div>
          <span className="text-[12px] bg-[#F5F5FF] text-[#8F8CFF] px-2.5 py-1 rounded-md font-medium">
            Interactive Demo
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#52525B] hover:text-[#18181B] transition-colors">
            <Users className="w-4 h-4" strokeWidth={1.5} />
            <span>3</span>
          </button>
          
          <button className="px-3 py-1.5 text-[13px] font-medium text-[#52525B] bg-white border border-[#E8E8E6] rounded-lg hover:border-[#D4D4D2] transition-all">
            <Share2 className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
            Share
          </button>

          <button className="px-3 py-1.5 text-[13px] font-medium text-[#52525B] bg-white border border-[#E8E8E6] rounded-lg hover:border-[#D4D4D2] transition-all">
            <Download className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
            Export
          </button>

          <button className="px-4 py-1.5 text-[13px] font-medium text-white bg-[#8F8CFF] rounded-lg hover:bg-[#7B77FF] transition-all shadow-sm">
            <Check className="w-4 h-4 inline mr-1.5" strokeWidth={2} />
            Publish
          </button>
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Panel - Project Structure */}
        <aside className="w-[280px] border-r border-[#E8E8E6] bg-white flex flex-col">
          <div className="p-4 border-b border-[#E8E8E6]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 text-[13px] bg-[#F5F5F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8F8CFF] focus:bg-white transition-all"
              />
            </div>
          </div>

          <nav className="flex-1 overflow-auto p-3">
            <div className="space-y-6">
              {/* Overview */}
              <NavSection
                title="Overview"
                active={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
                status="complete"
              />

              {/* Scenes */}
              <div>
                <NavSection
                  title="Scenes"
                  active={activeTab === "scenes"}
                  onClick={() => setActiveTab("scenes")}
                  count={5}
                />
                {activeTab === "scenes" && (
                  <div className="mt-2 ml-3 space-y-1">
                    <SceneItem title="Introduction" duration="0:24" status="complete" />
                    <SceneItem title="Feature Overview" duration="1:12" status="complete" />
                    <SceneItem title="Setup Guide" duration="2:05" status="processing" active />
                    <SceneItem title="Advanced Features" duration="1:45" status="pending" />
                    <SceneItem title="Conclusion" duration="0:30" status="pending" />
                  </div>
                )}
              </div>

              {/* Script */}
              <NavSection
                title="Script"
                active={activeTab === "script"}
                onClick={() => setActiveTab("script")}
                status="warning"
              />

              {/* Assets */}
              <NavSection
                title="Assets"
                active={activeTab === "assets"}
                onClick={() => setActiveTab("assets")}
                count={24}
              />

              {/* Documentation */}
              <NavSection
                title="Documentation"
                active={activeTab === "documentation"}
                onClick={() => setActiveTab("documentation")}
                aiGenerated
              />

              {/* Translations */}
              <NavSection
                title="Translations"
                active={activeTab === "translations"}
                onClick={() => setActiveTab("translations")}
                count={3}
              />

              {/* Interactive Demo */}
              <NavSection
                title="Interactive Demo"
                active={activeTab === "demo"}
                onClick={() => setActiveTab("demo")}
                status="processing"
              />
            </div>
          </nav>

          {/* Project Status */}
          <div className="p-4 border-t border-[#E8E8E6]">
            <div className="mb-3">
              <div className="flex items-center justify-between text-[12px] mb-2">
                <span className="text-[#71717A]">Project Progress</span>
                <span className="font-medium text-[#18181B]">65%</span>
              </div>
              <div className="w-full bg-[#F5F5F3] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8F8CFF] h-full rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
            <div className="space-y-1.5">
              <StatusItem icon={CheckCircle2} label="Video edited" status="complete" />
              <StatusItem icon={Loader2} label="AI processing" status="processing" />
              <StatusItem icon={AlertCircle} label="Review needed" status="warning" />
            </div>
          </div>
        </aside>

        {/* Center Panel - Canvas/Preview */}
        <main className="flex-1 flex flex-col bg-[#F5F5F3]">
          {/* Video Preview */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-5xl">
              <div className="aspect-video bg-[#18181B] rounded-lg shadow-2xl relative overflow-hidden group">
                {/* Video Content Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all cursor-pointer">
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" strokeWidth={1.5} />
                      ) : (
                        <Play className="w-10 h-10 text-white ml-1" strokeWidth={1.5} />
                      )}
                    </div>
                    <p className="text-white/60 text-[13px]">Scene 3: Setup Guide</p>
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
                      <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
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

          {/* Smart Timeline */}
          <div className="h-[200px] border-t border-[#E8E8E6] bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[13px] font-semibold text-[#18181B]">Timeline</h3>
              <div className="flex items-center gap-2">
                <button className="text-[12px] text-[#71717A] hover:text-[#18181B] px-2 py-1 rounded hover:bg-[#F5F5F3] transition-all">
                  Zoom In
                </button>
                <button className="text-[12px] text-[#71717A] hover:text-[#18181B] px-2 py-1 rounded hover:bg-[#F5F5F3] transition-all">
                  Zoom Out
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <TimelineTrack label="Scenes" color="bg-[#8F8CFF]" segments={5} />
              <TimelineTrack label="Voiceover" color="bg-[#10B981]" segments={3} />
              <TimelineTrack label="Captions" color="bg-[#F59E0B]" segments={8} />
              <TimelineTrack label="Annotations" color="bg-[#EC4899]" segments={4} />
            </div>
          </div>
        </main>

        {/* Right Panel - AI Assistant */}
        <aside className="w-[360px] border-l border-[#E8E8E6] bg-white flex flex-col">
          {/* Panel Tabs */}
          <div className="flex border-b border-[#E8E8E6]">
            <button
              onClick={() => setActiveRightPanel("ai")}
              className={`flex-1 px-4 py-3 text-[13px] font-medium border-b-2 transition-colors ${
                activeRightPanel === "ai"
                  ? "text-[#8F8CFF] border-[#8F8CFF]"
                  : "text-[#71717A] border-transparent hover:text-[#18181B]"
              }`}
            >
              <Sparkles className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
              AI Assistant
            </button>
            <button
              onClick={() => setActiveRightPanel("properties")}
              className={`flex-1 px-4 py-3 text-[13px] font-medium border-b-2 transition-colors ${
                activeRightPanel === "properties"
                  ? "text-[#8F8CFF] border-[#8F8CFF]"
                  : "text-[#71717A] border-transparent hover:text-[#18181B]"
              }`}
            >
              Properties
            </button>
            <button
              onClick={() => setActiveRightPanel("comments")}
              className={`flex-1 px-4 py-3 text-[13px] font-medium border-b-2 transition-colors ${
                activeRightPanel === "comments"
                  ? "text-[#8F8CFF] border-[#8F8CFF]"
                  : "text-[#71717A] border-transparent hover:text-[#18181B]"
              }`}
            >
              <MessageSquare className="w-4 h-4 inline mr-1.5" strokeWidth={1.5} />
              Comments
            </button>
          </div>

          {/* AI Assistant Content */}
          {activeRightPanel === "ai" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* AI Suggestions */}
              <div className="p-4 border-b border-[#E8E8E6]">
                <h3 className="text-[13px] font-semibold text-[#18181B] mb-3">Suggested Actions</h3>
                <div className="space-y-2">
                  <AISuggestion
                    icon={<Zap className="w-4 h-4" strokeWidth={1.5} />}
                    title="Improve Narration"
                    description="AI can enhance voice quality"
                  />
                  <AISuggestion
                    icon={<FileText className="w-4 h-4" strokeWidth={1.5} />}
                    title="Generate Documentation"
                    description="Create step-by-step guide"
                  />
                  <AISuggestion
                    icon={<Languages className="w-4 h-4" strokeWidth={1.5} />}
                    title="Translate Content"
                    description="Add Spanish & French"
                  />
                  <AISuggestion
                    icon={<Presentation className="w-4 h-4" strokeWidth={1.5} />}
                    title="Create Interactive Demo"
                    description="Generate clickable walkthrough"
                  />
                </div>
              </div>

              {/* AI Chat */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-auto p-4 space-y-4">
                  <AIMessage
                    message="I've analyzed your video. Would you like me to generate documentation or create an interactive demo?"
                    timestamp="2m ago"
                  />
                  <UserMessage
                    message="Generate documentation"
                    timestamp="1m ago"
                  />
                  <AIMessage
                    message="I've created a comprehensive guide with 8 steps and screenshots. You can review it in the Documentation tab."
                    timestamp="Just now"
                    actions={["View Documentation", "Edit Content"]}
                  />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-[#E8E8E6]">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask AI to help..."
                      className="w-full pl-4 pr-10 py-2.5 text-[13px] bg-[#F5F5F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8F8CFF] focus:bg-white transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8F8CFF] hover:text-[#7B77FF] transition-colors">
                      <ArrowRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA] mt-2">
                    Try: "Make this shorter" or "Translate to Spanish"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Properties Panel */}
          {activeRightPanel === "properties" && (
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-6">
                <PropertySection title="Scene Properties">
                  <PropertyField label="Title" value="Setup Guide" />
                  <PropertyField label="Duration" value="2:05" />
                  <PropertyField label="Transition" value="Fade" />
                </PropertySection>

                <PropertySection title="Video Settings">
                  <PropertyField label="Resolution" value="1920x1080" />
                  <PropertyField label="Frame Rate" value="30 fps" />
                  <PropertyField label="Quality" value="High" />
                </PropertySection>

                <PropertySection title="Audio">
                  <PropertyField label="Volume" value="100%" />
                  <PropertyField label="Narration" value="AI Generated" />
                  <PropertyField label="Background Music" value="None" />
                </PropertySection>
              </div>
            </div>
          )}

          {/* Comments Panel */}
          {activeRightPanel === "comments" && (
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                <Comment
                  user="Sarah Chen"
                  message="The setup guide section needs more detail"
                  timestamp="2 hours ago"
                  resolved={false}
                />
                <Comment
                  user="Michael Park"
                  message="Great work on the introduction!"
                  timestamp="5 hours ago"
                  resolved={true}
                />
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

// Helper Components

interface NavSectionProps {
  title: string
  active?: boolean
  onClick?: () => void
  count?: number
  status?: "complete" | "warning" | "processing"
  aiGenerated?: boolean
}

function NavSection({ title, active, onClick, count, status, aiGenerated }: NavSectionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${
        active
          ? "bg-[#F5F5FF] text-[#8F8CFF]"
          : "text-[#52525B] hover:bg-[#F5F5F3] hover:text-[#18181B]"
      }`}
    >
      <span className="text-[13px] font-medium">{title}</span>
      <div className="flex items-center gap-2">
        {aiGenerated && <Sparkles className="w-3.5 h-3.5 text-[#8F8CFF]" strokeWidth={1.5} />}
        {count !== undefined && <span className="text-[11px] text-[#A1A1AA]">{count}</span>}
        {status === "complete" && <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" strokeWidth={1.5} />}
        {status === "warning" && <AlertCircle className="w-3.5 h-3.5 text-[#F59E0B]" strokeWidth={1.5} />}
        {status === "processing" && <Loader2 className="w-3.5 h-3.5 text-[#8F8CFF] animate-spin" strokeWidth={1.5} />}
      </div>
    </button>
  )
}

interface SceneItemProps {
  title: string
  duration: string
  status: "complete" | "processing" | "pending"
  active?: boolean
}

function SceneItem({ title, duration, status, active }: SceneItemProps) {
  const statusColors = {
    complete: "bg-[#10B981]",
    processing: "bg-[#8F8CFF]",
    pending: "bg-[#E8E8E6]"
  }

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-[12px] cursor-pointer transition-all ${
        active ? "bg-[#F5F5FF]" : "hover:bg-[#F5F5F3]"
      }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${statusColors[status]}`} />
      <span className="flex-1 text-[#52525B]">{title}</span>
      <span className="text-[#A1A1AA] font-mono text-[11px]">{duration}</span>
    </div>
  )
}

interface StatusItemProps {
  icon: React.ElementType
  label: string
  status: "complete" | "processing" | "warning"
}

function StatusItem({ icon: Icon, label, status }: StatusItemProps) {
  const colors = {
    complete: "text-[#10B981]",
    processing: "text-[#8F8CFF]",
    warning: "text-[#F59E0B]"
  }

  return (
    <div className="flex items-center gap-2 text-[12px]">
      <Icon className={`w-3.5 h-3.5 ${colors[status]} ${status === "processing" ? "animate-spin" : ""}`} strokeWidth={1.5} />
      <span className="text-[#71717A]">{label}</span>
    </div>
  )
}

interface TimelineTrackProps {
  label: string
  color: string
  segments: number
}

function TimelineTrack({ label, color, segments }: TimelineTrackProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] text-[#71717A] w-20">{label}</span>
      <div className="flex-1 h-8 bg-[#F5F5F3] rounded flex gap-1 p-1">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${color} rounded opacity-80 hover:opacity-100 cursor-pointer transition-opacity`}
          />
        ))}
      </div>
    </div>
  )
}

interface AISuggestionProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AISuggestion({ icon, title, description }: AISuggestionProps) {
  return (
    <button className="w-full flex items-start gap-3 p-3 bg-[#F5F5FF] border border-[#E8E7FF] rounded-lg hover:border-[#8F8CFF] hover:shadow-sm transition-all text-left group">
      <div className="p-2 bg-white rounded-md text-[#8F8CFF]">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium text-[#18181B] mb-0.5">{title}</div>
        <div className="text-[11px] text-[#71717A]">{description}</div>
      </div>
      <ArrowRight className="w-4 h-4 text-[#8F8CFF] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" strokeWidth={1.5} />
    </button>
  )
}

interface AIMessageProps {
  message: string
  timestamp: string
  actions?: string[]
}

function AIMessage({ message, timestamp, actions }: AIMessageProps) {
  return (
    <div className="flex gap-3">
      <div className="w-7 h-7 rounded-full bg-[#F5F5FF] flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-4 h-4 text-[#8F8CFF]" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <div className="bg-[#F5F5FF] rounded-lg p-3 text-[13px] text-[#18181B] leading-relaxed">
          {message}
        </div>
        {actions && (
          <div className="flex gap-2 mt-2">
            {actions.map((action, i) => (
              <button
                key={i}
                className="text-[12px] font-medium text-[#8F8CFF] hover:text-[#7B77FF] transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        )}
        <div className="text-[11px] text-[#A1A1AA] mt-1">{timestamp}</div>
      </div>
    </div>
  )
}

interface UserMessageProps {
  message: string
  timestamp: string
}

function UserMessage({ message, timestamp }: UserMessageProps) {
  return (
    <div className="flex gap-3 justify-end">
      <div className="flex-1 text-right">
        <div className="bg-[#18181B] text-white rounded-lg p-3 text-[13px] leading-relaxed inline-block">
          {message}
        </div>
        <div className="text-[11px] text-[#A1A1AA] mt-1">{timestamp}</div>
      </div>
    </div>
  )
}

interface PropertySectionProps {
  title: string
  children: React.ReactNode
}

function PropertySection({ title, children }: PropertySectionProps) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold text-[#18181B] mb-3">{title}</h4>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

interface PropertyFieldProps {
  label: string
  value: string
}

function PropertyField({ label, value }: PropertyFieldProps) {
  return (
    <div>
      <label className="text-[11px] text-[#71717A] mb-1 block">{label}</label>
      <input
        type="text"
        value={value}
        className="w-full px-3 py-2 text-[13px] bg-[#F5F5F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8F8CFF] focus:bg-white transition-all"
        readOnly
      />
    </div>
  )
}

interface CommentProps {
  user: string
  message: string
  timestamp: string
  resolved: boolean
}

function Comment({ user, message, timestamp, resolved }: CommentProps) {
  return (
    <div className={`p-3 rounded-lg border ${resolved ? "bg-[#F5F5F3] border-[#E8E8E6]" : "bg-white border-[#E8E8E6]"}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#E8E8E6] flex items-center justify-center text-[11px] font-medium text-[#52525B]">
            {user.charAt(0)}
          </div>
          <span className="text-[12px] font-medium text-[#18181B]">{user}</span>
        </div>
        {resolved && (
          <span className="text-[10px] bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 rounded-full font-medium">
            Resolved
          </span>
        )}
      </div>
      <p className="text-[13px] text-[#52525B] leading-relaxed mb-2">{message}</p>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#A1A1AA]">{timestamp}</span>
        {!resolved && (
          <button className="text-[11px] text-[#8F8CFF] hover:text-[#7B77FF] font-medium transition-colors">
            Resolve
          </button>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  Video,
  FileText,
  Upload,
  Layers,
  ArrowRight,
  Play,
  Clock,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { CreationFlow } from "@/components/creation-flow"
import { UploadFlow } from "@/components/upload-flow"
import { TemplateFlow } from "@/components/template-flow-simple"
import { TopNav } from "@/components/top-nav"

// Real screenshot images from the reference folder
const SCREENSHOTS = [
  "/images/screenshot-1.png",
  "/images/screenshot-2.png",
  "/images/screenshot-3.png",
  "/images/screenshot-4.png",
  "/images/screenshot-5.png",
  "/images/screenshot-6.png",
  "/images/screenshot-7.png",
  "/images/screenshot-8.png",
]

// Get screenshot based on index to ensure variety
function getScreenshot(index: number): string {
  return SCREENSHOTS[index % SCREENSHOTS.length]
}

export function MainContent() {
  const [showRecordFlow, setShowRecordFlow] = useState(false)
  const [showUploadFlow, setShowUploadFlow] = useState(false)
  const [showTemplateFlow, setShowTemplateFlow] = useState(false)

  return (
    <main className="flex-1 overflow-auto bg-[#FAFAFA]">
      {showRecordFlow   && <CreationFlow  onClose={() => setShowRecordFlow(false)}   />}
      {showUploadFlow   && <UploadFlow    onClose={() => setShowUploadFlow(false)}   />}
      {showTemplateFlow && <TemplateFlow  onClose={() => setShowTemplateFlow(false)} />}
      
      {/* Top Navigation with Create Button */}
      <TopNav
        onRecordClick={() => setShowRecordFlow(true)}
        onUploadClick={() => setShowUploadFlow(true)}
        onTemplateClick={() => setShowTemplateFlow(true)}
      />
      
      <div className="px-12 py-12 max-w-[1800px] mx-auto">

        {/* Hero - Reduced by 30% */}
        <section className="mb-12 max-w-[880px]">
          <h1 className="font-serif text-[42px] leading-[1.15] tracking-[-0.02em] text-[#18181B] mb-4 max-w-[820px]">
            Create product stories people actually understand.
          </h1>
          <p className="text-[16px] leading-[1.6] text-[#52525B] max-w-[680px]">
            Turn recordings into polished videos, docs, and demos in minutes.
          </p>
        </section>

        {/* Quick Actions - Reduced height to 72px */}
        <section className="mb-16 max-w-[1400px]">
          <div className="grid grid-cols-3 gap-4">
            <QuickAction
              icon={<Video className="w-[18px] h-[18px]" strokeWidth={1.5} />}
              title="Record Screen"
              description="Capture your screen with narration"
              onClick={() => setShowRecordFlow(true)}
              primary
            />
            <QuickAction
              icon={<Upload className="w-[18px] h-[18px]" strokeWidth={1.5} />}
              title="Upload Recording"
              description="Transform an existing video"
              onClick={() => setShowUploadFlow(true)}
            />
            <QuickAction
              icon={<Layers className="w-[18px] h-[18px]" strokeWidth={1.5} />}
              title="Start from Template"
              description="Pick a proven structure"
              onClick={() => setShowTemplateFlow(true)}
            />
          </div>
        </section>

        {/* Continue Working - 64px spacing */}
        <section className="mb-16 max-w-[1400px]">
          <SectionHeader title="Continue Working" action="View all" />
          <div className="grid grid-cols-3 gap-5">
            <ProjectCard
              title="Product Onboarding Flow"
              type="Interactive Demo"
              duration="3:24"
              progress={65}
              lastEdited="2 hours ago"
              collaborators={3}
              screenshotIndex={0}
            />
            <ProjectCard
              title="API Documentation Guide"
              type="Document"
              duration="8 min read"
              progress={40}
              lastEdited="Yesterday"
              collaborators={1}
              screenshotIndex={1}
            />
            <ProjectCard
              title="Feature Walkthrough Video"
              type="Video"
              duration="5:12"
              progress={90}
              lastEdited="3 days ago"
              collaborators={2}
              screenshotIndex={2}
            />
          </div>
        </section>

        {/* Suggested Next Steps - Removed AI language, 64px spacing */}
        <section className="mb-16 max-w-[1400px]">
          <SectionHeader title="Suggested Next Steps" />
          <div className="grid grid-cols-3 gap-4">
            <NextStepCard
              title="Continue onboarding flow"
              description="Resume editing your interactive demo."
              action="Resume"
            />
            <NextStepCard
              title="Generate documentation"
              description="Create docs from your latest recording."
              action="Generate"
            />
            <NextStepCard
              title="Translate latest guide"
              description="Add Spanish and French versions."
              action="Translate"
            />
          </div>
        </section>

        {/* Popular Templates */}
        <section className="max-w-[1400px]">
          <SectionHeader title="Popular Templates" action="Browse all" />
          <div className="grid grid-cols-4 gap-4">
            <TemplateCard
              title="Product Demo"
              category="Sales"
              uses="2.4k"
              src="/images/template/template-1.png"
            />
            <TemplateCard
              title="Feature Launch"
              category="Marketing"
              uses="1.8k"
              src="/images/template/template-2.png"
            />
            <TemplateCard
              title="Customer Training"
              category="Support"
              uses="1.5k"
              src="/images/template/template-3.png"
            />
            <TemplateCard
              title="API Walkthrough"
              category="Documentation"
              uses="1.2k"
              src="/images/template/template-4.png"
            />
          </div>
        </section>

      </div>
    </main>
  )
}

function SectionHeader({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-[20px] font-semibold text-[#18181B]">{title}</h2>
      {action && (
        <button className="text-[13px] text-[#8F8CFF] hover:text-[#7B77FF] font-medium transition-colors flex items-center gap-1.5">
          {action}
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>
      )}
    </div>
  )
}

interface QuickActionProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick?: () => void
  primary?: boolean
}

function QuickAction({ icon, title, description, onClick, primary }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3.5 px-5 py-4 rounded-[10px] border text-left transition-all duration-200 active:scale-[0.98]",
        primary
          ? "bg-[#8F8CFF] border-[#8F8CFF] hover:bg-[#7B77FF] hover:border-[#7B77FF] hover:shadow-lg"
          : "border-[#E4E4E7] bg-white hover:border-[#D4D4D8] hover:shadow-md"
      )}
    >
      <div className={cn(
        "p-2 rounded-[8px] flex-shrink-0 transition-colors duration-200",
        primary ? "bg-white/15" : "bg-[#F8F9FA] group-hover:bg-[#F5F5FF]"
      )}>
        <div className={cn(
          "transition-colors duration-200",
          primary ? "text-white" : "text-[#52525B] group-hover:text-[#8F8CFF]"
        )}>{icon}</div>
      </div>
      <div className="flex-1 min-w-0">
        <div className={cn("font-semibold text-[15px] mb-0.5", primary ? "text-white" : "text-[#18181B]")}>
          {title}
        </div>
        <div className={cn("text-[13px]", primary ? "text-white/80" : "text-[#71717A]")}>
          {description}
        </div>
      </div>
    </button>
  )
}

interface ProjectCardProps {
  title: string
  type: string
  duration: string
  progress: number
  lastEdited: string
  collaborators: number
  screenshotIndex: number
}

function ProjectCard({ title, type, duration, progress, lastEdited, collaborators, screenshotIndex }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-[#E4E4E7] rounded-[12px] overflow-hidden hover:border-[#D4D4D8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      {/* Reduced thumbnail height by 15% */}
      <div className="aspect-[16/9] bg-[#F8F9FA] relative overflow-hidden">
        <Image
          src={getScreenshot(screenshotIndex)}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-all duration-200">
          <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
            <Play className="w-4 h-4 text-[#8F8CFF] ml-0.5" strokeWidth={1.5} fill="#8F8CFF" />
          </div>
        </div>
      </div>
      
      {/* Simplified card content */}
      <div className="p-4">
        <div className="font-semibold text-[15px] text-[#18181B] mb-2 leading-snug">{title}</div>
        
        <div className="text-[13px] text-[#71717A] mb-3">{type}</div>
        
        {/* Progress only */}
        <div className="flex items-center justify-between text-[12px] mb-1.5">
          <span className="text-[#71717A]">Progress</span>
          <span className="text-[#8F8CFF] font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-[#F4F4F5] h-1 rounded-full overflow-hidden">
          <div 
            className="bg-[#8F8CFF] h-full rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </div>
  )
}

// Realistic Figma Design Interface Thumbnail
function FigmaDesignThumbnail() {
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="225" fill="#FFFFFF"/>
      
      {/* Top toolbar */}
      <rect width="400" height="40" fill="#2C2C2C"/>
      <circle cx="20" cy="20" r="4" fill="#FF5F57"/>
      <circle cx="35" cy="20" r="4" fill="#FFBD2E"/>
      <circle cx="50" cy="20" r="4" fill="#28CA42"/>
      
      {/* Left sidebar */}
      <rect x="0" y="40" width="60" height="185" fill="#F5F5F5"/>
      <rect x="10" y="55" width="40" height="8" rx="2" fill="#D4D4D8"/>
      <rect x="10" y="70" width="40" height="8" rx="2" fill="#D4D4D8"/>
      <rect x="10" y="85" width="40" height="8" rx="2" fill="#8F8CFF"/>
      <rect x="10" y="100" width="40" height="8" rx="2" fill="#D4D4D8"/>
      
      {/* Canvas area with design elements */}
      <rect x="60" y="40" width="340" height="185" fill="#F8F9FA"/>
      
      {/* Design frame 1 */}
      <rect x="90" y="70" width="120" height="140" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="2"/>
      <rect x="100" y="80" width="100" height="12" rx="4" fill="#8F8CFF"/>
      <rect x="100" y="100" width="80" height="8" rx="2" fill="#E4E4E7"/>
      <rect x="100" y="115" width="90" height="8" rx="2" fill="#E4E4E7"/>
      <rect x="100" y="135" width="100" height="30" rx="6" fill="#F4F4F5"/>
      <rect x="100" y="175" width="45" height="20" rx="4" fill="#8F8CFF"/>
      
      {/* Design frame 2 */}
      <rect x="230" y="70" width="120" height="140" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="2"/>
      <circle cx="290" cy="110" r="20" fill="#F4F4F5"/>
      <rect x="240" y="140" width="100" height="8" rx="2" fill="#E4E4E7"/>
      <rect x="240" y="155" width="80" height="8" rx="2" fill="#E4E4E7"/>
      <rect x="240" y="180" width="100" height="20" rx="4" fill="#E4E4E7"/>
    </svg>
  )
}

// Realistic Notion Document Thumbnail
function NotionDocThumbnail() {
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="225" fill="#FFFFFF"/>
      
      {/* Top bar */}
      <rect width="400" height="45" fill="#FAFAFA"/>
      <rect x="20" y="15" width="30" height="15" rx="3" fill="#E4E4E7"/>
      <rect x="60" y="15" width="30" height="15" rx="3" fill="#E4E4E7"/>
      <rect x="100" y="15" width="30" height="15" rx="3" fill="#E4E4E7"/>
      
      {/* Sidebar */}
      <rect x="0" y="45" width="100" height="180" fill="#F8F9FA"/>
      <rect x="15" y="60" width="70" height="10" rx="2" fill="#E4E4E7"/>
      <rect x="15" y="80" width="70" height="8" rx="2" fill="#D4D4D8"/>
      <rect x="15" y="95" width="70" height="8" rx="2" fill="#D4D4D8"/>
      <rect x="15" y="110" width="70" height="8" rx="2" fill="#8F8CFF"/>
      <rect x="15" y="125" width="70" height="8" rx="2" fill="#D4D4D8"/>
      
      {/* Main content area */}
      <rect x="100" y="45" width="300" height="180" fill="#FFFFFF"/>
      
      {/* Document title */}
      <rect x="130" y="70" width="200" height="18" rx="3" fill="#111111" opacity="0.9"/>
      
      {/* Content blocks */}
      <rect x="130" y="105" width="240" height="8" rx="2" fill="#52525B" opacity="0.7"/>
      <rect x="130" y="120" width="220" height="8" rx="2" fill="#52525B" opacity="0.7"/>
      <rect x="130" y="135" width="230" height="8" rx="2" fill="#52525B" opacity="0.7"/>
      
      {/* Callout box */}
      <rect x="130" y="155" width="240" height="40" rx="6" fill="#F5F5FF" stroke="#E8E7FF" strokeWidth="1"/>
      <rect x="140" y="165" width="200" height="6" rx="2" fill="#8F8CFF" opacity="0.6"/>
      <rect x="140" y="177" width="180" height="6" rx="2" fill="#8F8CFF" opacity="0.6"/>
    </svg>
  )
}

// Realistic Dashboard Thumbnail
function DashboardThumbnail() {
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="225" fill="#FAFAFA"/>
      
      {/* Top navigation */}
      <rect width="400" height="50" fill="#FFFFFF"/>
      <rect x="20" y="18" width="80" height="14" rx="3" fill="#8F8CFF"/>
      <circle cx="360" cy="25" r="12" fill="#F4F4F5"/>
      
      {/* Sidebar */}
      <rect x="0" y="50" width="80" height="175" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1"/>
      <rect x="15" y="65" width="50" height="10" rx="2" fill="#8F8CFF" opacity="0.2"/>
      <rect x="15" y="85" width="50" height="10" rx="2" fill="#E4E4E7"/>
      <rect x="15" y="105" width="50" height="10" rx="2" fill="#E4E4E7"/>
      <rect x="15" y="125" width="50" height="10" rx="2" fill="#E4E4E7"/>
      
      {/* Main dashboard area */}
      <rect x="80" y="50" width="320" height="175" fill="#FAFAFA"/>
      
      {/* Stats cards */}
      <rect x="100" y="70" width="130" height="60" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1"/>
      <rect x="110" y="85" width="60" height="10" rx="2" fill="#71717A" opacity="0.5"/>
      <rect x="110" y="102" width="40" height="16" rx="2" fill="#111111" opacity="0.9"/>
      
      <rect x="250" y="70" width="130" height="60" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1"/>
      <rect x="260" y="85" width="60" height="10" rx="2" fill="#71717A" opacity="0.5"/>
      <rect x="260" y="102" width="40" height="16" rx="2" fill="#111111" opacity="0.9"/>
      
      {/* Chart area */}
      <rect x="100" y="145" width="280" height="65" rx="8" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1"/>
      
      {/* Bar chart */}
      <rect x="120" y="180" width="15" height="20" rx="2" fill="#8F8CFF" opacity="0.6"/>
      <rect x="145" y="170" width="15" height="30" rx="2" fill="#8F8CFF" opacity="0.8"/>
      <rect x="170" y="165" width="15" height="35" rx="2" fill="#8F8CFF"/>
      <rect x="195" y="175" width="15" height="25" rx="2" fill="#8F8CFF" opacity="0.7"/>
      <rect x="220" y="160" width="15" height="40" rx="2" fill="#8F8CFF"/>
      <rect x="245" y="170" width="15" height="30" rx="2" fill="#8F8CFF" opacity="0.8"/>
      <rect x="270" y="178" width="15" height="22" rx="2" fill="#8F8CFF" opacity="0.6"/>
      <rect x="295" y="172" width="15" height="28" rx="2" fill="#8F8CFF" opacity="0.7"/>
      <rect x="320" y="165" width="15" height="35" rx="2" fill="#8F8CFF"/>
      <rect x="345" y="168" width="15" height="32" rx="2" fill="#8F8CFF" opacity="0.8"/>
    </svg>
  )
}

interface NextStepCardProps {
  title: string
  description: string
  action: string
}

function NextStepCard({ title, description, action }: NextStepCardProps) {
  return (
    <div className="group bg-white border border-[#E4E4E7] rounded-[10px] p-4 hover:border-[#D4D4D8] hover:shadow-sm transition-all duration-200 cursor-pointer">
      <h3 className="font-semibold text-[14px] text-[#18181B] mb-1.5">{title}</h3>
      <p className="text-[13px] text-[#71717A] leading-relaxed mb-3">{description}</p>
      <button className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8F8CFF] hover:text-[#7B77FF] transition-colors">
        {action}
        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
      </button>
    </div>
  )
}

interface TemplateCardProps {
  title: string
  category: string
  uses: string
  src: string
}

function TemplateCard({ title, category, uses, src }: TemplateCardProps) {
  return (
    <div className="group bg-white border border-[#E4E4E7] rounded-[12px] overflow-hidden hover:border-[#D4D4D8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-[#18181B] font-semibold text-[12px] px-3.5 py-1.5 rounded-lg shadow-lg">
            Use Template
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-3.5 py-3 flex items-center justify-between">
        <div>
          <div className="font-semibold text-[13px] text-[#18181B] leading-tight">{title}</div>
          <div className="text-[11px] text-[#A1A1AA] mt-0.5">{uses} uses</div>
        </div>
      </div>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  duration: string
}

interface ActivityItemProps {
  user: string
  action: string
  target: string
  time: string
  aiAction?: boolean
}

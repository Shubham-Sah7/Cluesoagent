"use client"

import {
  Home,
  FolderKanban,
  Video,
  Scissors,
  MousePointerClick,
  Sparkles,
  FileText,
  Users,
  BookOpen,
  Palette,
  Bell,
  ChevronDown,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

// Flagship AI Studio icon - unique and memorable
function AIStudioIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 3L13.5 9L19.5 10.5L13.5 12L12 18L10.5 12L4.5 10.5L10.5 9L12 3Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  )
}

const primaryNav = [
  { icon: Home, label: "Home", href: "/" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: BookOpen, label: "Library", href: "/library" },
]

const creationNav = [
  { icon: Video, label: "Record", href: "/record" },
  { icon: Scissors, label: "Editor", href: "/editor" },
  { icon: MousePointerClick, label: "Demos", href: "/demos" },
  { icon: null, label: "AI Studio", href: "/ai-studio", customIcon: AIStudioIcon },
]

const workspaceNav = [
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Users, label: "Team Assets", href: "/team-assets" },
  { icon: BookOpen, label: "Knowledge", href: "/knowledge" },
  { icon: Palette, label: "Brand Kit", href: "/brand-kit" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[296px] border-r border-[#E8E8E6] bg-white flex flex-col min-h-screen shrink-0">

      {/* Logo — official Trupeer asset */}
      <div className="px-8 pt-8 pb-10">
        <div className="relative h-9 w-[165px]">
          <Image
            src="/images/trupeer.jpeg"
            alt="Trupeer"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-5 space-y-10">
        
        {/* Primary Section */}
        <div>
          <div className="px-3 mb-3">
            <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-[0.08em]">
              Primary
            </span>
          </div>
          <div className="space-y-1">
            {primaryNav.map((item) => (
              <NavItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)}
              />
            ))}
          </div>
        </div>

        {/* Creation Section */}
        <div>
          <div className="px-3 mb-3">
            <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-[0.08em]">
              Creation
            </span>
          </div>
          <div className="space-y-1">
            {creationNav.map((item) => (
              <NavItem
                key={item.href}
                icon={item.icon}
                customIcon={item.customIcon}
                label={item.label}
                href={item.href}
                active={pathname.startsWith(item.href)}
              />
            ))}
          </div>
        </div>

        {/* Workspace Section */}
        <div>
          <div className="px-3 mb-3">
            <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-[0.08em]">
              Workspace
            </span>
          </div>
          <div className="space-y-1">
            {workspaceNav.map((item) => (
              <NavItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={pathname.startsWith(item.href)}
              />
            ))}
          </div>
        </div>

      </nav>

      {/* Bottom */}
      <div className="px-5 pb-6 space-y-4">

        {/* What's new */}
        <button className="flex items-center gap-3 w-full px-3 py-3 text-[#8F8CFF] hover:text-[#7B77FF] hover:bg-[#FAFAFF] text-[15px] font-medium rounded-lg transition-all duration-200">
          <Bell className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={2} />
          <span>What&apos;s new</span>
        </button>

        {/* Upgrade card */}
        <div className="rounded-xl bg-gradient-to-br from-[#FAFAFF] via-white to-[#F5F5FF] border border-[#E8E7FF] p-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 bg-[#8F8CFF]/10 rounded-lg">
              <Zap className="w-4 h-4 text-[#8F8CFF]" strokeWidth={2} fill="#8F8CFF" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-[#18181B] mb-1">
                Upgrade to Pro
              </div>
              <div className="text-[12px] text-[#71717A] leading-relaxed">
                Unlimited AI minutes and advanced features
              </div>
            </div>
          </div>
          <button className="w-full bg-[#8F8CFF] hover:bg-[#7B77FF] active:bg-[#6B68EE] text-white text-[13px] font-semibold py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow">
            Upgrade Now
          </button>
        </div>

        {/* User profile */}
        <button className="w-full flex items-center gap-3 px-3 py-3 hover:bg-[#FAFAFA] rounded-lg transition-all duration-200 group">
          <div className="w-8 h-8 rounded-full bg-[#8F8CFF] flex-shrink-0 flex items-center justify-center text-white text-[13px] font-semibold">
            S
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="text-[13px] font-semibold text-[#18181B] truncate">
              Shubham Sah
            </div>
            <div className="text-[12px] text-[#71717A]">Free Plan</div>
          </div>
          <ChevronDown
            className="w-4 h-4 text-[#D4D4D8] flex-shrink-0 group-hover:text-[#A1A1AA] transition-colors duration-200"
            strokeWidth={2}
          />
        </button>

      </div>
    </aside>
  )
}

interface NavItemProps {
  icon?: React.ElementType | null
  customIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  href: string
  active?: boolean
}

function NavItem({ icon: Icon, customIcon: CustomIcon, label, href, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-3 w-full px-3 py-2.5 rounded-[10px] text-[15px] font-medium transition-all duration-200",
        active
          ? "text-[#18181B] bg-[#F5F5FF]"
          : "text-[#18181B] hover:bg-[#FAFAFA]"
      )}
    >
      {/* Thin left indicator for active state */}
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[18px] bg-[#8F8CFF] rounded-r-full" />
      )}
      
      {CustomIcon ? (
        <CustomIcon
          className={cn(
            "flex-shrink-0 transition-colors duration-200",
            active ? "text-[#8F8CFF]" : "text-[#52525B] group-hover:text-[#18181B]"
          )}
          strokeWidth={2}
        />
      ) : Icon ? (
        <Icon
          className={cn(
            "w-[18px] h-[18px] flex-shrink-0 transition-colors duration-200",
            active ? "text-[#8F8CFF]" : "text-[#52525B] group-hover:text-[#18181B]"
          )}
          strokeWidth={2}
        />
      ) : null}
      
      <span className="flex-1">{label}</span>
    </Link>
  )
}

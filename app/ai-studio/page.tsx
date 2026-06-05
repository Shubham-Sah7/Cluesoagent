import { Sidebar } from "@/components/sidebar"
import { AIStudioContent } from "@/components/ai-studio-content"

export default function AIStudioPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <AIStudioContent />
    </div>
  )
}

import { Sidebar } from "@/components/sidebar"
import { DemosContent } from "@/components/demos-content"

export default function DemosPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <DemosContent />
    </div>
  )
}

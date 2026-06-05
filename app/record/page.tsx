import { Sidebar } from "@/components/sidebar"
import { RecordContent } from "@/components/record-content"

export default function RecordPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <RecordContent />
    </div>
  )
}

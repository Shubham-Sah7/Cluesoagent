import { Sidebar } from "@/components/sidebar"
import { SharedPagesContent } from "@/components/shared-pages-content"

export default function SharedPagesPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <SharedPagesContent />
    </div>
  )
}

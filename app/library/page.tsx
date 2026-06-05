import { Sidebar } from "@/components/sidebar"
import { LibraryContent } from "@/components/library-content"

export default function LibraryPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <LibraryContent />
    </div>
  )
}

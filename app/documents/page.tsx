import { Sidebar } from "@/components/sidebar"
import { DocumentsContent } from "@/components/documents-content"

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <DocumentsContent />
    </div>
  )
}

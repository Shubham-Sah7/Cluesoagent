import { Sidebar } from "@/components/sidebar"
import { KnowledgeContent } from "@/components/knowledge-content"

export default function KnowledgePage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <KnowledgeContent />
    </div>
  )
}

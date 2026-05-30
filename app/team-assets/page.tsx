import { Sidebar } from "@/components/sidebar"
import { TeamAssetsContent } from "@/components/team-assets-content"

export default function TeamAssetsPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <TeamAssetsContent />
    </div>
  )
}

import { Sidebar } from "@/components/sidebar"
import { BrandKitContent } from "@/components/brand-kit-content"

export default function BrandKitPage() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF8]">
      <Sidebar />
      <BrandKitContent />
    </div>
  )
}

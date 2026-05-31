"use client"

import { EditorWorkspace } from "@/components/editor-workspace"
import { useRouter } from "next/navigation"

export default function EditorPage() {
  const router = useRouter()

  return <EditorWorkspace onBack={() => router.push("/")} />
}

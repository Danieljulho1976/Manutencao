import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import EquipmentTable from "@/components/equipment-table"

export default function EquipmentPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Equipamentos</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Equipamento
          </Button>
        </div>

        <div className="rounded-md border">
          <Suspense fallback={<div className="p-8 text-center">Carregando equipamentos...</div>}>
            <EquipmentTable />
          </Suspense>
        </div>
      </div>
    </div>
  )
}


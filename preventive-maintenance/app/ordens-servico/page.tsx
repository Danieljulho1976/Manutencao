import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import ServiceOrderTable from "@/components/service-order-table"

export default function ServiceOrderPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Ordens de Serviço</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nova Ordem de Serviço
          </Button>
        </div>

        <div className="rounded-md border">
          <Suspense fallback={<div className="p-8 text-center">Carregando ordens de serviço...</div>}>
            <ServiceOrderTable />
          </Suspense>
        </div>
      </div>
    </div>
  )
}


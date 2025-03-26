"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { useEffect, useState } from "react"

type Equipment = {
  id: string
  name: string
  location: string
  nextMaintenance: string
  maintenanceType: string
  daysRemaining: number
}

export default function UpcomingMaintenanceTable() {
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    let isMounted = true

    setTimeout(() => {
      if (isMounted) {
        setEquipment([
          {
            id: "1",
            name: "Ar Condicionado - Sala de Reuniões",
            location: "2º Andar",
            nextMaintenance: "2025-04-15",
            maintenanceType: "Mensal",
            daysRemaining: 22,
          },
          {
            id: "2",
            name: "Quadro Elétrico - CPD",
            location: "Térreo",
            nextMaintenance: "2025-04-10",
            maintenanceType: "Mensal",
            daysRemaining: 17,
          },
          {
            id: "3",
            name: "Gerador Principal",
            location: "Subsolo",
            nextMaintenance: "2025-04-05",
            maintenanceType: "Diária",
            daysRemaining: 12,
          },
          {
            id: "4",
            name: "Bomba de Recalque 01",
            location: "Casa de Bombas",
            nextMaintenance: "2025-04-02",
            maintenanceType: "Diária",
            daysRemaining: 9,
          },
          {
            id: "5",
            name: "Sistema de Gases Medicinais",
            location: "Ala Leste",
            nextMaintenance: "2025-03-30",
            maintenanceType: "Mensal",
            daysRemaining: 6,
          },
        ])
        setLoading(false)
      }
    }, 1000)

    return () => {
      isMounted = false
    }
  }, [])

  const getStatusBadge = (days: number) => {
    if (days <= 7) return <Badge className="bg-red-500">Urgente</Badge>
    if (days <= 15) return <Badge className="bg-yellow-500">Em breve</Badge>
    return <Badge className="bg-green-500">Planejada</Badge>
  }

  if (loading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Equipamento</TableHead>
          <TableHead>Localização</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {equipment.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.maintenanceType}</TableCell>
            <TableCell>{new Date(item.nextMaintenance).toLocaleDateString("pt-BR")}</TableCell>
            <TableCell>{getStatusBadge(item.daysRemaining)}</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <FileText className="h-4 w-4 mr-1" />
                Gerar OS
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

type ServiceOrder = {
  id: string
  orderNumber: string
  equipmentName: string
  maintenanceType: string
  employeeName: string
  createdAt: string
  status: "pending" | "in-progress" | "completed" | "overdue"
}

export default function RecentServiceOrders() {
  const [orders, setOrders] = useState<ServiceOrder[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    let isMounted = true

    setTimeout(() => {
      if (isMounted) {
        setOrders([
          {
            id: "1",
            orderNumber: "12345/2025",
            equipmentName: "Ar Condicionado - Sala 101",
            maintenanceType: "Mensal",
            employeeName: "João Silva",
            createdAt: "2025-03-20",
            status: "completed",
          },
          {
            id: "2",
            orderNumber: "12346/2025",
            equipmentName: "Quadro Elétrico - Bloco A",
            maintenanceType: "Mensal",
            employeeName: "Maria Oliveira",
            createdAt: "2025-03-21",
            status: "in-progress",
          },
          {
            id: "3",
            orderNumber: "12347/2025",
            equipmentName: "Gerador Principal",
            maintenanceType: "Diária",
            employeeName: "Carlos Santos",
            createdAt: "2025-03-22",
            status: "pending",
          },
          {
            id: "4",
            orderNumber: "12348/2025",
            equipmentName: "Bomba de Recalque 02",
            maintenanceType: "Diária",
            employeeName: "Ana Pereira",
            createdAt: "2025-03-18",
            status: "overdue",
          },
        ])
        setLoading(false)
      }
    }, 1000)

    return () => {
      isMounted = false
    }
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Concluída</Badge>
      case "in-progress":
        return <Badge className="bg-blue-500">Em andamento</Badge>
      case "pending":
        return <Badge className="bg-yellow-500">Pendente</Badge>
      case "overdue":
        return <Badge className="bg-red-500">Atrasada</Badge>
      default:
        return <Badge>Desconhecido</Badge>
    }
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
          <TableHead>Nº OS</TableHead>
          <TableHead>Equipamento</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Responsável</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.orderNumber}</TableCell>
            <TableCell>{order.equipmentName}</TableCell>
            <TableCell>{order.maintenanceType}</TableCell>
            <TableCell>{order.employeeName}</TableCell>
            <TableCell>{getStatusBadge(order.status)}</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4 mr-1" />
                Visualizar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


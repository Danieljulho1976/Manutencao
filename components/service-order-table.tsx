"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Eye, Printer, Search, CheckCircle } from "lucide-react"

type ServiceOrder = {
  id: string
  orderNumber: string
  equipmentName: string
  maintenanceType: string
  employeeName: string
  createdAt: string
  status: "pending" | "in-progress" | "completed" | "overdue"
}

export default function ServiceOrderTable() {
  const [orders, setOrders] = useState<ServiceOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    setTimeout(() => {
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
        {
          id: "5",
          orderNumber: "12349/2025",
          equipmentName: "Sistema de Gases Medicinais",
          maintenanceType: "Mensal",
          employeeName: "Roberto Almeida",
          createdAt: "2025-03-15",
          status: "completed",
        },
        {
          id: "6",
          orderNumber: "12350/2025",
          equipmentName: "Ar Condicionado - Sala 202",
          maintenanceType: "Mensal",
          employeeName: "João Silva",
          createdAt: "2025-03-10",
          status: "completed",
        },
        {
          id: "7",
          orderNumber: "12351/2025",
          equipmentName: "Quadro Elétrico - Bloco B",
          maintenanceType: "Mensal",
          employeeName: "Maria Oliveira",
          createdAt: "2025-03-05",
          status: "completed",
        },
      ])
      setLoading(false)
    }, 1000)
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

  const filteredOrders = orders.filter(
    (item) =>
      item.orderNumber.includes(searchTerm) ||
      item.equipmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.employeeName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="p-4 flex items-center">
        <Search className="mr-2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar ordens de serviço..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nº OS</TableHead>
            <TableHead>Equipamento</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Responsável</TableHead>
            <TableHead>Data de Criação</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                Nenhuma ordem de serviço encontrada.
              </TableCell>
            </TableRow>
          ) : (
            filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                <TableCell>{order.equipmentName}</TableCell>
                <TableCell>{order.maintenanceType}</TableCell>
                <TableCell>{order.employeeName}</TableCell>
                <TableCell>{new Date(order.createdAt).toLocaleDateString("pt-BR")}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="mr-1">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="mr-1">
                    <Printer className="h-4 w-4" />
                  </Button>
                  {order.status !== "completed" && (
                    <Button variant="ghost" size="icon" className="text-green-500">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}


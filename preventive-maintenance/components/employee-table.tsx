"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Trash2, Search } from "lucide-react"

type Employee = {
  id: string
  name: string
  workload: string
  department: string
}

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    setTimeout(() => {
      setEmployees([
        {
          id: "1",
          name: "João Silva",
          workload: "40h semanais",
          department: "Manutenção Elétrica",
        },
        {
          id: "2",
          name: "Maria Oliveira",
          workload: "40h semanais",
          department: "Manutenção Predial",
        },
        {
          id: "3",
          name: "Carlos Santos",
          workload: "36h semanais",
          department: "Manutenção de Ar Condicionado",
        },
        {
          id: "4",
          name: "Ana Pereira",
          workload: "40h semanais",
          department: "Manutenção Hidráulica",
        },
        {
          id: "5",
          name: "Roberto Almeida",
          workload: "36h semanais",
          department: "Manutenção de Equipamentos Médicos",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const filteredEmployees = employees.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase()),
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
          placeholder="Buscar funcionários..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Carga Horária</TableHead>
            <TableHead>Setor</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEmployees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                Nenhum funcionário encontrado.
              </TableCell>
            </TableRow>
          ) : (
            filteredEmployees.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.workload}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}


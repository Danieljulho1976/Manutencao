"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Trash2, Search } from "lucide-react"

type Equipment = {
  id: string
  name: string
  model: string
  serialNumber: string
  location: string
  lastMaintenance: string
  nextMaintenance: string
}

export default function EquipmentTable() {
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    setTimeout(() => {
      setEquipment([
        {
          id: "1",
          name: "Ar Condicionado Split",
          model: "Samsung AR12TSHCBWKNAZ",
          serialNumber: "AC12345678",
          location: "Sala de Reuniões - 2º Andar",
          lastMaintenance: "2025-02-15",
          nextMaintenance: "2025-04-15",
        },
        {
          id: "2",
          name: "Quadro Elétrico Principal",
          model: "Schneider Electric QE-500",
          serialNumber: "QE98765432",
          location: "CPD - Térreo",
          lastMaintenance: "2025-03-10",
          nextMaintenance: "2025-04-10",
        },
        {
          id: "3",
          name: "Gerador Diesel",
          model: "Cummins C150D6",
          serialNumber: "GD56781234",
          location: "Área Externa - Subsolo",
          lastMaintenance: "2025-03-22",
          nextMaintenance: "2025-04-05",
        },
        {
          id: "4",
          name: "Bomba de Recalque 01",
          model: "Schneider BRC-2000",
          serialNumber: "BR87654321",
          location: "Casa de Bombas - Subsolo",
          lastMaintenance: "2025-03-02",
          nextMaintenance: "2025-04-02",
        },
        {
          id: "5",
          name: "Sistema de Gases Medicinais",
          model: "White Martins SGM-500",
          serialNumber: "GM12348765",
          location: "Ala Leste - 1º Andar",
          lastMaintenance: "2025-02-28",
          nextMaintenance: "2025-03-30",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const filteredEquipment = equipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()),
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
          placeholder="Buscar equipamentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Nº de Série</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead>Última Manutenção</TableHead>
            <TableHead>Próxima Manutenção</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEquipment.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                Nenhum equipamento encontrado.
              </TableCell>
            </TableRow>
          ) : (
            filteredEquipment.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.model}</TableCell>
                <TableCell>{item.serialNumber}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{new Date(item.lastMaintenance).toLocaleDateString("pt-BR")}</TableCell>
                <TableCell>{new Date(item.nextMaintenance).toLocaleDateString("pt-BR")}</TableCell>
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


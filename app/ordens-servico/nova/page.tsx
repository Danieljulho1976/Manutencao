"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Save, Printer } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NewServiceOrderPage() {
  const router = useRouter()
  const [maintenanceType, setMaintenanceType] = useState("ar-condicionado")

  // In a real app, these would be fetched from your API
  const equipments = [
    { id: "1", name: "Ar Condicionado - Sala 101" },
    { id: "2", name: "Quadro Elétrico - Bloco A" },
    { id: "3", name: "Gerador Principal" },
    { id: "4", name: "Bomba de Recalque 01" },
    { id: "5", name: "Sistema de Gases Medicinais" },
  ]

  const employees = [
    { id: "1", name: "João Silva" },
    { id: "2", name: "Maria Oliveira" },
    { id: "3", name: "Carlos Santos" },
    { id: "4", name: "Ana Pereira" },
    { id: "5", name: "Roberto Almeida" },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" onClick={() => router.back()} className="mr-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h2 className="text-3xl font-bold tracking-tight">Nova Ordem de Serviço</h2>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Salvar Rascunho
            </Button>
            <Button>
              <Printer className="h-4 w-4 mr-2" />
              Gerar OS
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
            <CardDescription>Preencha os dados da ordem de serviço</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Número da OS</Label>
                <Input id="orderNumber" value="12352/2025" disabled />
                <p className="text-xs text-muted-foreground">Gerado automaticamente</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maintenanceType">Tipo de Manutenção</Label>
                <Select defaultValue="ar-condicionado" onValueChange={(value) => setMaintenanceType(value)}>
                  <SelectTrigger id="maintenanceType">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar-condicionado">Preventiva Mensal de Ar Condicionado</SelectItem>
                    <SelectItem value="quadro-eletrico">Preventiva Mensal de Quadros Elétricos</SelectItem>
                    <SelectItem value="gerador">Ronda Diária de Geradores</SelectItem>
                    <SelectItem value="bomba-recalque">Ronda Diária de Bombas de Recalque</SelectItem>
                    <SelectItem value="gases-medicinais">Gases Medicinais</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="equipment">Equipamento</Label>
                <Select defaultValue="1">
                  <SelectTrigger id="equipment">
                    <SelectValue placeholder="Selecione o equipamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {equipments.map((equipment) => (
                      <SelectItem key={equipment.id} value={equipment.id}>
                        {equipment.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employee">Funcionário Responsável</Label>
                <Select defaultValue="1">
                  <SelectTrigger id="employee">
                    <SelectValue placeholder="Selecione o funcionário" />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((employee) => (
                      <SelectItem key={employee.id} value={employee.id}>
                        {employee.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checklist de Manutenção</CardTitle>
            <CardDescription>Preencha os itens do checklist conforme o tipo de manutenção</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ar-condicionado" value={maintenanceType} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
                <TabsTrigger value="ar-condicionado">Ar Condicionado</TabsTrigger>
                <TabsTrigger value="quadro-eletrico">Quadro Elétrico</TabsTrigger>
                <TabsTrigger value="gerador">Gerador</TabsTrigger>
                <TabsTrigger value="bomba-recalque">Bomba de Recalque</TabsTrigger>
                <TabsTrigger value="gases-medicinais">Gases Medicinais</TabsTrigger>
              </TabsList>

              <TabsContent value="ar-condicionado" className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="ac-item-1">Limpeza do filtro de ar</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-1-yes" />
                        <Label htmlFor="ac-item-1-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-1-no" />
                        <Label htmlFor="ac-item-1-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-1-na" />
                        <Label htmlFor="ac-item-1-na">NA</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="ac-item-2">Verificação de vazamentos de gás refrigerante</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-2-yes" />
                        <Label htmlFor="ac-item-2-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-2-no" />
                        <Label htmlFor="ac-item-2-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-2-na" />
                        <Label htmlFor="ac-item-2-na">NA</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="ac-item-5">Verificação da pressão do sistema</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-5-yes" />
                        <Label htmlFor="ac-item-5-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-5-no" />
                        <Label htmlFor="ac-item-5-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-5-na" />
                        <Label htmlFor="ac-item-5-na">NA</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="ac-item-5-value">Pressão:</Label>
                        <Input id="ac-item-5-value" placeholder="PSI" className="w-20" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="ac-item-9">Medir TENSÃO(V) do Equipamento</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-9-yes" />
                        <Label htmlFor="ac-item-9-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-9-no" />
                        <Label htmlFor="ac-item-9-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ac-item-9-na" />
                        <Label htmlFor="ac-item-9-na">NA</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="ac-item-9-value">Tensão:</Label>
                        <Input id="ac-item-9-value" placeholder="V" className="w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="quadro-eletrico" className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="qe-item-1">
                        Limpeza geral do gabinete, com uso de aspiradores ou pincel, caso necessário
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="qe-item-1-yes" />
                        <Label htmlFor="qe-item-1-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="qe-item-1-no" />
                        <Label htmlFor="qe-item-1-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="qe-item-1-na" />
                        <Label htmlFor="qe-item-1-na">NA</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="qe-item-4">Realizar medição de Tensão entre Fases</Label>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="qe-item-4-rs">RS:</Label>
                        <Input id="qe-item-4-rs" placeholder="V" className="w-20" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="qe-item-4-rt">RT:</Label>
                        <Input id="qe-item-4-rt" placeholder="V" className="w-20" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="qe-item-4-st">ST:</Label>
                        <Input id="qe-item-4-st" placeholder="V" className="w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gerador" className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="gen-item-1">Nível do óleo diesel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="gen-item-1-value">Quantidade:</Label>
                      <Input id="gen-item-1-value" placeholder="litros" className="w-24" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="gen-item-2">Medir a tensão da bateria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="gen-item-2-value">Valor:</Label>
                      <Input id="gen-item-2-value" placeholder="V" className="w-20" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bomba-recalque" className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="pump-item-1">Verificar se existe pontos de vazamento na bomba/tubulações</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pump-item-1-yes" />
                        <Label htmlFor="pump-item-1-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pump-item-1-no" />
                        <Label htmlFor="pump-item-1-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pump-item-1-na" />
                        <Label htmlFor="pump-item-1-na">NA</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="pump-item-2">Qual bomba está em uso?</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pump-item-2-1" />
                        <Label htmlFor="pump-item-2-1">Bomba 01</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pump-item-2-2" />
                        <Label htmlFor="pump-item-2-2">Bomba 02</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="pump-item-4">Ligar a bomba no MODO MANUAL e medir/anotar valor da CORRENTE</Label>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="pump-item-4-r">Fase R:</Label>
                        <Input id="pump-item-4-r" placeholder="A" className="w-20" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="pump-item-4-s">Fase S:</Label>
                        <Input id="pump-item-4-s" placeholder="A" className="w-20" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="pump-item-4-t">Fase T:</Label>
                        <Input id="pump-item-4-t" placeholder="A" className="w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gases-medicinais" className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="gas-item-1">Verificação de pressão nos cilindros</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gas-item-1-yes" />
                        <Label htmlFor="gas-item-1-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gas-item-1-no" />
                        <Label htmlFor="gas-item-1-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="gas-item-1-value">Pressão:</Label>
                        <Input id="gas-item-1-value" placeholder="PSI" className="w-20" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="gas-item-2">Verificação de vazamentos</Label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gas-item-2-yes" />
                        <Label htmlFor="gas-item-2-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gas-item-2-no" />
                        <Label htmlFor="gas-item-2-no">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gas-item-2-na" />
                        <Label htmlFor="gas-item-2-na">NA</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button>Salvar e Gerar OS</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


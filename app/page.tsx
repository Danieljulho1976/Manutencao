import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardStats from "@/components/dashboard-stats"
import UpcomingMaintenanceTable from "@/components/upcoming-maintenance-table"
import MaintenanceStatusChart from "@/components/maintenance-status-chart"
import MaintenanceTypeChart from "@/components/maintenance-type-chart"
import RecentServiceOrders from "@/components/recent-service-orders"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="analytics">Análise</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <DashboardStats />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Manutenções Preventivas Pendentes</CardTitle>
                  <CardDescription>Equipamentos com manutenção programada nos próximos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingMaintenanceTable />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Status das Ordens de Serviço</CardTitle>
                  <CardDescription>Distribuição por status atual</CardDescription>
                </CardHeader>
                <CardContent>
                  <MaintenanceStatusChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Tipos de Manutenção</CardTitle>
                  <CardDescription>Distribuição por tipo de manutenção</CardDescription>
                </CardHeader>
                <CardContent>
                  <MaintenanceTypeChart />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Ordens de Serviço Recentes</CardTitle>
                  <CardDescription>Últimas ordens de serviço geradas</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentServiceOrders />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Análise de Desempenho</CardTitle>
                  <CardDescription>Tempo médio de conclusão por tipo de manutenção</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  {/* Placeholder for analytics chart */}
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    Gráfico de análise de desempenho
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


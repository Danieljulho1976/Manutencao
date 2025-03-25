"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"

type StatsData = {
  totalOrders: number
  completedOrders: number
  pendingOrders: number
  overdueOrders: number
}

export default function DashboardStats() {
  const [stats, setStats] = useState<StatsData>({
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    overdueOrders: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    let isMounted = true

    setTimeout(() => {
      if (isMounted) {
        setStats({
          totalOrders: 248,
          completedOrders: 182,
          pendingOrders: 56,
          overdueOrders: 10,
        })
        setLoading(false)
      }
    }, 1000)

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carregando...</CardTitle>
              <div className="h-4 w-4 rounded-full bg-muted"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Ordens</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalOrders}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Concluídas</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.completedOrders}</div>
          <p className="text-xs text-muted-foreground">
            {Math.round((stats.completedOrders / stats.totalOrders) * 100)}% do total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.pendingOrders}</div>
          <p className="text-xs text-muted-foreground">
            {Math.round((stats.pendingOrders / stats.totalOrders) * 100)}% do total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Atrasadas</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.overdueOrders}</div>
          <p className="text-xs text-muted-foreground">
            {Math.round((stats.overdueOrders / stats.totalOrders) * 100)}% do total
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


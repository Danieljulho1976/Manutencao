"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

type StatusData = {
  name: string
  value: number
  color: string
}

export default function MaintenanceStatusChart() {
  const [data, setData] = useState<StatusData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    let isMounted = true

    setTimeout(() => {
      if (isMounted) {
        setData([
          { name: "Concluídas", value: 182, color: "#10b981" },
          { name: "Em andamento", value: 32, color: "#3b82f6" },
          { name: "Pendentes", value: 24, color: "#f59e0b" },
          { name: "Atrasadas", value: 10, color: "#ef4444" },
        ])
        setLoading(false)
      }
    }, 1000)

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} ordens`, "Quantidade"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


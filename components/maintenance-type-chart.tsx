"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type TypeData = {
  name: string
  value: number
}

export default function MaintenanceTypeChart() {
  const [data, setData] = useState<TypeData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from your API
    // For demo purposes, we're using mock data
    let isMounted = true

    setTimeout(() => {
      if (isMounted) {
        setData([
          { name: "Ar Condicionado", value: 78 },
          { name: "Quadros Elétricos", value: 52 },
          { name: "Geradores", value: 31 },
          { name: "Bombas", value: 45 },
          { name: "Gases Medicinais", value: 42 },
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
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} ordens`, "Quantidade"]} />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


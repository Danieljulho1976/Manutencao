"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Settings, Package, Users, FileText, BarChart, Wrench, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  // Handle mobile detection safely
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Set initial sidebar state based on mobile detection
    setIsOpen(!window.innerWidth < 768)

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Equipamentos",
      icon: Package,
      href: "/equipamentos",
      active: pathname.startsWith("/equipamentos"),
    },
    {
      label: "Funcionários",
      icon: Users,
      href: "/funcionarios",
      active: pathname.startsWith("/funcionarios"),
    },
    {
      label: "Ordens de Serviço",
      icon: FileText,
      href: "/ordens-servico",
      active: pathname.startsWith("/ordens-servico"),
    },
    {
      label: "Relatórios",
      icon: BarChart,
      href: "/relatorios",
      active: pathname.startsWith("/relatorios"),
    },
    {
      label: "Configurações",
      icon: Settings,
      href: "/configuracoes",
      active: pathname.startsWith("/configuracoes"),
    },
  ]

  return (
    <>
      {isMobile && (
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50" onClick={toggleSidebar}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r bg-background transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isMobile ? "w-64" : "w-64",
          className,
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Wrench className="h-6 w-6" />
            <span className="text-lg font-bold">ManutençãoApp</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} onClick={() => isMobile && setIsOpen(false)}>
                <Button
                  variant={route.active ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", {
                    "bg-muted": route.active,
                  })}
                >
                  <route.icon className="mr-2 h-5 w-5" />
                  {route.label}
                </Button>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4 border-t">
          <p className="text-xs text-muted-foreground text-center">© 2025 ManutençãoApp</p>
        </div>
      </div>

      {isOpen && isMobile && <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setIsOpen(false)} />}
    </>
  )
}


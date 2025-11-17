"use client"

import { Building2, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ERPSidebarProps {
  selectedDepartment: string
  selectedStage: string
  onDepartmentChange: (dept: string) => void
  onStageChange: (stage: string) => void
}

const departments = [
  { id: "ETD", name: "ETD Department" },
  { id: "ARMT", name: "ARMT Department" },
  { id: "SRD", name: "SRD Department" }
]

const etdStages = [
  { id: "HOME", name: "Home" },
  { id: "PASSPORT", name: "Passport" },
  { id: "STORE", name: "Store" },
  { id: "STOCK_AVAILABILITY", name: "Stock Availability" },
  { id: "REPORTS", name: "Reports" }
]

const armtStages = [
  { id: "HOME", name: "Home" },
  { id: "STOCK_AVAILABILITY", name: "Stock Availability" },
  { id: "STORE", name: "Store" },
  { id: "PASSPORT", name: "Passport" },
  { id: "REPORTS", name: "Reports" }
]

const srdStages = [
  { id: "HOME", name: "Home" },
  { id: "PASSPORT", name: "Passport" },
  { id: "STORE", name: "Store" },
  { id: "STOCK_AVAILABILITY", name: "Stock Availability" },
  { id: "REPORTS", name: "Reports" }
]

export function ERPSidebar({ 
  selectedDepartment, 
  selectedStage,
  onDepartmentChange,
  onStageChange 
}: ERPSidebarProps) {
  const stages = selectedDepartment === "ARMT" ? armtStages 
    : selectedDepartment === "SRD" ? srdStages
    : etdStages;

  return (
    <div className="w-64 border-r border-border bg-card h-screen overflow-y-auto">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">ERP</h1>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Departments
          </h2>
          <div className="space-y-1">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => onDepartmentChange(dept.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  selectedDepartment === dept.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent text-foreground"
                )}
              >
                {dept.name}
                <ChevronRight className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        {selectedDepartment && (
          <div>
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Stages
            </h2>
            <div className="space-y-1">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => onStageChange(stage.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                    selectedStage === stage.id
                      ? "bg-secondary text-secondary-foreground font-medium"
                      : "hover:bg-accent text-foreground"
                  )}
                >
                  {stage.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
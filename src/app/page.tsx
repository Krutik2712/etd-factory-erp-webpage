"use client"

import { useState } from "react"
import { ERPSidebar } from "@/components/ERPSidebar"
import { ETDPassportStage } from "@/components/ETDPassportStage"
import { ETDStoreStage } from "@/components/ETDStoreStage"
import { ETDStockStage } from "@/components/ETDStockStage"
import { ARMTStockStage } from "@/components/ARMTStockStage"
import { ARMTStoreStage } from "@/components/ARMTStoreStage"
import { ARMTPassportStage } from "@/components/ARMTPassportStage"
import { SRDPassportStage } from "@/components/SRDPassportStage"
import { QAInchargeDashboard } from "@/components/QAInchargeDashboard"
import { Building2, LayoutDashboard } from "lucide-react"

export default function Home() {
  const [view, setView] = useState<"erp" | "qa">("qa")
  const [selectedDepartment, setSelectedDepartment] = useState("ETD")
  const [selectedStage, setSelectedStage] = useState("PASSPORT")

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartment(dept)
    // Set default stage based on department
    if (dept === "ARMT") {
      setSelectedStage("STOCK_AVAILABILITY")
    } else {
      setSelectedStage("PASSPORT")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Factory Management System</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setView("qa")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === "qa"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              QA Dashboard
            </button>
            <button
              onClick={() => setView("erp")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === "erp"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Building2 className="h-4 w-4" />
              ERP System
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {view === "qa" ? (
        <QAInchargeDashboard />
      ) : (
        <div className="flex h-[calc(100vh-73px)]">
          <ERPSidebar
            selectedDepartment={selectedDepartment}
            selectedStage={selectedStage}
            onDepartmentChange={handleDepartmentChange}
            onStageChange={setSelectedStage}
          />
          
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto p-6">
              {selectedDepartment === "ETD" && selectedStage === "PASSPORT" && (
                <ETDPassportStage />
              )}
              {selectedDepartment === "ETD" && selectedStage === "STORE" && (
                <ETDStoreStage />
              )}
              {selectedDepartment === "ETD" && selectedStage === "STOCK_AVAILABILITY" && (
                <ETDStockStage />
              )}
              {selectedDepartment === "ARMT" && selectedStage === "STOCK_AVAILABILITY" && (
                <ARMTStockStage />
              )}
              {selectedDepartment === "ARMT" && selectedStage === "STORE" && (
                <ARMTStoreStage />
              )}
              {selectedDepartment === "ARMT" && selectedStage === "PASSPORT" && (
                <ARMTPassportStage />
              )}
              {selectedDepartment === "SRD" && selectedStage === "PASSPORT" && (
                <SRDPassportStage />
              )}
              {selectedDepartment === "SRD" && selectedStage === "STORE" && (
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold mb-4">SRD - Store Stage</h2>
                  <p className="text-muted-foreground">SRD Store content will be displayed here</p>
                </div>
              )}
              {selectedDepartment === "SRD" && selectedStage === "STOCK_AVAILABILITY" && (
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold mb-4">SRD - Stock Availability Stage</h2>
                  <p className="text-muted-foreground">SRD Stock Availability content will be displayed here</p>
                </div>
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
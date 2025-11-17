"use client"

import { useState } from "react"
import { ERPSidebar } from "@/components/ERPSidebar"
import { ETDHome } from "@/components/ETDHome"
import { ETDPassportStage } from "@/components/ETDPassportStage"
import { ETDStoreStage } from "@/components/ETDStoreStage"
import { ETDStockStage } from "@/components/ETDStockStage"
import { ETDReportsStage } from "@/components/ETDReportsStage"
import { ARMTHome } from "@/components/ARMTHome"
import { ARMTStockStage } from "@/components/ARMTStockStage"
import { ARMTStoreStage } from "@/components/ARMTStoreStage"
import { ARMTPassportStage } from "@/components/ARMTPassportStage"
import { ARMTReportsStage } from "@/components/ARMTReportsStage"
import { SRDHome } from "@/components/SRDHome"
import { SRDPassportStage } from "@/components/SRDPassportStage"
import { SRDStoreStage } from "@/components/SRDStoreStage"
import { SRDStockStage } from "@/components/SRDStockStage"
import { SRDReportsStage } from "@/components/SRDReportsStage"
import { QAInchargeDashboard } from "@/components/QAInchargeDashboard"
import { Building2, LayoutDashboard } from "lucide-react"

export default function Home() {
  const [view, setView] = useState<"erp" | "qa">("qa")
  const [selectedDepartment, setSelectedDepartment] = useState("ETD")
  const [selectedStage, setSelectedStage] = useState("HOME")

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartment(dept)
    // Set default stage to HOME for all departments
    setSelectedStage("HOME")
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
              {selectedDepartment === "ETD" && selectedStage === "HOME" && (
                <ETDHome />
              )}
              {selectedDepartment === "ETD" && selectedStage === "PASSPORT" && (
                <ETDPassportStage />
              )}
              {selectedDepartment === "ETD" && selectedStage === "STORE" && (
                <ETDStoreStage />
              )}
              {selectedDepartment === "ETD" && selectedStage === "STOCK_AVAILABILITY" && (
                <ETDStockStage />
              )}
              {selectedDepartment === "ETD" && selectedStage === "REPORTS" && (
                <ETDReportsStage />
              )}
              {selectedDepartment === "ARMT" && selectedStage === "HOME" && (
                <ARMTHome />
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
              {selectedDepartment === "ARMT" && selectedStage === "REPORTS" && (
                <ARMTReportsStage />
              )}
              {selectedDepartment === "SRD" && selectedStage === "HOME" && (
                <SRDHome />
              )}
              {selectedDepartment === "SRD" && selectedStage === "PASSPORT" && (
                <SRDPassportStage />
              )}
              {selectedDepartment === "SRD" && selectedStage === "STORE" && (
                <SRDStoreStage />
              )}
              {selectedDepartment === "SRD" && selectedStage === "STOCK_AVAILABILITY" && (
                <SRDStockStage />
              )}
              {selectedDepartment === "SRD" && selectedStage === "REPORTS" && (
                <SRDReportsStage />
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
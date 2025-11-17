"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Home, Users, Clock, AlertCircle } from "lucide-react"

interface WorkOrder {
  orderNo: string
  requisitionNo: string
  passportNo: string
  department: string
  dateOfIssue: string
  status: "Completed" | "Ongoing" | "Stopped"
  manPowers: number
  manHours: number
  stopReason?: string
}

const workOrders: WorkOrder[] = [
  {
    orderNo: "WO-SRD-001",
    requisitionNo: "REQ-2025-001",
    passportNo: "SRD/Passport/2025-26/001",
    department: "Radar Systems",
    dateOfIssue: "2025-01-15",
    status: "Ongoing",
    manPowers: 6,
    manHours: 120
  },
  {
    orderNo: "WO-SRD-002",
    requisitionNo: "REQ-2025-002",
    passportNo: "SRD/Passport/2025-26/002",
    department: "Communication Equipment",
    dateOfIssue: "2025-01-16",
    status: "Ongoing",
    manPowers: 8,
    manHours: 160
  },
  {
    orderNo: "WO-SRD-003",
    requisitionNo: "REQ-2025-003",
    passportNo: "SRD/Passport/2025-26/003",
    department: "Electronic Warfare",
    dateOfIssue: "2025-01-14",
    status: "Completed",
    manPowers: 5,
    manHours: 100
  },
  {
    orderNo: "WO-SRD-004",
    requisitionNo: "REQ-2025-004",
    passportNo: "SRD/Passport/2025-26/004",
    department: "Navigation Systems",
    dateOfIssue: "2025-01-13",
    status: "Stopped",
    manPowers: 7,
    manHours: 140,
    stopReason: "Shortage of Spares"
  },
  {
    orderNo: "WO-SRD-005",
    requisitionNo: "REQ-2025-005",
    passportNo: "SRD/Passport/2025-26/005",
    department: "Radar Systems",
    dateOfIssue: "2025-01-12",
    status: "Completed",
    manPowers: 9,
    manHours: 180
  }
]

const STOP_REASONS = [
  "Worker not available",
  "Machine Breakdown",
  "Shortage of Spares",
  "Power Outage",
  "Quality Issues",
  "Material Delay",
  "Other"
]

export function SRDHome() {
  const [selectedOrder, setSelectedOrder] = useState<WorkOrder | null>(null)
  const [editableReason, setEditableReason] = useState<string>("")
  const [isEditingReason, setIsEditingReason] = useState(false)

  const getStatusColor = (status: WorkOrder["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white"
      case "Ongoing":
        return "bg-blue-500 text-white"
      case "Stopped":
        return "bg-red-500 text-white"
    }
  }

  const handleOrderClick = (order: WorkOrder) => {
    setSelectedOrder(order)
    setEditableReason(order.stopReason || "")
    setIsEditingReason(false)
  }

  const handleSubmitReason = () => {
    // Here you would normally send this to an API
    console.log(`Updating stop reason for ${selectedOrder?.orderNo}: ${editableReason}`)
    if (selectedOrder) {
      selectedOrder.stopReason = editableReason
    }
    setIsEditingReason(false)
  }

  const totalManPowers = workOrders.reduce((sum, wo) => sum + wo.manPowers, 0)
  const totalManHours = workOrders.reduce((sum, wo) => sum + wo.manHours, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="bg-primary p-3 rounded-lg">
          <Home className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">SRD Department - Home</h1>
          <p className="text-muted-foreground">Work Orders Dashboard</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Ongoing</p>
              <p className="text-3xl font-bold text-blue-500">
                {workOrders.filter(wo => wo.status === "Ongoing").length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-3xl font-bold text-green-500">
                {workOrders.filter(wo => wo.status === "Completed").length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Stopped</p>
              <p className="text-3xl font-bold text-red-500">
                {workOrders.filter(wo => wo.status === "Stopped").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Orders Table */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold">All Work Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Work Order No.</TableHead>
                <TableHead>Requisition No.</TableHead>
                <TableHead>Passport No.</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Date of Issue</TableHead>
                <TableHead>Current Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workOrders.map((order) => (
                <TableRow 
                  key={order.orderNo}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleOrderClick(order)}
                >
                  <TableCell className="font-medium">{order.orderNo}</TableCell>
                  <TableCell>{order.requisitionNo}</TableCell>
                  <TableCell>{order.passportNo}</TableCell>
                  <TableCell>{order.department}</TableCell>
                  <TableCell>{order.dateOfIssue}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Man Powers and Man Hours Section */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Man Powers Required</p>
                <p className="text-2xl font-bold">{totalManPowers}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Man Hours Required</p>
                <p className="text-2xl font-bold">{totalManHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Order Details Modal/Section */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedOrder(null)}>
          <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Work Order Details</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Work Order No.</p>
                  <p className="text-lg font-semibold">{selectedOrder.orderNo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Requisition No.</p>
                  <p className="text-lg font-semibold">{selectedOrder.requisitionNo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Passport No.</p>
                  <p className="text-lg font-semibold">{selectedOrder.passportNo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="text-lg font-semibold">{selectedOrder.department}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Issue</p>
                  <p className="text-lg font-semibold">{selectedOrder.dateOfIssue}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge>
                </div>
              </div>

              {/* Stop Reason Section - Only show for Stopped orders */}
              {selectedOrder.status === "Stopped" && (
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h3 className="text-lg font-semibold">Stop Reason</h3>
                  </div>
                  <div className="space-y-3">
                    {isEditingReason ? (
                      <>
                        <select
                          value={editableReason}
                          onChange={(e) => setEditableReason(e.target.value)}
                          className="w-full p-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select a reason...</option>
                          {STOP_REASONS.map((reason) => (
                            <option key={reason} value={reason}>
                              {reason}
                            </option>
                          ))}
                        </select>
                        <div className="flex gap-2">
                          <button
                            onClick={handleSubmitReason}
                            className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                          >
                            Submit
                          </button>
                          <button
                            onClick={() => {
                              setIsEditingReason(false)
                              setEditableReason(selectedOrder.stopReason || "")
                            }}
                            className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-900 dark:text-red-100">
                            {selectedOrder.stopReason || "No reason specified"}
                          </p>
                        </div>
                        <button
                          onClick={() => setIsEditingReason(true)}
                          className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                        >
                          Edit Reason
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
              
              <div className="border-t border-border pt-4 mt-4">
                <h3 className="text-lg font-semibold mb-3">Resource Requirements</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Man Powers</p>
                      <p className="text-xl font-bold">{selectedOrder.manPowers}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Man Hours</p>
                      <p className="text-xl font-bold">{selectedOrder.manHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-border">
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
"use client"

import { useState } from "react"
import { Bell, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Department {
  id: string
  name: string
  color: string
  description: string
  currentStatus: string
  pendingApprovals: number
  notifications: string[]
}

interface WorkOrder {
  id: string
  orderNo: string
  stage: string
  status: "ongoing" | "pending_approval"
  hullNo?: string
  referenceId?: string
  dateOfIssue?: string
  ptNo?: string
  baNo?: string
  regdNo?: string
  barrelNo?: string
  passportNo?: string
}

interface PassportItem {
  srNo: number
  nomenclature: string
  quantityPerMachine?: number
  ohsNo?: string
  assyContNo?: string
  category?: string
  regdNo?: string
  receivedOrNot?: "YES" | "NO" | ""
  deficiency?: string
  serviceable?: "YES" | "NO" | ""
  qty?: string
  statusR?: string
  statusN?: string
  gangLeader?: string
  stageInspQA?: string
  remarks?: string
  isSubItem?: boolean
  gpNo?: number
}

const departments: Department[] = [
  {
    id: "ETD",
    name: "ETD",
    color: "bg-blue-500",
    description: "Engineering & Technical Department",
    currentStatus: "12 active projects, 3 pending reviews",
    pendingApprovals: 5,
    notifications: [
      "CMT Hull Stage - 2 passports pending approval",
      "IFDSS Kit Stage - 1 store requisition awaiting review",
      "CMT Battery Kit - 2 stock availability checks needed"
    ]
  },
  {
    id: "ARMT",
    name: "ARMT",
    color: "bg-green-500",
    description: "Armament Department",
    currentStatus: "8 active assemblies, 2 pending reviews",
    pendingApprovals: 3,
    notifications: [
      "Stock Availability - 2 items require approval",
      "Store Stage - 1 requisition pending"
    ]
  },
  {
    id: "EOD",
    name: "EOD",
    color: "bg-red-500",
    description: "Explosive Ordnance Disposal",
    currentStatus: "5 active operations, 1 pending review",
    pendingApprovals: 2,
    notifications: [
      "Safety inspection report pending approval",
      "Equipment maintenance checklist awaiting review"
    ]
  },
  {
    id: "SRD",
    name: "SRD",
    color: "bg-purple-500",
    description: "Supply & Repair Department",
    currentStatus: "15 active orders, 4 pending reviews",
    pendingApprovals: 7,
    notifications: [
      "Purchase orders - 3 awaiting approval",
      "Repair requests - 2 pending review",
      "Vendor quotations - 2 require evaluation"
    ]
  },
  {
    id: "ARD",
    name: "ARD",
    color: "bg-indigo-500",
    description: "Assembly & Repair Department",
    currentStatus: "10 assemblies in progress, 2 pending reviews",
    pendingApprovals: 4,
    notifications: [
      "Assembly completion reports - 2 pending approval",
      "Quality check - 2 items awaiting inspection"
    ]
  },
  {
    id: "INST",
    name: "INST",
    color: "bg-yellow-500",
    description: "Instrumentation Department",
    currentStatus: "6 calibrations scheduled, 1 pending review",
    pendingApprovals: 3,
    notifications: [
      "Calibration certificates - 2 pending approval",
      "Equipment verification report awaiting review"
    ]
  },
  {
    id: "VRD",
    name: "VRD",
    color: "bg-teal-500",
    description: "Vehicle Repair Department",
    currentStatus: "9 vehicles under repair, 3 pending reviews",
    pendingApprovals: 6,
    notifications: [
      "Vehicle inspection reports - 3 pending approval",
      "Spare parts requisitions - 2 awaiting review",
      "Repair completion certificates - 1 pending"
    ]
  }
]

// Work orders data for ETD, ARMT, and SRD
const workOrdersData: Record<string, WorkOrder[]> = {
  ETD: [
    {
      id: "WO-ETD-001",
      orderNo: "WO-ETD-001",
      stage: "CMT HULL STAGE",
      status: "ongoing",
      hullNo: "HULL-2024-001",
      referenceId: "REF-ETD-2024-001",
      dateOfIssue: "2024-01-15"
    },
    {
      id: "WO-ETD-002",
      orderNo: "WO-ETD-002",
      stage: "CMT HULL STAGE",
      status: "ongoing",
      hullNo: "HULL-2024-002",
      referenceId: "REF-ETD-2024-002",
      dateOfIssue: "2024-01-16"
    },
    {
      id: "WO-ETD-003",
      orderNo: "WO-ETD-003",
      stage: "CMT HULL STAGE",
      status: "pending_approval",
      hullNo: "HULL-2024-003",
      referenceId: "REF-ETD-2024-003",
      dateOfIssue: "2024-01-14"
    },
    {
      id: "WO-ETD-004",
      orderNo: "WO-ETD-004",
      stage: "CMT HULL STAGE",
      status: "pending_approval",
      hullNo: "HULL-2024-004",
      referenceId: "REF-ETD-2024-004",
      dateOfIssue: "2024-01-13"
    }
  ],
  ARMT: [
    {
      id: "WO-ARMT-001",
      orderNo: "WO-ARMT-001",
      stage: "PASSPORT",
      status: "ongoing",
      ptNo: "PT-2024-001",
      baNo: "BA-001",
      regdNo: "REG-30-001",
      barrelNo: "BRL-001"
    },
    {
      id: "WO-ARMT-002",
      orderNo: "WO-ARMT-002",
      stage: "PASSPORT",
      status: "ongoing",
      ptNo: "PT-2024-002",
      baNo: "BA-002",
      regdNo: "REG-30-002",
      barrelNo: "BRL-002"
    },
    {
      id: "WO-ARMT-003",
      orderNo: "WO-ARMT-003",
      stage: "PASSPORT",
      status: "pending_approval",
      ptNo: "PT-2024-003",
      baNo: "BA-003",
      regdNo: "REG-30-003",
      barrelNo: "BRL-003"
    }
  ],
  SRD: [
    {
      id: "WO-SRD-001",
      orderNo: "WO-SRD-001",
      stage: "PASSPORT",
      status: "ongoing",
      passportNo: "SRD/Passport/2025-26/001",
      dateOfIssue: "2025-01-15"
    },
    {
      id: "WO-SRD-002",
      orderNo: "WO-SRD-002",
      stage: "PASSPORT",
      status: "ongoing",
      passportNo: "SRD/Passport/2025-26/002",
      dateOfIssue: "2025-01-16"
    },
    {
      id: "WO-SRD-003",
      orderNo: "WO-SRD-003",
      stage: "PASSPORT",
      status: "pending_approval",
      passportNo: "SRD/Passport/2025-26/003",
      dateOfIssue: "2025-01-14"
    }
  ]
}

// Sample passport items for ETD CMT Hull Stage
const etdPassportItems: PassportItem[] = [
  {
    srNo: 1,
    nomenclature: "R J Box",
    quantityPerMachine: 4,
    ohsNo: "5252",
    assyContNo: "NK",
    category: "NEW/OH"
  },
  {
    srNo: 2,
    nomenclature: "Brush Assy",
    quantityPerMachine: 2,
    ohsNo: "5111",
    assyContNo: "NK",
    category: "NEW/OH"
  },
  {
    srNo: 3,
    nomenclature: "Spl Blower",
    quantityPerMachine: 6,
    ohsNo: "5522",
    assyContNo: "NK",
    category: "NEW/OH"
  },
  {
    srNo: 4,
    nomenclature: "E socket",
    quantityPerMachine: 8,
    ohsNo: "5213",
    assyContNo: "NK",
    category: "NEW/OH"
  }
]

// Sample passport items for ARMT
const armtPassportItems: PassportItem[] = [
  {
    srNo: 1,
    nomenclature: "30mm Gun Barrel",
    regdNo: "REG-30-001",
    receivedOrNot: "YES",
    deficiency: "None",
    serviceable: "YES"
  },
  {
    srNo: 2,
    nomenclature: "Breach Block Assembly",
    regdNo: "REG-30-002",
    receivedOrNot: "YES",
    deficiency: "Minor wear",
    serviceable: "YES"
  },
  {
    srNo: 3,
    nomenclature: "Firing Pin",
    regdNo: "REG-30-003",
    receivedOrNot: "NO",
    deficiency: "Not received",
    serviceable: "NO"
  }
]

// Sample passport items for SRD
const srdPassportItems: PassportItem[] = [
  { srNo: 1, gpNo: 3, nomenclature: "Radiators and Oil Coolers (03)", qty: "", statusR: "R", statusN: "N", gangLeader: "", stageInspQA: "NAME", remarks: "" },
  { nomenclature: "(a) Radiators", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },
  { nomenclature: "(b) Oil cooler", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },
  { nomenclature: "(c) Cooler Gear box", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },
  { srNo: 2, gpNo: 5, nomenclature: "Fuel Systems (05)", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
  { nomenclature: "(a) Tank (Diesel)", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
  { nomenclature: "(b) Tank LH", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
  { nomenclature: "(c) Tank RH", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true }
]

export function QAInchargeDashboard() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder | null>(null)

  const handleDepartmentClick = (dept: Department) => {
    setSelectedDepartment(dept)
    setSelectedWorkOrder(null)
  }

  const handleWorkOrderClick = (workOrder: WorkOrder) => {
    setSelectedWorkOrder(workOrder)
  }

  const closeModal = () => {
    setSelectedDepartment(null)
    setSelectedWorkOrder(null)
  }

  const goBackToWorkOrders = () => {
    setSelectedWorkOrder(null)
  }

  const currentWorkOrders = selectedDepartment ? workOrdersData[selectedDepartment.id] || [] : []
  const ongoingOrders = currentWorkOrders.filter(wo => wo.status === "ongoing")
  const pendingOrders = currentWorkOrders.filter(wo => wo.status === "pending_approval")

  // Determine which passport items to show
  let passportItems: PassportItem[] = []
  if (selectedDepartment?.id === "ETD") {
    passportItems = etdPassportItems
  } else if (selectedDepartment?.id === "ARMT") {
    passportItems = armtPassportItems
  } else if (selectedDepartment?.id === "SRD") {
    passportItems = srdPassportItems
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-2">QA In-Charge Dashboard</h1>
          <p className="text-center text-muted-foreground">Quality Assurance - Central Control Panel</p>
        </div>
      </div>

      {/* Department Cards Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => handleDepartmentClick(dept)}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {/* Colored Header */}
              <div className={cn("h-32 flex items-center justify-center", dept.color)}>
                <h2 className="text-4xl font-bold text-white">{dept.name}</h2>
              </div>

              {/* Card Content */}
              <div className="p-4 bg-card">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                  {dept.description}
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                  Access
                </button>
              </div>

              {/* Notification Badge */}
              {dept.pendingApprovals > 0 && (
                <div className="absolute top-2 right-2 bg-destructive text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                  {dept.pendingApprovals}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDepartment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div 
            className="bg-card rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!selectedWorkOrder ? (
              <>
                {/* Modal Header */}
                <div className={cn("p-6 text-white relative", selectedDepartment.color)}>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                  <h2 className="text-3xl font-bold mb-2">{selectedDepartment.name}</h2>
                  <p className="text-white/90">{selectedDepartment.description}</p>
                </div>

                {/* Work Orders Content */}
                <div className="p-6 space-y-6">
                  {(selectedDepartment.id === "ETD" || selectedDepartment.id === "ARMT" || selectedDepartment.id === "SRD") ? (
                    <>
                      {/* Ongoing Work Orders */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <div className={cn("w-3 h-3 rounded-full bg-green-500")}></div>
                          Work Orders - Ongoing ({ongoingOrders.length})
                        </h3>
                        <div className="space-y-2">
                          {ongoingOrders.map((order) => (
                            <div
                              key={order.id}
                              className="w-full bg-muted p-4 rounded-lg text-left flex items-center justify-between"
                            >
                              <div>
                                <p className="font-semibold text-foreground">{order.orderNo} - {order.stage}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {selectedDepartment.id === "ETD" 
                                    ? `Hull: ${order.hullNo} | Ref: ${order.referenceId}`
                                    : selectedDepartment.id === "ARMT"
                                    ? `PT: ${order.ptNo} | BA: ${order.baNo}`
                                    : `Passport: ${order.passportNo}`
                                  }
                                </p>
                              </div>
                              <Badge variant="default" className="bg-green-500">Ongoing</Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pending Approvals */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Bell className="h-5 w-5 text-destructive" />
                          Pending Approvals ({pendingOrders.length})
                        </h3>
                        <div className="space-y-2">
                          {pendingOrders.map((order) => (
                            <button
                              key={order.id}
                              onClick={() => handleWorkOrderClick(order)}
                              className="w-full bg-muted border-l-4 border-destructive hover:bg-muted/80 p-4 rounded-r-lg transition-colors text-left flex items-center justify-between group"
                            >
                              <div>
                                <p className="font-semibold text-foreground">{order.orderNo} - {order.stage}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {selectedDepartment.id === "ETD" 
                                    ? `Hull: ${order.hullNo} | Ref: ${order.referenceId}`
                                    : selectedDepartment.id === "ARMT"
                                    ? `PT: ${order.ptNo} | BA: ${order.baNo}`
                                    : `Passport: ${order.passportNo}`
                                  }
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="destructive">Pending Approval</Badge>
                                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Original Current Status and Notifications for other departments */
                    <>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <div className={cn("w-3 h-3 rounded-full", selectedDepartment.color)}></div>
                          Current Status
                        </h3>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-foreground">{selectedDepartment.currentStatus}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Bell className="h-5 w-5 text-destructive" />
                          Pending Approvals ({selectedDepartment.pendingApprovals})
                        </h3>
                        <div className="space-y-3">
                          {selectedDepartment.notifications.map((notification, index) => (
                            <div
                              key={index}
                              className="bg-muted border-l-4 border-destructive p-4 rounded-r-lg hover:bg-muted/80 transition-colors"
                            >
                              <p className="text-sm text-foreground">{notification}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <button className={cn(
                          "w-full py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity",
                          selectedDepartment.color
                        )}>
                          View Detailed Reports
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Work Order Detail View - Passport Table */}
                <div className={cn("p-6 text-white relative", selectedDepartment.color)}>
                  <button
                    onClick={goBackToWorkOrders}
                    className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                    aria-label="Back"
                  >
                    <ChevronRight className="h-5 w-5 text-white transform rotate-180" />
                  </button>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                  <h2 className="text-3xl font-bold mb-2">{selectedWorkOrder.orderNo}</h2>
                  <p className="text-white/90">{selectedWorkOrder.stage}</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Header Fields */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {selectedDepartment.id === "ETD" ? (
                        <>
                          <div className="space-y-2">
                            <Label>HULL NO.</Label>
                            <Input value={selectedWorkOrder.hullNo} readOnly className="font-medium" />
                          </div>
                          <div className="space-y-2">
                            <Label>Reference ID</Label>
                            <Input value={selectedWorkOrder.referenceId} readOnly className="font-medium" />
                          </div>
                          <div className="space-y-2">
                            <Label>Date of Issue</Label>
                            <Input value={selectedWorkOrder.dateOfIssue} readOnly className="font-medium" />
                          </div>
                        </>
                      ) : selectedDepartment.id === "ARMT" ? (
                        <>
                          <div className="space-y-2">
                            <Label>PT NO.</Label>
                            <Input value={selectedWorkOrder.ptNo} readOnly />
                          </div>
                          <div className="space-y-2">
                            <Label>BA NO.</Label>
                            <Input value={selectedWorkOrder.baNo} readOnly />
                          </div>
                          <div className="space-y-2">
                            <Label>REGD NO.</Label>
                            <Input value={selectedWorkOrder.regdNo} readOnly />
                          </div>
                          <div className="space-y-2">
                            <Label>BARREL NO.</Label>
                            <Input value={selectedWorkOrder.barrelNo} readOnly />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label>Passport No.</Label>
                            <Input value={selectedWorkOrder.passportNo} readOnly />
                          </div>
                          <div className="space-y-2">
                            <Label>Date of Issue</Label>
                            <Input value={selectedWorkOrder.dateOfIssue} readOnly />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Passport Table */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Passport Components</h3>
                    <div className="border rounded-lg overflow-hidden">
                      {selectedDepartment.id === "ETD" ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">Sr No</TableHead>
                              <TableHead>Nomenclature</TableHead>
                              <TableHead>Quantity per machine</TableHead>
                              <TableHead>OHS No</TableHead>
                              <TableHead>AssyCont No/RegdSri No</TableHead>
                              <TableHead>OH/OSS/LP</TableHead>
                              <TableHead colSpan={2} className="text-center">Supervisor/Worker</TableHead>
                              <TableHead colSpan={2} className="text-center">QA Rep</TableHead>
                            </TableRow>
                            <TableRow>
                              <TableHead colSpan={6}></TableHead>
                              <TableHead className="text-center border-r">Name</TableHead>
                              <TableHead className="text-center">Sign</TableHead>
                              <TableHead className="text-center border-r">Name</TableHead>
                              <TableHead className="text-center">Sign</TableHead>
                            </TableRow>
                            <TableRow>
                              <TableHead colSpan={6}></TableHead>
                              <TableHead className="font-semibold text-center border-r">ABC</TableHead>
                              <TableHead className="text-center"></TableHead>
                              <TableHead className="font-semibold text-center border-r">XYZ</TableHead>
                              <TableHead className="text-center"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {passportItems.map((item) => (
                              <TableRow key={item.srNo}>
                                <TableCell className="font-medium">{item.srNo}</TableCell>
                                <TableCell>{item.nomenclature}</TableCell>
                                <TableCell>{item.quantityPerMachine}</TableCell>
                                <TableCell>{item.ohsNo}</TableCell>
                                <TableCell>{item.assyContNo}</TableCell>
                                <TableCell>
                                  <Badge variant="default">{item.category}</Badge>
                                </TableCell>
                                <TableCell className="border-r"></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="border-r"></TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : selectedDepartment.id === "ARMT" ? (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">Sr No.</TableHead>
                              <TableHead className="w-[250px]">Nomenclature</TableHead>
                              <TableHead className="w-[180px]">Regd No.</TableHead>
                              <TableHead className="w-[150px]">Received or not</TableHead>
                              <TableHead className="w-[200px]">Deficiency</TableHead>
                              <TableHead className="w-[150px]">Serviceable</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {passportItems.map((item) => (
                              <TableRow key={item.srNo}>
                                <TableCell className="font-medium">{item.srNo}</TableCell>
                                <TableCell>{item.nomenclature}</TableCell>
                                <TableCell>{item.regdNo}</TableCell>
                                <TableCell>
                                  <Badge variant={item.receivedOrNot === "YES" ? "default" : "destructive"}>
                                    {item.receivedOrNot}
                                  </Badge>
                                </TableCell>
                                <TableCell>{item.deficiency}</TableCell>
                                <TableCell>
                                  <Badge variant={item.serviceable === "YES" ? "default" : "destructive"}>
                                    {item.serviceable}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[60px] border-r text-center">Sr<br />No</TableHead>
                              <TableHead className="w-[60px] border-r text-center">Gp<br />No</TableHead>
                              <TableHead className="min-w-[250px] border-r">NOMENCLATURE</TableHead>
                              <TableHead className="w-[80px] border-r text-center">QTY</TableHead>
                              <TableHead colSpan={2} className="text-center border-r">STATUS(%)</TableHead>
                              <TableHead className="w-[150px] text-center border-r">GANG LEADER</TableHead>
                              <TableHead className="text-center border-r">STAGE INSP(QA)</TableHead>
                              <TableHead className="min-w-[120px] text-center">Remarks</TableHead>
                            </TableRow>
                            <TableRow>
                              <TableHead className="border-r" colSpan={4}></TableHead>
                              <TableHead className="text-center border-r w-[70px]">R</TableHead>
                              <TableHead className="text-center border-r w-[70px]">N</TableHead>
                              <TableHead className="border-r"></TableHead>
                              <TableHead className="text-center border-r w-[150px]">NAME</TableHead>
                              <TableHead></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {passportItems.map((item, index) => (
                              <TableRow key={index} className={item.isSubItem ? "bg-muted/30" : ""}>
                                <TableCell className="border-r text-center font-medium">
                                  {item.srNo || ""}
                                </TableCell>
                                <TableCell className="border-r text-center">
                                  {item.gpNo || ""}
                                </TableCell>
                                <TableCell className={`border-r ${item.isSubItem ? "pl-8" : "font-medium"}`}>
                                  {item.nomenclature}
                                </TableCell>
                                <TableCell className="border-r text-center">
                                  {item.qty}
                                </TableCell>
                                <TableCell className="text-center border-r">
                                  {item.statusR}
                                </TableCell>
                                <TableCell className="text-center border-r">
                                  {item.statusN}
                                </TableCell>
                                <TableCell className="border-r text-center">
                                  {item.gangLeader}
                                </TableCell>
                                <TableCell className="border-r text-center !whitespace-pre-line">
                                  {item.stageInspQA}
                                </TableCell>
                                <TableCell>
                                  {item.remarks}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {selectedWorkOrder.status === "pending_approval" && (
                      <div className="flex justify-end gap-3 mt-6">
                        <Button variant="outline" size="lg">
                          Request Changes
                        </Button>
                        <Button size="lg" className={cn(selectedDepartment.color, "text-white")}>
                          Approve
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
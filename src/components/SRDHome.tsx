import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Home } from "lucide-react"

interface WorkOrder {
  orderNo: string
  requisitionNo: string
  passportNo: string
  department: string
  dateOfIssue: string
  status: "Completed" | "Ongoing" | "Stopped"
}

const workOrders: WorkOrder[] = [
  {
    orderNo: "WO-SRD-001",
    requisitionNo: "REQ-2025-001",
    passportNo: "SRD/Passport/2025-26/001",
    department: "Radar Systems",
    dateOfIssue: "2025-01-15",
    status: "Ongoing"
  },
  {
    orderNo: "WO-SRD-002",
    requisitionNo: "REQ-2025-002",
    passportNo: "SRD/Passport/2025-26/002",
    department: "Communication Equipment",
    dateOfIssue: "2025-01-16",
    status: "Ongoing"
  },
  {
    orderNo: "WO-SRD-003",
    requisitionNo: "REQ-2025-003",
    passportNo: "SRD/Passport/2025-26/003",
    department: "Electronic Warfare",
    dateOfIssue: "2025-01-14",
    status: "Completed"
  },
  {
    orderNo: "WO-SRD-004",
    requisitionNo: "REQ-2025-004",
    passportNo: "SRD/Passport/2025-26/004",
    department: "Navigation Systems",
    dateOfIssue: "2025-01-13",
    status: "Stopped"
  },
  {
    orderNo: "WO-SRD-005",
    requisitionNo: "REQ-2025-005",
    passportNo: "SRD/Passport/2025-26/005",
    department: "Radar Systems",
    dateOfIssue: "2025-01-12",
    status: "Completed"
  }
]

export function SRDHome() {
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
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
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
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
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
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
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
                <TableRow key={order.orderNo}>
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
      </div>
    </div>
  )
}

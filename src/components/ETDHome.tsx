"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Home, Users, Clock, AlertCircle, Bell } from "lucide-react";

interface WorkOrder {
  orderNo: string;
  workOrderType: "MOS" | "LM" | "A-IN-U" | "MISC-ADHOC" | "DRWO" | "PAY-A-IN-U";
  referenceId: string;
  dateOfIssue: string;
  dueDate: string;
  completedOn: string | null;
  delayedBy: number | null;
  status: "Completed" | "Ongoing" | "Delayed";
  manPowers: number;
  manHours: number;
  stopReason?: string;
}

const workOrders: WorkOrder[] = [
  {
    orderNo: "WO-ETD-001",
    workOrderType: "MOS",
    referenceId: "REF-ETD-2024-001",
    dateOfIssue: "2024-01-15",
    dueDate: "2024-02-15",
    completedOn: null,
    delayedBy: null,
    status: "Ongoing",
    manPowers: 12,
    manHours: 240
  },
  {
    orderNo: "WO-ETD-002",
    workOrderType: "LM",
    referenceId: "REF-ETD-2024-002",
    dateOfIssue: "2024-01-16",
    dueDate: "2024-02-16",
    completedOn: null,
    delayedBy: null,
    status: "Ongoing",
    manPowers: 15,
    manHours: 300
  },
  {
    orderNo: "WO-ETD-003",
    workOrderType: "A-IN-U",
    referenceId: "REF-ETD-2024-003",
    dateOfIssue: "2024-01-14",
    dueDate: "2024-02-10",
    completedOn: "2024-02-08",
    delayedBy: 0,
    status: "Completed",
    manPowers: 10,
    manHours: 200
  },
  {
    orderNo: "WO-ETD-004",
    workOrderType: "MISC-ADHOC",
    referenceId: "REF-ETD-2024-004",
    dateOfIssue: "2024-01-13",
    dueDate: "2024-02-01",
    completedOn: null,
    delayedBy: 16,
    status: "Delayed",
    manPowers: 8,
    manHours: 160,
    stopReason: "Machine Breakdown"
  },
  {
    orderNo: "WO-ETD-005",
    workOrderType: "DRWO",
    referenceId: "REF-ETD-2024-005",
    dateOfIssue: "2024-01-12",
    dueDate: "2024-02-05",
    completedOn: "2024-02-04",
    delayedBy: 0,
    status: "Completed",
    manPowers: 14,
    manHours: 280
  }
];

const STOP_REASONS = [
  "Worker not available",
  "Machine Breakdown",
  "Shortage of Spares",
  "Power Outage",
  "Quality Issues",
  "Material Delay",
  "Other"
];

const WORK_ORDER_TYPES = ["MOS", "LM", "A-IN-U", "MISC-ADHOC", "DRWO", "PAY-A-IN-U"] as const;

export function ETDHome() {
  const [selectedOrder, setSelectedOrder] = useState<WorkOrder | null>(null);
  const [editableReason, setEditableReason] = useState<string>("");
  const [isEditingReason, setIsEditingReason] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const getStatusColor = (status: WorkOrder["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "Ongoing":
        return "bg-blue-500 text-white";
      case "Delayed":
        return "bg-red-500 text-white";
    }
  };

  const handleOrderClick = (order: WorkOrder) => {
    setSelectedOrder(order);
    setEditableReason(order.stopReason || "");
    setIsEditingReason(false);
  };

  const handleSubmitReason = () => {
    // Here you would normally send this to an API
    console.log(`Updating stop reason for ${selectedOrder?.orderNo}: ${editableReason}`);
    if (selectedOrder) {
      selectedOrder.stopReason = editableReason;
    }
    setIsEditingReason(false);
  };

  const totalManPowers = workOrders.reduce((sum, wo) => sum + wo.manPowers, 0);
  const totalManHours = workOrders.reduce((sum, wo) => sum + wo.manHours, 0);

  const delayedOrders = workOrders.filter(wo => wo.status === "Delayed");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-3 rounded-lg">
            <Home className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">ETD Department - Home</h1>
            <p className="text-muted-foreground">Work Orders Dashboard</p>
          </div>
        </div>
        <button
          onClick={() => setShowNotifications(true)}
          className="relative p-3 rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors"
        >
          <Bell className="h-6 w-6" />
          {delayedOrders.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {delayedOrders.length}
            </span>
          )}
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Ongoing</p>
              <p className="text-3xl font-bold text-blue-500">
                {workOrders.filter((wo) => wo.status === "Ongoing").length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-3xl font-bold text-green-500">
                {workOrders.filter((wo) => wo.status === "Completed").length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Delayed</p>
              <p className="text-3xl font-bold text-red-500">
                {workOrders.filter((wo) => wo.status === "Delayed").length}
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
                <TableHead>Work Order Type</TableHead>
                <TableHead>Reference ID</TableHead>
                <TableHead>Date of Issue</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Completed On</TableHead>
                <TableHead>Delayed By</TableHead>
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
                  <TableCell>
                    <Badge variant="outline">{order.workOrderType}</Badge>
                  </TableCell>
                  <TableCell>{order.referenceId}</TableCell>
                  <TableCell>{order.dateOfIssue}</TableCell>
                  <TableCell>{order.dueDate}</TableCell>
                  <TableCell>{order.completedOn || "-"}</TableCell>
                  <TableCell>{order.delayedBy !== null ? `${order.delayedBy} days` : "-"}</TableCell>
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
                <p className="text-sm text-muted-foreground">Total Man Powers Required Available</p>
                <p className="text-2xl font-bold">{totalManPowers}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Man Hours Available</p>
                <p className="text-2xl font-bold">{totalManHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Modal */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowNotifications(false)}>
          <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <h2 className="text-2xl font-bold">Delayed Work Orders</h2>
              </div>
            </div>
            <div className="p-6">
              {delayedOrders.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No delayed work orders</p>
              ) : (
                <div className="space-y-4">
                  {delayedOrders.map((order) => (
                    <div key={order.orderNo} className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-lg">{order.orderNo}</p>
                          <p className="text-sm text-muted-foreground">{order.referenceId}</p>
                        </div>
                        <Badge className="bg-red-500 text-white">Delayed</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Due Date</p>
                          <p className="text-sm font-medium">{order.dueDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Time Exceeded</p>
                          <p className="text-sm font-medium text-red-600 dark:text-red-400">
                            {order.delayedBy} days ({order.delayedBy! * 24} hrs)
                          </p>
                        </div>
                      </div>
                      {order.stopReason && (
                        <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-800">
                          <p className="text-xs text-muted-foreground">Reason</p>
                          <p className="text-sm font-medium">{order.stopReason}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 border-t border-border">
              <button
                onClick={() => setShowNotifications(false)}
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <p className="text-sm text-muted-foreground">Work Order Type</p>
                  <Badge variant="outline" className="text-base px-3 py-1">{selectedOrder.workOrderType}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Reference ID</p>
                  <p className="text-lg font-semibold">{selectedOrder.referenceId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Issue</p>
                  <p className="text-lg font-semibold">{selectedOrder.dateOfIssue}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Due Date</p>
                  <p className="text-lg font-semibold">{selectedOrder.dueDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed On</p>
                  <p className="text-lg font-semibold">{selectedOrder.completedOn || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delayed By</p>
                  <p className="text-lg font-semibold">{selectedOrder.delayedBy !== null ? `${selectedOrder.delayedBy} days` : "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge>
                </div>
              </div>

              {/* Stop Reason Section - Only show for Delayed orders */}
              {selectedOrder.status === "Delayed" && (
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
                              setIsEditingReason(false);
                              setEditableReason(selectedOrder.stopReason || "");
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
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    console.log(`Marking work order as completed: ${selectedOrder?.orderNo}`)
                    // Handle mark as completed logic here
                    setSelectedOrder(null)
                  }}
                  className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
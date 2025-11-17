"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileText } from "lucide-react"

type ReportType = "defect" | "condemnation" | "vir" | "estimation" | ""

export function SRDReportsStage() {
  const [reportType, setReportType] = useState<ReportType>("")

  const handleSendForApproval = () => {
    alert("Report sent for approval!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FileText className="h-6 w-6" />
            SRD - Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="report-type">Select Report Type</Label>
            <Select value={reportType} onValueChange={(value) => setReportType(value as ReportType)}>
              <SelectTrigger id="report-type" className="w-full md:w-[400px]">
                <SelectValue placeholder="Select a report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="defect">Defect Report</SelectItem>
                <SelectItem value="condemnation">Condemnation Report</SelectItem>
                <SelectItem value="vir">VIR (Viewer's Inspection Report)</SelectItem>
                <SelectItem value="estimation">Estimation Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {reportType === "defect" && (
        <Card>
          <CardHeader>
            <CardTitle>Defect Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="df-report-no">Report No.</Label>
                <Input id="df-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="df-date">Date Reported</Label>
                <Input id="df-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="df-reporter">Reported By</Label>
                <Input id="df-reporter" placeholder="Enter reporter name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="df-requisition-no">Requisition No.</Label>
                <Input id="df-requisition-no" placeholder="Enter requisition number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="df-part-no">Part No.</Label>
                <Input id="df-part-no" placeholder="Enter part number" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="df-nomenclature">Nomenclature</Label>
                <Input id="df-nomenclature" placeholder="Enter nomenclature" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="df-severity">Severity Level</Label>
                <Select>
                  <SelectTrigger id="df-severity">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="major">Major</SelectItem>
                    <SelectItem value="minor">Minor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="df-description">Defect Description</Label>
              <Textarea 
                id="df-description" 
                placeholder="Describe the defect in detail"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="df-location">Location/Stage</Label>
                <Input id="df-location" placeholder="Enter location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="df-quantity">Quantity Affected</Label>
                <Input id="df-quantity" type="number" placeholder="Enter quantity" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="df-root-cause">Root Cause Analysis</Label>
              <Textarea 
                id="df-root-cause" 
                placeholder="Enter root cause analysis"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="df-corrective-action">Corrective Action Proposed</Label>
              <Textarea 
                id="df-corrective-action" 
                placeholder="Enter proposed corrective actions"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="df-remarks">Remarks</Label>
              <Textarea 
                id="df-remarks" 
                placeholder="Additional remarks"
                rows={2}
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSendForApproval} size="lg">
                Send for Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {reportType === "condemnation" && (
        <Card>
          <CardHeader>
            <CardTitle>Condemnation Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cn-report-no">Report No.</Label>
                <Input id="cn-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cn-date">Date</Label>
                <Input id="cn-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cn-inspector">Inspector Name</Label>
                <Input id="cn-inspector" placeholder="Enter inspector name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cn-part-no">Part No.</Label>
                <Input id="cn-part-no" placeholder="Enter part number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cn-nomenclature">Nomenclature</Label>
                <Input id="cn-nomenclature" placeholder="Enter nomenclature" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cn-ohs-no">OHS No.</Label>
                <Input id="cn-ohs-no" placeholder="Enter OHS number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cn-quantity">Quantity</Label>
                <Input id="cn-quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cn-batch-no">Batch No.</Label>
                <Input id="cn-batch-no" placeholder="Enter batch number" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cn-reason">Reason for Condemnation</Label>
              <Textarea 
                id="cn-reason" 
                placeholder="Enter detailed reason for condemnation"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cn-inspection-date">Inspection Date</Label>
                <Input id="cn-inspection-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cn-recommendation">Recommendation</Label>
                <Select>
                  <SelectTrigger id="cn-recommendation">
                    <SelectValue placeholder="Select recommendation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scrap">Scrap</SelectItem>
                    <SelectItem value="rework">Rework</SelectItem>
                    <SelectItem value="return_vendor">Return to Vendor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cn-disposal-method">Proposed Disposal Method</Label>
              <Textarea 
                id="cn-disposal-method" 
                placeholder="Enter proposed disposal method"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cn-remarks">Remarks</Label>
              <Textarea 
                id="cn-remarks" 
                placeholder="Additional remarks"
                rows={2}
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSendForApproval} size="lg">
                Send for Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {reportType === "vir" && (
        <Card>
          <CardHeader>
            <CardTitle>VIR (Viewer's Inspection Report)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vir-report-no">Report No.</Label>
                <Input id="vir-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vir-date">Inspection Date</Label>
                <Input id="vir-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vir-viewer">Viewer Name</Label>
                <Input id="vir-viewer" placeholder="Enter viewer name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vir-requisition-no">Requisition No.</Label>
                <Input id="vir-requisition-no" placeholder="Enter requisition number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vir-stage">Stage</Label>
                <Select>
                  <SelectTrigger id="vir-stage">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="store">Store</SelectItem>
                    <SelectItem value="stock">Stock Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vir-inspection-scope">Inspection Scope</Label>
              <Textarea 
                id="vir-inspection-scope" 
                placeholder="Enter scope of inspection"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vir-findings">Inspection Findings</Label>
              <Textarea 
                id="vir-findings" 
                placeholder="Enter detailed inspection findings"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vir-status">Inspection Status</Label>
                <Select>
                  <SelectTrigger id="vir-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="conditional">Conditional Approval</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vir-next-action">Next Action Required</Label>
                <Input id="vir-next-action" placeholder="Enter next action" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vir-observations">Additional Observations</Label>
              <Textarea 
                id="vir-observations" 
                placeholder="Enter any additional observations"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vir-recommendations">Recommendations</Label>
              <Textarea 
                id="vir-recommendations" 
                placeholder="Enter recommendations"
                rows={3}
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSendForApproval} size="lg">
                Send for Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {reportType === "estimation" && (
        <Card>
          <CardHeader>
            <CardTitle>Estimation Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="est-report-no">Report No.</Label>
                <Input id="est-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="est-date">Estimation Date</Label>
                <Input id="est-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="est-estimator">Estimator Name</Label>
                <Input id="est-estimator" placeholder="Enter estimator name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="est-project">Project/Work Order</Label>
                <Input id="est-project" placeholder="Enter project name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="est-requisition-no">Requisition No.</Label>
                <Input id="est-requisition-no" placeholder="Enter requisition number" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="est-work-description">Work Description</Label>
              <Textarea 
                id="est-work-description" 
                placeholder="Describe the work to be estimated"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="est-material-cost">Material Cost Estimation</Label>
              <Textarea 
                id="est-material-cost" 
                placeholder="List materials with estimated costs"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="est-labor-cost">Labor Cost Estimation</Label>
              <Textarea 
                id="est-labor-cost" 
                placeholder="Enter labor hours and cost breakdown"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="est-total-material">Total Material Cost</Label>
                <Input id="est-total-material" type="number" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="est-total-labor">Total Labor Cost</Label>
                <Input id="est-total-labor" type="number" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="est-grand-total">Grand Total</Label>
                <Input id="est-grand-total" type="number" placeholder="Enter total" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="est-duration">Estimated Duration</Label>
                <Input id="est-duration" placeholder="e.g., 5 days" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="est-validity">Estimate Validity</Label>
                <Input id="est-validity" placeholder="e.g., 30 days" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="est-assumptions">Assumptions & Constraints</Label>
              <Textarea 
                id="est-assumptions" 
                placeholder="Enter any assumptions or constraints"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="est-remarks">Remarks</Label>
              <Textarea 
                id="est-remarks" 
                placeholder="Additional remarks"
                rows={2}
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSendForApproval} size="lg">
                Send for Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
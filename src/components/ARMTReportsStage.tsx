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

type ReportType = "defect" | "condemnation" | "vir" | "rejection" | ""

export function ARMTReportsStage() {
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
            ARMT - Reports
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
                <SelectItem value="rejection">Rejection Slip</SelectItem>
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
                <Label htmlFor="df-weapon-system">Weapon System</Label>
                <Input id="df-weapon-system" placeholder="Enter weapon system" />
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
                <Label htmlFor="vir-weapon-system">Weapon System</Label>
                <Input id="vir-weapon-system" placeholder="Enter weapon system" />
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

      {reportType === "rejection" && (
        <Card>
          <CardHeader>
            <CardTitle>Rejection Slip</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rj-slip-no">Rejection Slip No.</Label>
                <Input id="rj-slip-no" placeholder="Enter slip number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-date">Date</Label>
                <Input id="rj-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-inspector">Rejected By</Label>
                <Input id="rj-inspector" placeholder="Enter inspector name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rj-weapon-system">Weapon System</Label>
                <Input id="rj-weapon-system" placeholder="Enter weapon system" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-part-no">Part No.</Label>
                <Input id="rj-part-no" placeholder="Enter part number" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rj-nomenclature">Nomenclature</Label>
                <Input id="rj-nomenclature" placeholder="Enter nomenclature" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-supplier">Supplier/Vendor</Label>
                <Input id="rj-supplier" placeholder="Enter supplier name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rj-quantity">Quantity Rejected</Label>
                <Input id="rj-quantity" type="number" placeholder="Enter quantity" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-batch-no">Batch/Lot No.</Label>
                <Input id="rj-batch-no" placeholder="Enter batch number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-ohs-no">OHS No.</Label>
                <Input id="rj-ohs-no" placeholder="Enter OHS number" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rj-reason">Reason for Rejection</Label>
              <Textarea 
                id="rj-reason" 
                placeholder="Enter detailed reason for rejection"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rj-stage">Stage of Rejection</Label>
                <Select>
                  <SelectTrigger id="rj-stage">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="incoming">Incoming Inspection</SelectItem>
                    <SelectItem value="in-process">In-Process</SelectItem>
                    <SelectItem value="final">Final Inspection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rj-disposition">Disposition</Label>
                <Select>
                  <SelectTrigger id="rj-disposition">
                    <SelectValue placeholder="Select disposition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="return_supplier">Return to Supplier</SelectItem>
                    <SelectItem value="scrap">Scrap</SelectItem>
                    <SelectItem value="rework">Rework</SelectItem>
                    <SelectItem value="use_as_is">Use As-Is (Concession)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rj-remarks">Remarks</Label>
              <Textarea 
                id="rj-remarks" 
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
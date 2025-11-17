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

type ReportType = "quality_inspection" | "maintenance" | "deficiency" | "completion" | ""

export function ETDReportsStage() {
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
            ETD - Reports
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
                <SelectItem value="quality_inspection">Quality Inspection Report</SelectItem>
                <SelectItem value="maintenance">Maintenance Report</SelectItem>
                <SelectItem value="deficiency">Deficiency Report</SelectItem>
                <SelectItem value="completion">Completion Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {reportType === "quality_inspection" && (
        <Card>
          <CardHeader>
            <CardTitle>Quality Inspection Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qi-report-no">Report No.</Label>
                <Input id="qi-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qi-date">Date</Label>
                <Input id="qi-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qi-inspector">Inspector Name</Label>
                <Input id="qi-inspector" placeholder="Enter inspector name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qi-hull-no">Hull No.</Label>
                <Input id="qi-hull-no" placeholder="Enter hull number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qi-stage">Stage</Label>
                <Select>
                  <SelectTrigger id="qi-stage">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cmt_hull">CMT HULL STAGE</SelectItem>
                    <SelectItem value="cmt_starting">CMT STARTING STAGE</SelectItem>
                    <SelectItem value="cmt_battery">CMT BATTERY KIT</SelectItem>
                    <SelectItem value="ifdss_kit">IFDSS KIT BMP-II/IIK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qi-findings">Inspection Findings</Label>
              <Textarea 
                id="qi-findings" 
                placeholder="Enter inspection findings and observations"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qi-status">Status</Label>
                <Select>
                  <SelectTrigger id="qi-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passed">Passed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                    <SelectItem value="conditional">Conditional Pass</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="qi-next-action">Next Action Required</Label>
                <Input id="qi-next-action" placeholder="Enter next action" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qi-remarks">Remarks</Label>
              <Textarea 
                id="qi-remarks" 
                placeholder="Additional remarks"
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

      {reportType === "maintenance" && (
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mt-report-no">Report No.</Label>
                <Input id="mt-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mt-date">Date</Label>
                <Input id="mt-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mt-technician">Technician Name</Label>
                <Input id="mt-technician" placeholder="Enter technician name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mt-equipment">Equipment/Component</Label>
                <Input id="mt-equipment" placeholder="Enter equipment name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mt-type">Maintenance Type</Label>
                <Select>
                  <SelectTrigger id="mt-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preventive">Preventive</SelectItem>
                    <SelectItem value="corrective">Corrective</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mt-work-performed">Work Performed</Label>
              <Textarea 
                id="mt-work-performed" 
                placeholder="Describe the maintenance work performed"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mt-parts-used">Parts/Materials Used</Label>
                <Input id="mt-parts-used" placeholder="List parts used" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mt-hours">Hours Spent</Label>
                <Input id="mt-hours" type="number" placeholder="Enter hours" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mt-recommendations">Recommendations</Label>
              <Textarea 
                id="mt-recommendations" 
                placeholder="Enter recommendations for future maintenance"
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

      {reportType === "deficiency" && (
        <Card>
          <CardHeader>
            <CardTitle>Deficiency Report</CardTitle>
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
                <Label htmlFor="df-location">Location/Stage</Label>
                <Input id="df-location" placeholder="Enter location" />
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
              <Label htmlFor="df-description">Deficiency Description</Label>
              <Textarea 
                id="df-description" 
                placeholder="Describe the deficiency in detail"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="df-impact">Impact on Operations</Label>
                <Input id="df-impact" placeholder="Describe impact" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="df-timeline">Expected Resolution Time</Label>
                <Input id="df-timeline" placeholder="e.g., 2 days" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="df-action">Corrective Action Proposed</Label>
              <Textarea 
                id="df-action" 
                placeholder="Enter proposed corrective actions"
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

      {reportType === "completion" && (
        <Card>
          <CardHeader>
            <CardTitle>Completion Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cp-report-no">Report No.</Label>
                <Input id="cp-report-no" placeholder="Enter report number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cp-date">Completion Date</Label>
                <Input id="cp-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cp-supervisor">Supervisor Name</Label>
                <Input id="cp-supervisor" placeholder="Enter supervisor name" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cp-project">Project/Work Order</Label>
                <Input id="cp-project" placeholder="Enter project name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cp-hull-no">Hull No.</Label>
                <Input id="cp-hull-no" placeholder="Enter hull number" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cp-work-summary">Work Summary</Label>
              <Textarea 
                id="cp-work-summary" 
                placeholder="Summarize the work completed"
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cp-start-date">Start Date</Label>
                <Input id="cp-start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cp-end-date">End Date</Label>
                <Input id="cp-end-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cp-total-hours">Total Hours</Label>
                <Input id="cp-total-hours" type="number" placeholder="Enter hours" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cp-quality-check">Quality Check Results</Label>
              <Textarea 
                id="cp-quality-check" 
                placeholder="Enter quality check results"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cp-final-remarks">Final Remarks</Label>
              <Textarea 
                id="cp-final-remarks" 
                placeholder="Any final remarks or observations"
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
    </div>
  )
}
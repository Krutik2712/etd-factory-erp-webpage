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

type ReportType = "defect" | "condemnation" | "vir" | "rejection" | "interoffice" | ""

export const SRDReportsStage = () => {
  const [reportType, setReportType] = useState<ReportType>("")
  const [selectedTank, setSelectedTank] = useState("")

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
                <SelectItem value="rejection">Rejection Slip</SelectItem>
                <SelectItem value="interoffice">Inter Office Note</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {reportType === "interoffice" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              <div className="space-y-1">
                <div className="text-xl font-bold">INTER OFFICE NOTE</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ion-tank">Select Tank</Label>
              <Select value={selectedTank} onValueChange={setSelectedTank}>
                <SelectTrigger id="ion-tank" className="w-full md:w-[400px]">
                  <SelectValue placeholder="Select a tank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="icv-bmp-ii-iik">ICV-BMP-II/IIK</SelectItem>
                  <SelectItem value="tisk-component">TISK component of ICV BMP-II</SelectItem>
                  <SelectItem value="cmt-tank">CMT TANK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedTank && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4">
                  <div className="space-y-2">
                    <Label htmlFor="ion-note-no">Note No.</Label>
                    <Input id="ion-note-no" placeholder="Enter note number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ion-date">Date</Label>
                    <Input id="ion-date" type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ion-from">From</Label>
                    <Input id="ion-from" placeholder="Enter department/person" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ion-to">To</Label>
                    <Input id="ion-to" placeholder="Enter department/person" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ion-subject">Subject</Label>
                  <Input id="ion-subject" placeholder="Enter subject" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ion-reference">Reference</Label>
                  <Input id="ion-reference" placeholder="Enter reference details" />
                </div>

                <div className="space-y-2 p-4 bg-muted rounded-lg">
                  <Label className="font-semibold">Tank Details</Label>
                  <div className="text-sm font-medium">{selectedTank === "icv-bmp-ii-iik" ? "ICV-BMP-II/IIK" : selectedTank === "tisk-component" ? "TISK component of ICV BMP-II" : "CMT TANK"}</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ion-content">Content</Label>
                  <Textarea
                    id="ion-content"
                    placeholder="Enter the main content of the inter office note"
                    rows={10}
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ion-requisition-no">Requisition No. / Equipment No.</Label>
                    <Input id="ion-requisition-no" placeholder="Enter requisition or equipment number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ion-part-details">Part Details (if applicable)</Label>
                    <Textarea
                      id="ion-part-details"
                      placeholder="Enter part number, nomenclature, quantity, etc."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ion-remarks">Remarks</Label>
                    <Textarea
                      id="ion-remarks"
                      placeholder="Enter any additional remarks"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t">
                  <div className="space-y-2">
                    <Label>Prepared By</Label>
                    <Input placeholder="Enter name and designation" />
                  </div>
                  <div className="space-y-2">
                    <Label>Approved By</Label>
                    <Input placeholder="Enter name and designation" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSendForApproval} size="lg">
                    Send for Approval
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {reportType === "defect" && (
        <Card>
          <CardHeader>
            <CardTitle>I.A.F. (EME) EQ-I (3rd Revision) - DEFECT REPORT FORM ARMY TECHNICAL EQUIPMENT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
            <CardTitle className="text-center">
              <div className="text-xl font-bold">CONDEMNATION REPORT</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
            <CardTitle className="text-center">
              <div className="text-xl font-bold">REJECT SLIP</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
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
            <CardTitle>I.A.F. (EME) EQ-I (3rd Revision) - DEFECT REPORT FORM ARMY TECHNICAL EQUIPMENT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-semibold">From: User unit</Label>
                  <Input placeholder="512 Army Base Wksp, Pin: 908 799, c/o 56 APO" />
                </div>
                <div className="space-y-2">
                  <Label className="font-semibold">To:</Label>
                  <Input placeholder="The Controller CQA (ICV)" />
                  <Input placeholder="Address, Medak, 502-205" className="mt-2" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">Unit Holding Defective Eqpt:</Label>
                <Input placeholder="512 Army Base Wksp, Kirkee, Pune- 411003" />
              </div>
            </div>

            {/* Recognition Details Table */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Recognition details:-</h3>
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">1. Make</div>
                  <div className="p-3"><Input placeholder="ICV BMP-II" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">2. Type & Mark</div>
                  <div className="p-3"><Input placeholder="ICV BMP-II" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">3. BA No/Ordnance No/Registered No</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">4. Chassis No/Carriage No</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">5. Engine No/Ordnance No</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">6. Date of Issue to Unit</div>
                  <div className="p-3"><Input type="date" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">7. Mileage / Hrs Run / EPC fired</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">8. Date of last inspection</div>
                  <div className="p-3"><Input type="date" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">9. Country of origin/ Manufacture's Name</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">10. Date of Manufacture</div>
                  <div className="p-3"><Input placeholder="Not known" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">11. The warranty for the vehicles/equipment expires on</div>
                  <div className="p-3"><Input placeholder="Not known" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">12. Details of SO & A/T</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">13. No of rounds /charges fired with lot No /Mileage /Hrs run on the day of occurrence of defect</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">14. Terrain</div>
                  <div className="p-3"><Input placeholder="Indian" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">15. Climatic conditions</div>
                  <div className="p-3"><Input placeholder="Indian" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 bg-muted font-medium border-r">16. Details of service users conditions other than Terrain & Climatic if any</div>
                  <div className="p-3"><Input placeholder="--" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-1 border-b">
                  <div className="p-3 bg-muted font-medium">17. Part Details</div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 pl-8 bg-muted/50 border-r">(a) Part No</div>
                  <div className="p-3"><Input placeholder="LV2/ICVS 5330397586 (CQA (ICV)/SET/026)" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 pl-8 bg-muted/50 border-r">(b) Nomenclature</div>
                  <div className="p-3"><Input placeholder="Seal Plain" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 pl-8 bg-muted/50 border-r">(c) OHS No</div>
                  <div className="p-3"><Input placeholder="1389" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 pl-8 bg-muted/50 border-r">(e) No. Off</div>
                  <div className="p-3"><Input placeholder="01 No" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2 border-b">
                  <div className="p-3 pl-8 bg-muted/50 border-r">(f) Defective stocks</div>
                  <div className="p-3"><Input placeholder="360 Nos" className="border-0" /></div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3 bg-muted font-medium border-r">18. Details of Defect</div>
                  <div className="p-3">
                    <Textarea 
                      placeholder="Oil leakage from seal during testing at higher assy on test bed. Similar defect noticed repeatedly. On further examination Material does not confirms against reqd specification NBR+CR, Obs NBR which may cause leakage of oil seal during testing itself on test bed. (Ref Lab report No MT-R/119/2023 dt 21 Aug 2023)"
                      rows={6}
                      className="border-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Details Section */}
            <div className="space-y-4 border-t pt-6">
              <div className="space-y-2">
                <Label className="font-semibold">NOTE: When items of stores/spares nature are reported in addition to details of make/equipment for which they are meant for, indicate :-</Label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>(a) Name of depot from which received</Label>
                  <Input placeholder="CAFVD Kirkee" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold">(b) Issue and receipt details :-</Label>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted">
                        <th className="p-2 text-left border-r">CAFVD IV No</th>
                        <th className="p-2 text-left border-r">Date</th>
                        <th className="p-2 text-left border-r">OSS RV No</th>
                        <th className="p-2 text-left border-r">Date</th>
                        <th className="p-2 text-left">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 border-r"><Input placeholder="81471777" className="border-0" /></td>
                        <td className="p-2 border-r"><Input type="date" placeholder="06 Jun 2022" className="border-0" /></td>
                        <td className="p-2 border-r"><Input placeholder="221001370" className="border-0" /></td>
                        <td className="p-2 border-r"><Input type="date" placeholder="08 Aug 2022" className="border-0" /></td>
                        <td className="p-2"><Input placeholder="201" className="border-0" /></td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 border-r"><Input placeholder="81484308" className="border-0" /></td>
                        <td className="p-2 border-r"><Input type="date" placeholder="17 Jun 2022" className="border-0" /></td>
                        <td className="p-2 border-r"><Input placeholder="221001358" className="border-0" /></td>
                        <td className="p-2 border-r"><Input type="date" placeholder="08 Aug 2022" className="border-0" /></td>
                        <td className="p-2"><Input placeholder="25" className="border-0" /></td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2 border-r"><Input className="border-0" /></td>
                        <td className="p-2 border-r"><Input type="date" className="border-0" /></td>
                        <td className="p-2 border-r"><Input className="border-0" /></td>
                        <td className="p-2 border-r"><Input type="date" className="border-0" /></td>
                        <td className="p-2"><Input className="border-0" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold">(c) Total Defective Qty in stocks</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>(i) Qty held in OSS (not issued to Prodn Gp)</Label>
                    <Input placeholder="257" />
                  </div>
                  <div className="space-y-2">
                    <Label>(ii) Defective Qty in OSS</Label>
                    <Input placeholder="--" />
                  </div>
                  <div className="space-y-2">
                    <Label>(iii) Defective Qty in Shop floor</Label>
                    <Input placeholder="360 Nos" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold">(d) Manufacturer's details, such as marks, serial number and so on. The columns will be suitably utilized by amending, if necessary :</Label>
                <Input placeholder="M/s JK Rubber, Mfg date- 12/2021, 01/2021, 01/2022" />
              </div>
            </div>

            {/* Remarks Section */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="font-semibold text-lg">REMARKS OF DEPENDING FIELD REPAIR WORKSHOP</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>1. The incidence of defect in other units</Label>
                  <Input placeholder="--" />
                </div>
                <div className="space-y-2">
                  <Label>2. Details of other equipment or vehicles where the affected items is known to be fitted</Label>
                  <Input placeholder="--" />
                </div>
                <div className="space-y-2">
                  <Label>3. Probable cause of defect</Label>
                  <Input placeholder="Manufacturing defect" />
                </div>
                <div className="space-y-2">
                  <Label>4. Suggested remedial measures, if any</Label>
                  <Input placeholder="Rectification/Replacement" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <Label>Remark of Formation EME</Label>
                  <Input placeholder="*Recommended for Investigation*" />
                </div>
                <div className="space-y-2">
                  <Label>Signature & Details</Label>
                  <Textarea rows={3} placeholder="(D Sreedhar)&#10;Exec Engr&#10;DGM (QA)&#10;512 Army Base Wksp, Kirkee" />
                </div>
              </div>
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
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
"@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, FileText, Plus, Undo2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const sampleData = [
{
  srNo: 1,
  date: "2024-01-15",
  nomenclature: "Armament Mount Assembly",
  quantity: 25,
  threshold: 30,
  ohsNo: "AM-001",
  ohOssLp: "OH"
},
{
  srNo: 2,
  date: "2024-01-16",
  nomenclature: "Gun Barrel Component",
  quantity: 8,
  threshold: 15,
  ohOssLp: "OSS",
  ohsNo: "GB-002"
},
{
  srNo: 3,
  date: "2024-01-17",
  nomenclature: "Trigger Mechanism",
  quantity: 45,
  threshold: 20,
  ohsNo: "TM-003",
  ohOssLp: "LP"
},
{
  srNo: 4,
  date: "2024-01-18",
  nomenclature: "Ammunition Feed System",
  quantity: 12,
  threshold: 25,
  ohsNo: "AFS-004",
  ohOssLp: "OH"
},
{
  srNo: 5,
  date: "2024-01-19",
  nomenclature: "Recoil Spring Assembly",
  quantity: 5,
  threshold: 10,
  ohsNo: "RSA-005",
  ohOssLp: "OSS"
},
{
  srNo: 6,
  date: "2024-01-20",
  nomenclature: "Sighting System",
  quantity: 18,
  threshold: 15,
  ohsNo: "SS-006",
  ohOssLp: "LP"
}];

interface VoucherRow {
  id: string;
  partNo: string;
  sectionNomenclature: string;
  required: string;
  issue: string;
  toFollow: string;
  ohsNo: string;
}

interface ReturnVoucherRow {
  id: string;
  ohsNo: string;
  section: string;
  partNo: string;
  nomenclature: string;
  quantity: string;
  remark: string;
}

export function ARMTStockStage() {
  const [referenceId, setReferenceId] = useState("ARMT-2024-001");
  const [dateOfIssue, setDateOfIssue] = useState(new Date().toISOString().split('T')[0]);
  const [open, setOpen] = useState(false);
  const [returnVoucherOpen, setReturnVoucherOpen] = useState(false);
  
  // Voucher form state
  const [demandNo, setDemandNo] = useState("");
  const [voucherDate, setVoucherDate] = useState(new Date().toISOString().split('T')[0]);
  const [fromOss, setFromOss] = useState("");
  const [ossControlNo, setOssControlNo] = useState("");
  const [ahqSrNo, setAhqSrNo] = useState("");
  const [ctNo, setCtNo] = useState("");
  const [authority, setAuthority] = useState("");
  const [voucherRows, setVoucherRows] = useState<VoucherRow[]>([]);

  // Return Voucher form state
  const [rvNo, setRvNo] = useState("");
  const [rvSection, setRvSection] = useState("");
  const [rvStation, setRvStation] = useState("");
  const [rvDate, setRvDate] = useState(new Date().toISOString().split('T')[0]);
  const [rvAuthority, setRvAuthority] = useState("");
  const [returnVoucherRows, setReturnVoucherRows] = useState<ReturnVoucherRow[]>([]);

  const handleAddRow = () => {
    const newRow: VoucherRow = {
      id: Date.now().toString(),
      partNo: "",
      sectionNomenclature: "",
      required: "",
      issue: "",
      toFollow: "",
      ohsNo: ""
    };
    setVoucherRows([...voucherRows, newRow]);
  };

  const handleRowChange = (id: string, field: keyof VoucherRow, value: string) => {
    setVoucherRows(voucherRows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  const handleAddReturnRow = () => {
    const newRow: ReturnVoucherRow = {
      id: Date.now().toString(),
      ohsNo: "",
      section: "",
      partNo: "",
      nomenclature: "",
      quantity: "",
      remark: ""
    };
    setReturnVoucherRows([...returnVoucherRows, newRow]);
  };

  const handleReturnRowChange = (id: string, field: keyof ReturnVoucherRow, value: string) => {
    setReturnVoucherRows(returnVoucherRows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  const handleSubmitVoucher = () => {
    if (voucherRows.length === 0) {
      toast.error("Please add at least one row");
      return;
    }

    console.log("Submitting voucher for approval:", {
      demandNo,
      date: voucherDate,
      fromOss,
      ossControlNo,
      ahqSrNo,
      ctNo,
      authority,
      items: voucherRows
    });

    setDemandNo("");
    setFromOss("");
    setOssControlNo("");
    setAhqSrNo("");
    setCtNo("");
    setAuthority("");
    setVoucherRows([]);
    setOpen(false);
    toast.success("Voucher sent for approval!");
  };

  const handleSubmitReturnVoucher = () => {
    if (returnVoucherRows.length === 0) {
      toast.error("Please add at least one row");
      return;
    }

    console.log("Submitting return voucher for approval:", {
      rvNo,
      section: rvSection,
      station: rvStation,
      date: rvDate,
      authority: rvAuthority,
      items: returnVoucherRows
    });

    setRvNo("");
    setRvSection("");
    setRvStation("");
    setRvAuthority("");
    setReturnVoucherRows([]);
    setReturnVoucherOpen(false);
    toast.success("Return voucher sent for approval!");
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">ARMT - Stock Availability</CardTitle>
            <div className="flex gap-2">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <FileText className="h-4 w-4" />
                    Issue Voucher
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[90vw] max-h-[90vh] flex flex-col overflow-hidden">
                  <DialogHeader>
                    <DialogTitle>Issue Voucher to MCO</DialogTitle>
                    <DialogDescription>
                      Fill in the voucher details to request materials from Material Control Office
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 overflow-y-auto overflow-x-hidden pr-2 flex-1">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="demandNo">Demand No.</Label>
                        <Input
                          id="demandNo"
                          placeholder="Enter demand number"
                          value={demandNo}
                          onChange={(e) => setDemandNo(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="voucherDate">Date</Label>
                        <Input
                          id="voucherDate"
                          type="date"
                          value={voucherDate}
                          onChange={(e) => setVoucherDate(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fromOss">From OSS</Label>
                        <Input
                          id="fromOss"
                          placeholder="Enter OSS"
                          value={fromOss}
                          onChange={(e) => setFromOss(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ossControlNo">OSS Control No.</Label>
                        <Input
                          id="ossControlNo"
                          placeholder="Enter control number"
                          value={ossControlNo}
                          onChange={(e) => setOssControlNo(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ahqSrNo">AHQ Sr No.</Label>
                        <Input
                          id="ahqSrNo"
                          placeholder="Enter AHQ serial number"
                          value={ahqSrNo}
                          onChange={(e) => setAhqSrNo(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ctNo">CT No.</Label>
                        <Input
                          id="ctNo"
                          placeholder="Enter CT number"
                          value={ctNo}
                          onChange={(e) => setCtNo(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="authority">Authority</Label>
                      <Input
                        id="authority"
                        placeholder="Enter authority details"
                        value={authority}
                        onChange={(e) => setAuthority(e.target.value)}
                      />
                    </div>

                    <div className="border rounded-lg">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[15%]">Part No.</TableHead>
                            <TableHead className="w-[25%]">Section & Nomenclature</TableHead>
                            <TableHead className="w-[12%]">Required</TableHead>
                            <TableHead className="w-[12%]">Issue</TableHead>
                            <TableHead className="w-[12%]">To Follow</TableHead>
                            <TableHead className="w-[15%]">OHS No.</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {voucherRows.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                                No items added. Click "Add Row" to add items.
                              </TableCell>
                            </TableRow>
                          ) : (
                            voucherRows.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Part No."
                                    value={row.partNo}
                                    onChange={(e) => handleRowChange(row.id, 'partNo', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Section & Nomenclature"
                                    value={row.sectionNomenclature}
                                    onChange={(e) => handleRowChange(row.id, 'sectionNomenclature', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Required"
                                    type="number"
                                    value={row.required}
                                    onChange={(e) => handleRowChange(row.id, 'required', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Issue"
                                    type="number"
                                    value={row.issue}
                                    onChange={(e) => handleRowChange(row.id, 'issue', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="To Follow"
                                    type="number"
                                    value={row.toFollow}
                                    onChange={(e) => handleRowChange(row.id, 'toFollow', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="OHS No."
                                    value={row.ohsNo}
                                    onChange={(e) => handleRowChange(row.id, 'ohsNo', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>

                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleAddRow}
                      className="w-full gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Row
                    </Button>
                  </div>

                  <DialogFooter className="flex-shrink-0 mt-4 pt-4 border-t">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitVoucher}>
                      Send for Approval
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={returnVoucherOpen} onOpenChange={setReturnVoucherOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Undo2 className="h-4 w-4" />
                    Return Voucher
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[90vw] max-h-[90vh] flex flex-col overflow-hidden">
                  <DialogHeader>
                    <DialogTitle>Return Voucher</DialogTitle>
                    <DialogDescription>
                      Fill in the return voucher details for components being returned
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 overflow-y-auto overflow-x-hidden pr-2 flex-1">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rvNo">RV NO.</Label>
                        <Input
                          id="rvNo"
                          placeholder="Enter RV number"
                          value={rvNo}
                          onChange={(e) => setRvNo(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rvSection">SECTION</Label>
                        <Input
                          id="rvSection"
                          placeholder="Enter section"
                          value={rvSection}
                          onChange={(e) => setRvSection(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rvStation">STATION</Label>
                        <Input
                          id="rvStation"
                          placeholder="Enter station"
                          value={rvStation}
                          onChange={(e) => setRvStation(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rvDate">DATE</Label>
                        <Input
                          id="rvDate"
                          type="date"
                          value={rvDate}
                          onChange={(e) => setRvDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rvAuthority">AUTHORITY</Label>
                      <Input
                        id="rvAuthority"
                        placeholder="Enter authority details"
                        value={rvAuthority}
                        onChange={(e) => setRvAuthority(e.target.value)}
                      />
                    </div>

                    <div className="border rounded-lg">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[15%]">OHS NO.</TableHead>
                            <TableHead className="w-[15%]">SECTION</TableHead>
                            <TableHead className="w-[15%]">PART NO.</TableHead>
                            <TableHead className="w-[20%]">NOMENCLATURE</TableHead>
                            <TableHead className="w-[12%]">QUANTITY</TableHead>
                            <TableHead className="w-[23%]">REMARK</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {returnVoucherRows.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                                No items added. Click "Add Row" to add items.
                              </TableCell>
                            </TableRow>
                          ) : (
                            returnVoucherRows.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="OHS No."
                                    value={row.ohsNo}
                                    onChange={(e) => handleReturnRowChange(row.id, 'ohsNo', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Section"
                                    value={row.section}
                                    onChange={(e) => handleReturnRowChange(row.id, 'section', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Part No."
                                    value={row.partNo}
                                    onChange={(e) => handleReturnRowChange(row.id, 'partNo', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Nomenclature"
                                    value={row.nomenclature}
                                    onChange={(e) => handleReturnRowChange(row.id, 'nomenclature', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Quantity"
                                    type="number"
                                    value={row.quantity}
                                    onChange={(e) => handleReturnRowChange(row.id, 'quantity', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                                <TableCell className="p-2">
                                  <Input
                                    placeholder="Remark"
                                    value={row.remark}
                                    onChange={(e) => handleReturnRowChange(row.id, 'remark', e.target.value)}
                                    className="w-full"
                                  />
                                </TableCell>
                              </TableRow>
                            ))
                          )}
                        </TableBody>
                      </Table>
                    </div>

                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleAddReturnRow}
                      className="w-full gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Row
                    </Button>
                  </div>

                  <DialogFooter className="flex-shrink-0 mt-4 pt-4 border-t">
                    <Button variant="outline" onClick={() => setReturnVoucherOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitReturnVoucher}>
                      Send for Approval
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="referenceId">Reference ID</Label>
              <Input
                id="referenceId"
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value)}
                className="font-medium" />

            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfIssue">Date of Issue</Label>
              <Input
                id="dateOfIssue"
                type="date"
                value={dateOfIssue}
                onChange={(e) => setDateOfIssue(e.target.value)}
                className="font-medium" />

            </div>
          </div>
        </CardContent>
      </Card>

      {/* Low Stock Alert Banner */}
      {sampleData.some((item) => item.quantity < item.threshold) &&
      <Card className="border-destructive bg-destructive/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-semibold !whitespace-pre-line">Alert: Some components are below minimum. Please make a demand to MCO.

            </p>
            </div>
          </CardContent>
        </Card>
      }

      {/* Stock Availability Table */}
      <Card>
        <CardHeader>
          <CardTitle>Component Stock Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Sr No</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Nomenclature</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>OHS No</TableHead>
                <TableHead>OH/OSS/LP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((item) => {
                const isBelowThreshold = item.quantity < item.threshold;
                return (
                  <TableRow
                    key={item.srNo}
                    className={isBelowThreshold ? "bg-destructive/20" : ""}>

                    <TableCell className="font-medium">{item.srNo}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {isBelowThreshold &&
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        }
                        <span className={isBelowThreshold ? "text-destructive font-semibold" : ""}>
                          {item.nomenclature}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={isBelowThreshold ? "text-destructive font-bold text-lg" : "font-medium"}>
                          {item.quantity}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          (Minimum: {item.threshold})
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="!whitespace-pre-line">{item.ohsNo}</TableCell>
                    <TableCell>
                      <Badge variant={item.ohOssLp === "OH" ? "default" : "secondary"}>
                        {item.ohOssLp}
                      </Badge>
                    </TableCell>
                  </TableRow>);

              })}
            </TableBody>
          </Table>

          {/* MCO Demand Notice */}
          <div className="mt-6 p-4 border border-muted rounded-md bg-muted/50">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Note:</span> Components highlighted in red are below their minimum values. 
              Please initiate a demand request to <span className="font-semibold text-foreground">MCO (Material Control Office)</span> for restocking.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>);

}
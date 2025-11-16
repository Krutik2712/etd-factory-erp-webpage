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
import { useState } from "react";

const sampleData = [
{
  srNo: 1,
  ptNo: "PT-001",
  nomenclature: "Master control unit",
  quantityPerMachine: 1,
  ohsNo: "5180",
  eqptRegedNo: "AC-4001",
  category: "NEW/OH",
},
{
  srNo: 2,
  ptNo: "PT-002",
  nomenclature: "IR Detector",
  quantityPerMachine: 2,
  ohsNo: "",
  eqptRegedNo: "AC-4002",
  category: "",
},
{
  srNo: 3,
  ptNo: "PT-003",
  nomenclature: "Audio Visual Alarm",
  quantityPerMachine: 2,
  ohsNo: "",
  eqptRegedNo: "AC-4003",
  category: "",
},
{
  srNo: 4,
  ptNo: "PT-004",
  nomenclature: "Fire wire in two",
  quantityPerMachine: 1,
  ohsNo: "",
  eqptRegedNo: "AC-4004",
  category: "",
},
{
  srNo: 5,
  ptNo: "PT-005",
  nomenclature: "Cable Harness",
  quantityPerMachine: 1,
  ohsNo: "",
  eqptRegedNo: "AC-4005",
  category: "",
}];


export function IFDSSKitStage() {
  const [referenceId, setReferenceId] = useState("REF-ETD-2024-004");
  const [dateOfIssue, setDateOfIssue] = useState(new Date().toISOString().split('T')[0]);
  const [ptNo, setPtNo] = useState("");
  const [ifdssNo, setIfdssNo] = useState("");
  const [issuedPtNo, setIssuedPtNo] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [fittedVehPtNo, setFittedVehPtNo] = useState("");

  const handleSendForApproval = () => {
    // Handle send for approval logic
    console.log("Sending for approval...");
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">IFDSS KIT BMP-II/IIK</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="ptNo">PT NO</Label>
              <Input
                id="ptNo"
                value={ptNo}
                onChange={(e) => setPtNo(e.target.value)}
                className="font-medium" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ifdssNo">IFDSS NO.</Label>
              <Input
                id="ifdssNo"
                value={ifdssNo}
                onChange={(e) => setIfdssNo(e.target.value)}
                className="font-medium" />
            </div>
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

      {/* Table Section */}
      <Card>
        <CardHeader>
          <CardTitle>Work Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Sr No</TableHead>
                <TableHead className="w-[100px]">Pt No</TableHead>
                <TableHead>Nomenclature</TableHead>
                <TableHead>Quantity per machine</TableHead>
                <TableHead>OHS No</TableHead>
                <TableHead>EqptReged No</TableHead>
                <TableHead>OH/OSS/LP</TableHead>
                <TableHead>Supervisor</TableHead>
                <TableHead>QA Report</TableHead>
              </TableRow>
              <TableRow>
                <TableHead colSpan={7}></TableHead>
                <TableHead className="font-semibold text-center">ABC</TableHead>
                <TableHead className="font-semibold text-center">XYZ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((item) =>
              <TableRow key={item.srNo}>
                  <TableCell className="font-medium">{item.srNo}</TableCell>
                  <TableCell className="font-medium">{item.ptNo}</TableCell>
                  <TableCell className="!whitespace-pre-line">{item.nomenclature}</TableCell>
                  <TableCell>{item.quantityPerMachine}</TableCell>
                  <TableCell className="!whitespace-pre-line">{item.ohsNo}</TableCell>
                  <TableCell>{item.eqptRegedNo}</TableCell>
                  <TableCell>
                    <Badge variant={item.category === "OH" ? "default" : "secondary"} className="!whitespace-pre-line">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          
          {/* Sub-footer Section */}
          <div className="mt-6 space-y-4 border-t pt-6">
            <div className="text-sm font-medium text-muted-foreground tracking-wide">
              ISSUED PT NO{" "}
              <Input
                className="inline-flex w-32 h-7 mx-2 align-middle"
                value={issuedPtNo}
                onChange={(e) => setIssuedPtNo(e.target.value)} />
              ON{" "}
              <Input
                type="date"
                className="inline-flex w-40 h-7 mx-2 align-middle"
                value={issuedDate}
                onChange={(e) => setIssuedDate(e.target.value)} />
              FITTED VEH PT NO{" "}
              <Input
                className="inline-flex w-32 h-7 mx-2 align-middle"
                value={fittedVehPtNo}
                onChange={(e) => setFittedVehPtNo(e.target.value)} />
            </div>
            
            {/* Send for Approval Button */}
            <div className="flex justify-end">
              <Button onClick={handleSendForApproval} size="lg">
                Send for Approval
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>);
}
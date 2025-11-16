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
import { CheckCircle2 } from "lucide-react";

const sampleData = [
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
},
{
  srNo: 5,
  nomenclature: "KMS",
  quantityPerMachine: 12,
  ohsNo: "4983",
  assyContNo: "NK",
  category: "NEW/OH"
}];


export function CMTHullStage() {
  const [hullNo, setHullNo] = useState("HULL-2024-001");
  const [referenceId, setReferenceId] = useState("REF-ETD-2024-001");
  const [dateOfIssue, setDateOfIssue] = useState(new Date().toISOString().split('T')[0]);
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
          <CardTitle className="text-2xl">CMT HULL STAGE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="hullNo">HULL NO.</Label>
              <Input
                id="hullNo"
                value={hullNo}
                onChange={(e) => setHullNo(e.target.value)}
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
              {sampleData.map((item) =>
              <TableRow key={item.srNo}>
                  <TableCell className="font-medium">{item.srNo}</TableCell>
                  <TableCell className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{item.nomenclature}</TableCell>
                  <TableCell>{item.quantityPerMachine}</TableCell>
                  <TableCell className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{item.ohsNo}</TableCell>
                  <TableCell>{item.assyContNo}</TableCell>
                  <TableCell>
                    <Badge variant="default">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="border-r"></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="border-r"></TableCell>
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
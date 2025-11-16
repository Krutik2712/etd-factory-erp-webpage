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
  nomenclature: "Panel Board",
  quantityPerMachine: 1,
  ohsNo: "5252",
  assyContNo: "NK",
  category: "OH"
},
{
  srNo: 2,
  nomenclature: "Push button",
  quantityPerMachine: 2,
  ohsNo: "48998",
  assyContNo: "NK",
  category: "OSS"
},
{
  srNo: 3,
  nomenclature: "Ignition Switch",
  quantityPerMachine: 1,
  ohsNo: "4898",
  assyContNo: "NK",
  category: "LP"
},
{
  srNo: 4,
  nomenclature: "Wiring Harness",
  quantityPerMachine: 1,
  ohsNo: "999",
  assyContNo: "NK",
  category: "OH"
}];


export function CMTStartingStage() {
  const [referenceId, setReferenceId] = useState("REF-ETD-2024-002");
  const [dateOfIssue, setDateOfIssue] = useState(new Date().toISOString().split('T')[0]);
  const [ptNo, setPtNo] = useState("");
  const [startingNo, setStartingNo] = useState("");
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
          <CardTitle className="text-2xl">CMT STARTING STAGE</CardTitle>
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
              <Label htmlFor="startingNo">STARTING NO</Label>
              <Input
                id="startingNo"
                value={startingNo}
                onChange={(e) => setStartingNo(e.target.value)}
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
                <TableHead>AssyCont No</TableHead>
                <TableHead>OH/OSS/LP</TableHead>
                <TableHead>Supervisor</TableHead>
                <TableHead>QA Report</TableHead>
              </TableRow>
              <TableRow>
                <TableHead colSpan={6}></TableHead>
                <TableHead className="font-semibold text-center">ABC</TableHead>
                <TableHead className="font-semibold text-center">XYZ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((item) =>
              <TableRow key={item.srNo}>
                  <TableCell className="font-medium">{item.srNo}</TableCell>
                  <TableCell className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{item.nomenclature}</TableCell>
                  <TableCell>{item.quantityPerMachine}</TableCell>
                  <TableCell className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{item.ohsNo}</TableCell>
                  <TableCell className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{item.assyContNo}</TableCell>
                  <TableCell>
                    <Badge variant={item.category === "OH" ? "default" : "secondary"}>
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
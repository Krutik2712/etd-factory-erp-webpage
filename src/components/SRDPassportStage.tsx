"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";

interface SRDComponent {
  srNo?: number;
  gpNo?: number;
  nomenclature: string;
  qty: string;
  statusR: string;
  statusN: string;
  gangLeader: string;
  stageInspQA: string;
  remarks: string;
  isSubItem?: boolean;
}

const sampleComponents: SRDComponent[] = [
// Radiators and Oil Coolers
{ srNo: 1, gpNo: 3, nomenclature: "Radiators and Oil Coolers (03)", qty: "", statusR: "R", statusN: "N", gangLeader: "", stageInspQA: "NAME", remarks: "" },
{ nomenclature: "(a) Radiators", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },
{ nomenclature: "(b) Oil cooler", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },
{ nomenclature: "(c) Cooler Gear box", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },

// Fuel Systems
{ srNo: 2, gpNo: 5, nomenclature: "Fuel Systems (05)", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "(a) Tank (Diesel)", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "(b) Tank LH", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "(c) Tank RH", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },
{ nomenclature: "(d) Fuel filter", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },
{ nomenclature: "(e) Fuel Pipe line", qty: "38", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },

// Lubrication tank
{ srNo: 3, gpNo: 6, nomenclature: "Lubrication tank (06)", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "(a) Oil Tank", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "(b) Oil Dipstick (Neck)", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "(c) Oil NRV", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },
{ nomenclature: "(d) Oil Pipe line", qty: "15", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "", isSubItem: true },

// Cooling and preheating System
{ srNo: 4, gpNo: 8, nomenclature: "Cooling and preheating System", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "(a) Expansion tank", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "(b) P.V.R.V", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "(c) Pipe line", qty: "36", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// Seals
{ srNo: 5, gpNo: 18, nomenclature: "Seals", qty: "02", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "" },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// Water Bilge pumps
{ srNo: 6, gpNo: 38, nomenclature: "Water Bilge pumps", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "(a)Bilge pump pipe line", qty: "11", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "02", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// EVS & FVU
{ srNo: 7, gpNo: 59, nomenclature: "Seals", qty: "02", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "" },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// EVS & FVU actual
{ srNo: 8, gpNo: 71, nomenclature: "EVS & FVU", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "a) Crew heater", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "b) Ventilating pipe line", qty: "14", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "c) Heater", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// Compressed Air Equipment
{ srNo: 9, gpNo: 78, nomenclature: "Compressed Air Equipment", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "(a) Air pipe line", qty: "70", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "(b) Turret pipe line", qty: "08", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "(c) Air Gauge Bracket", qty: "01", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// Smoke Generating Equipment
{ srNo: 10, gpNo: 84, nomenclature: "Smoke Generating Equipment", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "a) Smoke Generating", qty: "09", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "Pipe line", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true },

// Vision devices
{ srNo: 11, gpNo: 66, nomenclature: "Vision devices", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "", remarks: "" },
{ nomenclature: "(a) Tank (Periscope)", qty: "02", statusR: "", statusN: "", gangLeader: "", stageInspQA: "P-5184", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "CM", remarks: "", isSubItem: true },
{ nomenclature: "", qty: "", statusR: "", statusN: "", gangLeader: "", stageInspQA: "Iftekhar", remarks: "", isSubItem: true }];


export function SRDPassportStage() {
  const [components] = useState<SRDComponent[]>(sampleComponents);
  const [passportNo, setPassportNo] = useState("SRD/Passport/2025-26");
  const [date, setDate] = useState("");

  const handleSendForApproval = () => {
    // Logic for sending to approval
    console.log("Sending passport for approval...");
  };

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-border">
        <h2 className="text-2xl font-bold mb-6 text-center !whitespace-pre-line">PASSPORT : SRD </h2>
        
        {/* Components Table */}
        <div className="border rounded-lg overflow-x-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px] border-r text-center">Sr<br />No</TableHead>
                <TableHead className="w-[60px] border-r text-center">Gp<br />No</TableHead>
                <TableHead className="min-w-[250px] border-r">NOMENCLATURE</TableHead>
                <TableHead className="w-[80px] border-r text-center">QTY</TableHead>
                <TableHead colSpan={2} className="text-center border-r">STATUS(%)</TableHead>
                <TableHead className="w-[150px] text-center border-r">GANG LEADER</TableHead>
                <TableHead className="text-center border-r">STAGE INSP(QA)</TableHead>
                <TableHead className="min-w-[120px] text-center">Remarks</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="border-r" colSpan={4}></TableHead>
                <TableHead className="text-center border-r w-[70px]">R</TableHead>
                <TableHead className="text-center border-r w-[70px]">N</TableHead>
                <TableHead className="border-r"></TableHead>
                <TableHead className="text-center border-r w-[150px]">NAME</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="!w-[2.1%] !h-full">
              {components.map((component, index) =>
              <TableRow key={index} className={component.isSubItem ? "bg-muted/30" : ""}>
                  <TableCell className="border-r text-center font-medium">
                    {component.srNo || ""}
                  </TableCell>
                  <TableCell className="border-r text-center">
                    {component.gpNo || ""}
                  </TableCell>
                  <TableCell className={`border-r ${component.isSubItem ? "pl-8" : "font-medium"}`}>
                    {component.nomenclature}
                  </TableCell>
                  <TableCell className="border-r text-center">
                    {component.qty}
                  </TableCell>
                  <TableCell className="text-center border-r">
                    {component.statusR}
                  </TableCell>
                  <TableCell className="text-center border-r">
                    {component.statusN}
                  </TableCell>
                  <TableCell className="border-r text-center">
                    {component.gangLeader}
                  </TableCell>
                  <TableCell className="border-r text-center !whitespace-pre-line">
                    {component.stageInspQA}
                  </TableCell>
                  <TableCell>
                    {component.remarks}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer Section */}
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">Passport No:</span>
              <Input
                value={passportNo}
                onChange={(e) => setPassportNo(e.target.value)}
                className="flex-1" />

            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Date:</span>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex-1" />

            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSendForApproval} size="lg" className="px-8">
              Send for Approval
            </Button>
          </div>
        </div>
      </div>
    </div>);

}
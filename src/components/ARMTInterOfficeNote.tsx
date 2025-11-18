"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Plus, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InstrumentRow {
  id: string;
  srNo: string;
  ohsNo: string;
  partNo: string;
  instruments: string;
  qty: string;
  regdNo: string;
  remark: string;
}

export function ARMTInterOfficeNote() {
  const [selectedTank, setSelectedTank] = useState("");
  const [passportSerNo, setPassportSerNo] = useState("");
  const [date, setDate] = useState("");
  const [tankBANo, setTankBANo] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [cmtNo, setCmtNo] = useState("");
  const [sec, setSec] = useState("");
  
  const [rows, setRows] = useState<InstrumentRow[]>([
    { id: "1", srNo: "1", ohsNo: "", partNo: "", instruments: "", qty: "", regdNo: "", remark: "" },
  ]);

  const handleSendToApproval = () => {
    alert("Document sent to approval!");
  };

  const addRow = () => {
    const newRow: InstrumentRow = {
      id: Date.now().toString(),
      srNo: (rows.length + 1).toString(),
      ohsNo: "",
      partNo: "",
      instruments: "",
      qty: "",
      regdNo: "",
      remark: "",
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof InstrumentRow, value: string) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  // Render ICV-BMP-II format
  const renderICVBMPFormat = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="font-bold text-lg">ARMT SECTION</div>
        <div className="flex justify-between items-start">
          <div className="text-left">142/TS/BMP-II/ARMT</div>
          <div className="text-right space-y-1">
            <div className="flex gap-2 items-center justify-end">
              <Label>Passport Ser No :</Label>
              <Input
                value={passportSerNo}
                onChange={(e) => setPassportSerNo(e.target.value)}
                className="w-40"
              />
            </div>
            <div className="flex gap-2 items-center justify-end">
              <Label>Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-40"
              />
            </div>
          </div>
        </div>
        <div className="font-bold text-base underline">
          FORWARDING TS ARMT OF TANK ICV-BMP-II/IIK
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm">
          1. The following overhauled instruments of ICV-BMP-II Tank BA No{" "}
          <Input
            value={tankBANo}
            onChange={(e) => setTankBANo(e.target.value)}
            className="inline-block w-48 mx-1"
          />{" "}
          & overhauled P T No{" "}
          <Input
            value={vehicleNo}
            onChange={(e) => setVehicleNo(e.target.value)}
            className="inline-block w-48 mx-1"
          />{" "}
          (vehicle no.) Sec{" "}
          <Input
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            className="inline-block w-32 mx-1"
          />{" "}
          are fwd herewith.
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">SR</TableHead>
              <TableHead className="w-20">OHS No</TableHead>
              <TableHead className="w-32">PART NO</TableHead>
              <TableHead>INSTRUMENTS</TableHead>
              <TableHead className="w-16">QTY</TableHead>
              <TableHead className="w-24">REGD NO</TableHead>
              <TableHead className="w-32">REMARK</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell>
                  <Input
                    value={row.ohsNo}
                    onChange={(e) => updateRow(row.id, "ohsNo", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.partNo}
                    onChange={(e) => updateRow(row.id, "partNo", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.instruments}
                    onChange={(e) => updateRow(row.id, "instruments", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.qty}
                    onChange={(e) => updateRow(row.id, "qty", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.regdNo}
                    onChange={(e) => updateRow(row.id, "regdNo", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.remark}
                    onChange={(e) => updateRow(row.id, "remark", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteRow(row.id)}
                    disabled={rows.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Button onClick={addRow} variant="outline" size="sm">
        <Plus className="h-4 w-4 mr-2" />
        Add Row
      </Button>

      <div className="flex justify-end pt-4">
        <Button onClick={handleSendToApproval} size="lg">
          Send to Approval
        </Button>
      </div>
    </div>
  );

  // Render CMT Tank format
  const renderCMTFormat = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="font-bold text-lg">ARMT SECTION</div>
        <div className="flex justify-between items-start">
          <div className="text-left">142/TS/CMT/ARMT</div>
          <div className="text-right space-y-1">
            <div className="flex gap-2 items-center justify-end">
              <Label>Passport Ser No :</Label>
              <Input
                value={passportSerNo}
                onChange={(e) => setPassportSerNo(e.target.value)}
                className="w-40"
              />
            </div>
            <div className="flex gap-2 items-center justify-end">
              <Label>Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-40"
              />
            </div>
          </div>
        </div>
        <div className="font-bold text-base underline">
          FORWARDING TS ARMT OF TANK CMT
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm">
          1. The following overhauled instruments of CMT Tank BA No{" "}
          <Input
            value={tankBANo}
            onChange={(e) => setTankBANo(e.target.value)}
            className="inline-block w-48 mx-1"
          />{" "}
          overhauled CMT No.{" "}
          <Input
            value={cmtNo}
            onChange={(e) => setCmtNo(e.target.value)}
            className="inline-block w-48 mx-1"
          />{" "}
          Sec{" "}
          <Input
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            className="inline-block w-32 mx-1"
          />{" "}
          are fwd herewith.
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">SR NO</TableHead>
              <TableHead className="w-32">PART NO</TableHead>
              <TableHead>INSTRUMENTS</TableHead>
              <TableHead className="w-16">QTY</TableHead>
              <TableHead className="w-24">REGD NO</TableHead>
              <TableHead className="w-32">REMARK</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell>
                  <Input
                    value={row.partNo}
                    onChange={(e) => updateRow(row.id, "partNo", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.instruments}
                    onChange={(e) => updateRow(row.id, "instruments", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.qty}
                    onChange={(e) => updateRow(row.id, "qty", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.regdNo}
                    onChange={(e) => updateRow(row.id, "regdNo", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.remark}
                    onChange={(e) => updateRow(row.id, "remark", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteRow(row.id)}
                    disabled={rows.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Button onClick={addRow} variant="outline" size="sm">
        <Plus className="h-4 w-4 mr-2" />
        Add Row
      </Button>

      <div className="flex justify-end pt-4">
        <Button onClick={handleSendToApproval} size="lg">
          Send to Approval
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold flex items-center justify-center gap-2">
                <FileText className="h-6 w-6" />
                INTER OFFICE NOTE - ARMT
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tank Selection */}
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

          {selectedTank === "icv-bmp-ii-iik" && renderICVBMPFormat()}
          {selectedTank === "cmt-tank" && renderCMTFormat()}
          {selectedTank === "tisk-component" && (
            <div className="text-center text-muted-foreground py-8">
              Format for TISK component coming soon...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
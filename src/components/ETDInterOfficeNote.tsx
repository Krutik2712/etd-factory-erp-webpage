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
  ohsPartNo: string;
  date: string;
  instruments: string;
  qty: string;
  available: string;
  defi: string;
  regdNo: string;
  qaRemark: string;
}

export function ETDInterOfficeNote() {
  const [selectedTank, setSelectedTank] = useState("");
  const [passportSerNo, setPassportSerNo] = useState("");
  const [date, setDate] = useState("");
  const [baNo, setBaNo] = useState("");
  const [ptNo, setPtNo] = useState("");
  const [section, setSection] = useState("");

  const [rows, setRows] = useState<InstrumentRow[]>([
    {
      id: "1",
      srNo: "1",
      ohsPartNo: "",
      date: "",
      instruments: "",
      qty: "",
      available: "",
      defi: "",
      regdNo: "",
      qaRemark: "",
    },
  ]);

  const handleSendToApproval = () => {
    alert("Document sent to approval!");
  };

  const addRow = () => {
    const newRow: InstrumentRow = {
      id: Date.now().toString(),
      srNo: (rows.length + 1).toString(),
      ohsPartNo: "",
      date: "",
      instruments: "",
      qty: "",
      available: "",
      defi: "",
      regdNo: "",
      qaRemark: "",
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
        <div className="font-bold text-lg">ETD SECTION</div>
        <div className="text-left">142/TS/BMP-II/ETD</div>
      </div>

      {/* Headers Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-muted/50 rounded-lg border-2">
        <div className="space-y-2">
          <Label htmlFor="passport-ser-no" className="font-semibold">
            Passport Ser No.
          </Label>
          <Input
            id="passport-ser-no"
            value={passportSerNo}
            onChange={(e) => setPassportSerNo(e.target.value)}
            placeholder="Enter Passport Ser No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date" className="font-semibold">
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ba-no" className="font-semibold">
            BA No.
          </Label>
          <Input
            id="ba-no"
            value={baNo}
            onChange={(e) => setBaNo(e.target.value)}
            placeholder="Enter BA No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pt-no" className="font-semibold">
            P.T. No.
          </Label>
          <Input
            id="pt-no"
            value={ptNo}
            onChange={(e) => setPtNo(e.target.value)}
            placeholder="Enter P.T. No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="section" className="font-semibold">
            Section
          </Label>
          <Input
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Enter Section"
          />
        </div>
      </div>

      {/* Editable Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Sr No.</TableHead>
              <TableHead className="w-32">OHS PART NO.</TableHead>
              <TableHead className="w-28">DATE</TableHead>
              <TableHead>INSTRUMENTS</TableHead>
              <TableHead className="w-20">QTY</TableHead>
              <TableHead className="w-24">AVAILABLE</TableHead>
              <TableHead className="w-20">DEFI</TableHead>
              <TableHead className="w-28">REGD NO.</TableHead>
              <TableHead className="w-32">QA REMARK</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell>
                  <Input
                    value={row.ohsPartNo}
                    onChange={(e) => updateRow(row.id, "ohsPartNo", e.target.value)}
                    className="w-full"
                    placeholder="-"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="date"
                    value={row.date}
                    onChange={(e) => updateRow(row.id, "date", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.instruments}
                    onChange={(e) => updateRow(row.id, "instruments", e.target.value)}
                    className="w-full"
                    placeholder="-"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.qty}
                    onChange={(e) => updateRow(row.id, "qty", e.target.value)}
                    className="w-full"
                    placeholder="-"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.available}
                    onChange={(e) => updateRow(row.id, "available", e.target.value)}
                    className="w-full"
                    placeholder="-"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.defi}
                    onChange={(e) => updateRow(row.id, "defi", e.target.value)}
                    className="w-full"
                    placeholder="-"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.regdNo}
                    onChange={(e) => updateRow(row.id, "regdNo", e.target.value)}
                    className="w-full"
                    placeholder="-"
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={row.qaRemark}
                    onValueChange={(value) => updateRow(row.id, "qaRemark", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approve">Approve</SelectItem>
                      <SelectItem value="reject">Reject</SelectItem>
                    </SelectContent>
                  </Select>
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

      <div className="flex justify-end gap-3 pt-4">
        <Button onClick={handleSendToApproval} size="lg">
          Send to Approval
        </Button>
      </div>
    </div>
  );

  // Render CMT Tank format (keeping original for other tank type)
  const renderCMTFormat = () => (
    <div className="text-center text-muted-foreground py-8">
      Format for CMT TANK coming soon...
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
                INTER OFFICE NOTE - ETD
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
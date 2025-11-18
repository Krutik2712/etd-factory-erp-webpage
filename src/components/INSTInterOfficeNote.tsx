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
import { FileText, Plus, Trash2, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InstrumentRow {
  id: string;
  srNo: string;
  ohsNo: string;
  partNo: string;
  dateOfIssue: string;
  instruments: string;
  qty: string;
  regdNo: string;
  remark: string;
  date: string;
  defi: string;
  availableItems: string;
  qaRemark: string;
}

export function INSTInterOfficeNote() {
  const [selectedTank, setSelectedTank] = useState("");
  const [passportSerNo, setPassportSerNo] = useState("");
  const [date, setDate] = useState("");
  
  // Fields for ICV-BMP-II/IIK format
  const [baNo, setBaNo] = useState("");
  const [ptNo, setPtNo] = useState("");
  const [section, setSection] = useState("");

  // Fields for CMT TANK format
  const [cmtBaNo, setCmtBaNo] = useState("");
  const [cmtPtNo, setCmtPtNo] = useState("");
  const [cmtSection, setCmtSection] = useState("");

  const [rows, setRows] = useState<InstrumentRow[]>([
    { id: "1", srNo: "1", ohsNo: "", partNo: "", dateOfIssue: "", instruments: "", qty: "", regdNo: "", remark: "", date: "", defi: "", availableItems: "", qaRemark: "" }
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const handleSendToApproval = () => {
    alert("Document sent to approval!");
  };

  const addRow = () => {
    const newRow: InstrumentRow = {
      id: Date.now().toString(),
      srNo: (rows.length + 1).toString(),
      ohsNo: "",
      partNo: "",
      dateOfIssue: "",
      instruments: "",
      qty: "",
      regdNo: "",
      remark: "",
      date: "",
      defi: "",
      availableItems: "",
      qaRemark: ""
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof InstrumentRow, value: string) => {
    setRows(rows.map((row) => row.id === id ? { ...row, [field]: value } : row));
  };

  // Render ICV-BMP-II format
  const renderICVBMPFormat = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="font-bold text-lg">INST SECTION</div>
        <div className="flex justify-between items-start">
          <div className="text-left">142/TS/BMP-II/INST</div>
          <div className="text-right space-y-1">
            <div className="flex gap-2 items-center justify-end">
              <Label>Passport Ser No :</Label>
              <Input
                value={passportSerNo}
                onChange={(e) => setPassportSerNo(e.target.value)}
                className="w-40"
                placeholder="______"
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
      </div>

      <div className="space-y-2">
        <div className="text-sm">
          1. The following overhauled instruments of ICV-BMP-II are fwd herewith.
        </div>
      </div>

      {/* BA No., PT No., Section fields above table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="ba-no">BA No.</Label>
          <Input
            id="ba-no"
            value={baNo}
            onChange={(e) => setBaNo(e.target.value)}
            placeholder="Enter BA No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pt-no">PT No.</Label>
          <Input
            id="pt-no"
            value={ptNo}
            onChange={(e) => setPtNo(e.target.value)}
            placeholder="Enter PT No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="section">Section</Label>
          <Input
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Enter Section"
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">SR</TableHead>
              <TableHead className="w-24">OHS NO</TableHead>
              <TableHead className="w-32">PART NO</TableHead>
              <TableHead className="w-32">DATE OF ISSUE</TableHead>
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
                <TableCell className="text-sm">{row.ohsNo || "-"}</TableCell>
                <TableCell className="text-sm">{row.partNo || "-"}</TableCell>
                <TableCell className="text-sm">{row.dateOfIssue || "-"}</TableCell>
                <TableCell className="text-sm">{row.instruments || "-"}</TableCell>
                <TableCell className="text-sm">{row.qty || "-"}</TableCell>
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

      <div className="flex justify-end gap-3 pt-4">
        <Button onClick={() => setShowPreview(true)} variant="outline" size="lg">
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
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
        <div className="font-bold text-lg">INST SECTION</div>
        <div className="flex justify-between items-start">
          <div className="text-left">142/TS/CMT/INST</div>
          <div className="text-right space-y-1">
            <div className="flex gap-2 items-center justify-end">
              <Label>Passport Ser No :</Label>
              <Input
                value={passportSerNo}
                onChange={(e) => setPassportSerNo(e.target.value)}
                className="w-40"
                placeholder="______"
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
          FORWARDING TS INST OF TANK CMT
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm">
          1. The following overhauled instruments of CMT Tank are fwd herewith.
        </div>
      </div>

      {/* BA No., PT No., Section fields above table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="cmt-ba-no">BA No.</Label>
          <Input
            id="cmt-ba-no"
            value={cmtBaNo}
            onChange={(e) => setCmtBaNo(e.target.value)}
            placeholder="Enter BA No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cmt-pt-no">PT No.</Label>
          <Input
            id="cmt-pt-no"
            value={cmtPtNo}
            onChange={(e) => setCmtPtNo(e.target.value)}
            placeholder="Enter PT No."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cmt-section">Section</Label>
          <Input
            id="cmt-section"
            value={cmtSection}
            onChange={(e) => setCmtSection(e.target.value)}
            placeholder="Enter Section"
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">SR NO</TableHead>
              <TableHead className="w-24">PART NO</TableHead>
              <TableHead className="w-32">DATE</TableHead>
              <TableHead>INSTRUMENTS</TableHead>
              <TableHead className="w-24">DEFI</TableHead>
              <TableHead className="w-32">AVAILABLE ITEMS</TableHead>
              <TableHead className="w-16">QTY</TableHead>
              <TableHead className="w-24">REGD NO</TableHead>
              <TableHead className="w-32">QA REMARK</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell className="text-sm">{row.partNo || "-"}</TableCell>
                <TableCell className="text-sm">{row.date || "-"}</TableCell>
                <TableCell className="text-sm">{row.instruments || "-"}</TableCell>
                <TableCell className="text-sm">{row.defi || "-"}</TableCell>
                <TableCell className="text-sm">{row.availableItems || "-"}</TableCell>
                <TableCell className="text-sm">{row.qty || "-"}</TableCell>
                <TableCell>
                  <Input
                    value={row.regdNo}
                    onChange={(e) => updateRow(row.id, "regdNo", e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.qaRemark}
                    onChange={(e) => updateRow(row.id, "qaRemark", e.target.value)}
                    className="w-full"
                    placeholder="PASS/FAIL"
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

      <div className="flex justify-end gap-3 pt-4">
        <Button onClick={() => setShowPreview(true)} variant="outline" size="lg">
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button onClick={handleSendToApproval} size="lg">
          Send to Approval
        </Button>
      </div>
    </div>
  );

  // Preview Dialog Content for ICV-BMP-II/IIK
  const renderICVBMPPreview = () => (
    <div className="space-y-6 p-6 bg-white text-black">
      <div className="text-center space-y-2 border-b-2 border-black pb-4">
        <div className="font-bold text-xl">INST SECTION</div>
        <div className="flex justify-between items-start">
          <div className="text-left font-semibold">142/TS/BMP-II/INST</div>
          <div className="text-right space-y-1">
            <div>
              Passport Ser No: <span className="font-semibold">{passportSerNo || "______"}</span>
            </div>
            <div>
              Date: <span className="font-semibold">{date || "______"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm">
        1. The following overhauled instruments of ICV-BMP-II are fwd herewith.
      </div>

      <div className="space-y-2 bg-gray-50 p-3 rounded border border-gray-300">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold">BA No:</span> {baNo || "______"}
          </div>
          <div>
            <span className="font-semibold">PT No:</span> {ptNo || "______"}
          </div>
          <div>
            <span className="font-semibold">Section:</span> {section || "______"}
          </div>
        </div>
      </div>

      <div className="border-2 border-black">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-black bg-gray-100">
              <th className="border-r border-black p-2 text-center">SR</th>
              <th className="border-r border-black p-2 text-center">OHS NO</th>
              <th className="border-r border-black p-2 text-center">PART NO</th>
              <th className="border-r border-black p-2 text-center">DATE OF ISSUE</th>
              <th className="border-r border-black p-2 text-center">INSTRUMENTS</th>
              <th className="border-r border-black p-2 text-center">QTY</th>
              <th className="border-r border-black p-2 text-center">REGD NO</th>
              <th className="p-2 text-center">REMARK</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-black">
                <td className="border-r border-black p-2 text-center">{row.srNo}</td>
                <td className="border-r border-black p-2 text-center">{row.ohsNo || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.partNo || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.dateOfIssue || "-"}</td>
                <td className="border-r border-black p-2">{row.instruments || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.qty || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.regdNo || "-"}</td>
                <td className="p-2">{row.remark || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Preview Dialog Content for CMT Tank
  const renderCMTPreview = () => (
    <div className="space-y-6 p-6 bg-white text-black">
      <div className="text-center space-y-2 border-b-2 border-black pb-4">
        <div className="font-bold text-xl">INST SECTION</div>
        <div className="flex justify-between items-start">
          <div className="text-left font-semibold">142/TS/CMT/INST</div>
          <div className="text-right space-y-1">
            <div>
              Passport Ser No: <span className="font-semibold">{passportSerNo || "______"}</span>
            </div>
            <div>
              Date: <span className="font-semibold">{date || "______"}</span>
            </div>
          </div>
        </div>
        <div className="font-bold text-base underline">FORWARDING TS INST OF TANK CMT</div>
      </div>

      <div className="text-sm">
        1. The following overhauled instruments of CMT Tank are fwd herewith.
      </div>

      <div className="space-y-2 bg-gray-50 p-3 rounded border border-gray-300">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold">BA No:</span> {cmtBaNo || "______"}
          </div>
          <div>
            <span className="font-semibold">PT No:</span> {cmtPtNo || "______"}
          </div>
          <div>
            <span className="font-semibold">Section:</span> {cmtSection || "______"}
          </div>
        </div>
      </div>

      <div className="border-2 border-black">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-black bg-gray-100">
              <th className="border-r border-black p-2 text-center">SR NO</th>
              <th className="border-r border-black p-2 text-center">PART NO</th>
              <th className="border-r border-black p-2 text-center">DATE</th>
              <th className="border-r border-black p-2 text-center">INSTRUMENTS</th>
              <th className="border-r border-black p-2 text-center">DEFI</th>
              <th className="border-r border-black p-2 text-center">AVAILABLE ITEMS</th>
              <th className="border-r border-black p-2 text-center">QTY</th>
              <th className="border-r border-black p-2 text-center">REGD NO</th>
              <th className="p-2 text-center">QA REMARK</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-black">
                <td className="border-r border-black p-2 text-center">{row.srNo}</td>
                <td className="border-r border-black p-2 text-center">{row.partNo || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.date || "-"}</td>
                <td className="border-r border-black p-2">{row.instruments || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.defi || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.availableItems || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.qty || "-"}</td>
                <td className="border-r border-black p-2 text-center">{row.regdNo || "-"}</td>
                <td className="p-2">{row.qaRemark || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
                INTER OFFICE NOTE - INST
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

      {/* Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Document Preview</DialogTitle>
          </DialogHeader>
          {selectedTank === "icv-bmp-ii-iik" && renderICVBMPPreview()}
          {selectedTank === "cmt-tank" && renderCMTPreview()}
        </DialogContent>
      </Dialog>
    </div>
  );
}

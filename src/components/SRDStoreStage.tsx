"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { useState } from "react";

interface StoreItem {
  srNo: number;
  ohsNo: string;
  partNo: string;
  nomenclature: string;
  scaling: string;
  ct: number;
  rt: number;
  bal: number;
  ohOssLp: "OH" | "OSS" | "LP";
  drawing: string;
}

const sampleData: StoreItem[] = [
  {
    srNo: 1,
    ohsNo: "OHS-001",
    partNo: "SRD-PT-001",
    nomenclature: "Radar Assembly Module",
    scaling: "100",
    ct: 5,
    rt: 8,
    bal: 3,
    ohOssLp: "OH",
    drawing: "Drawing-SRD-001-Rev2.pdf"
  },
  {
    srNo: 2,
    ohsNo: "OHS-002",
    partNo: "SRD-PT-002",
    nomenclature: "Signal Processing Unit",
    scaling: "85",
    ct: 3,
    rt: 6,
    bal: 3,
    ohOssLp: "OSS",
    drawing: "Drawing-SRD-002-Rev1.pdf"
  },
  {
    srNo: 3,
    ohsNo: "OHS-003",
    partNo: "SRD-PT-003",
    nomenclature: "Antenna Array Component",
    scaling: "95",
    ct: 8,
    rt: 12,
    bal: 4,
    ohOssLp: "LP",
    drawing: "Drawing-SRD-003-Rev3.pdf"
  },
  {
    srNo: 4,
    ohsNo: "OHS-004",
    partNo: "SRD-PT-004",
    nomenclature: "Transmitter Module",
    scaling: "90",
    ct: 4,
    rt: 7,
    bal: 3,
    ohOssLp: "OH",
    drawing: "Drawing-SRD-004-Rev2.pdf"
  },
  {
    srNo: 5,
    ohsNo: "OHS-005",
    partNo: "SRD-PT-005",
    nomenclature: "Receiver Circuit Board",
    scaling: "100",
    ct: 6,
    rt: 10,
    bal: 4,
    ohOssLp: "OSS",
    drawing: "Drawing-SRD-005-Rev1.pdf"
  },
  {
    srNo: 6,
    ohsNo: "OHS-006",
    partNo: "SRD-PT-006",
    nomenclature: "Power Supply Unit",
    scaling: "88",
    ct: 7,
    rt: 10,
    bal: 3,
    ohOssLp: "LP",
    drawing: "Drawing-SRD-006-Rev4.pdf"
  }
];

export function SRDStoreStage() {
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedDrawing, setSelectedDrawing] = useState<string>("");

  const handleViewDrawing = (drawing: string) => {
    setSelectedDrawing(drawing);
    setViewDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">SRD - Store</CardTitle>
        </CardHeader>
      </Card>

      {/* Store Items Table */}
      <Card>
        <CardHeader>
          <CardTitle>Component List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Sr No.</TableHead>
                <TableHead className="w-[120px]">OHS No.</TableHead>
                <TableHead className="w-[150px]">Part No.</TableHead>
                <TableHead className="w-[300px]">Nomenclature</TableHead>
                <TableHead className="w-[100px]">Scaling (%)</TableHead>
                <TableHead colSpan={3} className="text-center border-r">QTY</TableHead>
                <TableHead className="w-[120px]">OH/OSS/LP</TableHead>
                <TableHead className="w-[120px]">Drawing</TableHead>
              </TableRow>
              <TableRow>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead className="w-[80px]">CT</TableHead>
                <TableHead className="w-[80px]">RT</TableHead>
                <TableHead className="w-[80px] border-r">Bal</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((item) => (
                <TableRow key={item.srNo}>
                  <TableCell className="font-medium">{item.srNo}</TableCell>
                  <TableCell>{item.ohsNo}</TableCell>
                  <TableCell>{item.partNo}</TableCell>
                  <TableCell>{item.nomenclature}</TableCell>
                  <TableCell>{item.scaling}%</TableCell>
                  <TableCell>{item.ct}</TableCell>
                  <TableCell>{item.rt}</TableCell>
                  <TableCell className="border-r">{item.bal}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {item.ohOssLp}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDrawing(item.drawing)}
                      className="gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Drawing Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Drawing Reference</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-mono text-sm">{selectedDrawing}</p>
            </div>
            <div className="flex justify-center items-center h-96 bg-muted/50 rounded-lg border-2 border-dashed border-border">
              <p className="text-muted-foreground">Drawing preview would be displayed here</p>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
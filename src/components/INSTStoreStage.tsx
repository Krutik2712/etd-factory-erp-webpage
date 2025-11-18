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
import { Eye, X } from "lucide-react";
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
  quantity: number;
  serviceable: boolean;
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    finish: string;
    tolerance: string;
  };
}

const sampleData: StoreItem[] = [
  {
    srNo: 1,
    ohsNo: "OHS-INST-001",
    partNo: "INST-PT-001",
    nomenclature: "Pressure Transducer",
    scaling: "100",
    ct: 3,
    rt: 5,
    bal: 2,
    ohOssLp: "OH",
    drawing: "Drawing-INST-001-Rev2.pdf",
    quantity: 3,
    serviceable: true,
    specifications: {
      material: "Stainless Steel 316",
      dimensions: "120mm x 80mm x 50mm",
      weight: "2.5kg",
      finish: "Polished",
      tolerance: "±0.01mm"
    }
  },
  {
    srNo: 2,
    ohsNo: "OHS-INST-002",
    partNo: "INST-PT-002",
    nomenclature: "Temperature Probe",
    scaling: "95",
    ct: 5,
    rt: 8,
    bal: 3,
    ohOssLp: "OSS",
    drawing: "Drawing-INST-002-Rev1.pdf",
    quantity: 5,
    serviceable: true,
    specifications: {
      material: "Platinum RTD",
      dimensions: "300mm x 15mm x 15mm",
      weight: "0.8kg",
      finish: "Ceramic Coating",
      tolerance: "±0.1°C"
    }
  },
  {
    srNo: 3,
    ohsNo: "OHS-INST-003",
    partNo: "INST-PT-003",
    nomenclature: "Flow Sensor Unit",
    scaling: "100",
    ct: 2,
    rt: 3,
    bal: 1,
    ohOssLp: "LP",
    drawing: "Drawing-INST-003-Rev3.pdf",
    quantity: 2,
    serviceable: true,
    specifications: {
      material: "Brass with PTFE Seals",
      dimensions: "150mm x 100mm x 80mm",
      weight: "3.2kg",
      finish: "Nickel Plated",
      tolerance: "±0.5%"
    }
  },
  {
    srNo: 4,
    ohsNo: "OHS-INST-004",
    partNo: "INST-PT-004",
    nomenclature: "Digital Display Panel",
    scaling: "85",
    ct: 4,
    rt: 6,
    bal: 2,
    ohOssLp: "OH",
    drawing: "Drawing-INST-004-Rev1.pdf",
    quantity: 4,
    serviceable: true,
    specifications: {
      material: "Aluminum with LCD",
      dimensions: "200mm x 150mm x 40mm",
      weight: "1.5kg",
      finish: "Powder Coated",
      tolerance: "±0.05mm"
    }
  },
  {
    srNo: 5,
    ohsNo: "OHS-INST-005",
    partNo: "INST-PT-005",
    nomenclature: "Calibration Weight Set",
    scaling: "90",
    ct: 1,
    rt: 2,
    bal: 1,
    ohOssLp: "OSS",
    drawing: "Drawing-INST-005-Rev2.pdf",
    quantity: 1,
    serviceable: true,
    specifications: {
      material: "Stainless Steel Class E2",
      dimensions: "Set of 10 (1mg to 500g)",
      weight: "Total 1.5kg",
      finish: "Mirror Polished",
      tolerance: "±0.001g"
    }
  },
  {
    srNo: 6,
    ohsNo: "OHS-INST-006",
    partNo: "INST-PT-006",
    nomenclature: "Signal Conditioning Module",
    scaling: "100",
    ct: 3,
    rt: 4,
    bal: 1,
    ohOssLp: "LP",
    drawing: "Drawing-INST-006-Rev4.pdf",
    quantity: 3,
    serviceable: true,
    specifications: {
      material: "FR4 PCB with Components",
      dimensions: "180mm x 120mm x 30mm",
      weight: "0.5kg",
      finish: "Conformal Coating",
      tolerance: "±0.01%"
    }
  }
];

export function INSTStoreStage() {
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const handleViewComponent = (item: StoreItem) => {
    setSelectedItem(item);
    setViewDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">INST - Store</CardTitle>
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
                      onClick={() => handleViewComponent(item)}
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

      {/* Component Details Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader className="flex flex-row items-start justify-between">
            <DialogTitle className="text-xl">Component Details</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={() => setViewDialogOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          {selectedItem && (
            <div className="space-y-6 pt-4">
              {/* Part Info Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Part No.</p>
                  <p className="text-lg font-semibold">{selectedItem.partNo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Quantity</p>
                  <p className="text-lg font-semibold">{selectedItem.quantity}</p>
                </div>
              </div>

              {/* Nomenclature */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Nomenclature</p>
                <p className="text-lg font-semibold">{selectedItem.nomenclature}</p>
              </div>

              {/* Serviceable Badge */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Serviceable</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded text-xs font-semibold ${
                    selectedItem.serviceable
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {selectedItem.serviceable ? "YES" : "NO"}
                </span>
              </div>

              {/* Drawing Reference */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Drawing Reference</p>
                <div className="bg-muted/50 rounded-lg border border-border p-3">
                  <p className="text-sm font-mono">{selectedItem.drawing}</p>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Specifications</p>
                <div className="bg-muted/50 rounded-lg border border-border p-4 space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Material:</span> {selectedItem.specifications.material}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Dimensions:</span> {selectedItem.specifications.dimensions}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Weight:</span> {selectedItem.specifications.weight}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Finish:</span> {selectedItem.specifications.finish}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Tolerance:</span> {selectedItem.specifications.tolerance}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-end pt-2">
                <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

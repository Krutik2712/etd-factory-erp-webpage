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
    ohsNo: "OHS-001",
    partNo: "PT-001",
    nomenclature: "Main Gun Assembly",
    scaling: "100",
    ct: 2,
    rt: 4,
    bal: 2,
    ohOssLp: "OH",
    drawing: "Drawing-PT-001-Rev3.pdf",
    quantity: 2,
    serviceable: true,
    specifications: {
      material: "Steel Alloy 4340",
      dimensions: "2500mm x 300mm x 200mm",
      weight: "85kg",
      finish: "Black Oxide",
      tolerance: "±0.05mm"
    }
  },
  {
    srNo: 2,
    ohsNo: "OHS-002",
    partNo: "PT-002",
    nomenclature: "Barrel Component",
    scaling: "95",
    ct: 1,
    rt: 3,
    bal: 2,
    ohOssLp: "OSS",
    drawing: "Drawing-PT-002-Rev2.pdf",
    quantity: 1,
    serviceable: true,
    specifications: {
      material: "Chrome Moly Steel",
      dimensions: "1800mm x 120mm diameter",
      weight: "65kg",
      finish: "Chrome Plated",
      tolerance: "±0.02mm"
    }
  },
  {
    srNo: 3,
    ohsNo: "OHS-003",
    partNo: "PT-010",
    nomenclature: "Trigger Mechanism",
    scaling: "85",
    ct: 4,
    rt: 8,
    bal: 4,
    ohOssLp: "LP",
    drawing: "Drawing-PT-010-Rev1.pdf",
    quantity: 4,
    serviceable: false,
    specifications: {
      material: "Stainless Steel 316",
      dimensions: "180mm x 90mm x 45mm",
      weight: "1.8kg",
      finish: "Polished",
      tolerance: "±0.01mm"
    }
  },
  {
    srNo: 4,
    ohsNo: "OHS-004",
    partNo: "PT-011",
    nomenclature: "Safety Lock",
    scaling: "90",
    ct: 4,
    rt: 6,
    bal: 2,
    ohOssLp: "OH",
    drawing: "Drawing-PT-011-Rev2.pdf",
    quantity: 4,
    serviceable: true,
    specifications: {
      material: "Titanium Alloy",
      dimensions: "95mm x 65mm x 28mm",
      weight: "0.5kg",
      finish: "Anodized",
      tolerance: "±0.03mm"
    }
  },
  {
    srNo: 5,
    ohsNo: "OHS-005",
    partNo: "PT-020",
    nomenclature: "Ammunition Feed",
    scaling: "100",
    ct: 1,
    rt: 2,
    bal: 1,
    ohOssLp: "OSS",
    drawing: "Drawing-PT-020-Rev4.pdf",
    quantity: 1,
    serviceable: true,
    specifications: {
      material: "Aluminum 7075-T6",
      dimensions: "650mm x 220mm x 150mm",
      weight: "15kg",
      finish: "Hard Anodized",
      tolerance: "±0.1mm"
    }
  },
  {
    srNo: 6,
    ohsNo: "OHS-006",
    partNo: "PT-030",
    nomenclature: "Recoil Spring",
    scaling: "88",
    ct: 2,
    rt: 5,
    bal: 3,
    ohOssLp: "LP",
    drawing: "Drawing-PT-030-Rev1.pdf",
    quantity: 2,
    serviceable: true,
    specifications: {
      material: "Spring Steel ASTM A228",
      dimensions: "450mm length, 45mm diameter",
      weight: "3.2kg",
      finish: "Zinc Plated",
      tolerance: "±0.5mm"
    }
  }
];

export function ARMTStoreStage() {
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
          <CardTitle className="text-2xl">ARMT - Store</CardTitle>
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
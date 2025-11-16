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
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, Search } from "lucide-react";
import { useState } from "react";

interface StoreItem {
  id: string;
  srNo: number;
  partNo: string;
  nomenclature: string;
  noOff: string;
  serviceable: "YES" | "NO" | "";
  assembly: string;
  drawing?: string;
  specifications?: string;
}

const assemblies = [
  "CMT Hull Assembly",
  "CMT Starting Assembly",
  "CMT Battery Assembly",
  "IFDSS Kit Assembly",
];

export function ETDStoreStage() {
  const [hullNo, setHullNo] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [items, setItems] = useState<StoreItem[]>([
    {
      id: "1",
      srNo: 1,
      partNo: "ETD-001",
      nomenclature: "Hull Frame Assembly",
      noOff: "2",
      serviceable: "YES",
      assembly: "CMT Hull Assembly",
      drawing: "Drawing-ETD-001-Rev2.pdf",
      specifications: "Material: Reinforced Steel Alloy\nDimensions: 3000mm x 1200mm x 800mm\nWeight: 250kg\nFinish: Anti-corrosion coating\nTolerance: ±0.1mm",
    },
    {
      id: "2",
      srNo: 2,
      partNo: "ETD-002",
      nomenclature: "Hull Support Bracket",
      noOff: "4",
      serviceable: "YES",
      assembly: "CMT Hull Assembly",
      drawing: "Drawing-ETD-002-Rev1.pdf",
      specifications: "Material: Carbon Steel\nDimensions: 450mm x 200mm x 150mm\nWeight: 15kg\nLoad Capacity: 500kg\nFinish: Powder coated",
    },
    {
      id: "3",
      srNo: 3,
      partNo: "ETD-010",
      nomenclature: "Starting Motor Unit",
      noOff: "1",
      serviceable: "YES",
      assembly: "CMT Starting Assembly",
      drawing: "Drawing-ETD-010-Rev3.pdf",
      specifications: "Voltage: 24V DC\nPower: 5.5kW\nRotation: Clockwise\nWeight: 18kg\nOperating Temp: -20°C to 60°C",
    },
    {
      id: "4",
      srNo: 4,
      partNo: "ETD-011",
      nomenclature: "Starting Control Panel",
      noOff: "1",
      serviceable: "NO",
      assembly: "CMT Starting Assembly",
      drawing: "Drawing-ETD-011-Rev1.pdf",
      specifications: "Input: 24V DC\nDisplay: LED indicators\nProtection: IP65\nDimensions: 300mm x 200mm x 80mm",
    },
    {
      id: "5",
      srNo: 5,
      partNo: "ETD-020",
      nomenclature: "Battery Pack 24V",
      noOff: "2",
      serviceable: "YES",
      assembly: "CMT Battery Assembly",
      drawing: "Drawing-ETD-020-Rev2.pdf",
      specifications: "Voltage: 24V\nCapacity: 100Ah\nType: Lead-Acid\nWeight: 65kg\nDimensions: 520mm x 240mm x 220mm",
    },
    {
      id: "6",
      srNo: 6,
      partNo: "ETD-030",
      nomenclature: "IFDSS Control Module",
      noOff: "1",
      serviceable: "YES",
      assembly: "IFDSS Kit Assembly",
      drawing: "Drawing-ETD-030-Rev4.pdf",
      specifications: "Processor: ARM Cortex-M4\nMemory: 512KB Flash, 128KB RAM\nInterfaces: CAN, RS-485, Ethernet\nOperating Temp: -40°C to 85°C",
    },
  ]);

  const handleViewItem = (item: StoreItem) => {
    setSelectedItem(item);
    setViewDialogOpen(true);
  };

  // Filter items based on search query
  const filteredItems = items.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.partNo.toLowerCase().includes(query) ||
      item.nomenclature.toLowerCase().includes(query)
    );
  });

  // Group filtered items by assembly
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.assembly]) {
      acc[item.assembly] = [];
    }
    acc[item.assembly].push(item);
    return acc;
  }, {} as Record<string, StoreItem[]>);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ETD - Store</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hullNo">HULL NO.</Label>
              <Input
                id="hullNo"
                placeholder="Enter Hull Number"
                value={hullNo}
                onChange={(e) => setHullNo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referenceId">Reference ID</Label>
              <Input
                id="referenceId"
                placeholder="Enter Reference ID"
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfIssue">Date of Issue</Label>
              <Input
                id="dateOfIssue"
                type="date"
                value={dateOfIssue}
                onChange={(e) => setDateOfIssue(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search/Filter Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by Part No. or Nomenclature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>
        </CardContent>
      </Card>

      {/* Store Items Table - Organized by Assembly */}
      <Card>
        <CardHeader>
          <CardTitle>Store Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {assemblies.map((assembly) => {
              const assemblyItems = groupedItems[assembly] || [];
              if (assemblyItems.length === 0) return null;

              return (
                <div key={assembly} className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">
                    {assembly}
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">Sr No.</TableHead>
                          <TableHead className="w-[150px]">PART NO.</TableHead>
                          <TableHead className="w-[300px]">NOMENCLATURE</TableHead>
                          <TableHead className="w-[120px]">NO OFF</TableHead>
                          <TableHead className="w-[150px]">SERVICEABLE</TableHead>
                          <TableHead className="w-[100px]">ACTION</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {assemblyItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">
                              {item.srNo}
                            </TableCell>
                            <TableCell>{item.partNo}</TableCell>
                            <TableCell>{item.nomenclature}</TableCell>
                            <TableCell>{item.noOff}</TableCell>
                            <TableCell>
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  item.serviceable === "YES"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                }`}
                              >
                                {item.serviceable}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleViewItem(item)}
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
                  </div>
                </div>
              );
            })}
            {filteredItems.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No components found matching your search.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* View Details Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Component Details</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Part No.</Label>
                  <p className="text-lg font-semibold">{selectedItem.partNo}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Assembly</Label>
                  <p className="text-lg font-semibold">{selectedItem.assembly}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Nomenclature</Label>
                  <p className="text-lg font-semibold">{selectedItem.nomenclature}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Quantity</Label>
                  <p className="text-lg font-semibold">{selectedItem.noOff}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Serviceable</Label>
                  <p className="text-lg font-semibold">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        selectedItem.serviceable === "YES"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {selectedItem.serviceable}
                    </span>
                  </p>
                </div>
              </div>

              {/* Drawing Information */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Drawing Reference</Label>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-mono text-sm">{selectedItem.drawing || "No drawing available"}</p>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Specifications</Label>
                <div className="p-4 bg-muted rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-sans">
                    {selectedItem.specifications || "No specifications available"}
                  </pre>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

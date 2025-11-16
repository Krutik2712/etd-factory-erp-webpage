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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, Eye, Search } from "lucide-react";
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
  "Assembly A",
  "Assembly B",
  "Assembly C",
  "Assembly D",
];

export function ARMTStoreStage() {
  const [ptNo, setPtNo] = useState("");
  const [baNo, setBaNo] = useState("");
  const [briRegdNo, setBriRegdNo] = useState("");
  const [regdNo, setRegdNo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [items, setItems] = useState<StoreItem[]>([
    {
      id: "1",
      srNo: 1,
      partNo: "PT-001",
      nomenclature: "Main Gun Assembly",
      noOff: "2",
      serviceable: "YES",
      assembly: "Assembly A",
      drawing: "Drawing-PT-001-Rev3.pdf",
      specifications: "Material: Steel Alloy 4340\nDimensions: 2500mm x 300mm x 200mm\nWeight: 85kg\nFinish: Black Oxide\nTolerance: ±0.05mm",
    },
    {
      id: "2",
      srNo: 2,
      partNo: "PT-002",
      nomenclature: "Barrel Component",
      noOff: "1",
      serviceable: "YES",
      assembly: "Assembly A",
      drawing: "Drawing-PT-002-Rev2.pdf",
      specifications: "Material: Chrome-Molybdenum Steel\nLength: 1800mm\nBore Diameter: 30mm\nRifling: 1:305mm twist\nChrome Plated Interior",
    },
    {
      id: "3",
      srNo: 3,
      partNo: "PT-010",
      nomenclature: "Trigger Mechanism",
      noOff: "4",
      serviceable: "NO",
      assembly: "Assembly B",
      drawing: "Drawing-PT-010-Rev1.pdf",
      specifications: "Material: Hardened Steel\nPull Weight: 4.5-5.5 lbs\nTravel: 5mm\nSafety Type: Manual\nFinish: Parkerized",
    },
    {
      id: "4",
      srNo: 4,
      partNo: "PT-011",
      nomenclature: "Safety Lock",
      noOff: "4",
      serviceable: "YES",
      assembly: "Assembly B",
      drawing: "Drawing-PT-011-Rev2.pdf",
      specifications: "Material: Stainless Steel 316\nOperating Force: 15-20N\nPositions: Safe/Fire\nTemperature Range: -40°C to 60°C",
    },
    {
      id: "5",
      srNo: 5,
      partNo: "PT-020",
      nomenclature: "Ammunition Feed",
      noOff: "1",
      serviceable: "YES",
      assembly: "Assembly C",
      drawing: "Drawing-PT-020-Rev4.pdf",
      specifications: "Material: Aluminum Alloy 7075-T6\nCapacity: 200 rounds\nFeed Rate: 600 rounds/min\nWeight: 12kg\nCoating: Anodized",
    },
    {
      id: "6",
      srNo: 6,
      partNo: "PT-030",
      nomenclature: "Recoil Spring",
      noOff: "2",
      serviceable: "NO",
      assembly: "Assembly D",
      drawing: "Drawing-PT-030-Rev1.pdf",
      specifications: "Material: Spring Steel AISI 9254\nWire Diameter: 8mm\nOuter Diameter: 45mm\nFree Length: 350mm\nSpring Rate: 25 N/mm\nCoils: 28",
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
          <CardTitle className="text-2xl">ARMT - Store</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ptNo">PT NO.</Label>
              <Input
                id="ptNo"
                placeholder="Enter PT Number"
                value={ptNo}
                onChange={(e) => setPtNo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="baNo">BA. NO.</Label>
              <Input
                id="baNo"
                placeholder="Enter BA Number"
                value={baNo}
                onChange={(e) => setBaNo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="briRegdNo">30 mm Bri. Regd No</Label>
              <Input
                id="briRegdNo"
                placeholder="Enter 30mm Bri. Regd No"
                value={briRegdNo}
                onChange={(e) => setBriRegdNo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="regdNo">Regd. No.</Label>
              <Input
                id="regdNo"
                placeholder="Enter Regd Number"
                value={regdNo}
                onChange={(e) => setRegdNo(e.target.value)}
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
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
import { Plus } from "lucide-react";
import { useState } from "react";

interface PassportItem {
  id: string;
  srNo: number;
  nomenclature: string;
  regdNo: string;
  receivedOrNot: "YES" | "NO" | "";
  deficiency: string;
  serviceable: "YES" | "NO" | "";
}

export function ARMTPassportStage() {
  const [ptNo, setPtNo] = useState("");
  const [baNo, setBaNo] = useState("");
  const [regdNo, setRegdNo] = useState("");
  const [barrelNo, setBarrelNo] = useState("");
  const [items, setItems] = useState<PassportItem[]>([
    {
      id: "1",
      srNo: 1,
      nomenclature: "30mm Gun Barrel",
      regdNo: "REG-30-001",
      receivedOrNot: "YES",
      deficiency: "None",
      serviceable: "YES",
    },
    {
      id: "2",
      srNo: 2,
      nomenclature: "Breach Block Assembly",
      regdNo: "REG-30-002",
      receivedOrNot: "YES",
      deficiency: "Minor wear",
      serviceable: "YES",
    },
    {
      id: "3",
      srNo: 3,
      nomenclature: "Firing Pin",
      regdNo: "REG-30-003",
      receivedOrNot: "NO",
      deficiency: "Not received",
      serviceable: "NO",
    },
  ]);

  const handleAddComponent = () => {
    const newItem: PassportItem = {
      id: Date.now().toString(),
      srNo: items.length + 1,
      nomenclature: "",
      regdNo: "",
      receivedOrNot: "",
      deficiency: "",
      serviceable: "",
    };
    setItems([...items, newItem]);
  };

  const handleItemChange = (
    id: string,
    field: keyof PassportItem,
    value: string | number
  ) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSendToApproval = () => {
    // Logic for sending to approval
    alert("Passport data sent to approval!");
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ARMT - PASSPORT</CardTitle>
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
              <Label htmlFor="baNo">BA NO.</Label>
              <Input
                id="baNo"
                placeholder="Enter BA Number"
                value={baNo}
                onChange={(e) => setBaNo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="regdNo">REGD NO.</Label>
              <Input
                id="regdNo"
                placeholder="Enter Regd Number"
                value={regdNo}
                onChange={(e) => setRegdNo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="barrelNo">BARREL NO.</Label>
              <Input
                id="barrelNo"
                placeholder="Enter Barrel Number"
                value={barrelNo}
                onChange={(e) => setBarrelNo(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Passport Components Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Passport Components</CardTitle>
            <Button onClick={handleAddComponent} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Component
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Sr No.</TableHead>
                  <TableHead className="w-[250px]">Nomenclature</TableHead>
                  <TableHead className="w-[180px]">Regd No.</TableHead>
                  <TableHead className="w-[150px]">Received or not</TableHead>
                  <TableHead className="w-[200px]">Deficiency</TableHead>
                  <TableHead className="w-[150px]">Serviceable</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.srNo}</TableCell>
                    <TableCell>
                      <Input
                        value={item.nomenclature}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "nomenclature",
                            e.target.value
                          )
                        }
                        placeholder="Enter nomenclature"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={item.regdNo}
                        onChange={(e) =>
                          handleItemChange(item.id, "regdNo", e.target.value)
                        }
                        placeholder="Enter Regd No."
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={item.receivedOrNot}
                        onValueChange={(value) =>
                          handleItemChange(item.id, "receivedOrNot", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="YES">YES</SelectItem>
                          <SelectItem value="NO">NO</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        value={item.deficiency}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "deficiency",
                            e.target.value
                          )
                        }
                        placeholder="Enter deficiency"
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={item.serviceable}
                        onValueChange={(value) =>
                          handleItemChange(item.id, "serviceable", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="YES">YES</SelectItem>
                          <SelectItem value="NO">NO</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSendToApproval} size="lg">
              Send to Approval
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

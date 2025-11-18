"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText } from "lucide-react";

export function SRDInterOfficeNote() {
  const [selectedTank, setSelectedTank] = useState("");

  const handleSendForApproval = () => {
    alert("Inter Office Note sent for approval!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold flex items-center justify-center gap-2">
                <FileText className="h-6 w-6" />
                INTER OFFICE NOTE - SRD
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

          {selectedTank && (
            <>
              {/* Header Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4">
                <div className="space-y-2">
                  <Label htmlFor="ion-note-no">Note No.</Label>
                  <Input id="ion-note-no" placeholder="Enter note number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ion-date">Date</Label>
                  <Input id="ion-date" type="date" />
                </div>
              </div>

              {/* From/To Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ion-from">From</Label>
                  <Input id="ion-from" placeholder="Enter department/person" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ion-to">To</Label>
                  <Input id="ion-to" placeholder="Enter department/person" />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="ion-subject">Subject</Label>
                <Input id="ion-subject" placeholder="Enter subject" />
              </div>

              {/* Reference */}
              <div className="space-y-2">
                <Label htmlFor="ion-reference">Reference</Label>
                <Input id="ion-reference" placeholder="Enter reference details" />
              </div>

              {/* Tank Details */}
              <div className="space-y-2 p-4 bg-muted rounded-lg">
                <Label className="font-semibold">Tank Details</Label>
                <div className="text-sm font-medium">
                  {selectedTank === "icv-bmp-ii-iik"
                    ? "ICV-BMP-II/IIK"
                    : selectedTank === "tisk-component"
                    ? "TISK component of ICV BMP-II"
                    : "CMT TANK"}
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-2">
                <Label htmlFor="ion-content">Content</Label>
                <Textarea
                  id="ion-content"
                  placeholder="Enter the main content of the inter office note"
                  rows={10}
                />
              </div>

              {/* Additional Details - SRD specific */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ion-requisition-no">Requisition No. / Equipment No.</Label>
                  <Input id="ion-requisition-no" placeholder="Enter requisition or equipment number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ion-part-details">Part Details (if applicable)</Label>
                  <Textarea
                    id="ion-part-details"
                    placeholder="Enter part number, nomenclature, quantity, etc."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ion-remarks">Remarks</Label>
                  <Textarea
                    id="ion-remarks"
                    placeholder="Enter any additional remarks"
                    rows={3}
                  />
                </div>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t">
                <div className="space-y-2">
                  <Label>Prepared By</Label>
                  <Input placeholder="Enter name and designation" />
                </div>
                <div className="space-y-2">
                  <Label>Approved By</Label>
                  <Input placeholder="Enter name and designation" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSendForApproval} size="lg">
                  Send for Approval
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

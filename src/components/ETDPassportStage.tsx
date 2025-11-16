"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CMTHullStage } from "@/components/CMTHullStage"
import { CMTStartingStage } from "@/components/CMTStartingStage"
import { CMTBatteryStage } from "@/components/CMTBatteryStage"
import { IFDSSKitStage } from "@/components/IFDSSKitStage"

export function ETDPassportStage() {
  const [selectedStage, setSelectedStage] = useState<string>("")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ETD PASSPORT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="stage-select">Select Stage</Label>
            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger id="stage-select" className="w-full md:w-[400px]">
                <SelectValue placeholder="Select a stage to view passport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cmt_hull">CMT HULL STAGE</SelectItem>
                <SelectItem value="cmt_starting">CMT STARTING STAGE</SelectItem>
                <SelectItem value="cmt_battery">CMT BATTERY KIT</SelectItem>
                <SelectItem value="ifdss_kit">IFDSS KIT BMP-II/IIK</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {selectedStage === "cmt_hull" && <CMTHullStage />}
      {selectedStage === "cmt_starting" && <CMTStartingStage />}
      {selectedStage === "cmt_battery" && <CMTBatteryStage />}
      {selectedStage === "ifdss_kit" && <IFDSSKitStage />}
    </div>
  )
}
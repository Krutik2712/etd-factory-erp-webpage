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
import { INSTCalibrationStage } from "@/components/INSTCalibrationStage"
import { INSTVerificationStage } from "@/components/INSTVerificationStage"
import { INSTMaintenanceStage } from "@/components/INSTMaintenanceStage"
import { INSTCertificationStage } from "@/components/INSTCertificationStage"

export function INSTPassportStage() {
  const [selectedStage, setSelectedStage] = useState<string>("")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">INST PASSPORT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="stage-select">Select Stage</Label>
            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger id="stage-select" className="w-full md:w-[400px]">
                <SelectValue placeholder="Select a stage to view passport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="calibration">CALIBRATION STAGE</SelectItem>
                <SelectItem value="verification">VERIFICATION STAGE</SelectItem>
                <SelectItem value="maintenance">MAINTENANCE STAGE</SelectItem>
                <SelectItem value="certification">CERTIFICATION STAGE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {selectedStage === "calibration" && <INSTCalibrationStage />}
      {selectedStage === "verification" && <INSTVerificationStage />}
      {selectedStage === "maintenance" && <INSTMaintenanceStage />}
      {selectedStage === "certification" && <INSTCertificationStage />}
    </div>
  )
}

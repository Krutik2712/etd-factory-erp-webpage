"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface PassportItem {
  srNo: number
  nomenclature: string
  quantityPerMachine: number
  ohsNo: string
  assyContNo: string
  category: string
}

const passportData: PassportItem[] = [
  {
    srNo: 1,
    nomenclature: "Certification Label",
    quantityPerMachine: 10,
    ohsNo: "5301",
    assyContNo: "NK",
    category: "NEW/OH"
  },
  {
    srNo: 2,
    nomenclature: "Seal Kit",
    quantityPerMachine: 5,
    ohsNo: "5302",
    assyContNo: "NK",
    category: "NEW/OH"
  }
]

export function INSTCertificationStage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CERTIFICATION STAGE</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Header Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
          <div className="space-y-2">
            <Label>INSTRUMENT NO.</Label>
            <Input value="INST-CERT-004" readOnly className="font-medium" />
          </div>
          <div className="space-y-2">
            <Label>Reference ID</Label>
            <Input value="REF-INST-2024-004" readOnly className="font-medium" />
          </div>
          <div className="space-y-2">
            <Label>Date of Issue</Label>
            <Input value="2024-01-18" readOnly className="font-medium" />
          </div>
        </div>

        {/* Passport Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Sr No</TableHead>
                <TableHead>Nomenclature</TableHead>
                <TableHead>Quantity per machine</TableHead>
                <TableHead>OHS No</TableHead>
                <TableHead>AssyCont No/RegdSri No</TableHead>
                <TableHead>OH/OSS/LP</TableHead>
                <TableHead colSpan={2} className="text-center">Supervisor/Worker</TableHead>
                <TableHead colSpan={2} className="text-center">QA Rep</TableHead>
              </TableRow>
              <TableRow>
                <TableHead colSpan={6}></TableHead>
                <TableHead className="text-center border-r">Name</TableHead>
                <TableHead className="text-center">Sign</TableHead>
                <TableHead className="text-center border-r">Name</TableHead>
                <TableHead className="text-center">Sign</TableHead>
              </TableRow>
              <TableRow>
                <TableHead colSpan={6}></TableHead>
                <TableHead className="font-semibold text-center border-r">ABC</TableHead>
                <TableHead className="text-center"></TableHead>
                <TableHead className="font-semibold text-center border-r">XYZ</TableHead>
                <TableHead className="text-center"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {passportData.map((item) => (
                <TableRow key={item.srNo}>
                  <TableCell className="font-medium">{item.srNo}</TableCell>
                  <TableCell>{item.nomenclature}</TableCell>
                  <TableCell>{item.quantityPerMachine}</TableCell>
                  <TableCell>{item.ohsNo}</TableCell>
                  <TableCell>{item.assyContNo}</TableCell>
                  <TableCell>
                    <Badge variant="default">{item.category}</Badge>
                  </TableCell>
                  <TableCell className="border-r"></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="border-r"></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

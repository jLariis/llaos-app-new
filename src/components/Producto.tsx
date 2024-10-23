import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, UserIcon, PackageIcon, DollarSignIcon, BuildingIcon, WarehouseIcon, Barcode } from 'lucide-react'

export default function NewProductForm() {
  const [step, setStep] = React.useState(1)
  const [productData, setProductData] = React.useState({
    code: '',
    unit: '',
    name: '',
    description: '',
    unitPrice: '',
    vat: '',
    netPrice: '',
    brand: '',
    category: '',
    supplier: '',
    warehouse: '',
    location: '',
    inStock: '',
    bookCost: '',
    minimum: '',
    maximum: ''
  })
  const [includeVAT, setIncludeVAT] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProductData({ ...productData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setProductData({ ...productData, [name]: value })
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl flex items-center">
          <PackageIcon className="mr-2 h-6 w-6" />
          Nuevo producto
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {new Date().toLocaleString()}
          <UserIcon className="ml-4 mr-2 h-4 w-4" />
          Javier Lopez
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex items-center ${s <= step ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${s <= step ? 'border-primary' : 'border-muted'}`}>
                {s}
              </div>
              <span className="ml-2">{s === 1 ? 'Información básica' : s === 2 ? 'Proveedor e inventario' : 'Revisión'}</span>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="code">Código</Label>
                <Input id="code" name="code" value={productData.code} onChange={handleInputChange} placeholder="Código del producto" />
              </div>
              <div>
                <Label htmlFor="unit">Unidad</Label>
                <Select value={productData.unit} onValueChange={(value) => handleSelectChange('unit', value)}>
                  <SelectTrigger id="unit">
                    <SelectValue placeholder="Seleccione unidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="piece">Pieza</SelectItem>
                    <SelectItem value="kg">Kilogramo</SelectItem>
                    <SelectItem value="liter">Litro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" value={productData.name} onChange={handleInputChange} placeholder="Nombre del producto" />
            </div>
            <div>
              <Label htmlFor="description">Descripción</Label>
              <Textarea id="description" name="description" value={productData.description} onChange={handleInputChange} placeholder="Descripción del producto" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="unitPrice">Precio unitario</Label>
                <Input id="unitPrice" name="unitPrice" type="number" value={productData.unitPrice} onChange={handleInputChange} placeholder="0.00" />
              </div>
              <div>
                <Label htmlFor="vat">IVA</Label>
                <div className="flex items-center space-x-2">
                  <Input id="vat" name="vat" type="number" value={productData.vat} onChange={handleInputChange} placeholder="0.00" disabled={!includeVAT} />
                  <Switch
                    checked={includeVAT}
                    onCheckedChange={setIncludeVAT}
                    aria-label="Include VAT"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="netPrice">Precio neto</Label>
                <Input id="netPrice" name="netPrice" type="number" value={productData.netPrice} onChange={handleInputChange} placeholder="0.00" readOnly />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brand">Marca</Label>
                <Select value={productData.brand} onValueChange={(value) => handleSelectChange('brand', value)}>
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Seleccione marca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brand1">Marca 1</SelectItem>
                    <SelectItem value="brand2">Marca 2</SelectItem>
                    <SelectItem value="brand3">Marca 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category">Categoría</Label>
                <Select value={productData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Seleccione categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="category1">Categoría 1</SelectItem>
                    <SelectItem value="category2">Categoría 2</SelectItem>
                    <SelectItem value="category3">Categoría 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="supplier">Proveedor</Label>
              <Select value={productData.supplier} onValueChange={(value) => handleSelectChange('supplier', value)}>
                <SelectTrigger id="supplier">
                  <SelectValue placeholder="Seleccione proveedor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplier1">Proveedor 1</SelectItem>
                  <SelectItem value="supplier2">Proveedor 2</SelectItem>
                  <SelectItem value="supplier3">Proveedor 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="warehouse">Almacén</Label>
                <Select value={productData.warehouse} onValueChange={(value) => handleSelectChange('warehouse', value)}>
                  <SelectTrigger id="warehouse">
                    <SelectValue placeholder="Seleccione almacén" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warehouse1">Almacén 1</SelectItem>
                    <SelectItem value="warehouse2">Almacén 2</SelectItem>
                    <SelectItem value="warehouse3">Almacén 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Lugar</Label>
                <Select value={productData.location} onValueChange={(value) => handleSelectChange('location', value)}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Seleccione lugar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="location1">Lugar 1</SelectItem>
                    <SelectItem value="location2">Lugar 2</SelectItem>
                    <SelectItem value="location3">Lugar 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="inStock">En Stock</Label>
                <Input id="inStock" name="inStock" type="number" value={productData.inStock} onChange={handleInputChange} placeholder="0" />
              </div>
              <div>
                <Label htmlFor="bookCost">Costo Book</Label>
                <Input id="bookCost" name="bookCost" type="number" value={productData.bookCost} onChange={handleInputChange} placeholder="0.00" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minimum">Mínimo</Label>
                <Input id="minimum" name="minimum" type="number" value={productData.minimum} onChange={handleInputChange} placeholder="0" />
              </div>
              <div>
                <Label htmlFor="maximum">Máximo</Label>
                <Input id="maximum" name="maximum" type="number" value={productData.maximum} onChange={handleInputChange} placeholder="0" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resumen del Producto</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><strong>Código:</strong> {productData.code}</div>
              <div><strong>Unidad:</strong> {productData.unit}</div>
              <div><strong>Nombre:</strong> {productData.name}</div>
              <div><strong>Marca:</strong> {productData.brand}</div>
              <div><strong>Categoría:</strong> {productData.category}</div>
              <div><strong>Precio unitario:</strong> ${productData.unitPrice}</div>
              <div><strong>IVA:</strong> ${productData.vat}</div>
              <div><strong>Precio neto:</strong> ${productData.netPrice}</div>
              <div><strong>Proveedor:</strong> {productData.supplier}</div>
              <div><strong>Almacén:</strong> {productData.warehouse}</div>
              <div><strong>Lugar:</strong> {productData.location}</div>
              <div><strong>En Stock:</strong> {productData.inStock}</div>
              <div><strong>Costo Book:</strong> ${productData.bookCost}</div>
              <div><strong>Mínimo:</strong> {productData.minimum}</div>
              <div><strong>Máximo:</strong> {productData.maximum}</div>
            </div>
            <div>
              <strong>Descripción:</strong>
              <p>{productData.description}</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep}>
            Anterior
          </Button>
        )}
        {step < 3 ? (
          <Button onClick={nextStep} className="ml-auto">
            Siguiente
          </Button>
        ) : (
          <Button className="ml-auto">
            Guardar Producto
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
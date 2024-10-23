import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarIcon, UserIcon, ClipboardIcon, BuildingIcon, UserCheckIcon, InfoIcon, PackageIcon, AlertTriangleIcon, PlusIcon, TrashIcon } from 'lucide-react'

type Article = {
  id: number;
  quantity: string;
  unit: string;
  description: string;
  urgency: string;
}

export default function MultiItemRequisitionForm() {
  const [step, setStep] = React.useState(1)
  const [articles, setArticles] = React.useState<Article[]>([])
  const [currentArticle, setCurrentArticle] = React.useState<Article>({
    id: 0,
    quantity: '',
    unit: '',
    description: '',
    urgency: ''
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const addArticle = () => {
    if (currentArticle.quantity && currentArticle.unit && currentArticle.description && currentArticle.urgency) {
      setArticles([...articles, { ...currentArticle, id: Date.now() }])
      setCurrentArticle({ id: 0, quantity: '', unit: '', description: '', urgency: '' })
    }
  }

  const removeArticle = (id: number) => {
    setArticles(articles.filter(article => article.id !== id))
  }

  const updateCurrentArticle = (field: keyof Article, value: string) => {
    setCurrentArticle({ ...currentArticle, [field]: value })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl flex items-center">
          <ClipboardIcon className="mr-2 h-6 w-6" />
          Nueva requisición
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
              <span className="ml-2">{s === 1 ? 'Información básica' : s === 2 ? 'Artículos' : 'Revisión'}</span>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label htmlFor="reqNumber" className="flex items-center">
                <ClipboardIcon className="mr-2 h-4 w-4" />
                Código Requisición
              </Label>
              <Input id="reqNumber" value="REQ00000" readOnly className="bg-muted" />
            </div>
            <div>
              <Label htmlFor="area" className="flex items-center">
                <BuildingIcon className="mr-2 h-4 w-4" />
                Área
              </Label>
              <Select>
                <SelectTrigger id="area">
                  <SelectValue placeholder="Seleccione un área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="area1">Área 1</SelectItem>
                  <SelectItem value="area2">Área 2</SelectItem>
                  <SelectItem value="area3">Área 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="authorizes" className="flex items-center">
                <UserCheckIcon className="mr-2 h-4 w-4" />
                Autoriza
              </Label>
              <Select>
                <SelectTrigger id="authorizes">
                  <SelectValue placeholder="Seleccione quien autoriza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auth1">Autorizador 1</SelectItem>
                  <SelectItem value="auth2">Autorizador 2</SelectItem>
                  <SelectItem value="auth3">Autorizador 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="use" className="flex items-center">
                <InfoIcon className="mr-2 h-4 w-4" />
                Uso
              </Label>
              <Input id="use" placeholder="Especifique el uso" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <PackageIcon className="mr-2 h-5 w-5" />
              Artículos
            </h3>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <div key={article.id} className="flex items-center space-x-2 p-2 border rounded">
                  <span className="font-semibold">#{index + 1}</span>
                  <span>{article.quantity} {article.unit}</span>
                  <span className="flex-grow">{article.description}</span>
                  <span className="text-sm text-muted-foreground">Urgencia: {article.urgency}</span>
                  <Button variant="ghost" size="icon" onClick={() => removeArticle(article.id)}>
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity">Cantidad</Label>
                <Input 
                  id="quantity" 
                  type="number" 
                  placeholder="0" 
                  value={currentArticle.quantity}
                  onChange={(e) => updateCurrentArticle('quantity', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="unit">Unidad</Label>
                <Select value={currentArticle.unit} onValueChange={(value) => updateCurrentArticle('unit', value)}>
                  <SelectTrigger id="unit">
                    <SelectValue placeholder="Seleccione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unidad">Unidad</SelectItem>
                    <SelectItem value="kg">Kilogramo</SelectItem>
                    <SelectItem value="litro">Litro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describa el artículo" 
                  value={currentArticle.description}
                  onChange={(e) => updateCurrentArticle('description', e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="urgency" className="flex items-center">
                  <AlertTriangleIcon className="mr-2 h-4 w-4" />
                  Urgencia
                </Label>
                <Select value={currentArticle.urgency} onValueChange={(value) => updateCurrentArticle('urgency', value)}>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Seleccione la urgencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baja">Baja</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={addArticle} className="w-full">
              <PlusIcon className="mr-2 h-4 w-4" />
              Agregar Artículo
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resumen de la Requisición</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Código:</strong> REQ00000
              </div>
              <div>
                <strong>Área:</strong> [Área seleccionada]
              </div>
              <div>
                <strong>Autoriza:</strong> [Autorizador seleccionado]
              </div>
              <div>
                <strong>Uso:</strong> [Uso especificado]
              </div>
            </div>
            <h4 className="font-semibold mt-4">Artículos:</h4>
            <div className="space-y-2">
              {articles.map((article, index) => (
                <div key={article.id} className="p-2 border rounded">
                  <strong>#{index + 1}:</strong> {article.quantity} {article.unit} - {article.description} (Urgencia: {article.urgency})
                </div>
              ))}
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
            Enviar Requisición
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="appearance">Aparência</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Empresa</CardTitle>
                <CardDescription>Configure as informações básicas da sua empresa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Nome da Empresa</Label>
                    <Input id="company-name" placeholder="Nome da sua empresa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-cnpj">CNPJ</Label>
                    <Input id="company-cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Endereço</Label>
                  <Input id="company-address" placeholder="Endereço completo" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-phone">Telefone</Label>
                    <Input id="company-phone" placeholder="(00) 0000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-email">E-mail</Label>
                    <Input id="company-email" placeholder="contato@empresa.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-website">Website</Label>
                    <Input id="company-website" placeholder="www.empresa.com" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Salvar Alterações</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logo da Empresa</CardTitle>
                <CardDescription>Faça upload da logo que será exibida nas ordens de serviço</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="border rounded-md p-2 w-32 h-32 flex items-center justify-center bg-muted">
                    <span className="text-muted-foreground">Logo</span>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline">Selecionar Arquivo</Button>
                    <p className="text-xs text-muted-foreground">
                      Formatos aceitos: PNG, JPG ou SVG. Tamanho máximo: 2MB.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Salvar Logo</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Preferências de Notificação</CardTitle>
                <CardDescription>Configure como e quando deseja receber notificações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-new-orders">Novas Ordens de Serviço</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações quando novas ordens forem criadas
                    </p>
                  </div>
                  <Switch id="notify-new-orders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-due-date">Prazos Próximos</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações sobre ordens com prazo próximo do vencimento
                    </p>
                  </div>
                  <Switch id="notify-due-date" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-completed">Ordens Concluídas</Label>
                    <p className="text-sm text-muted-foreground">Receba notificações quando ordens forem concluídas</p>
                  </div>
                  <Switch id="notify-completed" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-email">Notificações por E-mail</Label>
                    <p className="text-sm text-muted-foreground">Receba notificações também por e-mail</p>
                  </div>
                  <Switch id="notify-email" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Salvar Preferências</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tema e Aparência</CardTitle>
                <CardDescription>Personalize a aparência do sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tema</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="justify-start">
                      <span className="mr-2 h-4 w-4 rounded-full bg-primary"></span>
                      Claro
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <span className="mr-2 h-4 w-4 rounded-full bg-slate-950"></span>
                      Escuro
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <span className="mr-2 h-4 w-4 rounded-full bg-gradient-to-r from-slate-100 to-slate-950"></span>
                      Sistema
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Salvar Aparência</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Backup e Restauração</CardTitle>
                <CardDescription>Faça backup dos seus dados ou restaure a partir de um backup anterior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Backup de Dados</Label>
                  <p className="text-sm text-muted-foreground">
                    Faça backup de todos os seus dados para restauração futura
                  </p>
                  <Button variant="outline">Exportar Backup</Button>
                </div>
                <div className="space-y-2">
                  <Label>Restaurar Backup</Label>
                  <p className="text-sm text-muted-foreground">Restaure seus dados a partir de um arquivo de backup</p>
                  <Button variant="outline">Selecionar Arquivo de Backup</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Restaurar Dados</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


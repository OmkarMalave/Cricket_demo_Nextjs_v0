import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Trophy, Star } from "lucide-react"

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-green-800">Teams</h1>
      
      <Tabs defaultValue="international" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-green-100">
          <TabsTrigger value="international" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <Trophy className="h-5 w-5 mr-2" />
            International
          </TabsTrigger>
          <TabsTrigger value="domestic" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <Users className="h-5 w-5 mr-2" />
            Domestic
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="international">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamCard 
              name="India" 
              captain="Virat Kohli"
              ranking={2}
              recentForm={['W', 'W', 'L', 'W', 'W']}
            />
            <TeamCard 
              name="Australia" 
              captain="Pat Cummins"
              ranking={1}
              recentForm={['W', 'W', 'W', 'L', 'W']}
            />
            <TeamCard 
              name="England" 
              captain="Jos Buttler"
              ranking={3}
              recentForm={['L', 'W', 'W', 'W', 'L']}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="domestic">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamCard 
              name="Mumbai Indians" 
              captain="Rohit Sharma"
              trophies={5}
              recentForm={['W', 'W', 'L', 'W', 'L']}
            />
            <TeamCard 
              name="Chennai Super Kings" 
              captain="MS Dhoni"
              trophies={4}
              recentForm={['W', 'L', 'W', 'W', 'W']}
            />
            <TeamCard 
              name="Royal Challengers Bangalore" 
              captain="Faf du Plessis"
              trophies={0}
              recentForm={['L', 'L', 'W', 'W', 'L']}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TeamCard({ name, captain, ranking, trophies, recentForm }: { name: string; captain: string; ranking?: number; trophies?: number; recentForm: string[] }) {
  return (
    <Card className="bg-white shadow-lg overflow-hidden">
      <CardHeader className="bg-green-500 text-white">
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="font-semibold text-green-800">Captain:</span> {captain}
        </div>
        {ranking !== undefined && (
          <div className="mb-2">
            <span className="font-semibold text-green-800">Ranking:</span> {ranking}
          </div>
        )}
        {trophies !== undefined && (
          <div className="mb-2">
            <span className="font-semibold text-green-800">Trophies:</span> {trophies}
          </div>
        )}
        <div className="mt-4">
          <span className="font-semibold text-green-800">Recent Form:</span>
          <div className="flex mt-1">
            {recentForm.map((result, index) => (
              <div 
                key={index} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-1 ${
                  result === 'W' ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {result}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
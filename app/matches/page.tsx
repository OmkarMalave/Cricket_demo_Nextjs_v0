import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, MapPin } from "lucide-react"

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-green-800">Matches</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-green-100">
          <TabsTrigger value="all" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            All Matches
          </TabsTrigger>
          <TabsTrigger value="international" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            International
          </TabsTrigger>
          <TabsTrigger value="domestic" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            Domestic
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MatchCard 
              team1="India" 
              team2="Australia" 
              date="15 Jul 2023"
              venue="Melbourne Cricket Ground"
              type="T20I"
              status="Live"
            />
            <MatchCard 
              team1="England" 
              team2="New Zealand" 
              date="20 Jul 2023"
              venue="Lord's Cricket Ground"
              type="ODI"
              status="Upcoming"
            />
            <MatchCard 
              team1="South Africa" 
              team2="West Indies" 
              date="25 Jul 2023"
              venue="Newlands Cricket Ground"
              type="Test"
              status="Upcoming"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="international">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MatchCard 
              team1="India" 
              team2="Australia" 
              date="15 Jul 2023"
              venue="Melbourne Cricket Ground"
              type="T20I"
              status="Live"
            />
            <MatchCard 
              team1="England" 
              team2="New Zealand" 
              date="20 Jul 2023"
              venue="Lord's Cricket Ground"
              type="ODI"
              status="Upcoming"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="domestic">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MatchCard 
              team1="Mumbai Indians" 
              team2="Chennai Super Kings" 
              date="18 Jul 2023"
              venue="Wankhede Stadium"
              type="IPL"
              status="Upcoming"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MatchCard({ team1, team2, date, venue, type, status }: { team1: string; team2: string; date: string; venue: string; type: string; status: string }) {
  return (
    <Card className="bg-white shadow-lg overflow-hidden">
      <CardHeader className={`${status === 'Live' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
        <CardTitle className="text-xl flex justify-between items-center">
          <span>{type}</span>
          <span className="text-sm font-normal">{status}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold text-green-800">{team1}</div>
          <div className="text-sm text-gray-500">vs</div>
          <div className="text-lg font-semibold text-green-800">{team2}</div>
        </div>
        <div className="text-sm text-gray-600">
          <div><Calendar className="inline-block h-4 w-4 mr-1" /> {date}</div>
          <div><MapPin className="inline-block h-4 w-4 mr-1" /> {venue}</div>
        </div>
      </CardContent>
    </Card>
  )
}
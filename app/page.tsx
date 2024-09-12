import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-green-800">Welcome to CricketPro</h1>
      
      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-green-100">
          <TabsTrigger value="live" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <Trophy className="h-5 w-5 mr-2" />
            Live Scores
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="recent" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <Clock className="h-5 w-5 mr-2" />
            Recent
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="live">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-500 text-white">
              <CardTitle className="text-2xl">Live Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <MatchItem 
                  team1="India" 
                  team2="Australia" 
                  score1="287/5" 
                  score2="(45.3 ov)" 
                  status="Live" 
                />
                <MatchItem 
                  team1="England" 
                  team2="New Zealand" 
                  score1="180/3" 
                  score2="(30.0 ov)" 
                  status="Live" 
                />
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-500 text-white">
              <CardTitle className="text-2xl">Upcoming Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <MatchItem 
                  team1="South Africa" 
                  team2="West Indies" 
                  status="Tomorrow, 14:00 GMT" 
                />
                <MatchItem 
                  team1="Pakistan" 
                  team2="Sri Lanka" 
                  status="23 Jul, 09:30 GMT" 
                />
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent">
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-green-500 text-white">
              <CardTitle className="text-2xl">Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <MatchItem 
                  team1="Australia" 
                  team2="New Zealand" 
                  status="AUS won by 3 wickets" 
                />
                <MatchItem 
                  team1="India" 
                  team2="England" 
                  status="IND won by 5 runs" 
                />
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="bg-white shadow-lg">
        <CardHeader className="bg-yellow-500 text-green-800">
          <CardTitle className="text-2xl">Featured News</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-green-700 hover:text-green-900 hover:underline">ICC announces new tournament format for 2024</a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:text-green-900 hover:underline">Player spotlight: Rising stars to watch this season</a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:text-green-900 hover:underline">Top 10 memorable moments from the last World Cup</a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function MatchItem({ team1, team2, score1, score2, status }: { team1: string; team2: string; score1?: string; score2?: string; status: string }) {
  return (
    <li className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
      <div className="flex-1">
        <div className="font-semibold text-green-800">{team1} vs {team2}</div>
        {score1 && score2 && (
          <div className="text-sm text-green-600">{score1} - {score2}</div>
        )}
      </div>
      <div className="text-sm font-medium text-yellow-600">{status}</div>
    </li>
  )
}
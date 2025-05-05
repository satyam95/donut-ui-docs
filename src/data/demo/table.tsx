import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@satyam95/donutui";

const topRunScorers = [
  {
    player: "Virat Kohli",
    team: "Royal Challengers Bangalore",
    matches: 16,
    runs: 870,
    highestScore: "121*",
  },
  {
    player: "David Warner",
    team: "Delhi Capitals",
    matches: 15,
    runs: 815,
    highestScore: "108*",
  },
  {
    player: "Jos Buttler",
    team: "Rajasthan Royals",
    matches: 16,
    runs: 780,
    highestScore: "95",
  },
  {
    player: "Shubman Gill",
    team: "Gujarat Titans",
    matches: 14,
    runs: 730,
    highestScore: "99",
  },
  {
    player: "KL Rahul",
    team: "Lucknow Super Giants",
    matches: 15,
    runs: 695,
    highestScore: "105",
  },
  {
    player: "Ruturaj Gaikwad",
    team: "Chennai Super Kings",
    matches: 14,
    runs: 680,
    highestScore: "92",
  },
  {
    player: "Suryakumar Yadav",
    team: "Mumbai Indians",
    matches: 16,
    runs: 675,
    highestScore: "110*",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>Top Run-Scorers in IPL 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Player</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Matches</TableHead>
          <TableHead>Runs</TableHead>
          <TableHead className="text-right">Highest Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topRunScorers.map((scorer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{scorer.player}</TableCell>
            <TableCell>{scorer.team}</TableCell>
            <TableCell>{scorer.matches}</TableCell>
            <TableCell>{scorer.runs}</TableCell>
            <TableCell className="text-right">{scorer.highestScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total Runs Scored by Top Players</TableCell>
          <TableCell className="text-right">5,245</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

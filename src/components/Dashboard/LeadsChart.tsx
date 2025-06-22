import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// MANDATORY: Complex chart data
const chartData = [
  { name: 'March', won: 65, lost: 68 },
  { name: 'April', won: 22, lost: 45 },
  { name: 'May', won: 64, lost: 98 },
  { name: 'June', won: 85, lost: 12 },
  { name: 'July', won: 68, lost: 42 },
  { name: 'August', won: 30, lost: 88 },
];

type ChartView = 'came' | 'converted' | 'size';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-card border rounded-md shadow-lg text-sm">
          <p className="font-bold mb-1 text-card-foreground">{label}</p>
          <p style={{ color: payload[0].stroke }} className="intro">{`Closed won: ${payload[0].value}`}</p>
          <p style={{ color: payload[1].stroke }} className="intro">{`Closed lost: ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
};

const LeadsChart: React.FC = () => {
    const [activeView, setActiveView] = useState<ChartView>('converted');

    const renderButtons = () => {
        const views: { id: ChartView; label: string }[] = [
            { id: 'came', label: 'Leads came' as const },
            { id: 'converted', label: 'Leads Converted' as const },
            { id: 'size', label: 'Total deals size' as const },
        ];
        return (
            <div className="flex items-center bg-secondary p-1 rounded-lg">
                {views.map(view => (
                    <Button
                        key={view.id}
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveView(view.id)}
                        className={`
                            w-full px-3 py-1 text-sm h-8 rounded-md
                            ${activeView === view.id ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:bg-background/50'}
                        `}
                    >
                        {view.label}
                    </Button>
                ))}
            </div>
        );
    };

    return (
        <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                        <CardTitle>Leads tracking</CardTitle>
                        <div className="flex items-baseline gap-6 mt-2">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold">680</span>
                                <span className="text-sm text-muted-foreground">total closed</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold">70</span>
                                <span className="text-sm text-muted-foreground">total lost</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                        {renderButtons()}
                        <Button variant="outline" className="flex items-center justify-center gap-2 text-muted-foreground font-normal ml-0 sm:ml-2">
                            <CalendarDays className="h-4 w-4" />
                            <span>last 6 months</span>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                            <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
                            <defs>
                                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="won" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" name="Closed won" dot={{ r: 4, fill: '#14b8a6', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6 }} />
                            <Area type="monotone" dataKey="lost" stroke="#e11d48" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" name="Closed lost" dot={{ r: 4, fill: '#e11d48', strokeWidth: 2, stroke: 'hsl(var(--card))' }} activeDot={{ r: 6 }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#14b8a6]"></span>
                        <span className="text-muted-foreground">Closed won</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48]"></span>
                        <span className="text-muted-foreground">Closed lost</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default LeadsChart;

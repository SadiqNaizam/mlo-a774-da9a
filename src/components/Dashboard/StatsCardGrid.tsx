import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';

// Data for Funnel Count
const funnelData = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' as const },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' as const, tooltip: 'average time on this stage' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-slate-700' as const },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' as const },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' as const },
];

// Data for Sources Chart
const sourcesData = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#ef4444' }, // red-500
  { name: 'Behance', value: 2400, percentage: 40, color: '#f59e0b' }, // amber-500
  { name: 'Instagram', value: 300, percentage: 5, color: '#14b8a6' }, // teal-500
  { name: 'Dribbble', value: 300, percentage: 5, color: '#4ade80' }, // green-400
];

const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-background border p-2 rounded-md shadow-lg text-sm">
                <p className="font-bold">{`${payload[0].name}: $${payload[0].value.toLocaleString()}`}</p>
            </div>
        );
    }
    return null;
};

const FunnelCountCard: React.FC = () => {
    const totalCount = funnelData.reduce((acc, curr) => acc + curr.count, 0);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Funnel count</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold">600</span>
                    <span className="text-sm text-muted-foreground">active leads</span>
                </div>
                <div className="mt-4 flex h-2 w-full rounded-full overflow-hidden bg-gray-200">
                    {funnelData.map((item) => (
                        <div key={item.name} className={item.color} style={{ width: `${(item.count / totalCount) * 100}%` }} />
                    ))}
                </div>
                <div className="mt-6 space-y-4">
                    {funnelData.map((item) => (
                        <div key={item.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className={cn("h-2.5 w-2.5 rounded-full", item.color)}></span>
                                <span className="text-muted-foreground">{item.name}</span>
                            </div>
                            <span className="text-right font-medium text-foreground">{item.count}</span>
                            <span className="text-right text-muted-foreground">${item.value.toLocaleString()}</span>
                            {item.tooltip ? (
                                <TooltipProvider>
                                    <Tooltip delayDuration={100}>
                                        <TooltipTrigger asChild>
                                            <span className="text-right text-muted-foreground cursor-help">{item.duration}</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ) : (
                                <span className="text-right text-muted-foreground">{item.duration}</span>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};


const SourcesCard: React.FC = () => {
    return (
        <Card>
             <CardHeader className="flex flex-row items-start justify-between">
                <CardTitle>Sources</CardTitle>
                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                             <span className="text-xs font-semibold bg-slate-800 text-white py-1 px-2.5 rounded-md cursor-help">
                                from leads total
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Total value from all leads</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={sourcesData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={75}
                                    paddingAngle={2}
                                    dataKey="value"
                                    nameKey="name"
                                    stroke="none"
                                >
                                    {sourcesData.map((entry) => (
                                        <Cell key={entry.name} fill={entry.color} />
                                    ))}
                                </Pie>
                                <RechartsTooltip content={<CustomPieTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-4">
                        {sourcesData.map((source) => (
                            <div key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }}></span>
                                    <span className="text-muted-foreground">{source.name}</span>
                                </div>
                                <span className="font-medium text-foreground text-right">${source.value.toLocaleString()}</span>
                                <span className="text-muted-foreground text-right w-8">{source.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FunnelCountCard />
      <SourcesCard />
    </div>
  );
};

export default StatsCardGrid;

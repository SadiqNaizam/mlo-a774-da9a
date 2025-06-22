import React from 'react';
import StatCard from './StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Reason {
  percentage: string;
  reason: string;
}

const reasonsData: Reason[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other' },
  { percentage: '30%', reason: 'The proposal is unclear' },
];

const otherData = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads', tooltip: 'Leads that have not been contacted in over 30 days.' },
];

const ReasonsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-1 lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
            {reasonsData.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-semibold text-foreground">{item.percentage}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 gap-x-4 pt-2">
             {otherData.map((data) => (
               <StatCard 
                 key={data.label}
                 value={data.value}
                 label={data.label}
                 tooltip={data.tooltip}
               />
             ))}
           </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsGrid;

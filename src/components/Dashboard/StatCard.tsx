import React from 'react';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatCardProps {
  value: string;
  label: string;
  tooltip?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, tooltip, className }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className="text-4xl font-semibold text-foreground">{value}</p>
      <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
        <p className="text-sm">{label}</p>
        {tooltip && (
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 cursor-help text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default StatCard;

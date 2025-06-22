import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown } from "lucide-react";

const PageHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <Tabs defaultValue="leads" className="w-auto">
        <TabsList className="grid w-full grid-cols-2 sm:w-auto">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2 justify-end">
        <Button variant="outline" className="flex items-center gap-2 text-muted-foreground font-normal">
          <CalendarDays className="h-4 w-4" />
          <span>last 6 months</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;

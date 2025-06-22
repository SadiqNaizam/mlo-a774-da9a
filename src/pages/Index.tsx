import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import LeadsChart from '../components/Dashboard/LeadsChart';
import ReasonsGrid from '../components/Dashboard/ReasonsGrid';

/**
 * The main dashboard page, responsible for composing the layout and all dashboard widgets.
 * It utilizes AdminLayout to provide the consistent sidebar and top header structure.
 */
const IndexPage: React.FC = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        {/* The header section for the page, containing tabs and date pickers */}
        <PageHeader />
        
        {/* A grid of statistical cards, e.g., Funnel Count and Sources */}
        <StatsCardGrid />
        
        {/* The main chart for tracking leads over time */}
        <LeadsChart />
        
        {/* A grid section for displaying reasons for lost leads and other miscellaneous data */}
        <ReasonsGrid />
      </div>
    </AdminLayout>
  );
};

export default IndexPage;

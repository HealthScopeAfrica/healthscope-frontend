/**
 * Dashboard Sidebar Component
 * Extracted from dashboard for modularity
 */

import { MessageCircle } from "lucide-react";
import { Button } from "~/components/ui/button";

interface DashboardSidebarProps {
  onChatToggle: () => void;
}

export function DashboardSidebar({ onChatToggle }: DashboardSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Meet Kulo Card */}
      <div className="bg-[#6A7282] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="h-8 w-8" />
          </div>
          <h4 className="font-semibold mb-2">Meet Kulo</h4>
          <p className="text-sm text-white/90 mb-4">
            Your AI health assistant - Coming Soon!
          </p>
          <Button
            variant="secondary"
            className="w-full"
            disabled
            onClick={onChatToggle}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Coming Soon
          </Button>
        </div>
      </div>

      {/* Daily Health Tip */}
      <div className="bg-[#F0FDF4] border border-green-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h4 className="font-semibold text-green-900 mb-3">
          Daily Health Tip
        </h4>
        <p className="text-sm text-green-800">
          Drink at least 8 glasses of water daily to maintain proper
          hydration and support your immune system.
        </p>
      </div>
    </div>
  );
}

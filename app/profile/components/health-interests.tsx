import { useMemo } from "react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { cn } from "~/lib/utils";

interface HealthInterestsProps {
  items: string[];
  editable?: boolean;
  selected?: Set<string>;
  onToggle?: (interest: string) => void;
}

export function HealthInterests({
  items,
  editable = false,
  selected,
  onToggle,
}: HealthInterestsProps) {
  const selectedValues = useMemo(
    () => (selected ? Array.from(selected) : []),
    [selected]
  );

  const handleValueChange = (values: string[]) => {
    if (!editable || !selected) return;
    const next = new Set(values);

    selected.forEach((interest) => {
      if (!next.has(interest)) {
        onToggle?.(interest);
      }
    });
    next.forEach((interest) => {
      if (!selected.has(interest)) {
        onToggle?.(interest);
      }
    });
  };

  return (
    <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-semibold text-text-strong">
            Health Interests
          </h3>
          {editable ? (
            <p className="mt-1 text-sm text-[#6E6E6E]">
              Click on topics to add or remove them from your interests
            </p>
          ) : null}
        </div>

        <ToggleGroup
          type="multiple"
          value={selectedValues}
          onValueChange={editable ? handleValueChange : undefined}
          className="flex flex-wrap gap-2"
        >
          {items.map((interest) => (
            <ToggleGroupItem
              key={interest}
              value={interest}
              className={cn(
                "rounded-full first:rounded-full last:rounded-full border border-transparent bg-[#F3F3F5] px-4 py-2 text-sm font-medium text-[#6E6E6E] transition flex-none",
                "data-[state=on]:border-[#4C7DEA] data-[state=on]:bg-[#4C7DEA] data-[state=on]:text-white data-[state=on]:shadow-[0_6px_16px_rgba(76,125,234,0.25)]",
                "data-[state=off]:hover:bg-[#E5E5EA] data-[state=off]:hover:text-[#333333]",
                !editable && "cursor-default pointer-events-none"
              )}
            >
              {interest}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
}

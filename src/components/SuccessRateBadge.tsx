import { useCounterAnimation } from "@/hooks/use-counter-animation";

interface SuccessRateBadgeProps {
  successRate: string;
  language: string;
  variant?: "light" | "dark";
}

const SuccessRateBadge = ({ successRate, language, variant = "dark" }: SuccessRateBadgeProps) => {
  // Extract numeric value from success rate (e.g., "76%" or "%76")
  const numericValue = parseInt(successRate.replace(/[^0-9]/g, ""), 10);
  const { count, ref } = useCounterAnimation({ 
    end: numericValue, 
    duration: 2000,
    startOnView: true 
  });

  if (successRate === "-" || isNaN(numericValue)) {
    return null;
  }

  const textColorClass = variant === "light" 
    ? "text-white/80" 
    : "text-muted-foreground";
  
  const valueColorClass = variant === "light" 
    ? "text-white" 
    : "text-primary";

  return (
    <div ref={ref} className="text-right">
      <div className={`text-xs ${textColorClass} mb-1`}>
        {language === "tr" ? "Başarı" : language === "ar" ? "النجاح" : "Success"}
      </div>
      <div className={`text-2xl font-bold ${valueColorClass}`}>
        {count}%
      </div>
    </div>
  );
};

export default SuccessRateBadge;


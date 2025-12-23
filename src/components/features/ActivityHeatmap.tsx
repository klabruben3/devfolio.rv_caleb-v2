import { motion } from "motion/react";

interface ActivityDay {
  week: number;
  day: number;
  intensity: number;
}

export default function ActivityHeatmap() {
  // Generate activity data (52 weeks, 7 days)
  const generateActivityData = (): ActivityDay[] => {
    const data: ActivityDay[] = [];
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        // Create some pattern in the data
        const intensity = Math.random() * 5;
        data.push({ week, day, intensity: Math.floor(intensity) });
      }
    }
    return data;
  };

  const activityData = generateActivityData();

  const getColor = (intensity: number) => {
    const colors = [
      "rgba(34, 197, 94, 0.05)",
      "rgba(34, 197, 94, 0.2)",
      "rgba(34, 197, 94, 0.4)",
      "rgba(34, 197, 94, 0.6)",
      "rgba(34, 197, 94, 0.8)",
    ];
    return colors[intensity] || colors[0];
  };

  return (
    <div className="p-6 bg-black/70 outline-2 outline-white/40 overflow-x-auto scrollbar-hide">
      {/* <div> */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-2 h-2 animate-pulse"
          style={{
            boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
            backgroundColor: "rgba(6, 182, 212, 0.8)",
          }}
        />
        <h4 className="text-white text-sm uppercase tracking-wider">
          Activity Map
        </h4>
      </div>

      <div className="flex gap-1 min-w-max">
        {Array.from({ length: 52 }).map((_, week) => (
          <div key={week} className="flex flex-col gap-1">
            {Array.from({ length: 7 }).map((_, day) => {
              const activity = activityData.find(
                (a) => a.week === week && a.day === day
              );
              return (
                <motion.div
                  key={`${week}-${day}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (week * 7 + day) * 0.001 }}
                  className="w-2.5 h-2.5 border border-white/10"
                  style={{
                    backgroundColor: getColor(activity?.intensity || 0),
                  }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow: "0 0 10px rgba(34, 197, 94, 0.6)",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4 text-xs text-neutral-500">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 border border-white/10"
              style={{ backgroundColor: getColor(i) }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
      {/* </div> */}
    </div>
  );
}

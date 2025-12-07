// Stellar-specific Feature Card with unique styling
import React from "react";

interface StellarFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
  color?: string;
}

export default function StellarFeatureCard({
  icon,
  title,
  description,
  highlighted = false,
  color = "text-blue-500",
}: StellarFeatureCardProps) {
  return (
    <div
      className={`stellar-card ${
        highlighted ? "border-2 border-blue-500/50" : ""
      }`}
    >
      <div className={`${color} mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

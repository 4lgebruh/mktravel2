import type React from "react"
interface FeatureItemProps {
  icon: string
  title: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => (
  <div className="text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-serif">{title}</h3>
  </div>
)

export default FeatureItem


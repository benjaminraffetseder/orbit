import { OrbitIcon } from 'lucide-react'
import type { FC } from 'react'

interface BrandProps {}

export const Brand: FC<BrandProps> = () => {
  return (
    <div className="flex items-center">
      <OrbitIcon/>
      <span className="text-xl font-bold">rbit.</span>
    </div>
  )
}

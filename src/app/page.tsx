import { Brand } from '@/components/ui/brand'

const Home = () => {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <Brand/>
      <p className="text-xs text-neutral-600">
        organize what inspires you.
      </p>
    </div>
  )
}

export default Home

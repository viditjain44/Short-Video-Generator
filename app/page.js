
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
   
  <div>
    <h2>Success cannot be fatal</h2> 
    <Button variant="secondary">PRESS if u agree</Button>
    
    console.log(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
    </div>
  );
}
